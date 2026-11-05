# Calendar upgrade notes

Implemented in this source snapshot:

- Added a compact analog clock beside the existing Nepal digital clock. The hands and digital time both use `Asia/Kathmandu`.
- Removed the standalone `CalendarEnhancements` section from the homepage and calendar page. The homepage keeps the compact clock/calendar but does not request Panchang data.
- Moved the AD ↔ BS converter to `/calendar/date-converter/`, retaining both directions, date validation and invalid BS-date detection.
- Changed the Calendar header item into a keyboard-operable dropdown linking to Calendar & Panchang and Date Converter. The existing flat `navigation` data array is unchanged.
- Added the seven Panchang fields inside the calendar panel on `/calendar/`. The browser requests the existing plain-text API for the selected language, shows unavailable values for fields it cannot recognize, and retains the raw provider response in a troubleshooting disclosure.
- Changed 2083 holiday dates into keyboard-accessible buttons that open a dialog with holiday name, BS date, scope and the existing MOHA source link.
- Kept `src/data/holidays-2083.ts` unchanged and kept the site's slate/charcoal monochrome palette.

## Important verification notes

The execution environment used to inspect this archive has Node.js `v22.16.0`, while this project requires `>=22.23.4`. Therefore `npm run check` and `npm run build` stop at Astro's Node-version guard; neither full Astro command passed in this environment.

Additional checks completed successfully:

- TypeScript syntax transpilation of Astro inline scripts and frontmatter: no diagnostics.
- Strict TypeScript check of the extracted calendar and converter browser scripts: passed.
- CSS parsing: passed.
- `git diff --check`: passed.
- Nepali date conversion smoke test and invalid-day rollover check: passed.

The Panchang API host could not be resolved from this environment, so a live response sample could not be inspected here. The implementation intentionally does not invent values: it recognizes labelled text lines with `:` / `=` / dash separators (English and Nepali labels), shows `Unavailable` for unrecognized fields, and keeps the raw response/error visible for troubleshooting. If the provider uses another layout, inspect the raw response in the page's provider-response disclosure and adjust the parser to that confirmed format.

## Run locally (Windows PowerShell)

Use Node.js `22.23.4` or newer, then from the project directory:

```powershell
npm ci
npm run check
npm run build
```

Do not commit or deploy until both Astro commands complete successfully.

## Homepage refinements

- Removed the four-card “Did you know?” civil-engineering facts section from the homepage.
- Retained the random number chooser and daily motivation widgets.
- Moved “Latest from the engineering blog” directly below the homepage hero so the three newest published (non-draft) posts appear near the top.
