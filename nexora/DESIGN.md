# NEXORA Reference-Fidelity Rework

Status: approved design direction, ready for implementation
Date: 2026-07-31

## 1. Rework objective

The first NEXORA implementation drifted too far from the supplied Powder
references. It treated the screenshots as loose inspiration and replaced their
composition with a new split hero, a custom pill navbar, an abstract
operations-intelligence product, and a different section rhythm.

This rework corrects that. The supplied screenshots are now the visual and
interaction blueprint. NEXORA replaces the reference brand, copy, icons,
fictional data, and product details while retaining the reference's:

- composition and information hierarchy;
- content density and generous negative space;
- section order and vertical pacing;
- dashboard scale and placement;
- navigation geometry;
- carousel, tab, sticky, and pricing behavior;
- understated grayscale visual system;
- controlled entrance and scroll motion.

The goal is not to copy Powder's identity or product content. The goal is to
make the resulting NEXORA page unmistakably related to the supplied layout,
while presenting a clear original AI workspace product.

## 2. Product direction

NEXORA is an AI workspace agent for operational teams.

It connects company knowledge and work systems so a user can:

1. ask a work question;
2. receive a sourced, verifiable answer;
3. turn that answer into an accountable action;
4. review outcomes and recurring patterns.

The primary product promise is:

> Ask across your work. Verify the answer. Move the next action forward.

The dashboard must communicate this product within one viewport. It must read
as a complete application, not an abstract diagram or decorative mockup.

### Core workflow

| Mode | Product behavior | Example |
| --- | --- | --- |
| **Ask** | Search connected company context and prepare a direct answer. | “What is blocking the Acme renewal?” |
| **Verify** | Show sources, confidence, and relevant policy or record context. | CRM, help-center, and invoice sources attached to the answer. |
| **Execute** | Prepare a ticket, reply, update, or workflow action with approval. | Create a support ticket and assign the owner. |
| **Measure** | Surface outcome trends, recurring questions, and knowledge gaps. | Billing questions increased 28% week over week. |

### Product UI vocabulary

The product surface uses realistic operational content:

- workspace sidebar with recent questions and tasks;
- clear mode title: Ask, Verify, Execute, or Measure;
- one prominent prompt composer;
- quick-action suggestions;
- source chips and citations;
- action preview with owner and approval state;
- restrained metrics and insight lists;
- search and menu utilities.

There is no signal map, network terrain, logistics topology, or distribution
control-room metaphor in the reworked product.

## 3. Fidelity rules

### Must match the references

- Overall max-width and left/right content alignment.
- Transparent desktop navbar with centered links and one compact right CTA.
- Centered hero copy and the product dashboard rising from the bottom.
- Dark-to-muted-warm hero gradient.
- Split section headers: large title left, short supporting copy right.
- Small rounded section label above the title.
- Wide four-tab segmented control directly above the feature dashboard.
- Large framed dashboard visual occupying most of the section width.
- Horizontal Why-card rail with approximately three cards visible on desktop.
- Semicircular integrations fan and four-column explanation row.
- Three-column pricing table with the middle plan visually elevated.
- Sticky FAQ category menu beside a tall accordion list.
- Single large testimonial card with copy left and portrait right.
- Closing split CTA with a dashboard panel on the right and black footer below.
- Small circular chevrons, fine progress rails, subtle borders, and muted type.

### May change for NEXORA

- Brand name, wordmark, icon, and copy.
- Dashboard content and all fictional data.
- Fictional company marks and portraits.
- Exact grayscale values and one restrained accent color.
- Section labels so they describe the NEXORA product.
- Mobile stacking required for usability.

### Must not be reinterpreted

- Navbar shape may not become a full-width pill container.
- Hero may not become a left-copy/right-visual split layout.
- Dashboard may not be replaced by a map, abstract network, or illustration.
- Section headers may not be centered if the reference is split.
- Horizontal rails may not become equal static grids on desktop.
- Pricing may not use unrelated standalone SaaS cards.
- Closing CTA may not become a large editorial headline with a separate custom
  composition.
- No new decorative theme may compete with the reference's restrained product
  presentation.

