import Button from "@reference-export/button.jsx";
import Stars from "@reference-export/stars.jsx";
import TestimonialCard from "@reference-export/testimonial-card.jsx";
import VideoPlayer from "@reference-export/video-player.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "../../shared/layout";

const testimonials = [
  {
    badge: "01",
    text: "Kindling found the thing we had been trying to say for years. Once that clicked, every page and campaign became easier to make.",
    authorName: "RAKA ADITYA",
    authorRole: "Founder, Good Weather Press",
    authorImage: "/assets/kindling-good-weather-press.webp",
    authorAlt: "Colourful journals by Good Weather Press",
  },
  {
    badge: "02",
    text: "They made every choice feel inevitable—not by playing safe, but by giving the boldest idea a clear system our whole team could use.",
    authorName: "TANIA SURYA",
    authorRole: "Creative Director, Radio Kecil",
    authorImage: "/assets/kindling-radio-kecil.webp",
    authorAlt: "Chrome radio from the Radio Kecil project",
  },
  {
    badge: "03",
    text: "We left with more than a new look. We had a language, a rhythm, and a practical way to keep the brand moving.",
    authorName: "NISA RAHMAN",
    authorRole: "Founder, Kopi Sore",
    authorImage: "/assets/kindling-kopi-sore.webp",
    authorAlt: "Iced coffee from the Kopi Sore project",
  },
] as const;

export function TestimonialsAdapter() {
  return (
    <section
      className="testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <StaggerGroup className="testimonials-header">
        <StaggerItem>
          <p className="testimonials-label">NOTES FROM THE OTHER SIDE</p>
          <h2 id="testimonials-title">
            PROOF, WITHOUT
            <br />
            THE PARADE
          </h2>
        </StaggerItem>
        <StaggerItem className="testimonials-header__note" preset="subtle">
          <p>
            The useful proof is what remains after launch: a clearer team, a
            system people can use, and a public world that still feels alive.
          </p>
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="testimonials-proof-grid">
        <StaggerItem
          className="testimonials-card testimonials-card--featured"
          preset="media"
        >
          <article aria-label="Studio note from Maya Pranoto">
            <VideoPlayer
              variant="Show"
              file=""
              poster={{
                src: "/assets/kindling-testimonial-maya.webp",
                alt: "Maya Pranoto seated in a warm Jakarta creative studio",
              }}
              badge="FIELD NOTE"
              title="MAYA PRANOTO"
              subtitle="Founder at Lumen Soda"
              hasStars
              style={{ width: "100%", height: "100%" }}
            />
          </article>
        </StaggerItem>

        {testimonials.map((testimonial, index) => (
          <StaggerItem
            className={`testimonials-card testimonials-card--quote testimonials-card--quote-${index + 1}`}
            key={testimonial.authorName}
            preset="subtle"
          >
            <article>
              <TestimonialCard
                variant="Vertical"
                badge={testimonial.badge}
                text={testimonial.text}
                authorName={testimonial.authorName}
                authorRole={testimonial.authorRole}
                authorImage={{
                  src: testimonial.authorImage,
                  alt: testimonial.authorAlt,
                }}
                style={{ width: "100%", height: "100%" }}
              />
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="testimonials-summary" preset="subtle">
        <div className="testimonials-summary__copy">
          <Stars variant="Default" style={{ width: "auto" }} />
          <p>
            Eighteen ventures have trusted us to find the live wire and give it
            a useful public life.
          </p>
        </div>

        <div className="testimonials-summary__cta">
          <Button
            variant="Primary Color"
            text="BRING US YOUR SIGNAL"
            link="#contact"
            hasIcon
            style={{ width: "100%" }}
          />
        </div>
      </Reveal>
    </section>
  );
}
