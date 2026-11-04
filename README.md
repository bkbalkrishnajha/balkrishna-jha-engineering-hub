# Balkrishna Jha | Civil Engineering Portfolio

A responsive professional portfolio and civil engineering knowledge platform built with Astro, TypeScript and Tailwind CSS v4.

## Current scope

- Static Astro frontend (no backend is implemented)
- Civil Engineer as the single professional identity
- Responsive header, navigation, footer and light/dark theme
- Homepage Nepal Standard Time clock, Bikram Sambat calendar and live BS-year completion graph
- Homepage random number chooser, Nepal-time daily engineering thought and civil-engineering fact cards
- Online CV/profile page; no CV PDF is offered for download
- Home, About, Experience, Projects, Engineering Blog, Resources, Engineering Tools, CV, Contact and 404 pages
- CV-backed profile content in `src/data/profile.ts`
- Consolidated Khwopa College of Engineering survey-camp teaching entry (both date ranges in one timeline item)
- Diploma-level instructor entry omitted from the public Experience and CV pages
- Geotechnical award project details: headrace tunnel deformation and support analysis across the Siwalik, Lower Himalaya and Higher Himalaya zones
- Markdown blog content collection
- Browser-based unit converter and Manning rectangular-channel calculator
- Search-engine metadata and social preview image

## Technology

- Astro 7
- TypeScript
- Tailwind CSS v4 via the Vite plugin
- `nepali-date-converter` for Bikram Sambat date conversion
- Semantic HTML and accessible navigation controls

## Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Run Astro and TypeScript diagnostics:

```bash
npm run check
```

Build static production files:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The production output is written to `dist/`.

## Editing content

- `src/data/site.ts` — site name, navigation, contact information and homepage links
- `src/data/profile.ts` — CV-backed education, experience, skills, research, recognition and service
- `src/content/blog/` — Markdown blog articles
- `src/pages/projects.astro` — project portfolio page; add case studies only when details are confirmed
- `public/documents/` — reserved for future public resources; personal CV PDF is not published
- `src/styles/global.css` — global design system and responsive styling

## Future backend (not implemented)

Potential future services: Python FastAPI, PostgreSQL through Supabase, Supabase authentication, Cloudflare R2 document storage and Cloudflare Pages deployment. No deployment or external service configuration is included in this project.

## Runtime requirement

Use Node.js **22.23.4 or newer** (or a newer supported LTS release) before running `npm install`, `npm run check`, and `npm run build`. The `engines` field in `package.json` documents this minimum.
