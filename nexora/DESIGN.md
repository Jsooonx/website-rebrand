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
The supplied feature references are retained in
`references/features-tabs-reference.png` and
`references/features-coordinate-reference.png`. They establish the useful
pattern of a tabbed product canvas and alternate previous/next controls, but
do not supply NEXORA's copy, product data, UI, imagery, or visual identity.
The supplied value-card references are retained in
`references/why-card-rail-reference-01.png` and
`references/why-card-rail-reference-02.png`. They guide the density and
craft of an animated horizontal card rail only; all NEXORA illustrations,
copy, colours, and interaction decisions remain original.
The supplied integration references are retained in
`references/integrations-fan-reference-01.png` and
`references/integrations-fan-reference-02.png`. They inform the idea of a
layered fan of connected systems and counter-moving tracks only; NEXORA uses
an original ecosystem, integration marks, motion, and explanatory content.
The supplied pricing reference is retained in `references/pricing-reference.png`.
It informs the editorial three-tier comparison and annual-billing interaction
only; NEXORA's plans, pricing, plan criteria, and global billing control are
original.

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

## Section 2: From signal to decision

### Purpose and transition

This is NEXORA's primary capability section. It begins immediately after the
Signal Terrain has faded into the same `#11171B` page surface, making the page
feel as though the reader has moved beneath the visible interface and into the
operational system itself. A large editorial heading and its supporting line
appear first, followed by the tab strip and a single product canvas.

- Eyebrow: `OPERATIONS INTELLIGENCE / 02`
- Heading: `From signal to decision.`
- Supporting copy: `One operational picture, four ways to stay ahead of the
  disruption.`

The section must not use a generic `Features` heading. Its role is to make the
NEXORA workflow tangible through four connected operational views.

### Capability tabs and product views

| Tab | Purpose | Dashboard canvas |
| --- | --- | --- |
| **Detect** | Surface the disruption before it spreads. | `Signal Map` with location nodes, a delayed transfer route, inventory risk, and an attention queue. |
| **Explain** | Make cause and impact understandable. | `Cause Trace` linking a late handoff to affected stock, downstream orders, and the projected exposure. |
| **Coordinate** | Turn the finding into an accountable response. | `Response Plan` with reroute recommendations, owners, time windows, and approval-aware next actions. |
| **Learn** | Show what changed after action was taken. | `Impact Review` with recovery time, prevented disruption, and location-level trend comparison. |

The four views use one coherent shell: a compact NEXORA rail, a canvas title,
and a focused work area. Each view changes its own operational content rather
than reproducing a chat interface, email workflow, or generic task manager.

### Layout and interaction

1. A wide two-column introduction pairs the heading at left with the
   supporting copy at right, retaining the reference's editorial density while
   using original content and proportions.
2. Below it, four equal tab buttons sit in a single restrained segmented strip:
   `Detect`, `Explain`, `Coordinate`, and `Learn`.
3. The selected tab uses a slightly elevated graphite pill with a fine
   signal-lime active line. Inactive tabs remain clear and readable rather
   than fading into decoration.
4. The dashboard canvas has a dark translucent surface with low-contrast
   borders. A muted atmosphere or route-texture behind it may reference the
   Signal Terrain, but no literal landscape image is used.
5. Under the canvas, circular chevrons provide a complete alternate path:
   `Previous capability` and `Next capability`. The central label explains the
   active capability's operational outcome. The controls cycle through the
   same four views in order and wrap at the ends.

### Motion and accessibility

- The introduction reveals first, followed by the tab strip and then the
  canvas. This makes the workflow legible before the product detail appears.
- Selecting a tab fades the departing view slightly and shifts it by a small
  amount before the incoming content resolves from the relevant signal point.
  Avoid a hard cut, full-page slide, or flashy crossfade.
- The dashboard canvas must not auto-rotate. The reader controls every change.
- Tabs follow the WAI-ARIA tab pattern: each is a labelled button with
  `role="tab"`, `aria-selected`, and an associated `role="tabpanel"`.
  Arrow keys move between tabs; Enter and Space activate the focused tab.
- Chevron controls have explicit accessible labels, remain keyboard reachable,
  and provide the same results as the tabs. Reduced-motion users receive an
  immediate content swap with a brief opacity transition only.

