# NOCTRA - Design Direction

## Project premise

NOCTRA is an independent New York / global art-direction studio for brands
that operate after the obvious answer. It builds identity systems, campaign
language, digital experiences, and launch worlds for fashion, hospitality,
music, and culture-led ventures.

The site is a nocturnal editorial portfolio: large type carries the first
impression; the photography supplies atmosphere; the interface stays almost
silent. The supplied DRUK screenshots are direction only. NOCTRA uses original
identity, copy, images, projects, and interactions.

## Reference analysis

### Hero reference

`references/druk-studio-hero-reference.png` works because it commits to two
simple fields:

- a near-white editorial masthead with one giant muted wordmark;
- a dark, defocused night-city image that creates depth and mood without
  competing with the typography.

Useful principles: extreme display scale, intentional empty space, restrained
chrome, a cinematic lower image field, and only one short supporting message.

Do not copy: the DRUK name, location, exact title scale, text, image, or
specific page composition.

### Menu reference

`references/druk-studio-menu-reference.png` shows a black full-screen overlay
with a small logo at top-left, a rounded Close control at top-right, a quiet
central link column, and legal/contact details anchored below.

The useful principle is not merely "minimal menu". It is a menu that becomes
a temporary editorial title page: navigation is the only content allowed to
command attention.

## Brand system

### Name

**NOCTRA**

The name has a nocturnal character without being literal. It sounds precise,
cinematic, and useful for a studio whose work has contrast, atmosphere, and a
clear point of view.

### Positioning

"Visual worlds for the hours after obvious."

### Tone

Urban, cinematic, exacting, observant, and culturally aware. Avoid generic
agency language such as "disruptive", "innovative", or "best-in-class".

### Palette

| Token | Value | Use |
| --- | --- | --- |
| Night | `#08090B` | Primary dark surface and menu overlay |
| Paper | `#F5F3EF` | Hero masthead and editorial light surfaces |
| Concrete | `#C9C7C2` | Oversized hero type and supporting type |
| Ember | `#D75C30` | Rare action, active state, or night-light accent |
| Sodium | `#E8B35A` | Image-derived highlight only; never a body background |
| Mist | `#AAB8BD` | Cool secondary line, focus, and metadata accent |

### Typography

- Display: a heavy condensed grotesk with broad counters and controlled
  tracking. Display copy is uppercase only when it reads as a masthead.
- Interface: a clean neo-grotesk in regular/medium weights, with small,
  deliberate labels.
- Metadata: compact uppercase at 10-11px with modest letter spacing and
  tabular numerals.
- Main display is allowed to be oversized and close to the edge, but must not
  clip on standard desktop, tablet, or mobile widths.

## Hero

- First viewport is split vertically, not through a hard card boundary.
  The upper 53-58% is Paper; the lower field is original out-of-focus night
  imagery. The image could be city windows, a theatre exterior, reflected
  streetlight, or a metropolitan interior - never the supplied reference.
- Top chrome contains only the NOCTRA wordmark at left and a `Menu` pill at
  right. No regular desktop navigation links.
- Use one oversized title such as `NOCTRA STUDIO` or `THE NIGHT HAS A POINT OF
  VIEW`, in Concrete. It should feel like an editorial masthead rather than a
  conventional logo lockup.
- Supporting lower-image copy anchors at the lower-left: location, one concise
  purpose statement, and no more than one line of service categories.
- Keep the lower-right free for a small scroll indicator or a subtle current
  availability token, never a floating opaque utility pill.

### Hero motion

- Masthead reveals upward from a clipped mask in two lines, around 500-650ms.
- The night image starts fractionally soft and settles to sharpness with an
  opacity change; do not apply aggressive continuous parallax.
- Header mark and Menu control arrive together after the title begins. Motion
  should complete within the first second.

## Studio statement / About

### Reference direction

`references/druk-studio-about-reference.png` establishes a useful reset after
the hero: a thin continuation of the night image at the top, followed by a
quiet Paper field with a small label, an oversized statement, and a smaller
proof area. The value is in the whitespace and hierarchy, not in the reference
copy or performance-stat layout.

### NOCTRA composition

- Start with a 12-18vh full-width night-image strip that continues the mood of
  the hero. Use original city light, theatre exterior, reflected streetlight,
  or metropolitan-interior photography; never reuse the supplied image.
- The Paper section opens with the label `STUDIO / 01` and a large statement:
  **"NOCTRA turns a point of view into a world people recognise."**