## 4. Visual system

### Palette

| Token | Role | Direction |
| --- | --- | --- |
| `--page-black` | Main page background | Near-black, neutral rather than blue |
| `--panel` | Dashboard and card surface | Warm charcoal |
| `--panel-raised` | Selected and elevated surfaces | Slightly lighter charcoal |
| `--text` | Primary type | Warm off-white |
| `--muted` | Supporting type | Medium neutral gray |
| `--hairline` | Borders and rails | White at 8–14% opacity |
| `--accent` | One active-state accent | Muted rose/sand, used sparingly |

The current bright signal-lime is removed as the dominant brand accent. Active
states should primarily use off-white and subtle warm-gray surfaces. A muted
rose accent may appear in tiny status dots, chart emphasis, and the hero
gradient.

### Typography

- Use the existing neutral sans-serif stack.
- Hero headline is centered, approximately 64–76 px on large desktop.
- Section headings are approximately 42–52 px and use the reference's
  two-line rhythm.
- Product UI type is compact and lower contrast.
- Display headings use tight negative tracking; paragraphs remain readable
  with normal tracking.
- Dynamic prices and metrics use tabular numerals.

### Surfaces

- Borders are 1 px translucent hairlines.
- Dashboard frames use 18–28 px radii depending on scale.
- Inner product panels use smaller concentric radii.
- Shadows are broad and nearly black; no colored glow.
- Background imagery is limited to the existing fictional testimonial
  portraits. Product presentation is built with HTML, CSS, and icons.

## 5. Navbar

### Desktop

The navbar follows the supplied reference:

- transparent background over the hero;
- a small NEXORA wordmark or symbol aligned at the left edge of the content
  container;
- four simple text links centered: `About`, `Features`, `Pricing`, `FAQ`;
- a compact rounded `Get started` button on the right;
- no surrounding capsule, blur panel, or heavy border;
- approximately 72–88 px high with generous horizontal breathing room.

The navbar starts absolute over the hero. Once the reader leaves the hero it
may become a low-contrast sticky black bar, but the change must not alter its
geometry.

### Mobile

- NEXORA wordmark left and circular menu trigger right.
- The opened menu is a simple black panel using the same link order.
- The menu must not obscure the trigger or create a second nested pill
  container.

## 6. Hero

### Composition

The hero returns to the reference's centered composition:

1. navbar at top;
2. small rounded announcement badge;
3. centered two-line headline;
4. centered two-line supporting copy;
5. primary rounded CTA with a separate circular arrow control;
6. large product dashboard centered below, with its lower part initially
   outside the viewport.

Proposed content:

- Badge: `New · Connected actions and verified answers`
- Heading: `One AI workspace for answers and action`
- Supporting copy: `Ask across your work, verify the answer, and move the next
  action forward in seconds.`
- CTA: `Get started`

### Background and transition

All terrain artwork is removed.

The hero background is a CSS gradient:

- top: deep charcoal;
- middle: desaturated warm gray;
- lower area: muted rose-brown;
- final edge: black mask.

The oversized product dashboard bridges the hero into the black content
surface. Its dark panel, bottom crop, and black gradient mask create the
transition. No hill, landscape, topographic texture, or generated image is
used.

### Hero dashboard

The hero dashboard is a credible overview of NEXORA:

- compact application menu at top right;
- `Welcome back` or `What can I help you move forward?` title;
- central prompt composer;
- source, attachment, and voice controls;
- four quick-use chips: `Research`, `Support ops`, `Writing`, `Actions`;
- three recent prompt suggestions below;
- subtle sidebar or status rail only where the crop permits.

The first screen must immediately communicate “AI workspace connected to
company work,” even before the Features section explains the modes.

## 7. Features

This section closely follows `features-tabs-reference.png` and
`features-coordinate-reference.png`.

### Header

- Label: `Core features`
- Heading: `One connected workspace for your entire organization`
- Supporting copy: `NEXORA turns company context into sourced answers,
  accountable actions, and measurable follow-through.`

### Tabs

The segmented control spans the full dashboard width and uses:

