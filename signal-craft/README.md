# Signal Craft

Signal Craft is a fictional AI systems studio for service and operations teams.
Its complete brand direction is documented in `BRANDING.md`.

## Current experience

The current implementation contains the responsive homepage hero, a compact
collaborator logo cloud, an About/proof section with selected fictional client
outcomes, and a three-card Services section. It translates
the supplied visual reference into the Signal Craft brand through an original
split-disc aperture mark, a technical drafting grid, dotted route guides,
Ultramarine signal blocks, compact navigation, and human-in-the-loop messaging.

The entrance is staged in two phases: the frame and main composition settle
first, followed by copy and actions. The aperture settles after its entrance
without continuous motion. The logo cloud uses a short in-view stagger, while
reduced-motion visitors receive the final composition without spatial motion.

The full page now uses a unified motion rhythm: supporting content staggers at
35â€“80ms intervals, text enters over roughly 440ms, and large editorial media
is allowed slightly longer clip reveals. Blur is reserved for primary headlines
and state changes rather than repeated cards. About enters as one coordinated
sequence, Vision keeps its expanding middle-line image, Process lets the sticky
stack remain the dominant motion, Contact reveals its signal field from the
center, and Footer closes with a compact navigation-to-wordmark sequence.
Reduced-motion mode preserves short opacity fades while removing spatial
movement and continuous marquee motion.

The About section pairs proof metrics with an original editorial operations
photograph stored at `public/images/about-workflow-studio.jpg`.

Each service card reveals its own editorial operations image on hover or
keyboard focus. Touch layouts retain a quiet image preview and use horizontal
scrolling to preserve the vertical card proportions.

The Vision chapter spans approximately two viewports: a centered manifesto
followed by a full-screen featured system for Junction Health. Its original
laptop workflow visual is stored at
`public/images/vision-human-review-system.jpg`. On entrance, only the middle
headline row expands to reveal the image between its two text fragments. The
featured system includes a three-image, arrow-controlled media carousel.
Each slide carries its own project title, description, and outcome metrics.

The four-step Process section uses a native sticky scroll stack. Each card rises
from the lower viewport, settles above the previous card, and preserves a
partial preview of the next step before the visitor continues scrolling. The
section ends while all four cards are still locked in their final stack, ready
for the following page to push the composition away as one unit.
Each card includes stage-specific telemetry, a live-status indicator, system
stamp, and route scan. These micro-elements enter in a short stagger and use
restrained idle motion that is disabled for reduced-motion visitors.
The central compositions are intentionally distinct: discovery uses a challenge
board and lens, planning uses a branching onboarding route, build uses a dark
workspace, and embed uses an animated performance chart.

The following statement band enters as two staggered rows: the first settles
down from above and the second rises from below. Once both entrances finish,
the rows become opposing seamless marquees. Reduced-motion visitors retain the
complete static statements without the continuous loop.

The Why Us chapter runs approximately one and a half desktop viewports. It
pairs a three-story testimonial carousel with four concise operating reasons.
The original monochrome testimonial photography is stored in `public/images`.
The quote panel remains locked to the lower-right position across every slide
so the carousel controls and reading position never move.

The Pricing section presents two clear project starting points: a focused
Foundation sprint and a featured Embedded build. Both cards include transparent
scope lists, responsive CTA treatment, subtle hover lift, and reduced-motion
support.

CTA interactions share one restrained motion language: fine-pointer hover
slightly lifts primary actions and advances directional arrows, while press
feedback scales independently so it cannot override the hover position.
Touch devices skip hover-only movement, and reduced-motion mode retains the
state change without spatial movement. The contact submit color reveal uses an
opacity layer so its gradient-to-signal transition remains smooth.

The FAQ section uses a single-open accordion with accessible expanded states,
animated answer height, contextual plus/minus transitions, keyboard focus
treatment, and a reduced-motion fallback.

The pre-footer Contact chapter is slightly taller than one desktop viewport.
It combines a gridded Signal Craft call-to-action, stepped signal field, direct
studio details, and an accessible project enquiry form. The form is currently
presentation-only and intentionally prevents network submission.

The final footer closes the page with a four-link navigation rail, oversized
Signal Craft wordmark, technical grid and stepped corner pixels, followed by
social links, copyright, and a direct return to the top of the page. Footer
motion is limited to a short in-view entrance and respects reduced-motion
preferences.

Lenis drives wheel and anchor scrolling through its automatic animation frame
loop. It is disabled when reduced motion is requested. Every desktop navbar
route now resolves to an existing section, and the compact mobile navigation
opens into a keyboard-accessible link panel using the same destinations.

The primary visual reference is stored at `references/1.png` and is evaluated
against the repository's 1920×1080 desktop baseline. The reference's floating
“New Template” CTA is intentionally excluded.

## Commands

```bash
npm install
npm run dev
npm run build
```
