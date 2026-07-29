# ROUGE — Design Brief

## Project premise

ROUGE is a fictional independent art-direction studio for fashion, beauty,
hospitality, and culture brands that need a visual world with conviction. It
turns raw brand instinct into campaign direction, identity systems, imagery,
and digital experiences.

**Positioning:** Art direction for brands that want to be remembered before
they are explained.

**Primary audience:** Brand founders, fashion and beauty teams, hospitality
groups, cultural organisations, and creative directors.

**Primary conversion:** Start a visual direction conversation.

**Voice:** Sensual, concise, confident, and observant. Avoid generic agency
claims, hype language, and empty luxury cues.

## Reference

- [`references/taylor-editorial-hero-reference.png`](references/taylor-editorial-hero-reference.png)
  — supplied visual direction.
- [`references/taylor-about-sticky-nav-reference.png`](references/taylor-about-sticky-nav-reference.png)
  — supplied About page and sticky-navigation direction.
- [`references/taylor-work-sticky-01.png`](references/taylor-work-sticky-01.png),
  [`taylor-work-sticky-02.png`](references/taylor-work-sticky-02.png),
  [`taylor-work-sticky-03.png`](references/taylor-work-sticky-03.png), and
  [`taylor-work-sticky-04.png`](references/taylor-work-sticky-04.png)
  — supplied Selected Worlds sticky-scroll direction.
- [`references/taylor-services-reference-01.png`](references/taylor-services-reference-01.png)
  and [`taylor-services-reference-02.png`](references/taylor-services-reference-02.png)
  — supplied Services chapter direction.
- [`references/taylor-testimonials-chevron-reference.png`](references/taylor-testimonials-chevron-reference.png)
  — supplied testimonial chapter and chevron-control direction.
- [`references/taylor-closing-cta-reference.png`](references/taylor-closing-cta-reference.png)
  and [`taylor-footer-parallax-reference.png`](references/taylor-footer-parallax-reference.png)
  — supplied closing CTA and footer-reveal direction.

The reference is inspiration only. ROUGE must not reuse its brand name, copy,
navigation labels, image subject, typography, layout measurements, or assets.

### What works in the reference

- A single close-cropped editorial image functions as the full visual argument
  for the first viewport.
- The saturated side-field frames the image like a campaign cover rather than
  a generic hero background.
- Small service labels and a compact studio statement sit at distant edges,
  allowing the image and display type to lead.
- Oversized profession-led typography overlaps the lower composition, making
  the service proposition feel like part of the image treatment.
- Fine grain brings tactility and avoids an overly polished, template-like
  surface.

### Principles to retain

- Full-viewport campaign imagery with a strong, intentional crop.
- Type as a graphic layer, not a caption below imagery.
- Microcopy distributed around the frame rather than gathered into cards.
- Limited navigation and generous empty space around the few important
  elements.
- An editorial motion language: controlled, quiet, and image-first.

### Deliberate departures

- ROUGE uses its own campaign world, people, copy, and image composition.
- Do not duplicate the reference's red field proportions, hand-over-face
  portrait, type wording, or nav structure.
- The wordmark is **ROUGE**, not a job title. It should be recognisable without
  relying on a giant role descriptor.
- Grain is an atmosphere layer, never an accessibility obstacle or a heavy
  performance cost.

### Sticky navigation transition

- The site header begins transparent over the image-led hero, with light text
  and no filled surface.
- As the About section enters, the header transitions to a near-white surface
  while its foreground changes from Warm Ivory to Ink Black. This marks a
  deliberate shift from campaign atmosphere to studio clarity.
- Drive the state from section scroll progress rather than a sudden threshold:
  background opacity `0 → 0.96`, foreground colour, and a subtle bottom rule
  all resolve over roughly 250–350ms.
- Begin the transition before text would lose contrast over a bright image.
  Maintain a contrast-safe intermediate state with a restrained overlay where
  required.
- Under `prefers-reduced-motion`, apply the appropriate header state directly
  without fading or parallax. Header controls remain keyboard-accessible and
  have a minimum 44px touch target.

## Visual system

### Palette

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Base | Ink Black | `#0B0A0A` | Backgrounds, type, overlays |
| Primary | Rouge Red | `#B80E18` | Hero field, active states, key campaign moments |
| Lift | Lacquer Red | `#E62B25` | Hover/active accents, small visual hits |
| Type | Warm Ivory | `#F4EEE6` | Main text and oversized display type |
| Cool contrast | Ice Silver | `#B8D7DE` | Controlled type or image highlight; use sparingly |
| Muted | Ash | `#9F9892` | Supporting labels and metadata |

