import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { SectionHeader } from "../components/ui/SectionHeader";
import { WhyDiagram } from "../components/visuals/WhyDiagram";

const cards = [
  ["shared", "Shared context", "Bring docs, tools, and team knowledge into one trusted workspace.", "early"],
  ["sources", "Sourced answers", "Verify every answer with records and policies behind it.", "trace"],
  ["action", "Instant action", "Turn a prompt into a ticket, draft, reply, or next step.", "align"],
  ["control", "Built-in control", "Keep sensitive changes aligned with approvals and access rules.", "control"],
  ["insight", "Continuous insight", "Spot recurring questions, knowledge gaps, and better ways to work.", "learn"],
] as const;

export function WhyNexora() {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress = (activeIndex / (cards.length - 1)) * 100;
  return <section id="why" className="section section--why" aria-labelledby="why-title">
    <div className="section__inner"><SectionHeader eyebrow="Why NEXORA" index="03" titleId="why-title" title="One AI agent for answers, actions, and momentum." description="NEXORA brings knowledge, context, and execution into a single handy interface." /></div>
    <div className="why-rail__viewport"><motion.div className="why-rail" animate={{ x: `calc(-${activeIndex} * (min(27rem, 78vw) + 1rem))` }} transition={{ type: "spring", duration: 0.55, bounce: 0 }}>
      {cards.map(([id, title, description, diagram], index) => <article className="why-card" key={id}><div className="why-card__visual"><WhyDiagram type={diagram} active={index === activeIndex} /><span>0{index + 1}</span></div><div className="why-card__copy"><h3>{title}</h3><p>{description}</p></div></article>)}
    </motion.div></div>
    <div className="section__inner"><div className="why-controls"><ArrowButton direction="left" aria-label="Show previous reason to choose NEXORA" disabled={activeIndex === 0} onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}>Previous</ArrowButton><div className="why-progress"><div className="why-progress__track"><span style={{ width: `${Math.max(20, progress)}%` }} /></div><strong>{String(activeIndex + 1).padStart(2, "0")} / 05</strong></div><ArrowButton aria-label="Show next reason to choose NEXORA" disabled={activeIndex === cards.length - 1} onClick={() => setActiveIndex((index) => Math.min(cards.length - 1, index + 1))}>Next</ArrowButton></div></div>
  </section>;
}
