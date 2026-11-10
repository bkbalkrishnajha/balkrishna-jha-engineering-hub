interface Env {
  RESEND_API_KEY: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const json = (body: Record<string, unknown>, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  // Accept requests only from this site's own origin.
  const origin = request.headers.get('Origin');
  const requestOrigin = new URL(request.url).origin;
  if (origin && origin !== requestOrigin) {
    return json({ success: false, error: 'Invalid request origin.' }, 403);
  }

  if (!env.RESEND_API_KEY) {
    return json({ success: false, error: 'The contact service is not configured yet.' }, 503);
  }

  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) {
    return json({ success: false, error: 'Unsupported form submission.' }, 415);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ success: false, error: 'Could not read the submitted form.' }, 400);
  }

  // Honeypot: quietly accept automated submissions without sending email.
  if (String(form.get('website') || '').trim()) {
    return json({ success: true });
  }

  const name = String(form.get('name') || '').trim();
  const email = String(form.get('email') || '').trim();
  const subject = String(form.get('subject') || '').trim();
  const message = String(form.get('message') || '').trim();

  if (!name || !email || !subject || !message) {
    return json({ success: false, error: 'Please complete all required fields.' }, 400);
  }
  if (name.length > 100 || email.length > 254 || subject.length > 150 || message.length > 5000) {
    return json({ success: false, error: 'One or more fields exceed the allowed length.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, error: 'Please enter a valid email address.' }, 400);
  }

  const safeSubject = subject.replace(/[\r\n]+/g, ' ');
  const text = [
    'New contact form submission from balkrishnajha.com.np',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${safeSubject}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Balkrishna Jha Portfolio <website@send.balkrishnajha.com.np>',
        to: ['contact@balkrishnajha.com.np'],
        reply_to: email,
        subject: `Portfolio enquiry: ${safeSubject}`,
        text,
      }),
    });

    if (!resendResponse.ok) {
      // Do not expose provider response details or secrets to visitors.
      return json({ success: false, error: 'Email delivery failed. Please try again later.' }, 502);
    }

    return json({ success: true });
  } catch {
    return json({ success: false, error: 'Unable to send your message right now.' }, 502);
  }
};
