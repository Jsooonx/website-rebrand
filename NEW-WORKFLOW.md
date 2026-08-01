# New Website Workflow

This is a reusable workflow for starting a new website project from a visual
reference. Each project declares its reference license context and fidelity
mode before section work begins. Original branding, content, assets, and
implementation are always required.

## Stackframe context

These website rebrand projects are built as potential public templates for
Stackframe, a library of reference-informed website prompts. Each website is
an original, reusable demonstration that shows how to translate a visual
reference into a distinct brand and functional page concept.

The target audience may use the finished project as a starting point for their
own work. Therefore every project must keep its own brand, copy, assets, code,
and product fiction separate from the supplied reference. The reference is
quality context and design input, not a source package to redistribute.

At the beginning of a new website session, include this context plus the
project name, reference status, reference mode, audience, conversion goal,
and intended public-template status.

## 0. Declare the reference boundary first

Record whether the reference is free, paid, supplied privately, or unknown;
whether the project uses `Fidelity mode` or `Rework mode`; and whether the
finished site is intended for public template redistribution.

### Fidelity mode

Preserve the reference's section order, composition, alignment, proportions,
density, navigation, interaction model, and motion intent unless the user
approves a section-specific change.

### Rework mode

Use the reference as structural inspiration, but allow section hierarchy,
composition, visual motifs, and interaction patterns to change materially.
Every intentional departure must be approved and recorded in `DESIGN.md`.

When the license is paid or unknown and public redistribution is intended,
default to `Rework mode`. A purchase or free download does not automatically
grant the right to publish a derivative template.

## Reference fidelity rule

In `Fidelity mode`, unless the user explicitly requests a change, preserve the
reference's:

- section order, layout composition, alignment, proportions, and density;
- navigation structure, hero framing, dashboard treatment, card presentation,
  and visual hierarchy;
- animation intent, interaction model, scroll behaviour, and pacing.

Do not replace a referenced composition with a newly invented concept merely
because it seems cleaner or easier to build. When an exact asset or effect is
not practical, first create the closest faithful equivalent and clearly flag
the trade-off. In `Rework mode`, replacement is allowed only after the new
direction is discussed and approved.

This does not authorise copying the reference's name, copy, brand assets, or
proprietary content. Rebrand those elements while retaining the approved visual
language.

## 1. Find and review a reference

- Find a website, screenshot, or visual direction worth exploring.
- Share the reference and ask for an honest opinion: what works, what feels
  weak, what should be retained, and what should change.
- Identify the website type, audience, content hierarchy, layout rhythm,
  visual tone, and notable interactions.
- Identify which elements are structural style requirements versus original
  brand/content elements that need rebranding.

For a multi-section page, work one reference image at a time. After each
image, confirm what is retained, what changes, and why before moving to the
next section.

## 2. Brainstorm the new direction

- Decide the project name, positioning, audience, and main conversion goal.
- Discuss the visual direction: typography, colour, imagery, density, and
  motion character.
- Propose alternatives only as clearly labelled options; do not implement them
  by default when they change the supplied composition.
- Confirm any requested departures section by section before building them.

## 3. Create the project brief

- Create a dedicated project folder using the approved name.
- Copy supplied screenshots into `<project>/references/`.
- Write `<project>/DESIGN.md` with the reference analysis, a section-by-section
  fidelity map, page structure, content plan, responsive rules, visual system,
  motion direction, accessibility requirements, and approved deviations.
- Agree on the stack before implementation starts.

After each approved section discussion, immediately add its reference image to
`<project>/references/` and record the decision in `DESIGN.md`. Continue this
image → discussion → documentation loop until the page map is complete.

## 4. Plan content and assets

- Convert the reference's content model into original content: sections,
  headlines, projects or products, services, calls to action, and contact
  details.
- Design the rhythm of repeated content intentionally. Do not make every card
  or image the same size unless uniformity is part of the intended direction.
- Generate or source original visual assets where needed, and document prompts
  or source decisions.
- Optimise raster assets for production, while retaining source assets outside
  the runtime path.
- Do not reuse the reference's logos, copy, screenshots, source code, or
  distinctive proprietary assets in a public template.

## 5. Build the website

- Scaffold the agreed stack inside the project folder.
- In `Fidelity mode`, recreate the reference composition and responsive layout
  first; in `Rework mode`, build the approved replacement composition from
  `DESIGN.md`. Add polish only after the core composition is stable.
- Keep components semantic and keyboard-accessible.
- Include responsive navigation, sensible loading behaviour, metadata, and a
  custom favicon as appropriate for the website.

## 6. Add motion and interaction

- Give each section a deliberate entrance rhythm rather than applying one
  generic animation everywhere.
- Use motion to clarify reading order: primary message, visual, supporting
  content, and action.
- Tune speed and stagger based on the content; text animation should read as a
  quick editorial reveal, not a slow typewriter unless that is intentional.
- Make hover effects contextual to the project visual system and useful for
  signalling interactivity.
- Respect `prefers-reduced-motion` and ensure touch users retain complete,
  standard interactions.

## 7. Document and validate

- Keep the project `README.md` concise: purpose, stack, notable interactions,
  commands, original-asset note, and reference credit.
- Update `DESIGN.md` when a meaningful design or behaviour decision changes.
- Run the relevant production build and inspect the diff for unintended
  changes.
- Check important responsive and interactive states in the browser after they
  change.
- Compare each completed section against its supplied reference before moving
  to the next section; correct fidelity gaps before expanding the scope.

In `Rework mode`, compare against the approved deviation record rather than
trying to restore the original composition.

## 8. Deliver safely

- Stage only files that belong to the requested project.
- Do not include unrelated worktree changes in a commit.
- Commit and push only when explicitly requested or otherwise authorised.
- Add the finished project to the root `README.md` with a short description and
  a clear reference credit when it is ready to be listed.