- Keep the statement left-aligned within a broad editorial measure. It should
  occupy two to four balanced lines, rather than becoming a centered slogan.
- Supporting copy sits below and slightly right of the statement. It explains
  the practice through strategy, image, system, and rollout - no generic list
  of job titles or agency credentials.
- Replace generic KPI statistics with three editorial proof markers:
  `01 / New York + Everywhere`, `02 / Identity to afterimage`, and
  `03 / Small studio, full world`. These are descriptors, not count-up metrics.
- End with one quiet text CTA: `Enter the studio ->`. It should align to the
  supporting copy rather than becoming a large separate card.

### Studio statement motion

- The night strip settles from a very small blur reduction and opacity reveal;
  it does not parallax continuously.
- The main statement reveals per line through a clipped mask, 80-100ms between
  lines. Supporting copy appears as one semantic group after the final line.
- The three proof markers enter in order with a subtle opacity/y transition.
  Do not animate their numbers as counters.
- On mobile and under reduced motion, all content remains in normal flow and
  appears immediately without masks, blur, or stagger.

## Selected Work: Moving Frames

### Reference direction

`references/druk-studio-work-reference-01.png` and
`references/druk-studio-work-reference-02.png` establish a black, spacious
work chapter in which image containers hold their positions while the imagery
inside appears to travel. The useful idea is a kinetic frame, not a sticky
parallax page or a conventional uniform project grid.

### NOCTRA composition

- Use a Night surface with the label `SELECTED WORK / 02` and the original
  heading **"Worlds with a longer afterimage."**
- Present exactly six original projects. Each project is a fixed visible frame
  with `overflow: hidden`, a cover image, an alternate `afterimage`, and a
  caption positioned immediately below the frame.
- Create intentional scale and alignment rhythm rather than six equal cards:
  projects 01 and 04 are large landscapes aligned left; 02 and 05 are medium
  portraits aligned right; 03 is a central square / near-portrait; 06 is a
  wide closing landscape before the next chapter.
- Proposed original project names: `Aster House`, `Morrow Records`, `Nami
  After Dark`, `Common Thread`, `Lento Hotel`, and `Theatres of Light`.
- Every project receives two related original images. The alternate image is
  a campaign crop, material detail, night view, cast portrait, or process
  still from the same world - never an unrelated decorative image.

### Scroll and hover behaviour

- **Internal scroll drift:** the frame remains in normal document flow and
  keeps a stable position. Only the cover image translates upward as the frame
  moves through the viewport, roughly `8-14%` of its height. The shift is
  scroll-linked, transform-only, and must never expose an empty edge.
- **Vertical image-stack hover:** the alternate image begins below the cover
  inside the same clipped frame. On hover or keyboard focus it rises upward,
  pushing the cover image out through the top of the frame. It is a vertical
  exchange, not a generic opacity crossfade.
- **Caption release:** project name, discipline, and year are initially below
  the frame with reduced opacity. After the alternate image settles, metadata
  releases downward by no more than 10px into its final position and fades in.
  On mouse leave or focus loss, it returns cleanly without leaving a layout
  gap.
- Keep image-stack transitions around `450-600ms` with a single editorial
  ease. Caption release begins roughly `80ms` after the image movement starts.
  Do not combine this with sticky cards, large scale zooms, or a separate
  whole-page parallax effect.

### Touch, keyboard, and reduced-motion behaviour

- Each project remains a real link with a visible focus state. Keyboard focus
  triggers the same alternate image and caption treatment as hover.
- On touch devices, the first tap may reveal the afterimage/caption and the
  second follows the project link, or the caption may remain visible below the
  image at all times. Choose one predictable pattern during implementation;
  never make key project information hover-only.
- On mobile, frames become a normal single-column sequence. Keep the alternate
  visual available through a tap state or a small explicit `View detail` cue.
- Under `prefers-reduced-motion`, disable internal drift and vertical pushing.
  Render the cover image and caption directly; an alternate image can be shown
  as a static second crop or a near-instant swap.

## Capabilities: Afterimage Rail

### Reference direction

`references/druk-studio-services-reference.png` uses a near-empty black
surface, a restrained heading, and ruled service rows. The effective principle
is typographic hierarchy: services read as an editorial index rather than
cards, icons, or a feature grid.

### NOCTRA composition

