# Ruang Tanpa Stigma — Accessibility Audit

Target: WCAG 2.2 Level AA

Audit date: 19 September 2026

Browser smoke test: 20 September 2026

Scope: public ID/EN pages, article library/reader, mobile navigation, shared CSS/JavaScript

Status: code review and automated repository checks completed for V2; device and assistive-technology testing remains required

## Important statement

This document records alignment work and remaining tests. It is not a formal accessibility certification and does not claim full WCAG 2.2 AA conformance before the manual tests below are completed.

## Methods used

- Review of semantic HTML landmarks, heading structure, buttons, links, labels, and language attributes.
- Keyboard-behaviour review of the responsive menu and interactive controls.
- Programmatic calculation of key foreground/background contrast ratios.
- Review at mobile-first breakpoints in the stylesheet.
- Review of dynamic article rendering, search/filter controls, native share/copy controls, and live status messages.
- Review of reduced-motion and forced-colors CSS.
- Repository checks for duplicate IDs, missing page language/title/description, missing image alt attributes, broken internal references, and JSON validity are included in the V2 validation process.
- Browser smoke test of all 20 public ID/EN routes on the immutable V2 branch preview: one rendered H1 per route, main and skip-link presence, no broken images, no horizontal overflow at the tested desktop viewport, and successful loading of both published article libraries and article readers.
- Interaction smoke test of article search/category filters and the paired ID–EN article switch, including dynamic title, canonical URL, and review-status rendering.

Not yet completed: a full screen-reader session on real assistive technology, automated browser audit with axe/Lighthouse against every route, and a multi-device user test.

## Contrast review

Calculated using the WCAG relative-luminance formula.

| Foreground / Background | Ratio | AA result |
|---|---:|---|
| Ink `#22271f` / cream `#fffdf8` | 14.99:1 | Pass normal and large text |
| Olive 900 `#343d2d` / cream `#fffdf8` | 11.16:1 | Pass normal and large text |
| Muted `#626a5d` / cream `#fffdf8` | 5.52:1 | Pass normal and large text |
| Coral 700 `#a84539` / cream `#fffdf8` | 5.78:1 | Pass normal and large text |
| Cream `#fffdf8` / olive 900 `#343d2d` | 11.16:1 | Pass normal and large text |
| White `#ffffff` / coral 700 `#a84539` | 5.87:1 | Pass normal and large text |
| Cream `#fffdf8` / olive 800 `#46543d` | 7.96:1 | Pass normal and large text |
| Footer text `#d9dfd4` / footer `#273024` | 10.07:1 | Pass normal and large text |
| Footer muted `#bcc5b7` / footer `#273024` | 7.70:1 | Pass normal and large text |

Focus indicators use a 3 px coral outline with 4 px offset. Focus visibility still needs verification in Windows High Contrast and across browser defaults.

## Findings and implemented fixes

| Area | Finding | V2 action | Status |
|---|---|---|---|
| Skip navigation | Existing pages included a skip link. | Preserved on every public ID/EN page, including new policy and impact pages. | Implemented |
| Landmarks | Most pages used header/nav/main/footer. Some English navs lacked accessible labels. | Added consistent navigation labels to revised pages. | Implemented; final route sweep required |
| Page language | ID/EN roots used `lang`. | Preserved and added explicit language attributes/hreflang pairs. | Implemented |
| Heading hierarchy | Existing content generally used one H1 and section H2/H3. | New pages follow H1 → H2 → H3; policy navigation does not simulate headings. | Implemented; dynamic articles require author discipline |
| Mobile menu | Existing menu closed on Escape but always moved focus, even when already closed; it did not manage body state or outside clicks. | Escape returns focus only when open; first link receives focus on open; outside click and desktop resize close the menu; body state is restored. | Implemented |
| Keyboard focus | Visible focus style existed. | Preserved 3 px focus outline; interactive elements remain native links/buttons/controls. | Implemented |
| Touch targets | Main menu button and CTAs met generous sizes; language switch was smaller. | Language links now have a 44 × 44 CSS-pixel minimum target. | Implemented |
| Forms | Search and select controls had visible labels. | Labels, native input/select elements and polite result counts retained. No health-data form introduced. | Implemented |
| Dynamic status | Content count and share/copy result needed audible updates. | Result count uses `aria-live="polite"`; share/copy message uses `role="status"`. | Implemented |
| Images | Wordmark logo appeared next to equivalent text; hero logo conveyed brand identity. | Wordmark logo keeps empty alt to avoid repetition; meaningful hero logo retains descriptive alt; intrinsic dimensions reduce layout shift. | Implemented |
| Icon text | Menu and decorative content symbols could add noise. | Decorative symbols use `aria-hidden="true"`. | Implemented |
| Link purpose | Core links are descriptive. | Policy, privacy, impact and pathway links use destination-specific labels. | Implemented |
| Reduced motion | Existing stylesheet disabled smooth scrolling/transitions. | Preserved `prefers-reduced-motion` support. | Implemented |
| Forced colors | Custom colors could lose meaning in forced-colors mode. | Added a restrained forced-colors rule for decorative rules and button boundaries. | Implemented; manual test remains |
| Text scaling | Clamp-based typography and responsive grids generally reflow. | Added no fixed content heights; policy and founder layouts stack before desktop. | Implemented; verify at 200% and 400% zoom |
| Video embeds | Embedded iframes had title and lazy loading. | Preserved titles, privacy-enhanced YouTube domain and responsive aspect ratio. | Implemented; keyboard/player behavior depends on YouTube |
| New windows | Source and LinkedIn links use `target="_blank"`. | `rel="noopener noreferrer"` added on revised pages. | Security fix implemented; visible new-window notice is not yet consistent |
| Content authoring | Uploaded images may lack useful alt text and article headings can be misused. | Editorial checklist now requires alt text and heading review. | Process control; CMS validation could be strengthened later |

