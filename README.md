# Ruang Tanpa Stigma — Publish-ready prototype

A bilingual, mobile-first static website built with semantic HTML, CSS, and minimal vanilla JavaScript. Bahasa Indonesia is the default language and English is available through the ID | EN switch.

## Included

- Beranda / Home
- Belajar HIV / Learn About HIV
- Artikel & Video / Articles & Video
- Mitos & Fakta / Myths & Facts
- Untuk Kamu / For You
- Tentang & public-health portfolio / About & public-health portfolio
- Search and category/format filters for the content library
- Individual article/video pages with native sharing and copy-link controls
- Pages CMS writing dashboard, introduced through `/admin/`
- Draft and published content states; drafts never appear in the public library
- GitHub Pages deployment workflow for the `dist` directory
- Responsive navigation, keyboard-visible focus, skip links, semantic landmarks, and reduced-motion support
- Official logo supplied by the project owner; it has not been redrawn or altered
- Public indexing enabled with a sitemap; the writing dashboard remains excluded from search engines

## Run locally

Serve the repository root with any local static server, then open the `dist` directory. For example:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/dist/`. Opening HTML files directly with `file://` will prevent the browser from loading the JSON content library.

## Writing and publishing content

The editorial entry page is `https://ruangtanpastigma.github.io/ruang-tanpa-stigma/admin/`. The hosted Pages CMS editor reads `.pages.yml` and edits `dist/content/posts.json` directly in GitHub.

First-time setup:

1. Open `/admin/` and select **Buka Ruang Tulis**.
2. Sign in with the GitHub account that owns this repository.
3. Install or configure the Pages CMS GitHub App, granting it access only to `ruangtanpastigma/ruang-tanpa-stigma`.
4. Open the repository and choose **Artikel & Video**.
5. Add or edit a list item, keep its status as `draft` while working, and change it to `published` only after editorial and, for clinical content, professional review.
6. Save. The change is committed to `main`; the GitHub Pages workflow updates the public site automatically.

The deployment workflow removes `draft` records from the public website artifact. The source repository itself is public, however, so drafts must never contain personal, identifiable, or sensitive health information.

Videos use a YouTube URL and are embedded with YouTube's privacy-enhanced `youtube-nocookie.com` domain. Images uploaded in the editor are stored under `dist/assets/uploads/`. Article Markdown is escaped and supports headings, lists, emphasis, links, quotes, horizontal rules, and standalone images. The site intentionally avoids collecting reader data, comments, accounts, or health forms.

## Publication gate

1. Have a qualified Indonesian HIV clinician or public-health reviewer approve all clinical wording and the current Indonesian care pathway.
2. Confirm current Kementerian Kesehatan guidance and verified local testing, PrEP, PEP, ART, viral-load, CD4, and support-service information.
3. Keep `/admin/` excluded from indexing and update the sitemap whenever public URLs change.
4. If a custom production domain is added, update canonical URLs, `hreflang`, sitemap URLs, and social-preview metadata.
5. Run a final WCAG 2.2 AA audit with automated and keyboard/manual testing.

No analytics, forms, tracking, accounts, database, testimonials, partners, or fabricated impact claims are included.