## Section 3: Why NEXORA

### Purpose

This section answers why an operations team should trust NEXORA once they have
seen its workflow. It must not repeat the dashboard features from Section 2.
Instead, it articulates the operating principles that make the system useful
when conditions are changing and decisions carry consequences.

- Eyebrow: `WHY NEXORA / 03`
- Heading: `Clarity that holds under pressure.`
- Supporting copy: `Built for the moments when an operational signal needs a
  real decision.`

### Horizontal value-card rail

Five horizontal cards sit on an intentionally clipped rail. At desktop, show
roughly three full cards plus the edge of the next or previous card; this makes
the rail's continuation obvious. Cards use a dark double-surface treatment: a
subtly bordered illustration field above and a concise title/body field below.
Each illustration is a bespoke inline SVG, not an icon-library substitute.

| Card | Value | Original SVG subject |
| --- | --- | --- |
| **See it early** | Risks surface before they become broad disruption. | One node grows into a radius signal and a layered alert contour. |
| **Trace the cause** | Teams understand the source, not only the symptom. | A single point becomes a line, then divides into a concise causal trace. |
| **Align the response** | Every owner acts from the same shared response. | A node becomes a path connecting three accountable handoff points. |
| **Keep humans in control** | Recommendations remain inside team guardrails and approvals. | A point becomes a route that resolves through an approval gate. |
| **Learn from every move** | Outcomes feed better decisions at the next disruption. | A point becomes an upward curve and a closed feedback loop. |

### SVG build choreography

The card illustrations must feel constructed, not simply revealed. Their
motion follows a shared three-phase grammar while each card retains a distinct
final object:

1. A small fog-grey origin point appears at the diagram's meaningful start.
2. The main route is drawn outward with SVG path `stroke-dashoffset`; branching
   or structural lines follow after a short delay.
3. The final contour, nodes, gate, or loop settles with a faint lime accent at
   the relevant decision point.

Run this sequence once—around 700–900ms—when a card first becomes the rail's
dominant visible item. Do not replay it every time the card is revisited and
do not treat it as a loading indicator. The illustrations use thin fog-grey
linework on black, with signal-lime reserved for a single meaningful endpoint.
With `prefers-reduced-motion`, show the final SVG state immediately and retain
only a short opacity entrance for the card surface.

### Rail controls and accessibility

- Circular left and right chevrons move the rail by one card on desktop and
  mobile; the rail also supports direct drag and touch swipe.
- A horizontal progress track sits between the chevrons. Its thumb reflects
  the actual visible rail position and is not decorative.
- The rail does not wrap from the final card back to the first. At either end,
  the unavailable chevron is visibly and semantically disabled.
- Cards remain readable in normal document order. Arrow control buttons have
  explicit labels such as `Show next reason to choose NEXORA`.
- On mobile, cards take most of the viewport width; users can swipe through
  them without needing precision pointer control. Focused controls retain
  strong visible focus states.

## Section 4: Integrations

### Purpose and content

The integration section gives NEXORA a credible operational context after the
product and value sections. Its visual system shows that useful decisions do
not begin in a single dashboard: they emerge from the systems where stock,
routes, orders, and service impact already live.

- Eyebrow: `CONNECTED SYSTEMS / 04`
- Heading: `Everything that moves a decision.`
- Supporting copy: `NEXORA connects the systems where operational context
  lives, then turns their signals into one accountable response.`

### Fan ecosystem

The focal visual is an original semi-circular ecosystem fan. A fixed NEXORA
core mark sits at the lower centre; two nested arcs of integration marks fan
out above it. Fine low-contrast connection lines establish their relationship
without turning the composition into a literal network diagram.

- The outer arc carries 8–10 fictional integration marks and travels slowly
  from right to left.
- The inner arc carries 5–6 fictional integration marks and travels slowly
  from left to right at a slightly slower pace.
- Each track is duplicated and edge-masked so its loop is continuous with no
  visible reset. The central NEXORA mark never moves.
- At most two connections are active at once: a fine signal-lime line briefly
  resolves from a passing mark toward the NEXORA core, then fades. The motion
  should feel like live context arriving, not a busy decorative marquee.
