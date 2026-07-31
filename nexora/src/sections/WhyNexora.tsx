import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { SectionHeader } from "../components/ui/SectionHeader";
import { WhyProductPreview, type WhyPreviewVariant } from "../components/visuals/WhyProductPreview";

const cards = [
  ["memory", "Connected memory", "Bring the docs, tools, and team knowledge behind a decision into one view.", "memory"],
  ["evidence", "Evidence inline", "See the records and policy context that make an answer reliable.", "evidence"],
  ["action", "Action ready", "Turn an answer into an accountable task without losing the thread.", "action"],
  ["guardrails", "Guardrails built in", "Keep sensitive work aligned with owners, approvals, and policy.", "guardrails"],
  ["patterns", "Patterns revealed", "Find the recurring questions and gaps worth improving next.", "patterns"],
] as const;

export function WhyNexora() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = (activeIndex / (cards.length - 1)) * 100;
  return <section id="why" className="section section--why" aria-labelledby="why-title">
    <div className="section__inner"><SectionHeader eyebrow="Why NEXORA" index="03" titleId="why-title" title="One AI agent for answers, actions, and momentum." description="NEXORA brings knowledge, context, and execution into a single handy interface." /></div>
    <div className="why-rail__viewport"><motion.div className="why-rail" animate={{ x: `calc(-${activeIndex} * (min(27rem, 78vw) + 1rem))` }} transition={{ type: "spring", duration: 0.55, bounce: 0 }}>
      {cards.map(([id, title, description, preview], index) => <article className="why-card" key={id}><div className="why-card__visual"><WhyProductPreview variant={preview as WhyPreviewVariant} active={index === activeIndex} /><span>0{index + 1}</span></div><div className="why-card__copy"><h3>{title}</h3><p>{description}</p></div></article>)}
    </motion.div></div>
    <div className="section__inner"><div className="why-controls"><ArrowButton direction="left" aria-label="Show previous reason to choose NEXORA" disabled={activeIndex === 0} onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}>Previous</ArrowButton><div className="why-progress"><div className="why-progress__track"><span style={{ width: `${Math.max(20, progress)}%` }} /></div><strong>{String(activeIndex + 1).padStart(2, "0")} / 05</strong></div><ArrowButton aria-label="Show next reason to choose NEXORA" disabled={activeIndex === cards.length - 1} onClick={() => setActiveIndex((index) => Math.min(cards.length - 1, index + 1))}>Next</ArrowButton></div></div>
  </section>;
}