1. Ask
2. Verify
3. Execute
4. Measure

Only one tab is active. Tabs change the entire dashboard state without
auto-rotation. Previous and next circular chevrons below the dashboard provide
an alternate control.

### Dashboard states

- **Ask:** workspace sidebar, prompt composer, suggestion buttons, recent work.
- **Verify:** completed answer with citations, source cards, confidence and
  related-policy context.
- **Execute:** prepared action, owner, approval panel, and next-step buttons.
- **Measure:** compact metrics, trend chart, question categories, and knowledge
  gaps.

Every state retains the same application shell so the product feels like one
coherent tool.

## 8. Why NEXORA

The layout follows the supplied Why-card rail:

- label, two-line heading, and supporting paragraph use the same grid as the
  reference;
- approximately three full cards and part of the next card are visible;
- cards have a large monochrome custom SVG area and a compact copy area;
- previous/next circular buttons and a thin progress line sit below the rail.

The five cards describe:

1. Shared context
2. Sourced answers
3. Instant action
4. Built-in control
5. Continuous insight

Each SVG begins as a point, expands into construction lines, and resolves into
its final object. Animation plays when the card first becomes prominent and
does not loop continuously.

## 9. Excluded stacked-card section

The previously discussed sticky “What you get” stacked-card section remains
excluded. This was an explicit product-design decision and is not reintroduced
in the fidelity rework.

## 10. Integrations

The integrations section preserves the reference fan:

- split header above;
- three concentric semicircular arcs;
- fixed NEXORA core at the bottom center;
- fictional monochrome integration nodes placed on the arcs;
- outer nodes drift one direction while inner nodes drift the opposite
  direction;
- fine radial connectors remain low contrast;
- four equal explanation columns below.

The core mark and integration marks are original. Motion is slow, continuous,
and decorative. Reduced-motion users see the same fan without movement.

## 11. Pricing

The pricing section follows the reference table:

- split header and a small `Compare plans →` link;
- three connected columns: Starter, Team, Enterprise;
- the Team column rises slightly above its neighbors;
- one global monthly/yearly control above the table;
- prices animate vertically and retain stable width;
- feature rows align across columns.

Proposed prices:

| Plan | Monthly | Yearly effective | Purpose |
| --- | --- | --- | --- |
| Starter | Free | Free | Small teams validating connected answers |
| Team | $39 / user | $32 / user | Shared context, actions, and approvals |
| Enterprise | Custom | Custom | Security, governance, and tailored rollout |

The pricing model changes because NEXORA is now an AI workspace rather than a
facility-monitoring platform.

## 12. FAQ

The FAQ follows the supplied reference:

- split header;
- sticky three-option menu on the left;
- accordion list on the right;
- category menu moves down naturally within its sticky boundary as the user
  scrolls;
- contact card appears below the category menu;
- one answer remains open at a time.

Categories:

1. General
2. AI & capabilities
3. Integrations & security

## 13. Testimonials

The testimonial section retains the reference layout:

- split header above;
- one large two-column card;
- quote, fictional company mark, attribution, outcome, controls, and dots on
  the left;
- editorial portrait on the right;
- circular manual chevrons;
- no autoplay.

Existing fictional portrait assets may remain. Their crop, frame, sizing, and
placement are updated to follow the reference more closely.

## 14. Closing CTA and footer

### Closing CTA

The closing section mirrors the reference split:

- left: `Get started today`, short copy, primary CTA, and three product trust
  statements;
- right: the same NEXORA AI workspace surface seen in the hero, showing
  prompts, recent work, and action shortcuts;
- large dark-blue/charcoal panel behind both columns;
- dashboard begins slightly lower and moves upward a restrained 6–8% while
  scrolling.

Terrain is removed from the closing CTA.

The section fades through a solid black gradient mask into the footer. The
dashboard may dim and crop at the bottom, but no generated foreground artwork
or landscape is introduced.

### Footer

- solid black surface;
- wordmark and one-line positioning on the left;
- Product, Company, and Legal link columns on the right;
- thin divider and copyright row below;
- no fictional compliance certification badges.

