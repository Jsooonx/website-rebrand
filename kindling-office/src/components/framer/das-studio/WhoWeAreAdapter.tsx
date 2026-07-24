import Divider from "@reference-export/divider.jsx";
import LogoCard from "@reference-export/logo-card.jsx";
import TextHeader from "@reference-export/text-header.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "../../shared/layout";

const partners = [
  { src: "/assets/kindling-mark.webp", alt: "Kindling Office three-strike spark mark", label: "KINDLING OFFICE", kind: "mark" },
  { src: "/assets/kindling-lumen-soda.webp", alt: "Condensation-covered botanical soda bottle in warm sunlight", label: "LUMEN SODA", kind: "photo" },
  { src: "/assets/kindling-radio-kecil.webp", alt: "Chrome portable radio against a tomato-red wall", label: "RADIO KECIL", kind: "photo" },
  { src: "/assets/kindling-kasa-house.webp", alt: "Ceramic cup and blackberry linen on a limestone table", label: "KASA HOUSE", kind: "photo" },
  { src: "/assets/kindling-good-weather-press.webp", alt: "Colourfully printed independent journals in window light", label: "GOOD WEATHER PRESS", kind: "photo" },
  { src: "/assets/kindling-kopi-sore.webp", alt: "Iced coffee on a tomato-red tray with a marigold napkin", label: "KOPI SORE", kind: "photo" },
] as const;

export function WhoWeAreAdapter() {
  const mode = useLayoutMode();

  return (
    <section className="who-we-are" id="who-we-are" aria-label="The live wire">
      <Reveal className="who-we-are__header">
        <TextHeader
          variant={mode === "phone" ? "Phone" : "Desktop"}
          badge="THE LIVE WIRE"
          badgeSecondary="01"
          text="Kindling Office finds the live wire in every venture: the product truth, ritual, or belief people want to pass on. We give it a public shape through identity, campaign language, and a digital front door."
          hasButtons
          button1Title="SEE THE WORK"
          button1Link="#projects"
          button2Title="HOW WE WORK"
          button2Link="#practice"
          style={{ width: "100%" }}
        />
      </Reveal>

      <StaggerGroup className="who-we-are__partners">
        <StaggerItem className="who-we-are__partners-intro">
          <div className="who-we-are__spark" aria-hidden="true">
            <span>
              <img
                src="/assets/kindling-mark.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
            <strong>01 / IGNITION</strong>
          </div>
          <p>
            A working shelf of ventures, objects, and public worlds shaped from
            one clear signal.
          </p>
        </StaggerItem>
        <StaggerGroup className="who-we-are__logo-grid" stagger={0.06}>
          {partners.map((partner, index) => (
            <StaggerItem
              className={`who-we-are__logo-card-wrap who-we-are__logo-card-wrap--${index + 1}`}
              key={partner.src}
              preset="media"
            >
              <figure className={`who-we-are__logo-card who-we-are__logo-card--${partner.kind}`}>
                <LogoCard image={{ src: partner.src, alt: partner.alt }} style={{ width: "100%", height: "100%" }} />
                <figcaption>{partner.label}</figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </StaggerGroup>

      <div className="who-we-are__divider" aria-hidden="true">
        <Divider style={{ width: "100%" }} />
      </div>
    </section>
  );
}
