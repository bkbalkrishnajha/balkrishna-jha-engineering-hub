# BKJ Portfolio Upgrade Notes

This package is based on the previously supplied Astro source archive. It preserves the existing project and adds the requested portfolio upgrades.

## Added

- BKJ logo placeholder asset at `public/images/bkj-logo-placeholder.svg`.
- Public profile portrait placeholder in the homepage hero.
- English-first language preference switch with saved preference; translations cover navigation, page introductions, calendar UI and selected homepage/footer text.
- Analog Nepal clock and BS ↔ AD date converter.
- Daily Panchang panel using the NepDate public `/today?format=text` endpoint for Kathmandu coordinates.
- BS 2083 holiday markers, including regional and conditional labels, based on the published annual holiday notice summary.
- Official Ministry of Home Affairs 2083 holiday notice link.
- Homepage latest-post section and a published Manning equation learning article.
- Scientific calculator and least-squares linear regression tool pages.
- Resource directory subpages for Bachelor Civil Engineering, Lok Sewa, Codes and Laws, and Engineering Reference.
- Updated contact email and BKJ branding.
- Removed the visible CV-source note and unused editorial placeholder blog draft.

## Important data notes

- BS/AD conversion uses the existing `nepali-date-converter` dependency. Its supported range is finite; the converter reports invalid/out-of-range dates instead of silently accepting them.
- The Panchang endpoint is third-party. The panel shows a fallback message if the provider is unavailable or blocks browser requests. The provider's structured monthly calendar and some other endpoints are paid tiers; this implementation uses its documented public text endpoint for daily Panchang output.
- Holiday markers currently cover BS 2083. Conditional and regional holidays are labelled. Confirm official scope and any later amendments with the Ministry of Home Affairs notice.
- The language switch is English-first and translates navigation, key page introductions, and calendar controls. User-authored blog and detailed technical content remain in their authored language until translated.

## Local verification

Use Node.js `22.23.4` or newer, as required by this Astro project.

```powershell
npm ci
npm run check
npm run build
npm run preview
```

The source scripts were checked separately with TypeScript. A full Astro build could not be run in the packaging environment because the dependencies could not be installed there and its Node runtime was below the project's declared minimum.

## Deploy

After local verification, replace the matching project files in your working folder, then:

```powershell
git add .
git commit -m "Upgrade BKJ portfolio calendar tools and resources"
git push
```

Cloudflare Pages should deploy from the connected `main` branch automatically.
