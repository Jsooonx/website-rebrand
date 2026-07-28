# Forma Common — Design Direction

## Reference

The visual reference is stored locally at
[`references/homepage-reference.png`](references/homepage-reference.png).
The work-section reference is stored at
[`references/work-section-reference.png`](references/work-section-reference.png).
The about-section reference is stored at
[`references/about-section-reference.png`](references/about-section-reference.png).
The CTA-section reference is stored at
[`references/cta-section-reference.png`](references/cta-section-reference.png).
The footer-section reference is stored at
[`references/footer-section-reference.png`](references/footer-section-reference.png).

It is direction for hierarchy, visual density, and pacing only. Forma Common
will use an original brand name, copy, visual language, imagery, and layout
details.

## Website type

Forma Common is an independent brand identity practice portfolio. The homepage
should introduce the practice immediately, establish a clear strategic point of
view, and lead directly into selected client work.

## Homepage composition

1. **Compact navigation** — a one-line bar with the Forma Common wordmark at
   left, section links centred, and a project-enquiry call to action at right.
2. **Oversized wordmark / statement** — a very large, left-aligned display
   treatment that acts as the hero's primary visual element.
3. **Brand punctuation** — a small bespoke graphic mark below the title, used
   to balance the open space and become a recurring brand motif.
4. **Positioning copy** — a concise two- or three-line statement beneath the
   hero on the right, describing who Forma Common helps and what it creates.
5. **Featured work grid** — two image-led project cards directly after the
   hero. The left card is the lead feature; the right card is narrower and
   works as an editorial counterpoint.

```text
Compact navigation

Oversized Forma Common display title

Brand mark                         Short positioning statement

Lead project image                 Supporting project image
```

## Layout rules

- Treat the reference as a FHD desktop composition (1920 × 1080).
- Use a wide content frame with approximately 6% viewport gutters.
- Let the hero title occupy most of the content width; hierarchy comes from its
  scale rather than extra decorative elements.
- Maintain generous vertical breathing room in the hero, then use a tighter
  gap between the project cards.
- Use an intentionally asymmetric desktop work grid: roughly 63% / 37%, with
  a narrow, consistent gutter.
- Keep project images prominent and minimally framed; modest corner rounding is
  sufficient.

## Visual character

- Editorial, restrained, confident, and human.
- A near-black base with an off-white typographic colour creates the primary
  contrast. Project imagery supplies the page's warmth and colour.
- Use a bold, rounded or geometric sans-serif for the display treatment and a
  compatible neutral sans-serif for navigation and body copy.
- Avoid a conventional hero button. The persistent enquiry action in the
  navigation is the primary conversion path.
- Establish an original Forma Common mark; do not reuse the reference's dot
  as a literal brand asset.

## Responsive intent

- On tablet, preserve the large title but reduce its scale before constraining
  it to multiple lines.
- On mobile, stack the positioning copy beneath the brand mark and convert the
  featured work grid to one column, keeping the lead project first.
- Navigation should collapse into an accessible menu while retaining the
  project-enquiry action.

## Selected work

The work section uses an **editorial asymmetric portfolio grid**, rather than a
uniform bento grid. Images, whitespace, and changing card proportions create
the rhythm. Project names and service labels sit beneath their images, keeping
the work visually dominant.

Forma Common will feature eight fictional projects. They should not be treated
as eight interchangeable thumbnails: the section contains two lead projects
with more visual weight and six supporting projects with deliberately varied
proportions.

### Desktop rhythm

```text
01 — wide lead                         02 — tall supporting
03 — medium                            04 — medium
05 — tall supporting                   06 — wide lead
07 — medium                            08 — compact / tall closing
```

- The lead projects begin the first and third visual movements of the grid.
- Supporting projects must vary by crop, subject, and art direction so the
  composition remains curated rather than repetitive.
- Use a narrow, consistent image gutter and more generous vertical space for
  the captions.
- Keep cards image-led and minimally framed, with only modest corner rounding.
- On compact screens, use one column in the same editorial order; do not force
  the desktop proportions into a cramped two-column mosaic.

### Initial fictional work slate

1. **Brewline** — canned coffee; packaging design.
2. **Sore Ceramics** — craft and homeware; identity system.
3. **Luma Pantry** — pantry goods; brand identity and packaging.
4. **Sunday Social** — cafe and community space; positioning and identity.
5. **Kasa Stay** — boutique hospitality; brand strategy and guest touchpoints.
6. **Field Notes** — botanical skincare; identity, packaging, and art direction.
7. **Teras Studio** — independent cultural venue; campaign and identity.
8. **Nusa Objects** — lifestyle objects; retail identity and digital direction.

## About Forma Common

The supplied About reference establishes a useful personal, manifesto-led
structure, but its first viewport carries a large four-line statement plus two
dense supporting paragraphs. For Forma Common, retain the confidence and
editorial portrait treatment while reducing the amount of simultaneous reading.

### Forma Common composition