### Typography

- Use a compact grotesk or neo-grotesk sans for both display and interface
  typography. The display weight should feel wide, confident, and tightly
  tracked rather than decorative.
- Large headings: weight 650–760, letter spacing about `-0.06em` to `-0.08em`,
  line-height `0.78–0.9`.
- UI / microcopy: 10–13px desktop, uppercase only when the label needs a
  utility feel.
- Use `text-wrap: balance` for display headings and `text-wrap: pretty` for
  short descriptive copy.
- Apply tabular figures to time, project count, and date metadata.

### Image direction

- Imagery is original campaign photography or AI-generated editorial imagery:
  saturated red, black, warm skin tones, reflective lacquer, glossy makeup,
  chrome, fabric, or night flash.
- Each image needs a clear visual premise; avoid stock-looking lifestyle shots.
- Use a subtle monochrome noise/grain overlay at low opacity. Keep contrast and
  text readability intact with targeted gradients behind copy.
- Use `object-position` intentionally per breakpoint. The subject should never
  be accidentally cut at the eyes, hands, or product.

## Homepage structure

1. **Hero / visual introduction**
   - Full-viewport original campaign image with rouge red framing or field.
   - Small ROUGE mark at upper left; compact location/time or availability
     detail may occupy the opposite edge.
   - Main navigation is quiet and limited to Works, Studio, Journal, Contact.
   - Service list sits at left; a one-to-two line point of view sits at right.
   - Oversized lower display line: `ART DIRECTION / IDENTITY / DIGITAL`, or a
     similarly original line that describes the current featured capability.
   - A visible, labelled contact action is mandatory; decorative pills are not
     a substitute for a usable CTA.

2. **Selected worlds**
   - Exactly eight original campaigns, each treated as a distinct visual
     world.
   - Mix full-bleed landscape, editorial portrait, close-up detail, and
     product-object crops.
   - Each project card exposes project name, discipline, year, and a concise
     outcome or premise on hover/focus.

3. **Studio point of view**
   - A high-impact statement about building visual worlds, followed by a
     concise approach: Notice, Frame, Release.
   - Pair the statement with one tactile material image, not a generic team
   portrait.

### About page / studio point of view

- Enter on Warm Ivory with Ink Black typography; use this palette inversion as
  a calm editorial reset after the dark, image-led hero.
- Start with a section label, index, centred section title, year marker, and a
  thin horizontal rule. This introduces the About section as a new chapter,
  not as a card block.
- Main statement is the dominant element. Recommended ROUGE direction:
  **“ROUGE gives brands a visual world worth entering.”** The final copy must
  remain original, specific, and no longer than three balanced lines on
  desktop.
- Under the statement, place one small tactile campaign artefact at left—such
  as lacquer, chrome, pigment, a botanical object, or styled material—not a
  generic founder portrait.
- Set two compact narrative columns at right: one explains the studio's role,
  the other explains how it works. Both should be concise enough to read in a
  single glance.
- Use one clear black text CTA, such as `Enter the studio →`, beneath the first
  narrative column. It needs visible hover, focus, and 0.96 press feedback.
- End with the next section label and rule to create an intentional reading
  rhythm into Selected Worlds.

4. **Capabilities**
   - Art Direction, Brand Worlds, Digital Presence, Campaign Systems.
   - Use a single repeated grid and clear scope copy; no unnecessary icons.

5. **Journal / field notes**
   - Three short notes on visual culture, production, or objects of interest.
   - This reinforces taste without needing a conventional blog-heavy layout.

6. **Testimonials**
   - Four contextual partner notes presented one at a time through explicit
     chevron controls; no autoplay.
   - Each note includes a campaign portrait, material still life, or project
     detail; a quote; attribution; role; project context; and a visible count.

7. **Closing invitation and footer**
   - A final campaign image or deep rouge field with the statement **“Make the
     next image matter.”** and a `Start a conversation →` CTA.
   - Footer contains email, location, nav, legal note, and an oversized ROUGE
   wordmark. It may reveal with depth on desktop but remains static and
   complete for reduced motion and mobile.

### Selected Worlds / Work gallery

- Begin with a chapter label: `03 / Selected Worlds / © 2026`, a centred title,
  and a thin rule. The work gallery stays on Warm Ivory with Ink typography so
  it extends the About chapter naturally.
- Desktop uses a scroll-driven sticky gallery: the page frame and navigation
  remain stable while each project card rises from below, passes the focal
  viewport area, and yields to the next. The motion should feel like an
  editorial stack being reviewed, not a carousel.
