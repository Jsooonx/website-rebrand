# Nexora — Operational Dossier Design System

Status: implemented
Date: 2026-08-01

## Reference mode and boundary

- Mode: `Rework mode`.
- Source: supplied screenshots from a paid Framer template.
- Intended distribution: public Stackframe template example.
- Use: screenshots guided section discussions and quality review only.
- Boundary: Nexora does not reuse the reference's brand, copy, logos, source
  code, runtime assets, section hierarchy, or distinctive visual motifs.

The section process was iterative: each reference image was reviewed,
discussed, saved under `references/`, and documented here before moving to the
next section. The final direction was approved as a materially different
operational-dossier concept.

## Design thesis

Nexora is explained through one live operational case. The page behaves like a
working dossier: a request gathers records, becomes a verified conclusion, and
leaves with an accountable owner. This structure replaces the former
reference-shaped SaaS sequence of centered hero, dashboard tabs, card rail,
integration fan, pricing table, FAQ categories, portrait testimonial, and
landscape CTA.

Nexora is a fictional Stackframe demonstration. Every case, organisation,
role, result, and adoption path is synthetic and disclosed in context.

## Visual world

The scene is a dim operations room illuminated by an active case file. The
visual language combines matte graphite surfaces, warm dossier paper, fine
documentation rules, compact evidence labels, and one electric-lime status
color.

| Role | Value | Usage |
| --- | --- | --- |
| Ink | `#0e100f` | Primary room and dark dossier surfaces |
| Raised graphite | `#151816` | Case files, workflow chapters, directory |
| Dossier paper | `#ece9df` | Scenario and story fields |
| Muted paper | `#d8d4ca` | Adoption-path field |
| Active status | `#c5f267` | Current stage, route, and decisive CTA |
| Warm white | `#f0eee7` | Primary type on graphite |

Lime is a state, not decoration. It marks the current chapter, directly
hovered system route, resolved action, or primary conversion moment. No glass,
colored bloom, or radial fan is used. The hero may use a restrained generated
topographic landscape as atmosphere, provided it stays subordinate to the live
case file and does not introduce cyber/neon cues.

## Typography

- Display: local condensed-feeling sans stack (`Arial Narrow`,
  `Roboto Condensed`, Arial fallback).
- Interface and body: the same workhorse sans stack for cohesion.
- Evidence labels and coordinates: system monospace.
- Display headings use tight tracking and short line lengths; UI text stays
  compact with relaxed line-height.
- Marketing copy uses title-case “Nexora,” never all caps. Uppercase is limited
  to technical labels and simulation codes.

## Layout grammar

- Maximum content width: 88rem with 1.5rem desktop gutters and 1rem mobile
  gutters.
- Hero: asymmetric offer left, vertical live case right.
- Workflow: sticky chapter rail plus three alternating case states.
- Scenario mosaic: one dominant full-height tile and two supporting tiles.
- Systems index: rectangular input → reasoning → output directory.
- Adoption: vertically differentiated operating paths with clear dollar
  pricing.
- Field notes: editorial indexed accordion without category tabs or sticky
  contact card.
- Stories: fixed-height simulation frame with stable controls and an original
  role portrait panel.
- Closing: a full lime launch field paired with a miniature resolved case.

The page rhythm deliberately alternates graphite and paper fields. It does not
reuse the paid reference's section hierarchy or visual motifs.

## Components and state

### Case file

`CaseFile` owns request, sources, verified conclusion, and action destination.
Only the region matching `collect`, `validate`, or `act` is emphasized. The
entire record remains readable without motion. A compact workspace overview
adds thread, source, action, and decision-signal metrics so the product reads
as a working tool instead of a text-only claim. Public-facing labels use
product language; provenance remains documented here and in `PRODUCT.md`.
The hero backdrop uses a generated matte topographic landscape with a restrained
route light, giving the first viewport atmosphere without competing with the
case file.

### Workflow chapters

The rail syncs to scroll position where supported and remains keyboard
activatable. On small screens it becomes a horizontal control above linear
chapters.

### Systems directory

Rows and connector paths share one order. A route activates only on direct
hover or focus and clears on pointer leave or blur. Mobile removes connector
geometry and retains the readable source/reasoning/output sequence.

### Field notes

Every question is a real button with `aria-expanded`. Selecting an open item
again collapses it. Only one note is open at once.

### Scenario stories

Story copy, metadata, controls, and a portrait panel occupy fixed zones. The
portrait is a role cue rather than a customer claim, and the panel remains
stable while story copy changes.

## Motion

- State transitions last about 180–240ms with no bounce.
- Each page section uses a one-shot viewport entrance: heading, supporting copy,
  then the primary content enters in roughly 90ms steps with a short blur-to-clear
  settle. The sequence is disabled when reduced motion is requested.
- CTA text rolls only inside text-bearing CTA pills.
- Directional arrows exit in their pointing direction and re-enter from the
  opposite edge.
- Workflow and connector emphasis use opacity, rules, and fill—not glow.
- `prefers-reduced-motion` collapses transitions and smooth scrolling.
- There is no parallax, autoplay, continuously orbiting decoration, or terrain
  movement.

## Responsive rules

- Below 980px, hero and workflow visuals stack; the chapter rail becomes
  horizontal; adoption paths linearize; the launch panel stacks.
- Below 700px, section headers become one column, the scenario mosaic becomes
  a vertical sequence, connector SVG disappears, FAQ indices stack, and the
  story frame preserves its compact vertical gutter.
- Interactive targets remain at least 40–44px where space permits.
- Mobile preserves evidence labels and fiction disclosures instead of hiding
  product context.

## Approved deviations from the supplied reference

The screenshots in `references/` are private quality context only. The approved
rework replaces their centered dashboard hero, four-tab dashboard, horizontal
Why rail, radial integrations fan, price-table hierarchy, sticky FAQ contact
composition, and lifted closing dashboard with the dossier system documented
above. Color, copy, and assets alone are not considered a sufficient rework.

## Validation

Required before handoff:

```bash
npm test -- --run
npm run build
```

The built `index.html` must retain the design-contract comment with seed key
`76090061`.
