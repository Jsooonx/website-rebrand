import { useState } from "react";
import Button from "@reference-export/button.jsx";
import MainHeader from "@reference-export/main-header.jsx";
import Visual from "@reference-export/visual.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "../../shared/layout";

const services = [
  {
    title: "BRAND DIRECTION",
    items: ["Founding signal", "Visual language", "Decision rules"],
    text: "We find the live wire in a venture and turn it into a direction people can feel: shared references, a clear visual language, type and layout rules, and practical decisions every page can follow.",
  },
  {
    title: "IDENTITY SYSTEMS",
    items: ["Naming and voice", "Marks and type", "Practical playbook"],
    text: "We build identity systems with enough character to be remembered and enough discipline to stay useful for founders, teams, and future collaborators.",
  },
  {
    title: "CAMPAIGN WORLDS",
    items: ["Launch ideas", "Channel toolkit", "Content rhythms"],
    text: "We give launches a distinct public shape, then turn the idea into a flexible campaign toolkit that can move across channels without losing its spark.",
  },
  {
    title: "DIGITAL FRONT DOORS",
    items: ["Responsive design", "Modular build", "Fast handoff"],
    text: "We design and build clear websites that introduce the venture quickly, make the next step obvious, and give the team a modular system they can keep using.",
  },
  {
    title: "EDITORIAL SYSTEMS",
    items: ["Field-note formats", "Clear hierarchy", "Reading rhythm"],
    text: "We create repeatable formats for journals, stories, guides, and case studies—making complex material easier to navigate and more rewarding to read.",
  },
] as const;

export function ServicesAdapter() {
  const mode = useLayoutMode();
  const phone = mode === "phone";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <Reveal className="services-header">
        <MainHeader
          id="services-title"
          title="WHAT WE BUILD"
          badge="(5)"
          text="A compact office around the parts that make a venture legible, memorable, and useful."
          variant={phone ? "Default Phone" : "Default"}
          style={{ width: "100%" }}
        />
      </Reveal>

      <StaggerGroup className="services-layout">
        <StaggerItem
          className="services-visual"
          aria-label="Kindling Office colour study"
          preset="media"
        >
          <Visual
            image={{
              src: "/assets/kindling-services-gradient.webp",
              alt: "Soft abstract fields of tomato red, marigold, flour, and pool blue",
            }}
            showVideo={false}
            variant="Default"
            style={{ width: "100%", height: "100%" }}
          />
          <p>ONE SIGNAL, BUILT TO TRAVEL</p>
        </StaggerItem>

        <StaggerItem className="services-accordion">
          <div className="service-list">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              const panelId = `service-panel-${index + 1}`;

              return (
                <article
                  className={`service-row${isOpen ? " service-row--open" : ""}`}
                  key={service.title}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="service-row__number">0{index + 1}</span>
                      <span>{service.title}</span>
                      <span className="service-row__symbol" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    className="service-row__panel"
                    id={panelId}
                    aria-hidden={!isOpen}
                  >
                    <div>
                      <ul>
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </StaggerItem>
      </StaggerGroup>

      <Reveal className="services-footer" preset="subtle">
        <p>
          Need a different mix? We can assemble the right kindling for the
          venture, moment, and team you have now.
        </p>
        <div className="services-footer__cta">
          <Button
            text="BOOK A CALL"
            link="#contact"
            hasIcon
            variant="Primary Color"
            style={{ width: "100%" }}
          />
        </div>
      </Reveal>
    </section>
  );
}