- Implement eight ROUGE projects with deliberate cadence and image ratios:

  | # | Project | Discipline | Preferred composition |
  | --- | --- | --- | --- |
  | 01 | Sable House | Brand world + campaign | Large lacquer-red landscape |
  | 02 | Vesper Skin | Identity + digital | Portrait beauty detail |
  | 03 | Marea No. 7 | Art direction | Wide sunlit hospitality scene |
  | 04 | Obscura | Packaging system | Compact object still life |
  | 05 | Nomae | Brand campaign | Full-width fashion close-up |
  | 06 | Parlor | Editorial site | Offset landscape / printed matter |
  | 07 | Cinder Objects | Identity system | Tall material or sculptural crop |
  | 08 | Lumen | Launch direction | Centred hero object with generous space |

- Each card has its image above a restrained metadata row: project name at
  left, discipline at right, and year available as secondary detail. The
  project image must always load; do not use blank white placeholders.
- Use `position: sticky` for the desktop stage and normal document flow for
  the project sequence. Cards should not translate far enough to clip their
  image, overlap navigation, or trap focus.
- On touch screens below the desktop breakpoint, disable sticky stacking and
  render eight cards as a regular vertical list. Under `prefers-reduced-motion`,
  do the same at every breakpoint.
- After the eighth project has completely left the sticky sequence, place one
  centred, explicitly labelled black CTA: `More Works →`. It must be a real
  link with hover, focus-visible, and `scale(0.96)` press feedback.

### Services / Capabilities chapter

- Enter Services through a short Ivory-to-Ink fade. When the Ink surface has
  settled, the sticky header switches back to its transparent light-on-dark
  state with a subtle divider; this should read as a new editorial chapter.
- Begin with `04 / Capabilities / © 2026`, a centred label, and a thin
  light-on-Ink rule. Follow with one large statement, limited to two balanced
  desktop lines: **“Visual worlds with a point of view—and a way forward.”**
  Final implementation copy must remain original to ROUGE.
- Present exactly four rows in a consistent four-part desktop grid:
  number, image, service title, and concise description. Use generous vertical
  padding and one light divider between entries.

  | # | Service | Purpose | Image direction |
  | --- | --- | --- | --- |
  | 01 | Art Direction | Shape the campaign world from premise to final frame. | Red lacquer, beauty object, or flash-lit detail |
  | 02 | Brand Worlds | Build identity systems that carry a recognisable point of view. | Typography, printed matter, or material study |
  | 03 | Digital Presence | Turn the world into a sharp editorial destination. | Interface on chrome, glass, or dark screen |
  | 04 | Campaign Systems | Extend the direction across launch, motion, and touchpoints. | Sequential campaign frames or product rollout |

- Descriptions are limited to two or three short desktop lines. Scope details
  can appear as muted supplementary text on hover/focus, but are visible by
  default on touch devices.
- Image containers share a stable size and rounded treatment; crops vary by
  subject, not by arbitrary layout changes. Every image is original and has
  meaningful alt text unless it is purely decorative.
- Hover/focus remains restrained: index shifts to Lacquer Red, image scales no
  more than `1.02`, and scope copy resolves with opacity plus a fixed 6–8px
  movement. Do not add 3D tilt, marquee text, or a second interaction model.
- At mobile widths, transform each row into a vertical sequence: number,
  service title, image, then description. Never compress the original
  four-column desktop grid into unreadable narrow columns.

### Testimonials / Partner notes

- Begin the chapter with `06 / Partner Notes / © 2026` on Warm Ivory, keeping
  the layout airy and editorial after the dense Ink services list.
- Present exactly four ROUGE testimonials, one at a time. Each must relate to
  a named Selected Worlds project and describe a concrete outcome rather than
  generic praise.
- Desktop composition: a large original portrait, campaign detail, or material
  still life at left; oversized quote at right; attribution low in the quote
  column; controls at the lower right. The image is proof of the project world,
  not merely a generic headshot.
- Show `01 / 04` near the controls so users understand the sequence. Previous
  and next controls use chevrons but retain accessible labels such as `Previous
  testimonial` and `Next testimonial`; hit targets are at least 44px.
- The carousel is fully manual: no autoplay, no timer, and no surprise loop.
  Support chevron clicks/taps and `ArrowLeft` / `ArrowRight` while the section
  has focus.
- On a direction change, image, quote, and attribution crossfade with a fixed
  horizontal shift no greater than 12px and filter blur `4px → 0px`. Keep the
  transition to roughly 300–360ms with no bounce. `AnimatePresence` should use
  `initial={false}` for state changes.