- Keep the Night surface and large empty field. Open with `CAPABILITIES / 03`
  and the heading **"A point of view, carried everywhere."**
- Use exactly four ruled rows in a fixed three-column structure: two-digit
  index, large service name, and concise description/deliverables.
- Services: `Visual Identity`, `Campaign Direction`, `Digital Environments`,
  and `Launch Systems`.
- Add one slim vertical **Afterimage Rail** at the far right of the list. It is
  quiet and near-empty in its resting state; it is not a fourth repeated image
  column.
- Each service owns one related original image crop: reflected city light,
  flash portrait, printed matter, or night architecture. These are evidence of
  a service world, not generic stock illustration.

### Active-row behaviour

- On hover or keyboard focus, the selected row number changes to Ember, its
  rule brightens slightly, and its description reaches full opacity. Service
  title position remains fixed; do not expand the row into an accordion.
- The Afterimage Rail displays only the selected service crop. The crop enters
  from `y: 12px` with a small `blur(4px) -> blur(0)` reduction over `350-450ms`.
  A new selection replaces the prior crop vertically inside the same clipped
  rail.
- Image motion stays inside the rail. Do not add background parallax, cards,
  icons, big row zooms, or multiple simultaneous previews.
- Rows enter as semantic units on scroll: rule, index, service title, then
  description, with a quick `70-90ms` offset. Do not animate body text word by
  word in this repeated list.

### Touch and reduced-motion behaviour

- Keyboard focus invokes the same active state as hover, and every row has a
  visible focus treatment.
- On touch screens, descriptions are visible by default. The rail moves below
  the active row as a short crop or is removed entirely when it would make the
  list harder to scan.
- Under `prefers-reduced-motion`, render the active crop without transform or
  blur, keep all descriptions visible, and remove row-entry staggering.

## Signals Received: Testimonials

### Reference direction

`references/druk-studio-testimonials-reference.png` changes from a dark visual
world to an opposing light canvas, then uses oversized colour-field testimonial
cards, manual chevrons, and a continuous partner-mark strip. The compelling
idea is a considered tonal reset before the final invitation, rather than a
generic testimonials grid.

### NOCTRA composition

- Place this chapter after Capabilities and before the final contact
  sequence. Start with `SIGNALS RECEIVED / 05` on a Paper surface.
- The transition from the preceding Night section is an **exposure fade**: over
  roughly one viewport, black slowly gives way to Paper as though the page is
  being exposed to light. Do not hard-cut from black to white.
- Use four fictional partner notes. Each card is a large colour field with a
  readable quote, compact attribution, and a small `signal stamp` such as
  `01 / FIELD NOTE`, `02 / LAUNCH PARTNER`, or `03 / CULTURAL PROGRAM`.
- Palette is derived from NOCTRA's visual world rather than arbitrary pastel:
  Paper with Ink, Mist blue with deep teal copy, Sodium gold with Night copy,
  and Ember orange with dark brown copy. Check every text combination for
  contrast before implementation.
- Desktop shows one primary card and a controlled glimpse of the next card;
  mobile shows one full card at a time. This is an editorial sequence, not a
  cloud of small cards.

### Carousel and signal-strip behaviour

- Use real labelled Previous and Next chevrons plus visible counter `01 / 04`.
  The carousel is manual only: no autoplay, timer, surprise looping, or
  scroll-jacking.
- On a chevron change, the current card travels horizontally `24-32px` toward
  the outgoing direction while fading; the next card arrives from the opposite
  side. Quote lines reveal after card position settles. Keep the full state
  transition around `350-450ms` with no bounce.
- Chevron buttons use a dark 44px circular hit target. Arrows move 2px on
  hover and buttons use `scale(0.96)` on press. At sequence boundaries, use a
  visible disabled state rather than looping invisibly.
- Beneath the cards, add a **Signal Strip**: original, simple monochrome
  partner wordmarks and abstract marks travel continuously right-to-left with
  slim separators. These are fictional marks, never copied real client logos.
- The strip has a gradient mask at each edge and duplicates its content only
  to achieve a seamless loop. It remains decorative and is hidden from
  assistive technology.

### Motion safety and responsive behaviour

- Background exposure fade uses a single surface/overlay transition and must
  retain contrast at every intermediate state.
- Under `prefers-reduced-motion`, Paper renders immediately, card changes are
  near-instant while retaining chevrons and keyboard access, and the Signal
  Strip becomes a static wrapped mark grid.
