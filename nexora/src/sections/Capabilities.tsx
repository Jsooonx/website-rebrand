import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { SectionHeader } from "../components/ui/SectionHeader";
import { WorkspaceShell } from "../components/visuals/WorkspaceShell";
import { workspaceModes } from "../content/siteData";

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = workspaceModes[activeIndex];
  const select = (index: number) => setActiveIndex((index + workspaceModes.length) % workspaceModes.length);
  const focus = (index: number) => { const next = (index + workspaceModes.length) % workspaceModes.length; select(next); tabRefs.current[next]?.focus(); };

  return <section id="capabilities" className="section section--capabilities" aria-labelledby="capabilities-title">
    <div className="section__inner">
      <SectionHeader eyebrow="Core features" index="02" titleId="capabilities-title" title="One connected workspace for your entire organization" description="NEXORA turns company context into sourced answers, accountable actions, and measurable follow-through." />
      <div className="capability-tabs" role="tablist" aria-label="NEXORA capabilities">
        {workspaceModes.map((mode, index) => <button ref={(node) => { tabRefs.current[index] = node; }} key={mode.id} id={`tab-${mode.id}`} type="button" role="tab" aria-selected={index === activeIndex} aria-controls={`panel-${mode.id}`} tabIndex={index === activeIndex ? 0 : -1} onClick={() => select(index)} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); focus(activeIndex + 1); } if (event.key === "ArrowLeft") { event.preventDefault(); focus(activeIndex - 1); } }}>
          {index === activeIndex && <motion.span layoutId="capability-active" className="capability-tabs__active" transition={{ type: "spring", duration: 0.3, bounce: 0 }} />}<span>{mode.label}</span>
        </button>)}
      </div>
      <div id={`panel-${active.id}`} role="tabpanel" aria-labelledby={`tab-${active.id}`} className="capability-panel"><WorkspaceShell mode={active.id} /></div>
      <div className="capability-controls">
        <ArrowButton direction="left" aria-label="Show previous capability" onClick={() => select(activeIndex - 1)}>Previous</ArrowButton>
        <div className="capability-controls__outcome"><span>{active.eyebrow}</span><strong>{active.metric}</strong></div>
        <ArrowButton aria-label="Show next capability" onClick={() => select(activeIndex + 1)}>Next</ArrowButton>
      </div>
    </div>
  </section>;
}
