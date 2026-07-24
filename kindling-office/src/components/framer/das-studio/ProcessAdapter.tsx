import MainHeader from "@reference-export/main-header.jsx";
import ProgressCard from "@reference-export/progress-card.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "../../shared/layout";

const steps = [
  {
    title: "FIND THE WIRE",
    progress: "25%",
    text: "We get close to the product truth, audience ritual, and belief worth passing on.",
    hasImage: false,
  },
  {
    title: "SHAPE THE SIGNAL",
    progress: "50%",
    text: "We explore voices and visual directions, test what carries, then sharpen the strongest route.",
    hasImage: true,
  },
  {
    title: "BUILD THE FIRE",
    progress: "75%",
    text: "We turn the direction into a working identity, campaign, and digital system with care at every edge.",
    hasImage: false,
  },
  {
    title: "PASS IT ON",
    progress: "100%",
    text: "We launch the work, equip the team, and make sure the new world can keep moving without us.",
    hasImage: false,
  },
] as const;

export function ProcessAdapter() {
  const mode = useLayoutMode();

  return (
    <section className="process-section" id="practice" aria-labelledby="process-title">
      <Reveal className="process-header">
        <MainHeader
          id="process-title"
          title="WORKING RHYTHM"
          badge=""
          text="Four clear moves, with decisions made close to the work and no ceremonial layers in between."
          variant={mode === "phone" ? "Default Phone" : "Default"}
          style={{ width: "100%" }}
        />
      </Reveal>

      <Reveal
        className="process-meta"
        aria-label="Process details"
        preset="subtle"
      >
        <p>
          <span>PROCESS:</span>
          <strong>4 MOVES</strong>
        </p>
        <p>
          <span>DURATION:</span>
          <strong>~4 WEEKS</strong>
        </p>
      </Reveal>

      <StaggerGroup className="process-grid">
        {steps.map((step, index) => (
          <StaggerItem className="process-step" key={step.title} preset="subtle">
            <article>
              <span className="process-step__index">0{index + 1}</span>
              <ProgressCard
                title={step.title}
                text={step.text}
                progressVariant={step.progress}
                hasImage={step.hasImage}
                image={{
                  src: "/assets/kindling-services-gradient.webp",
                  alt: "Kindling Office colour study in tomato, marigold, flour, and pool blue",
                }}
                style={{ width: "100%" }}
              />
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