- On touch, chevrons remain the primary control; do not require horizontal
  drag. Keep attribution, signal stamp, and counter visible without hover.

## Afterhours Signal: Contact Interlude

### Reference direction

`references/druk-studio-afterhours-signal-01.png` through
`references/druk-studio-afterhours-signal-04.png` demonstrate a visual hook
that begins as an empty black field, brings a statement upward into the
viewport center, then pins the statement while a collage accumulates around
it. The final image becomes the visual destination of the sequence.

The useful principle is progressive assembly through scroll, not the supplied
copy, images, or exact collage positions.

### NOCTRA composition

- Place this section after the FAQ and before the final footer. It is a contact
  interlude, not an extra portfolio gallery.
- Begin with a quiet Night void and the label `MAKE CONTACT`. The central
  original statement is **"Make the afterimage last."**
- The statement rises from below into the center of the viewport. Once centered,
  it remains sticky while the surrounding visual world assembles.
- Use a maximum of five original visuals: city reflection, flash portrait,
  printed matter, window light, and a motion-blurred crowd. Vary their crop and
  scale; never use five similar portraits or reference subjects.
- Images enter from different page edges and occupy a deliberate asymmetric
  collage around the fixed statement. Their final resting points must preserve
  text contrast and leave a clear center reading zone.
- The fifth and largest visual arrives last, becoming the central contact frame.
  It carries the final real CTA: `Start a conversation ->` linking to
  `hello@noctra.studio`.

### Scroll choreography

- The outer section receives approximately `350-450vh` of scroll space. The
  internal stage is sticky on desktop only; the statement remains centered
  until the final image and CTA settle.
- **Beat 1:** statement translates upward from below with opacity `0 -> 1` and
  small `blur(4px) -> blur(0)` reduction.
- **Beat 2:** each of the first four images enters one at a time from a fixed
  edge with transform/opacity only. Each movement finishes before the next
  begins; do not make a continuous uncontrolled parallax cloud.
- **Beat 3:** final image enters center, settles into the contact frame, then
  the action appears. The sticky stage releases only after the action is fully
  visible.
- Use a dark local overlay, text shadow, or safe transparent negative space to
  ensure the statement and action remain readable at every scroll position.

### Responsive, accessibility, and motion safety

- Keep the action as a real, labelled link with a minimum 44px target and
  `scale(0.96)` press feedback. It must not appear only after a hover state.
- On mobile, do not force a long sticky scene. Render a normal document-flow
  sequence: statement, two or three image collage, final contact frame, then
  CTA.
- Under `prefers-reduced-motion`, bypass pinned scroll and staged drift.
  Present the final collage directly with the statement and action visible.
- Decorative collage imagery is hidden from assistive technology; the final
  contact image receives meaningful alt text only when it communicates content.

## The Practicals: FAQ

### Reference direction

`references/druk-studio-faq-reference.png` is deliberately restrained: a
Paper field, one oversized heading, and ruled accordion rows. Its value is the
slow editorial pause before contact, not the literal reference copy or its
default accordion treatment.

### NOCTRA composition

- Place the FAQ after Signals Received and before Afterhours Signal. Keep the
  Paper background to extend the exposure-reset chapter into a useful, calm
  practical handoff.
- Label it `THE PRACTICALS / 06`, with the heading **"The practical things."**
  The heading should be large and left-aligned, but quieter than the studio
  statement so it reads as a field note, not another campaign headline.
- Use five full-width ruled questions rather than cards:
  1. `What kind of worlds do you build?`
  2. `When should we bring you in?`
  3. `What does a typical engagement include?`
  4. `Can you work with an existing team?`
  5. `How do we start?`
- Include concise answers that explain engagement fit, timing, scope,
  collaboration, and the contact process. Keep each answer to a readable
  editorial paragraph; never turn the FAQ into sales-copy blocks.
- End with a small text handoff: `Still wondering? hello@noctra.studio ->`.
  It gives an answer path without competing with the final contact interlude.

### Accordion behaviour

- One item is open at a time. A left-side two-digit index (`01` to `05`) is
  visible on desktop; the existing `+` becomes a `−` when open. The indicator
  and a 2px Ember edge are the only active colour treatment.
- Opening reveals the answer through height/clip, `opacity: 0 -> 1`, and a
  maximum `y: 8px -> 0` over `220-280ms`. Closing is slightly faster. The
  title itself must not jump or reflow horizontally.
