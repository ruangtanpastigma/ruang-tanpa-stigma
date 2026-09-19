# Prototype Review Notes

## Design decisions

- The visual language is a warm community journal supported by the clarity of a public-health resource.
- The official logo remains unchanged and is the primary visual anchor.
- Muted olive and sage carry trust; cream and off-white soften the page; coral is reserved for small moments of emphasis.
- Editorial serif headings, generous spacing, and compact evidence labels avoid a hospital, pharmaceutical, or generic NGO aesthetic.
- The article library supports search, category, and format filters without collecting personal or health data.
- Portfolio material is integrated into the story of the initiative instead of presented as a separate corporate résumé.
- No stock photography or invented community imagery was introduced.

## Editorial safeguards

- Only records marked `published` are included in the deployed website content file.
- A U=U explainer is included as a draft example and is deliberately hidden until reviewed.
- Every article can include sources, a review date, and a reviewer field.
- The dashboard uses Pages CMS with an explicit `draft` / `published` status and writes changes to GitHub.
- The public repository remains visible, so drafts must never contain personal, identifiable, or sensitive health information.
- Article bodies are rendered through a deliberately small, escaped Markdown subset with safe HTTP(S) links and images to reduce injection risk.
- External source links accept only HTTP or HTTPS; YouTube embeds use the privacy-enhanced domain.

## Medical content to verify before publication

- Ask a qualified Indonesian HIV clinician or public-health reviewer to approve every clinical statement in both languages.
- Reconfirm the current Indonesian national HIV clinical guideline; the prototype currently cites KMK HK.01.07/Menkes/90/2019.
- Verify Indonesian wording and availability for HIV testing, confirmatory testing, window periods, PrEP, PEP, ART, viral-load monitoring, and CD4 testing.
- Add service directories only after addresses, hours, costs, eligibility, confidentiality practices, update ownership, and referral pathways are confirmed.
- Preserve the scope of U=U: maintained undetectable viral load means no sexual transmission of HIV. Pregnancy, breastfeeding, shared injecting equipment, and treatment interruption need separate clinical guidance.
- Establish a named reviewer, review interval, and change log for every clinical page.
- Verify all English translations independently; translation should not substitute for clinical review.

## Technical items before going live

- Install the hosted Pages CMS GitHub App with access limited to this repository, then test create, edit, draft, publish, image upload, and video URL flows.
- Confirm every dashboard save triggers a successful GitHub Pages deployment and that the deployed `posts.json` excludes draft records.
- Remove `noindex, nofollow` and update `dist/robots.txt` only after final approval.
- Add production-domain canonical URLs, `hreflang`, sitemap, Open Graph URL/image, and a custom 404 page.
- Test at 320 px, 375 px, 768 px, and desktop widths, plus keyboard-only and screen-reader smoke tests.

## Current privacy boundary

The prototype contains no analytics, contact form, newsletter form, comments, accounts, cookies set by the site, or sensitive-health-data collection. A YouTube video will contact YouTube only when an embedded video page is opened; a consent-based thumbnail pattern can be added later if stricter privacy is required.
