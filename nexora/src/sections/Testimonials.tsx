import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CompanyMark } from "../components/visuals/CompanyMark";
import { testimonials } from "../content/siteData";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const story = testimonials[activeIndex];
  const previousIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <section
      id="stories"
      className="section section--testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="section__inner">
        <SectionHeader
          eyebrow="Customer stories"
          index="07"
          titleId="testimonials-title"
          title="Trusted when the network gets difficult."
          description="Operations teams use NEXORA to see risk earlier, align the response, and recover with less disruption."
        />

        <div className="testimonial-card">
          <div className="testimonial-card__story">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="testimonial-story"
                key={story.id}
                initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
              >
                <div className="testimonial-company">
                  <CompanyMark company={story.company} />
                  <span>{story.company}</span>
                </div>
                <blockquote>“{story.quote}”</blockquote>
                <div className="testimonial-outcome">
                  <span>Measured outcome</span>
                  <strong>{story.outcome}</strong>
                </div>
                <div className="testimonial-person">
                  <strong>{story.person}</strong>
                  <span>{story.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-controls">
              <div>
                <ArrowButton
                  direction="left"
                  aria-label={`Show ${testimonials[previousIndex].person}'s story`}
                  onClick={() => setActiveIndex(previousIndex)}
                >
                  Previous
                </ArrowButton>
                <ArrowButton
                  aria-label={`Show ${testimonials[nextIndex].person}'s story`}
                  onClick={() => setActiveIndex(nextIndex)}
                >
                  Next
                </ArrowButton>
              </div>
              <div className="testimonial-position" aria-live="polite">
                <span>
                  {testimonials.map((item, index) => (
                    <i className={index === activeIndex ? "is-active" : ""} key={item.id} />
                  ))}
                </span>
                Story {activeIndex + 1} of {testimonials.length}
              </div>
            </div>
          </div>

          <div className="testimonial-card__portrait">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={story.image}
                src={story.image}
                alt={`Editorial portrait of ${story.person}, ${story.role} at ${story.company}`}
                initial={{ opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
              />
            </AnimatePresence>
            <span className="testimonial-card__portrait-index">
              0{activeIndex + 1} / 03
            </span>
          </div>
        </div>
        <p className="fictional-note">
          Fictional people, companies, and outcomes created for this product exploration.
        </p>
      </div>
    </section>
  );
}
