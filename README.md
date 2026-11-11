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

## Recent portfolio upgrade

- BKJ logo placeholder and public profile-photo placeholder.
- English-first language switch with Nepali translations for navigation, page introductions and key calendar labels.
- Nepal analog clock, BS–AD and AD–BS converter, Panchang data panel and BS 2083 holiday markers.
- Official annual holiday notice link to the Ministry of Home Affairs.
- Latest published engineering blog entries on the homepage.
- Scientific calculator and linear-regression calculator subpages.
- Structured resource directories for Bachelor Civil Engineering, Lok Sewa, Codes and Laws, and engineering references.

### Calendar data sources

- Bikram Sambat conversion: `nepali-date-converter` package (MIT-licensed).
- Daily Panchang panel: NepDate public daily endpoint (`https://api.khumnath.com.np/`). The panel handles provider/network unavailability and links to provider documentation.
- Public holidays: 2083 BS notice published by the Ministry of Home Affairs (`https://moha.gov.np/en/page/government-and-public-holidays-in-2083`). Conditional and regional holidays are labelled in the calendar. Verify scope against the official notice.

The Panchang API is a third-party service and should be reviewed for its service terms, availability and calculation convention before treating its output as authoritative. The website currently uses its public plain-text daily endpoint; structured monthly calendar data is a separate paid API tier.