## WCAG-oriented checklist

### Perceivable

- [x] Text contrast meets AA for principal palette pairings measured above.
- [x] Content does not depend on images to communicate medical information.
- [x] Meaningful logo has alt text where it is the visual subject; repeated wordmark image is decorative.
- [x] Layout reflows through CSS grids and fluid type.
- [ ] Verify 200% and 400% zoom on Firefox, Chrome, and Safari.
- [ ] Verify text-spacing overrides do not clip or overlap.
- [ ] Check user-uploaded article images individually for useful alt text.

### Operable

- [x] Skip links exist.
- [x] Native controls are keyboard operable.
- [x] Escape closes the mobile menu and returns focus.
- [x] Focus indicators are visible in the standard palette.
- [x] Reduced-motion preference is respected.
- [x] Primary touch targets meet or exceed WCAG 2.2 AA target-size expectations; the language switch is 44 px.
- [ ] Test full keyboard order at every responsive breakpoint.
- [ ] Test no focus is obscured by the sticky header.
- [ ] Test YouTube player controls with keyboard and screen reader.

### Understandable

- [x] Language is declared for pages and language-switch links.
- [x] Navigation order and naming are consistent.
- [x] Search/filter controls have visible labels.
- [x] Error/empty states are written in the active language.
- [ ] Test whether “review status,” “viral load,” “window period,” and “U=U” are understood by representative users.

### Robust

- [x] Semantic HTML elements are used for navigation, articles, sections, lists, buttons, and controls.
- [x] IDs referenced by `aria-controls` are present on revised navigation.
- [x] Live regions use native ARIA roles conservatively.
- [ ] Test with current NVDA + Firefox/Chrome.
- [ ] Test with VoiceOver + Safari on macOS/iOS.
- [ ] Run axe-core or equivalent against every route after local preview is stable.

## Remaining manual test matrix

| Test | Minimum environment | Expected result |
|---|---|---|
| Keyboard-only navigation | Chrome/Firefox desktop | Logical order; all controls reachable; clear focus; menu opens/closes; no trap |
| Screen reader landmarks/headings | NVDA + Firefox or Chrome | One main landmark; meaningful nav labels; one H1; section structure is understandable |
| Mobile screen reader | VoiceOver iOS + Safari or TalkBack Android + Chrome | Menu and language switch are announced; content order matches visual order |
| Zoom 200% | Desktop at 1280 CSS px | No loss of content/function; nav remains usable |
| Reflow 400% | 1280 × 1024 equivalent | Single-column reading where required; no horizontal content scroll except unavoidable media |
| Text spacing | WCAG text-spacing bookmarklet/style override | No clipping or overlap |
| Forced colors | Windows High Contrast | Links, focus, buttons, myths/facts and status panels remain distinguishable |
| Reduced motion | OS preference enabled | Smooth scroll/transitions are disabled |
| Small viewport | 320 and 375 CSS px | No horizontal overflow; touch targets and forms remain usable |
| Large text mobile | OS font scaling | Header, cards, policy index and buttons wrap without hiding content |

## Known limitations at V2 handoff

- Formal screen-reader testing has not yet been completed.
- Third-party YouTube controls and privacy behavior are outside the website’s direct control.
- Static HTML cannot ensure future article authors write good alt text or heading structure; this remains an editorial responsibility.
- A small user test, including participants who use accessibility features, is still required before claiming WCAG 2.2 AA conformance.

## Recommended acceptance gate before merge to production

1. Complete link/HTML/JSON validation with no blocking errors.
2. Complete keyboard testing on mobile and desktop layouts.
3. Complete at least one NVDA or VoiceOver smoke test.
4. Check 200% zoom, 400% reflow, text spacing and forced colors.
5. Record failures, owners and decisions in this document.
6. Do not use an accessibility conformance claim until unresolved failures are assessed.
