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
- Decap CMS writing dashboard at `/admin/`
- Draft and published content states; drafts never appear in the public library
- GitHub Pages deployment workflow for the `dist` directory
- Responsive navigation, keyboard-visible focus, skip links, semantic landmarks, and reduced-motion support
- Official logo supplied by the project owner; it has not been redrawn or altered
- `noindex` metadata and a restrictive `robots.txt` while review is incomplete

## Run locally

Serve the repository root with any local static server, then open the `dist` directory. For example:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/dist/`. Opening HTML files directly with `file://` will prevent the browser from loading the JSON content library.

## Writing and publishing content

The production editorial dashboard will be at `https://ruangtanpastigma.github.io/ruang-tanpa-stigma/admin/`. It edits `dist/content/posts.json` in the GitHub repository.

Before the dashboard can sign in:

1. Replace the remaining OAuth service placeholder in `dist/admin/config.yml`.
2. Give the selected GitHub account push access to the repository.
3. Configure a GitHub-compatible OAuth provider for Decap CMS. Never place a GitHub client secret in this repository.
4. Keep new content as `draft` while writing. Change it to `published` only after editorial and, when clinical, professional review.
5. Push the change. The Pages workflow deploys the `dist` directory after GitHub Pages is configured to use GitHub Actions.

Videos use a YouTube URL and are embedded with YouTube's privacy-enhanced `youtube-nocookie.com` domain. Images uploaded in the CMS are stored under `dist/assets/uploads/`. The current article template intentionally avoids collecting reader data, comments, accounts, or health forms.

## Publication gate

1. Have a qualified Indonesian HIV clinician or public-health reviewer approve all clinical wording and the current Indonesian care pathway.
2. Confirm current Kementerian Kesehatan guidance and verified local testing, PrEP, PEP, ART, viral-load, CD4, and support-service information.
3. Replace prototype `noindex` settings and the restrictive `robots.txt` only after approval.
4. Add the production domain and then add canonical URLs, `hreflang`, sitemap URLs, and social-preview metadata.
5. Run a final WCAG 2.2 AA audit with automated and keyboard/manual testing.

No analytics, forms, tracking, accounts, database, testimonials, partners, or fabricated impact claims are included.
