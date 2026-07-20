# Cinder Atelier

Cinder Atelier is a fictional image-led creative practice for brands that need to be recognised before they are explained. It combines art direction, visual identity, and expressive digital experiences for culture, fashion, music, and new luxury.

The concept starts from an editorial portrait with a single illuminated gesture: dark, tactile, cinematic, and deliberate. It does **not** reuse the reference's person, composition, copy, or artwork. The complete direction lives in [BRANDING.md](BRANDING.md).

## Implementation stack

- Vite + React
- Framer Motion for purposeful interaction and entrances
- Lenis for smooth scrolling, with a reduced-motion fallback
- TypeScript for the Cinder implementation
- `unframer` for isolated React exports from the Framer reference project

## Source structure

- `src/App.tsx` — the currently implemented Cinder hero, practice, featured,
  process, experience, services, testimonials, FAQ, and footer sections.
- `src/styles.css` — Cinder tokens and responsive section styling.
- `../framer-export/src/exports/lurais/` — the shared, machine-generated
  Framer React source consumed by Cinder. It is maintained from the central
  export library rather than copied into this project.
- `public-prod/assets/` — the production image set: WebP editorial artwork
  and the six reused Radian partner marks adapted for Cinder's fictional
  looping collaborator rail. Vite serves only this directory, keeping legacy
  source image files out of the production output.
- `public-prod/assets/cinder-mark.png` — the selected Offset Frame Cinder
  mark, used in the top and footer wordmarks and as the browser favicon.

Practice, Featured, Process, and Experience share one 55ms index-based Framer
Motion entrance cadence. Each element declares its place in the sequence while
the shared variants control movement, blur, duration, and overlap. Repeated
visual-card groups use a parent-controlled stagger, keeping their cards in a
single scroll-reveal timeline and avoiding expensive blur filters on large
image surfaces. All entrance and loop motion respects `prefers-reduced-motion`.

Featured Visions uses normal-flow header and side-label content, followed by
three sticky work cards that stack in scroll order. On compact screens the
cards return to a standard vertical sequence. Its topline, side-label,
heading, and first card enter in the shared cascading sequence. Work cards two
and three remain immediately available as they scroll into the stack; all
motion remains static for reduced-motion preferences.

How We Work is deliberately taller than the standard FHD section cadence. It
uses an original five-card bento field: three generated Cinder art-direction
images and two typographic principle cards. Its header, vertical label, and
context copy use the shared cadence, while the bento cards are sequenced by
their shared parent.

Experience extends beyond the standard desktop section height to make room for
an editorial introduction, a facts-and-figures field, and two original field
notes. Every metric counts from zero when it first enters the viewport, using
tabular numerals and the reduced-motion fallback; figures begin in step with
their parent-controlled card stagger.

Services uses the Featured Visions scroll-stack pattern for three service
territories. Each territory contains two original Cinder image studies and is
sticky only on desktop, allowing the next service to layer over the previous
one as the section advances. The `/WHAT I DO` label belongs to the section's
normal flow, so it moves upward with the section rather than staying pinned.
The six service studies are stored as separate image files after generation,
which prevents neighbouring panels from appearing in responsive crops.

Testimonials enters in two phases: the first card settles at the left edge,
then the remaining cards rise from beneath that origin into their final rail
positions. A single rail-level viewport trigger controls that complete sequence,
so off-screen cards are included before the duplicated rail begins its
seamless right-to-left loop. The rail is static when reduced motion is active.
The enlarged client quote is paired with its own compact profile card, including
rating, portrait, title, and supporting pull quote. Its quote and card use a
parent-controlled stagger; the card then reveals rating, profile, and pull
quote in sequence.

FAQ is an accessible one-at-a-time accordion: every question is a labelled
button with `aria-expanded` state, and its answer uses a short height-and-
opacity transition. The first answer is open by default; keyboard activation
works through the native button controls.

The footer is the contact destination for the primary navigation. It combines
a social rail, availability note, email CTA, oversized contact statement, and
an existing Cinder signal study. Its Cinder-specific contact copy avoids
reusing the reference footer wording, while preserving the shared entrance
cadence and reduced-motion fallback.

All visible UI copy is written for Cinder Atelier rather than retained from the
visual references. Section names, headlines, CTA language, menu microcopy,
service names, testimonials, and FAQ prompts use a shared signal, material,
and directional vocabulary.

The menu uses one persistent navbar control: its two hamburger strokes rotate
into an ember-red X when the overlay opens, then return along the same path on
close. The overlay has no secondary close button. On desktop it is a right-side
drawer occupying one third of the viewport; the remaining page is blurred and
scroll-locked, while the drawer navigation uses a compact scale that fits the
complete list. Opening the drawer pauses Lenis and locks native root scrolling
and touch input, then restores them on close. The persistent navbar trigger
remains above the drawer during both enter and exit transitions, so repeated
quick toggles stay responsive.

## Performance and interaction safeguards

Large editorial artwork is delivered as WebP and below-fold images use native
lazy loading with asynchronous decoding. The live Jakarta clock is isolated to
its own component, preventing the full page and its Motion tree from rendering
every second. Menu index figures are intentionally static so the drawer has no
late-loading component or layout change during its entrance. Desktop, tablet,
and mobile layouts each have dedicated rules;
the intermediate tablet range avoids the desktop grids' minimum-width overflow.

The right-side menu is a modal drawer: it locks Lenis, native scroll, and touch
input, moves keyboard focus into its links, traps Tab within the menu and its
persistent close trigger, and restores focus on normal close. Native smooth
scrolling is disabled in favour of Lenis, while `scrollbar-gutter: stable`
prevents a horizontal layout jump when the drawer opens. Hover-only effects are
limited to fine-pointer devices. The menu entrance avoids live backdrop blur
and per-link motion so its panel can stay smooth on lower-power devices.

## Reference note

The current Practice section is assessed against the supplied shorter desktop
reference (approximately 1280–1440px wide), rather than the repository's
default FHD screenshot baseline. Its vertical composition is intentionally
shorter while retaining room between the headline, introduction, and
collaborator rail.

## Planned experience

1. Full-screen hero / manifesto
2. Selected visions
3. Capabilities and practice
4. Process / creative signal
5. Selected voices and recognition
6. FAQ and contact

All companies, collaborators, projects, names, and stories are fictional and created for this rebrand exploration.