- Each trigger is a real button with `aria-expanded` and `aria-controls`.
  Questions remain keyboard-operable, and the plus/minus icon is decorative
  so the control's spoken label stays concise.
- Trigger rows retain at least a 44px touch target. On hover or focus, only the
  rule, index, and plus/minus gain emphasis; do not introduce cards, shadows,
  or large scale movement.
- Under `prefers-reduced-motion`, answers expand near-instantly without clip,
  transform, or opacity staging. On mobile, remove the visual index if needed,
  preserve the ruled hierarchy, and keep answers in normal flow.

## Footer: Closing Credit

### Reference direction

`references/druk-studio-footer-reference.png` treats the footer as a final
credit frame: sparse contact and navigation information sits above an oversized
wordmark. The useful idea is its scale and hierarchy, not the reference
identity, exact sitemap, or generic agency language.

### NOCTRA composition

- Use a full Night surface with no rounded enclosing card. It begins only once
  the Afterhours Signal contact interlude has released, so it reads as the
  closing credit rather than a competing second CTA.
- The upper-left contains `NOCTRA / NEW YORK + EVERYWHERE` and the concise
  positioning line **"Visual worlds for the hours after obvious."** Keep it
  small and editorial, not a second hero headline.
- The upper-center uses a compact **Index** of five ruled links: `01 Home`,
  `02 Studio`, `03 Selected Work`, `04 Capabilities`, and `05 Contact`.
  Every link is a real anchor, not a visual-only sitemap.
- The upper-right contains the last small invitation: **"Ready to leave an
  afterimage?"** followed by the direct email link `hello@noctra.studio ->`.
  Do not add a large button; Afterhours Signal already carries the primary
  contact action.
- A final baseline holds availability, `© 2026 NOCTRA`, and restrained social
  links such as Instagram, Are.na, and LinkedIn. Add `Back to top ->` as a
  clear, real control at the right edge.
- The lower half is reserved for one enormous `NOCTRA` wordmark in Paper or
  Concrete. It may sit close to the viewport edges but must never clip on
  standard desktop, tablet, or mobile widths.

### Footer interaction and motion

- When Afterhours Signal finishes, footer content enters from a small
  `y: 16px` offset with opacity only; the wordmark follows about `100ms` later
  and rises a further subtle `3-5%`. This is a closing lift, not deep parallax.
- Index-link hover/focus changes only its index and rule to Ember; the arrow
  shifts `2px`. Use interruptible property-specific transitions. On press,
  interactive links/buttons may use `scale(0.96)`.
- `Back to top` uses smooth scrolling only when reduced motion is not
  requested. Under `prefers-reduced-motion`, jump immediately and move focus
  to the main page landmark.
- All footer links retain 44px touch targets. Keep the massive wordmark
  decorative (`aria-hidden="true"`) when a separate accessible NOCTRA label is
  already present above.

### Responsive behaviour

- On tablet, preserve the three editorial areas but allow the invitation to
  move beneath the Index rather than compressing its reading measure.
- On mobile, stack content in this order: studio intro, direct contact, Index,
  social/legal row, then the decorative wordmark. The wordmark uses `clamp()`
  and may wrap, but never forces horizontal scrolling.
- Under reduced motion, all footer elements are visible immediately and the
  large wordmark stays static.

## Menu concept: The Index

The menu should be named visually as **Index**, even if its trigger remains
the plain-language `Menu`. It is a full-screen overlay, not a drawer.

### Open state

- Surface: Night black, full viewport, with no blurred copy of the underlying
  page. Lock background scroll while it is open.
- Header: NOCTRA wordmark at top-left. `Close` remains a Paper pill at
  top-right with a minimum 44px target.
- Primary links: `Home`, `Studio`, `Selected Work`, `Capabilities`, and
  `Contact`. Use a single left-aligned vertical column whose optical center is
  slightly left of the viewport center (around 42% of width), rather than
  mathematically centered.
- Each link gets a small two-digit index on its left (`01` through `05`). The
  number is secondary but visible, reinforcing an editorial table of contents.
- Hover: link text stays stable; its number and a slim 1px rule turn Ember.
  A small original image thumbnail may fade into the far-right third for
  `Selected Work` only. Do not make every link reveal media.
- Footer: `New York / Everywhere`, `hello@noctra.studio`, social links, and
  `© 2026` sit along the lower edge. Keep this information muted, readable,
  and in normal document flow on mobile.

