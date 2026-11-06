# Pages CMS integration patch

This patch adds a Git-based content-management workflow to the existing Astro site. It is designed to be copied into the current project; it does not replace the project or its existing design.

## What becomes editable

- **Engineering Blog:** existing Markdown posts plus new posts, dates, categories, tags, cover images and drafts.
- **Engineering Projects:** project case studies, summaries, tectonic zones, approach, award information and related publication links.
- **Engineering Resources:** resource notes/articles, categories, source links, uploaded documents, tags and drafts.

The existing verified geotechnical project is migrated from the hard-coded project page into a Markdown content entry. Existing blog articles remain in place. No experience, education, CV or personal profile facts are altered by this patch.

## Apply the patch

1. Make a backup or commit your current working changes first.
2. Extract this patch into the root of your existing project folder, preserving the folder structure. Choose **merge/replace** when Windows asks; do not extract into a new nested project folder.
3. Review the changed files in VS Code. The files included are `.pages.yml`, `src/content.config.ts`, `src/pages/projects.astro`, `src/pages/resources.astro`, plus the new content/page folders.
4. Run:

   ```powershell
   npm run check
   npm run build
   ```

5. Commit and push the changes to GitHub `main`. Cloudflare Pages should build the updated site from the connected branch.

## Connect Pages CMS

1. Open https://pagescms.org/ and sign in with the GitHub account that owns or can edit `bkbalkrishnajha/balkrishna-jha-engineering-hub`.
2. Authorize access to this repository when GitHub asks. Grant access only to this repository if the permission screen offers that choice.
3. Open the repository in Pages CMS. It reads the `.pages.yml` configuration from the repository root.
4. Open **Engineering Blog**, **Engineering Projects**, or **Engineering Resources** to create or edit entries.
5. Save/publish changes. Pages CMS commits the content files to GitHub; Cloudflare Pages then builds and deploys from `main`.

The CMS dashboard is hosted by Pages CMS; it does not require adding a public `/admin` route to your website. Keep the repository private if that is your preference, provided the CMS account supports access to it.

## Publishing safely

- New entries default to **draft**. Turn off `Keep as draft` only when the content is ready to publish.
- Project details and professional claims must be accurate and supported by records. Do not add confidential government, client or project information.
- Upload only images/documents you own or are authorised to publish.
- Keep the downloadable CV disabled; this patch does not add a CV download.

## Important limitation

The Experience, Education and Profile pages still use the existing TypeScript data source (`src/data/profile.ts`). They are intentionally not migrated in this first CMS pass to avoid changing verified CV data or breaking the existing profile presentation. They can be made editable in a separate, carefully tested phase after this content workflow is working.
