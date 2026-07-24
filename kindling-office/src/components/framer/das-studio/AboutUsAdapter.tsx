import StatItem from "@reference-export/stat-item.jsx";
import TextHeader from "@reference-export/text-header.jsx";
import VideoPlayer from "@reference-export/video-player.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "../../shared/layout";

const metrics = [
  { amount: 18, title: "VENTURES SHAPED" },
  { amount: 7, title: "CITIES REACHED" },
] as const;

export function AboutUsAdapter() {
  const mode = useLayoutMode();

  return (
    <section className="about-us" id="about" aria-label="About Kindling Office">
      <Reveal className="about-us__header">
        <TextHeader
          variant={mode === "phone" ? "Phone" : "Desktop"}
          badge="BEHIND THE SPARK"
          badgeSecondary="02"
          text="Kindling Office is a small independent practice in Jakarta for ventures with something real to say. We work close to founders and teams—finding the live wire, shaping a clear public world, and building only what helps the idea travel."
          hasButtons
          button1Title="MEET THE OFFICE"
          button1Link="#about"
          button2Title="SEE FIELD NOTES"
          button2Link="#projects"
          style={{ width: "100%" }}
        />
      </Reveal>

      <Reveal className="about-us__media" preset="media">
        <VideoPlayer
          variant="Show"
          file=""
          poster={{
            src: "/assets/kindling-studio-poster.webp",
            alt: "The warm Kindling Office studio in Jakarta, framed by timber and afternoon light",
          }}
          badge="2026"
          title="THE KINDLING ROOM"
          subtitle="Jakarta, Indonesia"
          hasStars={false}
          style={{ width: "100%", height: "100%" }}
        />
      </Reveal>

      <StaggerGroup className="about-us__metrics" aria-label="Kindling Office in numbers">
        {metrics.map((metric) => (
          <StaggerItem className="about-us__metric" key={metric.title} preset="subtle">
            <StatItem
              amount={metric.amount}
              suffix="+"
              title={metric.title}
              style={{ width: "100%" }}
            />
          </StaggerItem>
        ))}
        <StaggerItem className="about-us__metrics-copy" preset="subtle">
          <p>
            A small office, a close circle, and enough launches behind us to
            know where the real work begins.
          </p>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