```text
Large positioning statement (target: two to three desktop lines)

Large portrait or studio still-life    Why work with Forma Common
                                       Concise approach / proof

                                       Three compact studio signals
```

- The large positioning statement should remain the page's primary narrative.
- Use one short, specific approach paragraph rather than multiple dense text
  columns.
- Pair it with a large image that has enough room to establish personality;
  it may be a portrait, an in-studio scene, or an editorial still-life.
- Replace a casual personal-interest paragraph with three concise studio
  signals, for example: **Based in Jakarta**, **Working across Asia**, and
  **Available for select projects**.
- Use a project-focused action such as **View selected work** or **Start a
  conversation**. A resume download is not a natural primary action for an
  independent practice.
- Preserve the near-black/off-white editorial contrast from the homepage, but
  let the image provide a distinct tonal counterweight.

## Closing CTA

The closing CTA is an editorial contact moment rather than a conventional
button-led conversion panel. It uses a short phrase split around a central,
nearly square media tile.

```text
make                 [ looping image tile ]                 distinct
```

### Copy and visual direction

- Primary CTA copy: **Make something distinct.**
- The direction is **clean and contemporary**, not craft-led or rustic.
- Select three to five original, object-led visual studies for the media tile:
  matte packaging details, sculptural studio objects, minimal fashion or
  accessory still life, spatial signage, and printed brand-system compositions.
- Keep the site base near-black and off-white. Individual CTA studies may use
  one controlled cool accent, such as cobalt, electric blue, chrome, or acid
  green.
- The visual tile may be subtly offset or rotated, but the words must remain
  immediately readable as one phrase.

### Idle loop and accessibility

- Change between the prepared images every four to six seconds using a quiet
  crossfade or restrained vertical reveal; do not use a fast or random swap.
- Preload the complete image set and layer images absolutely within a
  fixed-aspect tile so a transition never shifts the layout.
- The image sequence is decorative. Use an empty alt text on each displayed
  image and preserve the CTA phrase as the accessible name of the link.
- For `prefers-reduced-motion`, disable the loop and display one selected still
  image.
- On mobile, preserve the phrase's reading order and stack it around the media
  tile without shrinking it into a conventional button.

## Footer

The footer is a calm closing signature after the more expressive CTA—not a
second conversion panel. It combines practical contact details, compact
navigation, a large Forma Common lockup, and a quiet legal line.

```text
hello@formacommon.studio                 Navigate      Connect
Jakarta, Indonesia                       Work          Instagram
Available for select projects            About         LinkedIn

FORMA
COMMON
────────────────────────────────────────────────────────────
© 2026 Forma Common                        Jakarta / Indonesia
```

- Use a height of approximately 65–75vh on desktop, avoiding the excessive
  empty space of a full viewport footer.
- Set **FORMA** and **COMMON** as a deliberate, oversized two-line wordmark;
  the break suits the longer practice name better than a single unbroken line.
- Keep contact information at upper left and link columns at upper right.
- Include only relevant network links. Instagram and LinkedIn are the initial
  social set; do not add X/Twitter without a genuine brand use case.
- Use a fine divider above the copyright line and keep the lower metadata
  visually quiet.
- Introduce one restrained contemporary brand detail—an `FC` monogram,
  `JKT / ID` location marker, or narrow cobalt accent bar—rather than repeating
  the reference's circular punctuation mark.
- Do not repeat the preceding CTA or introduce another large button.

## Motion

- Keep motion economical: a short staged hero entrance followed by a subtle
  reveal of the project cards.
- Primary statements and supporting paragraphs use a word-level blur reveal.
  Each word animates for roughly 340ms; the next word begins after 90ms, when
  the previous word is approximately 26% through its entrance. This creates a
  quick overlapping sweep instead of a slow word-by-word typewriter effect.
- On fine-pointer devices, project cards replace the standard cursor with a
  small **See work** pill. Its colour is sourced from the active project's art
  direction, while a translucent, saturated blur lets the active artwork stay
  visible through it. It is hidden for touch and reduced-motion users.
- Use distinct section rhythms: title and brand mark in the hero; image, index,
  then caption for work cards; statement, portrait, proof, then studio signals
  for About; three beats for the CTA; and information, wordmark, then legal
  metadata in the footer.
- Preserve the reading order: navigation, title, positioning, then work.
- Respect `prefers-reduced-motion` by removing spatial movement and showing
  the finished layout with brief opacity changes only where useful.

## Implemented stack

- Vite, React, and TypeScript.
- Tailwind CSS v4 for tokens, utilities, and responsive foundations.
- Framer Motion for staged entrances and the CTA image transition.
- Lenis for wheel and anchor scrolling, disabled for reduced motion.
- Local Manrope Variable font files and local optimized WebP imagery.

The implemented page follows the final short-form sequence: Hero, eight-project
Work grid, About, Closing CTA, and Footer. No router is used because every
navigation destination is a section on the same portfolio page.
