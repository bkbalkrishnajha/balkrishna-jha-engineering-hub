# Balkrishna Jha | Civil Engineering Portfolio

My responsive professional portfolio and civil engineering knowledge platform, built with Astro, TypeScript and Tailwind CSS v4.

## What I built

- A full-stack portfolio with a dynamic backend for managing my resources, projects and blog
- A password-protected admin dashboard where I manage all my content from the browser
- Responsive design with light/dark theme and English/Nepali language switch
- Homepage featuring Nepal Standard Time clock, Bikram Sambat calendar and live BS-year completion graph
- Daily engineering thoughts, civil-engineering fact cards and a random number chooser
- Latest published resources and blog entries on the homepage
- Online CV/profile page with my education, experience, skills and research
- Scientific calculator and linear-regression calculator
- BS–AD and AD–BS date converter
- Contact form with email delivery
- SEO metadata and social preview image

## Pages

Home, About, Experience, Engineering Blog, Resources, Engineering Tools, Calendar, CV, Contact, Admin and 404.

## Admin dashboard

I built a `/admin` panel to manage all my dynamic content:

- **Resources** — I can upload multiple files/links per entry across Bachelor Civil Engineering, Lok Sewa, Codes and Laws, Engineering Reference and Miscellaneous
- **Projects** — my portfolio project entries with descriptions and links
- **Blog posts** — I create and edit posts with cover images and inline file attachments

Only I can sign in — there is no public registration.

## Technology

- Astro 7
- TypeScript
- Tailwind CSS v4
- Supabase (database and authentication with Row Level Security)
- `nepali-date-converter` for Bikram Sambat date conversion
- Cloudflare Pages for hosting and serverless functions
- Semantic HTML and accessible navigation controls

## Project structure

```
src/
├── components/       # Reusable Astro components
├── content/blog/     # Markdown blog articles
├── data/             # Site config and CV profile data
├── layouts/          # Page layouts
├── lib/              # Database client
├── pages/
│   ├── admin/        # Admin dashboard
│   ├── blog/         # Blog listing and post pages
│   ├── calendar/     # Nepal calendar and date converter
│   ├── resources/    # Resource category pages
│   └── tools/        # Calculator and linear regression
└── styles/global.css # Design system and responsive styling
functions/
└── api/contact.ts    # Serverless function for contact form
```

## Editing content

- `src/data/site.ts` — site name, navigation, contact information and homepage links
- `src/data/profile.ts` — my education, experience, skills, research, recognition and service
- `src/content/blog/` — Markdown blog articles
- `/admin` — manage resources, projects and blog posts through the browser
- `src/styles/global.css` — global design system and responsive styling

## Environment variables

Copy `.env.example` to `.env` and set the required values. All secrets are kept in environment variables and never committed to the repository.

## Runtime requirement

Node.js **22.23.4 or newer** (or a newer supported LTS release). The `engines` field in `package.json` documents this minimum.

```bash
npm install
npm run check
npm run build
```

## Calendar data sources

- Bikram Sambat conversion uses the `nepali-date-converter` package (MIT-licensed).
- The daily Panchang panel fetches data from a third-party API. The panel handles unavailability gracefully.
- Public holidays follow the 2083 BS notice published by the Ministry of Home Affairs. Conditional and regional holidays are labelled in the calendar.