### Interaction and accessibility

- Opening transition: black overlay fades in over 220ms. Primary links reveal
  one at a time at 70ms intervals from `y: 12px`, opacity `0 -> 1`, and
  `blur(4px) -> 0`. Closing is faster and softer: 160-200ms, no exaggerated
  exit travel.
- Use a real button for Menu and Close. Toggle `aria-expanded`, provide an
  accessible label, move focus into the overlay, trap focus while open, and
  return focus to Menu on close.
- Support `Escape` to close. A link selection closes the overlay before the
  browser scrolls to its section.
- Menu control uses a `scale(0.96)` press state. Link hover uses only colour,
  underline/rule, and at most 2px directional movement; never use a giant
  expanding pill.
- Under `prefers-reduced-motion`, render the overlay and all links immediately
  without blur, transform, or stagger.

## Proposed page rhythm

1. Hero / masthead
2. Studio statement - oversized Paper surface with a single photographic crop
3. Selected work - asymmetric, image-led project sequence (six projects)
4. Capabilities - a dense Night section with numbered service lines
5. Signals Received - exposed Paper testimonial carousel and Signal Strip
6. The Practicals - Paper FAQ and direct contact handoff
7. Afterhours Signal - image-led final contact interlude
8. Footer - Night closing credit with Index, direct contact, legal, and
   oversized NOCTRA wordmark

## Interaction vocabulary

### Baseline

- Motion follows an **exposure, framing, and afterimage** vocabulary. Each
  chapter gets one primary motion idea; never animate a page of independent
  elements at once.
- Use `220-320ms` for micro-interactions, `450-650ms` for primary reveals,
  and an editorial ease without bounce. Use transform, opacity, and filter
  only; never use `transition: all`.
- Stagger semantic units rather than individual decorative atoms: `70-100ms`
  between units. Word-by-word animation is reserved for no section; main
  editorial headings reveal by line instead.
- Text CTAs use a `2-3px` arrow shift on hover; buttons and direct controls
  use `scale(0.96)` on press. Hover states must be interruptible.
- Image boundaries use a 1px low-opacity black outline on Paper and white
  outline on Night. Static, subtle grain is allowed only where it reinforces
  night photography; never animate grain.
- Use `text-wrap: balance` for headings, `text-wrap: pretty` for body copy,
  antialiased type, and tabular numerals for all indexes/counters.

### Hero and Index

- Hero masthead reveals upward through two clipped line masks in `500-650ms`.
  The night image settles from slight softness to sharpness; mark and Menu
  arrive after the title begins and complete within one second.
- The optional lower scroll cue is a single 1px line that grows and resets
  slowly. Location metadata fades in only after the masthead settles.
- Menu / Index preserves the established 220ms overlay fade and `y: 12px`,
  `blur(4px) -> 0` link stagger. Closing is faster (`160-200ms`).
- Index hover turns only the number and rule Ember; `Selected Work` may reveal
  one far-right thumbnail, but no other link receives media. Link selection closes before smooth
  scrolling begins.

### Studio and Selected Work

- Studio's night strip settles through a small blur/opacity reveal. The main
  statement enters per line with an `80-100ms` mask stagger; supporting copy
  follows as one group, then proof markers appear in order without counting.
- Moving Frames keep the specified internal image drift (`8-14%` vertical
  travel) while frames remain in normal flow. On hover/focus, the alternate
  image pushes the cover upward; caption metadata releases downward by no more
  than 10px after roughly 80ms.
- Project image exchange remains `450-600ms`; image scale never exceeds
  `1.02`. A desktop-only `View project ->` cursor label may trail the pointer
  subtly. Keyboard focus triggers the same result; touch keeps caption/detail
  access explicit rather than hover-only.

### Capabilities, Signals, and FAQ

- Capability rows enter as rule, index, title, description with a `70-90ms`
  offset. Active index/rule use Ember while the Afterimage Rail replaces a
  crop from `y: 12px`, `blur(4px) -> 0`, in `350-450ms`. Rapid row changes
  interrupt cleanly rather than queuing image transitions.
- Signals Received uses the established one-viewport Night-to-Paper exposure
  fade. Its manual carousel moves cards `24-32px` toward their outgoing side,
  then reveals quote lines and attribution in sequence; it never autoplays.
- Chevron arrows move `2px` on hover, use `scale(0.96)` on press, and show a
  visible disabled state at sequence bounds. The Signal Strip loops only as a
  decorative desktop layer and becomes a static grid under reduced motion.
