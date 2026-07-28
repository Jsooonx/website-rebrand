# Forma Common

Forma Common is a fictional independent brand identity practice in Jakarta. The
site is a short, image-led portfolio built around eight fictional client
projects, a concise studio introduction, an editorial project-enquiry moment,
and a large closing signature.

## Credit

The original visual reference for this rebrand exploration is
[Mike Bennet](https://mikebennet.framer.website/). Forma Common uses an
independent name, copy, visual system, layout details, and fictional imagery.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis
- Manrope Variable

## Experience

- Oversized responsive hero wordmark with an original modular Forma mark.
- A matching custom SVG favicon for the browser tab.
- Eight-project asymmetric editorial grid with two lead projects.
- A concise About composition with studio signals and an original portrait.
- A looping, reduced-motion-aware closing CTA using four project images.
- Staggered section entrances with overlapping word-level blur reveals for key
  editorial statements and paragraphs, tuned to a quick 340ms / 90ms sweep.
- Fine-pointer project hovers use a colour-aware, translucent **See work**
  cursor pill that keeps the artwork visible beneath it; touch and
  reduced-motion users keep the standard interaction.
- Keyboard-accessible mobile navigation with focus management, Escape support,
  focus containment, and scroll locking.
- Native touch scrolling and reduced-motion fallbacks.

## Commands

```bash
npm install
npm run dev
npm run build
```

Regenerate production WebP assets after replacing any source PNG:

```bash
npm run optimize:images
```

Original generated PNG files live in `source-assets/original-png/`. Optimized
runtime assets live in `public/assets/`.

All brands, projects, people, copy, and imagery in this project are fictional
and were created for design exploration.