- For `prefers-reduced-motion`, all marks stop in a balanced static fan and
  the active connection is rendered as a subtle stationary state.

### Fictional integration-mark system

All marks are original and fictional. Do not use external-company logos or
imply official integrations. Each mark is a compact monochrome vector with a
distinct silhouette—such as a split ring, folded bar, rounded grid, stepped
square, or divided capsule—inside a small translucent node. The ecosystem may
use invented product names in implementation only where a label is needed;
the visual should read as a believable category ecosystem rather than a claim
about real vendor relationships.

### Source groups

Four concise columns below the fan explain the type of operational context
NEXORA connects. Each gets a category icon from one coherent UI icon family;
they are not the fan's integration marks.

| Source group | Signals NEXORA reads |
| --- | --- |
| **Warehouse systems** | Stock, scan events, fulfilment, and exceptions. |
| **Transport networks** | ETA, route changes, and carrier handoffs. |
| **Orders and ERP** | Demand, purchase orders, and exposure. |
| **Customer operations** | SLA risk, escalations, and service impact. |

### Responsiveness and accessibility

- The fan remains a decorative visual. The section's meaning is fully present
  in its heading, supporting copy, and source-group columns.
- On tablet and mobile, show a smaller static fan or one restrained arc above
  a two-by-two source-group grid. Do not force a wide clipped animation into
  a narrow viewport.
- Motion has no interaction requirement and must not obscure focus, text, or
  the section's reading order.

## Section 5: Pricing

### Purpose and content

The pricing section is deliberately clear and calm after the more expressive
ecosystem visual. NEXORA is an operations platform that normally requires
implementation and connected data, so its tiers scale with operational
footprint rather than generic AI-query quotas.

- Eyebrow: `PRICING / 05`
- Heading: `Pricing that matches your operating footprint.`
- Supporting copy: `Start with the signals you need. Expand when more of the
  network depends on them.`
- Comparison action: `Compare plans` (anchors to a detailed comparison when
  that content is added later).

### Plan tiers

| Plan | Monthly billing | Annual billing | For | Primary CTA |
| --- | --- | --- | --- | --- |
| **Signal** | `$1,200 / mo` | `$1,000 / mo` | Teams operating up to three locations with core data sources. | `Request briefing` |
| **Control** | `$2,800 / mo` | `$2,350 / mo` | Multi-location networks that need response plans and approval flows. | `Request briefing` |
| **Network** | `Custom` | `Custom` | Complex operations, regional rollout, or custom integrations. | `Talk to NEXORA` |

`Control` is the recommended tier. It is slightly elevated with a subtly
brighter graphite surface, a fine signal-lime rule, and a concise
`Recommended for multi-site teams` label. The other cards remain equally
legible; the recommended treatment must not look like a promotional banner.

Feature rows prioritise: monitored locations/facilities, connected data
sources and refresh cadence, alert and response workflows, approval/audit
trail, and implementation/support level. Do not use unrelated measures such
as AI-query caps.

### Global billing control

One annual/monthly switch sits above the entire pricing grid, accompanied by a
small `Save 17% annually` label. It changes both priced plans together so all
cards remain comparable in the same billing period. Do not provide a separate
switch inside every pricing card. The custom Network tier remains `Custom` in
both states.

### Price transition and accessibility

- The switch thumb moves in 180–220ms. Its checked label and the annual saving
  remain visible in text, not colour alone.
- On change, the outgoing price rises roughly 6px and fades; the incoming price
  enters from below. Price numerals use `tabular-nums` to prevent width jitter.
- The period label changes to `billed annually` in the annual state. The
  amount still communicates its monthly equivalent, so the comparison stays
  immediately understandable.
- With `prefers-reduced-motion`, values update directly with no spatial price
  animation.
- Implement the control as a single labelled checkbox/switch with an explicit
  accessible state, for example `Bill annually — save 17 percent`. Price
  updates must be announced without disrupting reading order.
- On mobile, cards stack Signal → Control → Network and the global billing
  control remains above all three tiers.

## Next decisions

We will design the remaining page sections one at a time after the hero is
approved. Likely future sections are: operational proof, the signal workflow,
product capabilities, customer outcomes, implementation process, FAQ, and a
closing briefing CTA. These are placeholders for discussion, not approved
page requirements.