- FAQ keeps one open item. Its rule/index and 2px Ember edge are active
  feedback; `+` becomes `-`. Answers use the specified `220-280ms` clip,
  opacity, and `y: 8px -> 0` reveal without horizontal title movement.

### Afterhours Signal and footer

- Afterhours Signal preserves its three desktop sticky beats: statement rises
  with small blur reduction; four images enter one-by-one from fixed edges;
  the fifth forms the final contact frame before the CTA appears. A quiet
  decorative `01-05` progress marker may fade between beats.
- In the footer, upper content lifts from `y: 16px`; the wordmark follows
  around 100ms later with a subtle `3-5%` rise. A one-time short horizontal
  mask reveal is allowed for the wordmark; no loop or deep parallax.
- Footer social underlines grow from the left. Back to top is smooth only when
  reduced motion is not requested; it otherwise moves focus directly to main.

### Micro-elements, accessibility, and reduced motion

- Section labels use `NAME / 01` in compact uppercase. Their rule may reveal
  once using `scaleX(0 -> 1)` from the left over roughly 300ms.
- Focus treatment is a 1px Mist or Ember ring with a 3px offset. Every control
  keeps a 44px touch target; plus/minus and arrow glyphs are decorative when a
  labelled control already conveys their meaning.
- Under `prefers-reduced-motion`, bypass masks, blur, stagger, internal image
  drift, pinned sequences, and looping strips. Render all meaningful content
  immediately in normal document flow, retaining manual controls and focus
  behaviour.

## Responsive rules

- Desktop keeps the hero split field and full-screen Index overlay.
- Tablet preserves large type but caps it with `clamp()` before it collides
  with header controls.
- Mobile presents one-line logo plus Menu control with 44px targets. The hero
  masthead can wrap but cannot be horizontally clipped.
- On mobile, the Index link column begins below the header and stretches to
  readable full width; footer details stack below links rather than occupying
  screen corners.
- Sticky effects and depth are disabled under reduced motion. All content
  stays in normal readable document flow.

## Accessibility and performance

- Maintain 4.5:1 contrast for small text. Paper-on-Night menu text exceeds
  this threshold.
- Preload the hero image only when it is the LCP asset. Lazy-load all project
  imagery.
- Decorative texture and image-only accents are hidden from assistive tech;
  every project image gets meaningful alt text.
- Never autoplay video. If video is explored later, it needs a static image
  fallback and reduced-motion pause behaviour.

## Build readiness

**Project folder:** `noctra/`

**Stored references:**

- `references/druk-studio-hero-reference.png`
- `references/druk-studio-menu-reference.png`
- `references/druk-studio-about-reference.png`
- `references/druk-studio-work-reference-01.png`
- `references/druk-studio-work-reference-02.png`
- `references/druk-studio-services-reference.png`
- `references/druk-studio-testimonials-reference.png`
- `references/druk-studio-faq-reference.png`
- `references/druk-studio-footer-reference.png`
- `references/druk-studio-afterhours-signal-01.png`
- `references/druk-studio-afterhours-signal-02.png`
- `references/druk-studio-afterhours-signal-03.png`
- `references/druk-studio-afterhours-signal-04.png`

**Implementation stack:** Vite, React + TypeScript/TSX, Tailwind CSS,
Framer Motion, and Lenis.

**Implementation status:** Complete. The responsive one-page build includes
the full-screen Index, Paper/Night transitions, six Moving Frame projects,
active capability rail, manual Signals carousel, FAQ accordion, sticky
Afterhours contact interlude, and responsive credit footer.

**Generated assets:** Original source images are stored in `assets/source/`;
their complete generation prompts are documented in `assets/PROMPTS.md`.
Optimized WebP crops used by the site live in `public/images/`.

## Decision log

- 2026-07-29 - NOCTRA selected as an original nocturnal editorial studio
  identity, using the supplied DRUK screenshots as direction only.
- 2026-07-29 - Hero and full-screen Menu references stored locally.
- 2026-07-29 - Menu defined as an accessible full-screen Index overlay with
  restrained hover feedback, keyboard controls, and a normal-flow mobile
  layout.
- 2026-07-29 - About reference added. NOCTRA uses a Paper editorial reset with
  a night-image strip, a studio statement, supporting practice copy, three
  non-numeric proof markers, and a quiet text CTA.
