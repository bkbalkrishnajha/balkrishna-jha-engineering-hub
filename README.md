# Balkrishna Jha | Civil Engineering Portfolio

A responsive professional portfolio and civil engineering knowledge platform built with Astro, TypeScript and Tailwind CSS v4. Backed by Supabase for dynamic content management and deployed on Cloudflare Pages.

## Current scope

- Astro static frontend with Supabase-powered dynamic content (resources, projects, blog)
- Password-protected admin dashboard for managing resources, projects and blog posts
- Civil Engineer as the single professional identity
- Responsive header, navigation, footer and light/dark theme
- English-first language switch with Nepali translations for navigation, page introductions and key calendar labels
- Homepage Nepal Standard Time clock, Bikram Sambat calendar and live BS-year completion graph
- Homepage random number chooser, Nepal-time daily engineering thought and civil-engineering fact cards
- Latest published resources and blog entries displayed on the homepage
- Online CV/profile page; no CV PDF is offered for download
- Home, About, Experience, Projects, Engineering Blog, Resources, Engineering Tools, Calendar, CV, Contact, Admin and 404 pages
- CV-backed profile content in `src/data/profile.ts`
- Consolidated Khwopa College of Engineering survey-camp teaching entry (both date ranges in one timeline item)
- Diploma-level instructor entry omitted from the public Experience and CV pages
- Geotechnical award project details: headrace tunnel deformation and support analysis across the Siwalik, Lower Himalaya and Higher Himalaya zones
- Markdown blog content collection with cover image and inline image/file support
- Scientific calculator and linear-regression calculator subpages
- BS–AD and AD–BS date converter
- Contact form powered by Resend via Cloudflare Pages Function
- Search-engine metadata and social preview image

## Admin dashboard

The `/admin` route provides a password-protected panel for managing:

- **Resources** — upload multiple files/links per entry, categorised across Bachelor Civil Engineering, Lok Sewa, Codes and Laws, Engineering Reference and Miscellaneous
- **Projects** — portfolio project entries with descriptions and links
- **Blog posts** — create and edit posts with cover images and inline file attachments

Authentication uses Supabase `signInWithPassword`. No public sign-up endpoint is exposed.

## Technology

- Astro 7
- TypeScript
- Tailwind CSS v4 via the Vite plugin
- Supabase (PostgreSQL database, authentication, Row Level Security)
- `nepali-date-converter` for Bikram Sambat date conversion
- Resend for transactional email (contact form)
- Cloudflare Pages for hosting and serverless functions
- Semantic HTML and accessible navigation controls

## Project structure

```
src/
├── components/       # Reusable Astro components
├── content/blog/     # Markdown blog articles
├── data/             # Site config and CV profile data
├── layouts/          # Page layouts
├── lib/supabase.ts   # Supabase client
├── pages/
│   ├── admin/        # Admin dashboard
│   ├── blog/         # Blog listing and post pages
│   ├── calendar/     # Nepal calendar and date converter
│   ├── resources/    # Resource category pages
│   └── tools/        # Calculator and linear regression
└── styles/global.css # Design system and responsive styling
functions/
└── api/contact.ts    # Cloudflare Pages Function for contact form
```

## Editing content

- `src/data/site.ts` — site name, navigation, contact information and homepage links
- `src/data/profile.ts` — CV-backed education, experience, skills, research, recognition and service
- `src/content/blog/` — Markdown blog articles
- `/admin` — manage resources, projects and blog posts through the browser
- `src/styles/global.css` — global design system and responsive styling

## Environment variables

Copy `.env.example` to `.env` and populate:

| Variable | Description |
|----------|-------------|
| `PUBLIC_SUPABASE_URL` | Supabase project URL |
| `PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous (public) key |
| `RESEND_API_KEY` | Resend API key for contact form (set in Cloudflare Pages environment) |

> **Security note:** The anon key is a public client key. Row Level Security (RLS) must be enabled on all Supabase tables. The `RESEND_API_KEY` is a server-side secret and must only be set in the Cloudflare Pages dashboard, never in client code.

## Runtime requirement

Use Node.js **22.23.4 or newer** (or a newer supported LTS release) before running `npm install`, `npm run check`, and `npm run build`. The `engines` field in `package.json` documents this minimum.

## Calendar data sources

- Bikram Sambat conversion: `nepali-date-converter` package (MIT-licensed).
- Daily Panchang panel: NepDate public daily endpoint (`https://api.khumnath.com.np/`). The panel handles provider/network unavailability and links to provider documentation.
- Public holidays: 2083 BS notice published by the Ministry of Home Affairs (`https://moha.gov.np/en/page/government-and-public-holidays-in-2083`). Conditional and regional holidays are labelled in the calendar. Verify scope against the official notice.

The Panchang API is a third-party service and should be reviewed for its service terms, availability and calculation convention before treating its output as authoritative. The website currently uses its public plain-text daily endpoint; structured monthly calendar data is a separate paid API tier.
