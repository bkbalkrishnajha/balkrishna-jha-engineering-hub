# Nepal Time, Bikram Sambat Calendar and Year Progress Widget

This patch adds a homepage widget with:
- Live Nepal Standard Time (`Asia/Kathmandu`, UTC+05:45)
- Current Bikram Sambat date and an interactive month calendar
- A current Bikram Sambat year completion ring, progress bar and 12-month graph
- Nepali/Devanagari numerals and font support

## Apply

1. Stop Astro with `Ctrl + C`.
2. Copy the `src` folder and `package.json` from this patch into the existing project, replacing the matching files.
3. Keep your existing `package-lock.json` and `node_modules`; do not delete them.
4. Run `npm install` to install `nepali-date-converter` and update the lockfile.
5. Run `npm run check`, `npm run build`, then `npm run dev`.

The date converter is used in the browser. Time and date are explicitly calculated for `Asia/Kathmandu`, independent of the computer's configured timezone.
