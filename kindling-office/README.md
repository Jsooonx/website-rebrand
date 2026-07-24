# Kindling Office implementation

This is a React/Vite editorial studio site for Kindling Office, a fictional
independent brand practice for food, hospitality, culture, and consumer
ventures.

## Source structure

- `src/components/KindlingOfficeHero.tsx` combines the generated title, CTA,
  and project primitives into an original editorial opener and a static,
  asymmetric field strip. The mobile navigation manages focus and Escape.
- `src/components/shared/layout.tsx` centralizes phone/tablet/desktop media
  queries and the reduced-motion-aware motion system: standalone `Reveal`
  blocks, parent-controlled `StaggerGroup` sequences, and `StaggerItem`
  children with subtle, default, and media entrance presets.
- `src/components/shared/SmoothScroll.tsx` configures the document-level Lenis
  instance for wheel and anchor scrolling. Touch remains native and Lenis is
  omitted when the user requests reduced motion.
- `src/components/framer/das-studio/WhoWeAreAdapter.tsx` adds the supplied
  Who We Are composition through generated-component adapters. Its responsive
  layout scales the editorial type and media grid to fill a desktop viewport,
  then shifts the gallery to two or one column on smaller screens.
- `src/components/framer/das-studio/ProjectsAdapter.tsx` presents four
  Kindling Office case studies as one asymmetric editorial field rather than a
  repeated two-by-two template grid.
- `src/components/framer/das-studio/ServicesAdapter.tsx` pairs exported header,
  colour-field, and CTA primitives with a local accessible service accordion.
  The local control replaces the generated accordion's fixed 800ms transition.
- `src/components/framer/das-studio/ProcessAdapter.tsx` uses exported progress
  cards inside a compact two-by-two working rhythm on a Tomato signal field.
- `src/components/framer/das-studio/AboutUsAdapter.tsx` adapts the exported
  text header, video player, and stat items into a long-form studio profile,
  with an original Kindling Office poster and fully rebranded copy.
- `src/components/framer/das-studio/TestimonialsAdapter.tsx` builds a static
  editorial proof wall from exported testimonial, video, stars, and button
  primitives. There is no autoplaying or looping testimonial rail.
- `src/components/framer/das-studio/PricingAdapter.tsx` maps two rebranded
  Kindling Office engagement models into the exported pricing cards and
  preserves their availability, popular-state, list, price, and CTA behavior.
- `src/components/framer/das-studio/FAQAdapter.tsx` uses native visible buttons
  with `aria-expanded` and `aria-controls` in a locally controlled accordion
  that keeps at most one answer open.
- `src/components/framer/das-studio/FooterCTAAdapter.tsx` maps the closing
  Kindling Office invitation into the exported responsive CTA component.
- `src/components/framer/das-studio/FooterAdapter.tsx` composes the rebranded
  wordmark, honest newsletter state, featured project rows, Jakarta address,
  navigation, legal line, and accessible icon-based social links. The generated
  footer is used as a visual reference rather than rendered because its content
  is hardcoded to the source brand.
- `src/styles.css` contains adapter-only layout, responsive, accessibility, and
  generated-component compatibility rules. Its phone guardrails override fixed
  intrinsic widths from generated headers and pricing metadata so 360–519px
  layouts wrap without clipping.
- `public/assets/` contains the generated Kindling Office logo mark, original
  project-image assets, the Services colour-field banner, and the About studio
  poster, plus the featured testimonial portrait. Runtime assets are optimized
  WebP files; original PNG sources are kept in `source-assets/original-png/`.
- `npm run optimize:images` regenerates the served WebP assets from those PNG
  sources when the imagery changes.
- `../framer-export/src/exports/das-studio/` is a generated, read-only vendor
  dependency. It is versioned with the project so the Vite alias resolves in
  local development and production deployments; adapters are the only place
  where Kindling Office-specific composition and content are changed.

## Commands

```bash
npm install
npm run dev
npm run build
```

Adapters explicitly select generated variants through one shared responsive
hook rather than independent resize listeners. Generated files stay read-only;
local structure is used where an export is hardcoded, inaccessible, or imposes
motion that conflicts with the site-level interaction rules.