- Mobile order is image, quote, attribution, counter, controls. All content
  remains in normal document flow; do not maintain the desktop two-column
  layout or allow controls to overlap the image.
- Under `prefers-reduced-motion`, replace the transition with an immediate
  content update while preserving the same keyboard and button controls.

### Closing CTA and footer reveal

- The closing CTA is a full-width, image-led final invitation. Use original
  campaign imagery featuring lacquer red, black fabric, chrome, beauty
  styling, or an editorial close-up—never the reference subject or campaign.
- Place a calibrated Ink overlay above the image so the statement and CTA meet
  contrast requirements. The CTA copy is **“Make the next image matter.”**
  with one clear action: `Start a conversation →`.
- Keep the CTA content centred within a readable max-width and use a fully
  labelled link/button with a minimum 44px touch target, visible focus state,
  and `scale(0.96)` press response.
- On desktop, create the footer-reveal effect by placing the footer behind the
  CTA/main page layer with `position: sticky; bottom: 0`. The preceding page
  surface retains a subtle shadow so it reads as a foreground layer while the
  footer emerges from below on scroll.
- Do not translate the whole footer aggressively. Restrict scroll-linked depth
  to 24–48px on the footer wordmark or a small interior group, and use
  transform/opacity only.
- Footer uses Warm Ivory with Ink typography: oversized ROUGE wordmark at
  left; primary navigation and contact links in a right-side grid; location,
  social links, fictional-project note, current year, and `Back to top ↗` along
  the lower edge.
- On mobile and under `prefers-reduced-motion`, disable sticky positioning and
  render the footer directly after the CTA in normal document flow. All footer
  links remain visible without needing to complete a parallax movement.

## Responsive behaviour

### Desktop

- Work from a 12-column layout with an intentionally image-dominant first
  viewport.
- Keep hero display type inside a page-width cap. Do not center it using a
  transform that can be overwritten by animation.
- Reserve collision-free zones for nav, metadata, and CTA before placing the
  display type.

### Tablet

- Collapse hero information into two anchored regions: header / CTA and
  message / services. The image remains full bleed.
- Reduce display type using `clamp()` and cap its maximum width before it risks
  truncation.

### Mobile

- Use one compact brand mark plus a menu button with a 44px target.
- Keep headline, short copy, and contact CTA within the first viewport.
- Hide nonessential hero metadata rather than layering it on top of the image.
- Display type may overlap the image, but must never be clipped horizontally or
  cover controls.
- Projects become a single readable scroll sequence; hover-only information is
  shown by default or available on tap.

## Motion and interactions

### Staggered entrance language

- Do not reuse one generic fade-up preset across every chapter. Each entrance
  should reinforce the section's role while sharing the same restrained
  timing language.
- Hero sequence: image settles first for `650ms` from opacity `0` and scale
  `1.025`; edge metadata appears in two short groups; the display statement
  follows as a word-level blur reveal; the lower wordmark lands last. The full
  sequence should complete in roughly `900ms`.
- About sequence: chapter rule draws horizontally, statement reveals by line,
  artefact enters with a short clipped mask, then the two narrative columns
  appear as one semantic pair.
- Work sequence is primarily scroll-authored. Project cards rise naturally
  through sticky stacking; only their caption and discipline use a subtle
  `opacity 0 -> 1` and `y 8px -> 0` entrance when the image becomes active.
- Services rows stagger their four semantic parts—index, image, title, and
  description—at `70–90ms` intervals. Avoid animating individual body-copy
  words here because the repeated rows already provide rhythm.
- Partner Notes transitions as one state change: image, quote, attribution,
  and counter crossfade with a fixed `12px` directional offset and
  `blur(4px) -> blur(0)`, completing in `300–360ms`.
- Closing CTA uses a quiet image settle, then a two-line statement reveal,
  followed by its action. Footer content rises only `24–48px` as the foreground
  page clears it.
- Long editorial statements may use word-level blur-to-sharp reveals with
  `35–50ms` stagger, but must finish in under `700ms`. Paragraphs reveal as
  semantic blocks rather than slow word-by-word sequences.
- Use spring motion only for small direct-manipulation feedback. Entrances and
  chapter transitions use ease curves with no bounce.

### Micro-interactions

- Navigation links use a 1px underline that grows from the text's left edge,
  plus a controlled foreground-colour transition. The sticky surface itself
  crossfades between transparent/light text and Ivory/Ink.
- Primary CTA arrows translate `2–3px` horizontally on hover; CTA labels do
  not slide out of their hit area. Buttons use `scale(0.96)` on press and keep
  visible keyboard focus rings.
