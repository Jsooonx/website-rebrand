# Hushwork

Hushwork is a fictional AI operations studio for service teams that need to
quiet recurring manual work while retaining human judgment. The complete brand
direction is in `BRANDING.md`.

## Current experience

The current implementation includes the atmospheric hero, opening statement,
three-step workflow, six-card capability grid, seven-panel benefit constellation,
client-note carousel with original editorial portraits, and a three-option
engagement pricing grid, followed by a two-column automation comparison and a
high-fidelity, accessible five-question accordion. A centered closing invitation
and notched, multi-column footer complete the page. It uses a generated hero
background, the Hushwork handoff
mark, an expanding notch navigation, a looping partner-mark ticker, original SVG
brand graphics, Phosphor UI iconography, and reduced-motion fallbacks. The
workflow, capability, benefit, testimonial, pricing, comparison, and FAQ sections
contain layered surfaces with distinct
diagnostic, routing, review, chart, handover, sequential core-to-card, carousel,
focal pricing, sequential comparison-scan, and staggered accordion motion sequences.
The closing sequence adds a restrained light-line reveal, CTA stagger, notched
brand lockup, and layered footer entrance.
Primary CTA pills share one short hover contract: a one-pixel lift, restrained
accent treatment, and a subtle arrow follow-through, with touch hover states
disabled and a consistent press scale.
The supplied references guide composition and visual density while all copy,
data, icons, branding, and runtime code remain original to Hushwork.

## Code structure

- `src/App.tsx` owns page-level state, Lenis setup, shared motion helpers, and
  section composition.
- `src/content/site-data.ts` contains immutable copy, card data, asset mapping,
  and visual ordering data.
- `src/components/brand/` contains reusable Hushwork vectors.
- `src/components/ui/` contains the centralized Phosphor icon mapping.
- `src/components/previews/` contains the workflow and capability mini-product
  surfaces; their motion remains in `src/styles.css` beside the corresponding
  visual classes.

## Commands

```bash
npm install
npm run dev
npm run build
```