- 2026-07-29 - Work references added. NOCTRA uses six asymmetric Moving Frames
  with internal scroll drift, vertical alternate-image stack hover, caption
  release, and accessible touch/keyboard/reduced-motion fallbacks.
- 2026-07-29 - Services reference added. NOCTRA uses four editorial capability
  rows with a single active Afterimage Rail, restrained focus/hover behaviour,
  and mobile/reduced-motion-safe presentation.
- 2026-07-29 - Testimonials reference added. NOCTRA transitions through an
  exposure fade from Night to Paper, then uses four manually controlled Signal
  cards, original partner marks in a looping Signal Strip, and a static
  reduced-motion alternative.
- 2026-07-29 - Afterhours Signal references added. NOCTRA uses a five-image
  desktop-only sticky contact interlude that progresses from a centered
  statement to a final image-led contact frame, with normal-flow mobile and
  reduced-motion alternatives.
- 2026-07-29 - FAQ reference added. NOCTRA uses a Paper editorial FAQ with
  five accessible one-at-a-time accordion rows, restrained Ember feedback,
  and a direct email handoff before the final contact interlude.
- 2026-07-29 - Footer reference added. NOCTRA closes as a Night credit frame:
  compact Index, direct contact, legal/social links, a real Back to top
  control, and a responsive oversized NOCTRA wordmark.
- 2026-07-29 - Full implementation completed with the confirmed Vite, React
  TypeScript, Tailwind, Framer Motion, and Lenis stack. Original AI-generated
  editorial imagery was optimized into responsive WebP assets, and desktop,
  mobile, keyboard, carousel, accordion, and reduced-motion behaviour were
  validated locally.
- 2026-07-30 - Hero rebalanced into one fixed viewport: the oversized Paper
  masthead and city image share a 37/63 viewport frame, moving the wordmark,
  image edge, and supporting copy upward while keeping the opening composition
  inside the first screen.
- 2026-07-30 - Hero city image now resolves into an opaque Night crop below
  the copy area, removing the visible image tail before the transition to
  Studio.
- 2026-07-30 - Removed the duplicated city-image Studio strip so the Night
  hero now transitions directly into the Paper Studio section.
- 2026-07-30 - Studio editorial copy was compressed into a visible two-line
  statement with reduced spacing and scale. The Work heading was also reduced
  and constrained to two lines. The Work-to-Signals exposure gradient was
  removed for a direct Night-to-Paper section cut.
- 2026-07-30 - The hero cityscape was replaced with original AI-generated
  nocturnal architecture: a rain-streaked brutalist stair and cobalt pool.
  This keeps NOCTRA's after-dark atmosphere while moving it away from the
  reference's city-light treatment.
- 2026-07-30 - Signals carousel controls retain their original separated
  chevrons; the section now has a deliberate Paper inset above them so the
  controls do not touch the preceding Night section.
- 2026-07-30 - Hero composition moved away from the reference's horizontal
  masthead-over-image arrangement. NOCTRA now opens as a split Paper/Image
  editorial frame with a stacked wordmark and lower-edge navigation.
- 2026-07-30 - The menu overlay's NOCTRA mark and Close action now sit on the
  lower edge, matching the site navigation. A generated eclipse-N mark is
  used as the browser favicon.
- 2026-07-30 - Signals client rail now uses six original inline SVG wordmarks.
  Each combines a restrained geometric mark with a distinct typographic voice
  while retaining a shared monochrome, premium editorial treatment.
- 2026-07-30 - Signals cards were tightened to a 52svh desktop frame with
  reduced surrounding space and a proportionally quieter quote scale, keeping
  the client-mark rail visible within the same initial testimonial viewport.
- 2026-07-30 - Studio headline line masks now reserve a small optical
  descender allowance, preventing letterforms such as `g` from clipping while
  preserving the intended two-line editorial lockup.
- 2026-07-30 - Journal was removed from the page, Index, and footer sitemap.
  The contact chapter now carries sequence number `06` after the FAQ.
- 2026-07-30 - Removed an unused `pnpm-workspace.yaml` that lacked a
  `packages` field and prevented Cloudflare's pnpm install step from running.
  NOCTRA remains a standalone Vite application and supports npm commands.
- 2026-07-29 - Motion system expanded: shared micro-elements, sectional
  stagger/reveal choreography, hover/focus feedback, and reduced-motion
  behaviour are defined without adding competing animation ideas.