## 15. Motion and micro-interactions

Motion follows the reference's quiet product-demo character.

### Entrances

- badge;
- headline;
- supporting copy;
- CTA;
- dashboard shell and internal UI.

These enter with short staggered opacity and 8–18 px vertical movement. Blur is
limited to 2–4 px and resolves quickly.

### Interactive motion

- Navbar links: underline or opacity change only.
- Primary buttons: 1 px lift and arrow translation.
- Tabs: sliding active surface, immediate content state update with brief fade.
- Dashboard state: shell remains fixed; internal content transitions.
- Card rail: controlled horizontal spring with no bounce.
- FAQ: height and opacity expansion.
- Pricing: vertical number swap using tabular numerals.
- Testimonial: manual crossfade and small crop shift.
- Closing dashboard: restrained scroll-linked rise only.

### Reduced motion

- no fan drift;
- no SVG construction animation;
- no dashboard parallax;
- tabs, FAQ, prices, and testimonials update immediately with opacity-only
  transitions where needed.

## 16. Responsive behavior

### Tablet

- section header grid remains split where space permits;
- dashboard frames reduce internal density but preserve recognizable shell;
- Why rail shows approximately two cards;
- pricing may stack into one column below 900 px;
- FAQ sidebar becomes static before the accordion.

### Mobile

- centered hero remains centered;
- hero dashboard uses a wide internal canvas cropped by the viewport rather
  than collapsing into an unrelated mobile UI;
- tab row scrolls horizontally without a visible native scrollbar;
- Why rail shows one card plus a partial next card;
- integration fan keeps its semicircular shape with fewer visible nodes;
- product content precedes imagery in testimonials and closing CTA;
- all interactive controls provide at least a 44 px hit area.

## 17. Component and data architecture

The existing Vite, React, TypeScript, Tailwind, Motion, and Lenis stack remains.

The rework keeps the page section boundaries but replaces the product visual
layer:

- `WorkspaceShell`: persistent sidebar, topbar, and content frame;
- `AskWorkspace`: prompt and suggestion state;
- `VerifyWorkspace`: answer and source state;
- `ExecuteWorkspace`: action and approval state;
- `MeasureWorkspace`: metrics and insights state;
- `HeroWorkspace`: simplified crop of `WorkspaceShell`;
- `ClosingWorkspace`: simplified task-oriented crop of `WorkspaceShell`.

All modes consume typed content from `siteData.ts`. The hero, Features section,
and closing CTA reuse the same visual language and shared primitives.

## 18. Testing and validation

### Automated behavior

- Desktop and mobile navbar states.
- Features tab semantics and mode switching.
- Previous/next feature controls.
- Why-card rail navigation.
- Global yearly pricing toggle.
- FAQ category reset and single-open accordion.
- Manual testimonial navigation.
- Reduced-motion-safe rendering for scroll-linked surfaces.

### Browser review

Validate at:

- 1440 × 900 desktop;
- 1024 × 768 tablet;
- 390 × 844 mobile.

Review:

- navbar geometry against the reference;
- centered hero hierarchy;
- product clarity in the first viewport;
- dashboard scale and crop;
- section-by-section alignment and negative space;
- absence of terrain assets;
- no horizontal document overflow;
- keyboard focus and touch target size;
- no broken image, hash target, or console error.

## 19. Acceptance criteria

The rework is accepted when:

1. A side-by-side viewer can map every page section directly to its supplied
   reference screenshot.
2. The navbar is a transparent reference-style layout, not a full pill.
3. The hero is centered with a dominant dashboard below it.
4. No terrain, hills, topographic artwork, or landscape foreground appears.
5. A first-time viewer can describe NEXORA as an AI workspace that answers,
   verifies, acts, and measures.
6. The Features section clearly demonstrates all four modes through a credible
   dashboard.
7. Existing rail, fan, pricing, FAQ, testimonial, CTA, and footer structures
   follow the supplied references closely.
8. Mobile remains usable without replacing the reference composition with a
   different product design.
9. Automated tests and the production build pass.
10. Browser review shows no overflow, broken assets, missing section labels,
    or console errors.