- Project hover may scale imagery to a maximum of `1.02`, introduce a soft Ink
  overlay, and lift metadata no more than `8px`. Project information remains
  visible without hover on touch devices.
- Service rows shift their index to Lacquer Red and scale the media to at most
  `1.015`; the title and description stay spatially stable.
- Testimonial chevrons nudge `2px` in their direction on hover and expose a
  clear disabled state at sequence boundaries. They never autoplay.
- Footer and social links use directional underline reveals. `Back to top`
  receives the same arrow nudge as other text CTAs.
- Image surfaces receive a subtle `rgba(11, 10, 10, 0.10)` inset outline so
  light imagery stays defined against Warm Ivory.
- Never use `transition: all`; transition only the exact visual properties
  that change.

### Micro-elements

- Preserve chapter indices, centered section labels, right-aligned years,
  fine horizontal rules, project discipline/year labels, and the visible
  testimonial counter as the site's editorial navigation system.
- Use one custom ROUGE typographic mark, a compact registered symbol, and a
  minimal `R` browser icon. Avoid decorative logo clouds or additional badges.
- Static film grain may sit over hero and CTA imagery at very low opacity.
  It must not shimmer or animate continuously.
- Ice Silver appears only as a rare hover/focus accent or image-derived tint;
  it is not a section background.
- Avoid custom cursors, magnetic buttons, text-scramble effects, long loaders,
  decorative marquees, and blanket image parallax. These would weaken the
  editorial restraint.
- Respect `prefers-reduced-motion`: remove entrance transforms and blur,
  disable sticky/parallax depth, and render all text immediately.

## Accessibility and performance

- Maintain at least 4.5:1 contrast for body text; use local gradients where
  text lies over campaign photography.
- Every project image has meaningful alt text; decorative grain and dividers
  are hidden from assistive technology.
- Nav and CTA targets are at least 44px on touch screens.
- Avoid autoplay video in the hero. If used later, it must be muted, paused
  under reduced motion, and have a static image fallback.
- Serve responsive image sizes and keep the hero image preloaded only when it
  is the LCP element.

## Build readiness

**Project folder:** `rouge/`

**Reference asset:** `references/taylor-editorial-hero-reference.png`

**Implementation stack:** Vite, React + TypeScript (`.tsx`), Tailwind CSS,
Framer Motion, and Lenis smooth scroll. Motion logic remains component-local,
Lenis is disabled when reduced motion is requested, and CSS sticky positioning
owns the project-stack and footer-reveal effects.

## Decision log

- 2026-07-29 — ROUGE chosen as the brand name: a one-word art-direction label
  with a sensual, bold, editorial tone.
- 2026-07-29 — Palette established around rouge red, ink black, warm ivory,
  and a controlled ice-silver accent.
- 2026-07-29 — Taylor hero reference stored as visual direction only; all
  future identity, copy, imagery, and implementation remain original.
- 2026-07-29 — About reference added. ROUGE header fades from transparent
  light-on-image to an Ink-on-Ivory sticky state; About uses a large studio
  statement, tactile artefact, two-column narrative, and explicit CTA.
- 2026-07-29 — Four Selected Worlds references added. ROUGE will use an
  eight-project sticky editorial gallery on desktop, a normal scroll list on
  mobile and reduced motion, original imagery for every project, and a centred
  `More Works →` CTA after project eight.
- 2026-07-29 — Services references added. ROUGE uses an Ink capabilities
  chapter with four numbered rows—Art Direction, Brand Worlds, Digital
  Presence, and Campaign Systems—and a calm Ivory-to-Ink chapter transition.
- 2026-07-29 — Testimonials reference added. ROUGE uses four manual Partner
  Notes, controlled by labelled chevrons and keyboard arrows, with contextual
  imagery, a visible `01 / 04` counter, and reduced-motion-safe transitions.
- 2026-07-29 — Closing CTA and footer references added. ROUGE ends with an
  original image-led invitation and a restrained desktop-only footer reveal;
  mobile and reduced-motion views use a complete static footer.
- 2026-07-29 — Motion system approved: chapter-specific staggered entrances,
  word-level blur reveals for short display copy, restrained direct-manipulation
  feedback, editorial micro-elements, and a Vite/TSX/Tailwind/Framer
  Motion/Lenis implementation stack.
- 2026-07-29 — Original AI-generated ROUGE geometric mark added to the primary
  navigation, footer wordmark, and browser favicon. The mark appears lacquer
  red on light surfaces and switches to ivory over the dark hero.
