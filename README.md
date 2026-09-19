# Ruang Tanpa Stigma

Ruang Tanpa Stigma is an independent Indonesian digital public-health initiative focused on understandable HIV education, stigma reduction, treatment literacy, supportive communication, and evidence-informed health information.

**Core message:** HIV tidak mengurangi nilai seseorang.

**Tagline:** Pahami HIV. Dukung sesama. Tanpa stigma.

**Descriptor:** Edukasi · Dukungan · Komunitas

This repository contains a bilingual, mobile-first static website. Bahasa Indonesia is the primary language and a complete English version is available through the ID | EN switch.

## Public positioning

Ruang Tanpa Stigma is the project. Sifa Abdul Rijman is acknowledged on the About page as **Founder & Project Lead**. The website is not presented as a personal CV, registered NGO, clinical service, diagnostic provider, or emergency service.

No impact, partnership, programme, event, audience, or health-outcome claim should be published without real evidence.

## Architecture

- Semantic HTML in `dist/`
- One shared stylesheet: `dist/assets/css/main.css`
- Small vanilla JavaScript modules for navigation, content filtering, and article reading
- JSON content library: `dist/content/posts.json`
- Pages CMS configuration: `.pages.yml`
- GitHub Pages deployment: `.github/workflows/pages.yml`
- No React, Next.js, database, reader accounts, comments, health forms, or project-installed analytics

The static architecture is intentional: fast, low-cost, privacy-conscious, GitHub Pages compatible, and maintainable without a software-development team.

## Public pages

### Bahasa Indonesia

- `/` — Beranda
- `/belajar-hiv/` — Belajar HIV
- `/mitos-fakta/` — Mitos & Fakta
- `/untuk-kamu/` — Untuk Kamu
- `/artikel/` — Artikel & Video
- `/tentang/` — Tentang
- `/standar-editorial/` — Standar Editorial & Evidence
- `/privasi-etika/` — Privasi & Etika
- `/dampak/` — Dampak

### English

- `/en/` — Home
- `/en/learn/` — Learn About HIV
- `/en/myths-facts/` — Myths & Facts
- `/en/for-you/` — For You
- `/en/stories/` — Articles & Video
- `/en/about/` — About
- `/en/editorial-policy/` — Editorial & Evidence Policy
- `/en/privacy-ethics/` — Privacy & Ethics
- `/en/impact/` — Our Impact

Existing V1 URLs are preserved.

## Run locally

Serve the repository root, then open the `dist` directory:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/dist/`. Do not open files directly with `file://`; the browser would block the JSON content request.

## Editorial dashboard

The editorial entry page is `/admin/`. It links to Pages CMS, which reads `.pages.yml` and edits `dist/content/posts.json` in GitHub.

### Add an article or video

1. Open `/admin/` and select **Buka Ruang Tulis**.
2. Sign in with the GitHub account that has repository access.
3. Open **Artikel & Video**.
4. Create a new item and leave `Status` as `draft` while writing.
5. Fill in the matching-language slug, language, format, category, title, summary, author, body, and sources.
6. Choose the review status that reflects work actually completed.
7. Mark `Memerlukan tinjauan klinis/kesehatan publik` for clinical or safety content.
8. Add a clinical/public-health reviewer only after a real independent review is complete.
9. Add publication and review dates before selecting `published`.
10. Save and verify the GitHub Pages workflow.

Drafts do not appear in the deployed content library. The repository is public, so drafts must never contain personal, identifiable, or sensitive health information.

## Publication safeguards

The deployment workflow validates that:

- every published article has a publication date and review date;
- content marked as requiring clinical review cannot be published unless its review status is `independently_reviewed` and a real reviewer is recorded;
- only published records are copied into the public deployment artifact.

Major static medical pages are tracked separately in `docs/content-quality-tracker.csv`; they currently state that sources were checked but independent clinical review has not yet occurred.

## Review statuses

- `draft` — review incomplete
- `source_checked` — sources opened and checked
- `editorial_reviewed` — language, structure and sources reviewed; not a clinical review
- `needs_clinical_review` — clinical/public-health review required
- `independently_reviewed` — genuine independent review completed

Do not use `independently_reviewed` without a qualified reviewer and a completed review.

## Video and privacy

YouTube videos use `youtube-nocookie.com`. Opening a page with an embedded video can still cause the browser to communicate with YouTube; privacy-enhanced mode is not a guarantee of no data exchange.

The public website currently has no project-installed analytics, forms, comments, reader accounts, or marketing trackers. See the public Privacy & Ethics page before adding any data collection.

## Internal documentation

- `docs/implementation-summary.md` — pre-edit audit and decisions
- `docs/editorial-governance.md` — roles, statuses, workflow, publication checklist
- `docs/accessibility-audit.md` — WCAG 2.2 AA-oriented audit and remaining manual tests
- `docs/user-testing-plan.md` — 5–10 user usability-testing plan
- `docs/monitoring-evaluation-framework.md` — 12-month M&E framework
- `docs/monthly-impact-tracker.csv` — reusable monthly tracker
- `docs/content-quality-tracker.csv` — source/review tracker
- `docs/impact-tracker.md` — tracker definitions and monthly process
- `CHANGELOG.md` — meaningful website and editorial changes
- `REVIEW-NOTES.md` — release-readiness notes

## Before merging V2 to `main`

1. Have a qualified Indonesian HIV clinician or public-health reviewer assess all substantive clinical wording in both languages.
2. Reconfirm the currently applicable Indonesian guidance, including testing, confirmatory pathways, PrEP, PEP, ART, viral load, CD4, pregnancy, infant feeding, and service availability.
3. Complete the manual accessibility tests in `docs/accessibility-audit.md`.
4. Run the user-testing plan with representative users when available and fix critical/high issues.
5. Test Pages CMS create, edit, draft, review, publish, image upload, translation pairing, and video flows.
6. Verify all internal links, sitemap URLs, canonical/hreflang pairs, JSON and deployment gates.
7. Review the branch diff and merge only after owner approval.

## Deployment

GitHub Pages deploys only from pushes to `main` or a manual workflow dispatch. Work on `public-health-v2` does not change the live production website until the branch is reviewed and merged.

If a custom domain is introduced later, update canonical URLs, `hreflang`, Open Graph URLs/images, robots.txt and sitemap.xml before switching domains.
