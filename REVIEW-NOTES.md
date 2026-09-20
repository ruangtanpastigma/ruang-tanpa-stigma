# Ruang Tanpa Stigma V2 — Review Notes

## Positioning decisions

- The homepage now presents Ruang Tanpa Stigma before its founder.
- The former public-health portfolio section was removed from both homepages.
- The About page hierarchy is initiative → mission/audience → values → editorial process → smaller founder section.
- GPA and résumé-style performance figures were removed from the public website.
- The initiative is described accurately as independent and not as an NGO, clinical service, diagnostic provider, or emergency service.
- The Impact page contains no counters or invented results.

## Editorial and evidence controls

- New public Editorial & Evidence Policy pages document source hierarchy, workflow, review status, correction policy and language policy.
- Major medical pages display sources, last review date, annual/triggered review cycle and the absence of independent clinical review.
- Article metadata supports review status, next review, clinical-review need and translation pairing.
- GitHub Pages blocks publication of clinical articles without recorded independent review and a real reviewer.
- `CHANGELOG.md` begins with V2; it does not invent earlier correction history.

## Health-literacy decisions

- Bahasa Indonesia remains primary and was written as the source language.
- “Untuk Kamu” now offers six situation-based entry paths.
- Medical terms are introduced alongside plain-language explanations.
- U=U remains visible and limited to sexual transmission.
- Pregnancy, breastfeeding, injecting equipment and treatment interruption are explicitly separated from the U=U sexual-transmission claim.
- No local service directory was added because locations, hours, cost, eligibility, confidentiality and availability have not been verified.

## Design decisions

- The official logo remains unchanged.
- Olive/sage, cream, off-white and restrained coral remain the identity.
- The design uses cards selectively and adds divided editorial lists, large statements, policy reading columns, side notes and whitespace.
- No AI portraits, stock-community imagery or invented participant photography were added.
- Intrinsic logo dimensions reduce layout shift without altering the asset.

## Medical content still requiring independent review

- Belajar HIV / Learn About HIV
- Mitos & Fakta / Myths & Facts
- Untuk Kamu / For You
- Homepage U=U wording in both languages
- Any future clinical article or video, including the U=U drafts

Priority review topics:

- Indonesian testing and confirmatory algorithm;
- window-period wording by test type;
- current PrEP and PEP guidance/access;
- ART, viral-load and CD4 monitoring;
- U=U terminology and maintained viral suppression;
- pregnancy, birth and infant-feeding wording;
- wording that could be interpreted as individual medical advice.

Current sources checked on 19 September 2026 include the WHO HIV and AIDS fact sheet, UNAIDS U=U publication and the Kementerian Kesehatan RI JDIH page for KMK HK.01.07/Menkes/90/2019, which the JDIH page listed as in force on that date. Source checks do not substitute for independent clinical/public-health review.

## Accessibility status

Implemented:

- skip links and semantic landmarks;
- visible focus states;
- labelled navigation and controls;
- improved mobile-menu focus/escape/outside-click behavior;
- 44 px language targets;
- reduced-motion and forced-colors support;
- intrinsic image dimensions;
- live status for filtering and sharing;
- measured AA contrast for principal palette combinations.

Still required:

- NVDA or VoiceOver smoke test;
- complete keyboard route test;
- 200% zoom and 400% reflow;
- text-spacing and high-contrast testing;
- Android/iOS real-device testing;
- automated axe/Lighthouse run against all routes;
- user testing with people who use accessibility features when available.

See `docs/accessibility-audit.md` for the full matrix.

## Privacy and analytics

- No analytics, contact form, newsletter, comments, reader accounts or health-data collection were added.
- The official project email and Instagram are available on About/Tentang and in every public footer; contact remains voluntary and uses external providers.
- Privacy pages explain that Instagram/Meta and email providers apply their own policies, that project email is not represented as encrypted or medically confidential, and that sensitive health information should not be sent.
- YouTube embeds use the privacy-enhanced domain but are transparently described as an external service.
- Initial M&E can use manual trackers and aggregate platform data.
- Any analytics installation requires a separate needs/privacy assessment, approval and policy update.

## M&E status

- A 12-month logic model, indicator table, phases, data-quality process and future outcome-evaluation plan now exist.
- All proposed numeric targets are labelled as planning targets, not achieved results.
- Reach and knowledge/attitude targets remain `To be established` until baseline/pilot data exists.
- Monthly and content-quality CSV trackers are ready for real data.
- Human-subject research intended for generalizable knowledge is distinguished from programme Monitoring & Evaluation and may require appropriate ethical review.

## Release risks

- Independent medical review is outstanding.
- Manual accessibility and user testing are outstanding.
- Pages CMS schema changes and workflow publication gates must be tested on the working branch.
- SEO metadata and sitemap should be rechecked after any custom-domain change.
- Search indexing is not immediate and is not guaranteed by publication or sitemap submission.
- No partner, reach, programme, event or outcome claim should be added without documentation.
