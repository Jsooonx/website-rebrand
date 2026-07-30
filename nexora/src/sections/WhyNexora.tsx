import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { SectionHeader } from "../components/ui/SectionHeader";
import { WhyDiagram } from "../components/visuals/WhyDiagram";
import { whyCards } from "../content/siteData";

export function WhyNexora() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = (activeIndex / (whyCards.length - 1)) * 100;

  return (
    <section id="why" className="section section--why" aria-labelledby="why-title">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Why NEXORA"
          index="03"
          titleId="why-title"
          title="Clarity that holds under pressure."
          description="Built for the moments when an operational signal needs a real decision."
        />
      </div>

      <div className="why-rail__viewport">
        <motion.div
          className="why-rail"
          animate={{ x: `calc(-${activeIndex} * (min(27rem, 78vw) + 1rem))` }}
          transition={{ type: "spring", duration: 0.55, bounce: 0 }}
        >
          {whyCards.map((card, index) => (
            <article className="why-card" key={card.id}>
              <div className="why-card__visual">
                <WhyDiagram type={card.diagram} active={index === activeIndex} />
                <span>0{index + 1}</span>
              </div>
              <div className="why-card__copy">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="section__inner">
        <div className="why-controls">
          <ArrowButton
            direction="left"
            aria-label="Show previous reason to choose NEXORA"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex((current) => Math.max(0, current - 1))}
          >
            Previous
          </ArrowButton>
          <div className="why-progress">
            <div className="why-progress__track">
              <span style={{ width: `${Math.max(20, progress)}%` }} />
            </div>
            <strong>{String(activeIndex + 1).padStart(2, "0")} / 05</strong>
          </div>
          <ArrowButton
            aria-label="Show next reason to choose NEXORA"
            disabled={activeIndex === whyCards.length - 1}
            onClick={() =>
              setActiveIndex((current) => Math.min(whyCards.length - 1, current + 1))
            }
          >
            Next
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
