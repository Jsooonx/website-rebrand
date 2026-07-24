import Button from "@reference-export/button.jsx";
import MainHeader from "@reference-export/main-header.jsx";
import ProjectCard from "@reference-export/project-card.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "../../shared/layout";

const projects = [
  {
    title: "LUMEN SODA",
    duration: "5 weeks",
    category: "BRAND WORLD",
    image: "/assets/kindling-lumen-soda.webp",
    alt: "Botanical soda bottle in warm sunlight",
  },
  {
    title: "RADIO KECIL",
    duration: "4 weeks",
    category: "CAMPAIGN",
    image: "/assets/kindling-radio-kecil.webp",
    alt: "Portable radio against a tomato-red wall",
  },
  {
    title: "GOOD WEATHER PRESS",
    duration: "2 weeks",
    category: "EDITORIAL",
    image: "/assets/kindling-good-weather-press.webp",
    alt: "Colourfully printed independent journals in window light",
  },
  {
    title: "KOPI SORE",
    duration: "3 weeks",
    category: "HOSPITALITY",
    image: "/assets/kindling-kopi-sore.webp",
    alt: "Iced coffee on a tomato-red tray",
  },
] as const;

export function ProjectsAdapter() {
  const mode = useLayoutMode();

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-page">
        <Reveal className="projects-header">
          <MainHeader
            id="projects-title"
            title="FIELD WORK"
            badge="(4)"
            text="Four ventures, four different signals. Each case starts with what is already true and builds only what helps it travel."
            variant={mode === "phone" ? "Default Phone" : "Default"}
            style={{ width: "100%" }}
          />
        </Reveal>

        <StaggerGroup className="projects-grid">
          {projects.map((project, index) => (
            <StaggerItem
              className={`projects-card projects-card--${index + 1}`}
              key={project.title}
              preset="media"
            >
              <article>
                <ProjectCard
                  image={{ src: project.image, alt: project.alt }}
                  badge={project.duration}
                  tag={project.category}
                  title={project.title}
                  showVideo={false}
                  style={{ width: "100%" }}
                />
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="projects-footer" preset="subtle">
          <p>
            The format changes with the venture. The standard does not:
            recognisable, usable, and ready to move.
          </p>
          <div className="projects-footer__cta">
            <Button
              text="START A FIELD NOTE"
              link="#contact"
              hasIcon
              variant="Primary Color"
              style={{ width: "100%" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
