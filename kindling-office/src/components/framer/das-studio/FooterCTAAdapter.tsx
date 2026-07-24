import CTA from "@reference-export/cta.jsx";
import { Reveal, useLayoutMode } from "../../shared/layout";

export function FooterCTAAdapter() {
  const mode = useLayoutMode();
  const variant =
    mode === "phone" ? "Phone" : mode === "tablet" ? "Tablet" : "Desktop";

  return (
    <section
      className="footer-cta-section"
      id="contact"
      aria-label="Start a project with Kindling Office"
    >
      <Reveal className="footer-cta">
        <CTA
          variant={variant}
          badge="FREE 20-MIN SPARK SESSION"
          title="BRING US THE NEXT THING WORTH PASSING ON"
          text="Work with a small office that brings clarity, character, and momentum to every launch."
          buttonTitle="START A CONVERSATION"
          buttonLink="mailto:hello@kindling.office"
          style={{ width: "100%" }}
        />
      </Reveal>
    </section>
  );
}
