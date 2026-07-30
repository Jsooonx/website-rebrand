# NEXORA — Design Direction

## Purpose

NEXORA is a fictional B2B operations-intelligence platform for distribution
teams. It helps operators identify stock risks, delayed handoffs, and unusual
order patterns before a local issue disrupts the wider network.

The site should make the product feel like a calm, capable control room—not an
AI novelty or a generic chat interface. Its primary conversion is a request for
an operational briefing / product demo.

## Audience and positioning

- **Audience:** Operations, supply-chain, and distribution leaders at
  mid-market companies with multi-site inventory and delivery networks.
- **Positioning:** Operational foresight for teams that keep goods moving.
- **Core promise:** See the next disruption before it spreads.
- **Supporting message:** NEXORA unifies live operational signals, prioritises
  what needs attention, and gives teams an understandable next action.
- **Voice:** Direct, assured, practical, and unhurried. Avoid claims of
  autonomous magic, hype, or opaque AI language.

## Reference analysis and creative boundary

The supplied hero reference is retained in `references/reference-hero.png`.
It is useful for its focused reading order: restrained navigation, a small
release signal, one large outcome-led statement, a short support line, a
primary action, and a product surface grounded in an atmospheric landscape.
The generated `references/signal-terrain-exploration.png` is a direction
study for NEXORA's original hero-to-page transition, not a final runtime asset.

NEXORA will not reproduce its chat-agent framing, copy, landscape artwork,
colour treatment, symmetrical product mockup, or decorative secondary CTA.
Instead, the product visual will depict an operational network and its active
signals. The hero will use a left-weighted editorial composition with a data
canvas that intentionally breaks the central alignment of the reference.

## Visual system

### Palette

- **Night graphite:** `#11171B` — primary page surface.
- **Deep blue-charcoal:** `#1B2A31` — elevated panels and navigation.
- **Fog:** `#D8DDDA` — high-contrast text and active UI surfaces.
- **Muted slate:** `#94A09D` — supporting copy and inactive detail.
- **Signal lime:** `#C8F05B` — sparing attention and operational-status cue.
- **Alert ember:** `#E8865B` — isolated at-risk state only.

### Typography and surfaces

- Use a contemporary neo-grotesk sans serif with generous tracking in labels
  and a slightly condensed feel for large display text.
- Display type should be large and decisive, but never so oversized that it
  obscures the product surface.
- Use a faint topographic / route-line texture and a cool-to-warm radial glow
  behind the product canvas. Avoid photographic scenery.
- Panels are translucent graphite with fine low-contrast borders; radii are
  modest (16–24px), so the system feels engineered rather than playful.

### Signal Terrain transition

The bottom of the hero is an original abstract `Signal Terrain`: a dark,
three-dimensional field of layered operational routes, contour-like network
lines, sparse nodes, and atmospheric graphite haze. It provides the sense of
depth and seamless black exit found in the reference without using literal
hills, vegetation, or a natural landscape.

- The product canvas sits in front of the terrain; the terrain begins around
  55–60% down the hero and is visible mainly beneath and around the canvas.
- As the reader scrolls, the canvas subtly settles into and fades through the
  terrain. The terrain grows darker toward its foreground and lower edge.
- A strong black gradient mask covers the final 30–40% of the terrain. It
  merges cleanly into the `#11171B` page background for the next section.
- One signal-lime route shows a healthy operational flow; one ember route
  marks a delayed handoff. All remaining nodes stay low contrast, so the
  transition supports rather than competes with the product interface.
- The effect should feel like descending beneath the visible interface into
  the operational system that powers it, not travelling into a scenic world.

## Hero: first implementation scope

### Content

- Eyebrow: `NETWORK INTELLIGENCE / 01`
- Headline: `See the next disruption before it spreads.`
- Supporting copy: `NEXORA turns inventory, route, and order signals into a
  clear operational read—so your team can act while there is still time.`
- Primary CTA: `Request an operational briefing`
- Secondary text action: `Explore the signal map`
- Trust line: `Built for distribution teams operating across locations.`

### Desktop composition

1. A slim full-width header places the NEXORA wordmark on the left, compact
   navigation in the middle/right, and a small outlined `Book briefing` action.
2. The hero begins with the eyebrow and copy block aligned to the left half of
   a wide container; this preserves strong readability and differs from the
   centered reference.
3. The right and lower half holds a large `Signal Map` product canvas. It
   shows a simplified route network, a few location nodes, a highlighted
   delayed transfer, an inventory-risk card, and a concise recommended action.
4. A small status strip overlaps the lower edge of the canvas: `12 live
   signals · 3 require attention`. It should read as product evidence, not a
   floating decorative badge.
5. Fine route lines and restrained luminous haze connect the textual and
   product halves without making the hero busy.

### Hero exit and first scroll transition

The hero should be tall enough for the product canvas and Signal Terrain to
share the frame before the next section begins. At the lower scroll range, the
canvas loses contrast and recedes behind the terrain while the single lime
route completes its short journey toward an active node. The dense foreground
then fades fully to the black page surface. The next section must begin on
that same black surface with no visible seam, giving the reader the impression
that they have entered NEXORA's operational control layer.

### Responsive behaviour

- At tablet widths, the content remains left-aligned; the product canvas moves
  below the CTA with a deliberate overlap of the status strip.
- On mobile, navigation collapses to an accessible menu. The headline becomes
  2–3 lines, CTAs stack, and only the highest-value network signals remain in
  the canvas.
- All essential product information stays in normal document order. The visual
  canvas must not be the sole way to understand the benefit.

### Motion and interaction

- On entry: eyebrow, headline, supporting copy, and actions reveal in a short
  editorial sequence; the canvas settles immediately after the copy.
- Once settled, route lines may softly pulse and a single active signal can
  travel along a line. It completes before the hero exits; it must not become
  a distracting loop.
- The terrain uses a small scroll-linked vertical drift and fade only. It is a
  static raster-based visual with lightweight CSS masking, rather than a
  continuously animated 3D scene.
- CTA hover: one-pixel lift, border/value shift, and a small arrow movement.
- `prefers-reduced-motion` removes path travel and spatial reveals while
  retaining a brief opacity transition.

### Accessibility requirements

- Use semantic header, main, heading, and button/link elements.
- Keep text contrast at WCAG AA or stronger, including muted labels.
- Support keyboard navigation, visible focus states, and a labelled mobile
  menu.
- Treat the signal map as decorative unless it exposes equivalent structured
  text; do not make status colour the only warning indicator.

## Next decisions

We will design the remaining page sections one at a time after the hero is
approved. Likely future sections are: operational proof, the signal workflow,
product capabilities, customer outcomes, implementation process, FAQ, and a
closing briefing CTA. These are placeholders for discussion, not approved
page requirements.
