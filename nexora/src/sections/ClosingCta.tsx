import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../components/ui/Reveal";
import { WorkspaceShell } from "../components/visuals/WorkspaceShell";

const trustSignals = ["Set up in minutes", "Connected context", "Approvals included"] as const;

export function ClosingCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"] });
  const dashboardY = useTransform(scrollYProgress, [0.18, 1], ["5%", "-7%"]);

  return <section id="briefing" ref={sectionRef} className="closing-scene" aria-labelledby="closing-title">
    <div className="closing-scene__inner">
      <div className="closing-copy">
        <Reveal><div className="eyebrow"><span />Ready when you are</div></Reveal>
        <Reveal delay={0.07}><h2 id="closing-title">Get started today</h2></Reveal>
        <Reveal delay={0.14}><p>NEXORA is easy to set up, maintain, and use. Bring the tools your team already relies on and move work forward in one place.</p></Reveal>
        <Reveal delay={0.2}><a className="closing-copy__cta" href="mailto:hello@nexora.example">Get a demo <span aria-hidden="true">→</span></a></Reveal>
        <ul className="closing-trust">{trustSignals.map((signal, index) => <motion.li key={signal} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4, delay: 0.22 + index * 0.05 }}><span>•</span>{signal}</motion.li>)}</ul>
      </div>
      <motion.div className="closing-brief" style={{ y: reducedMotion ? 0 : dashboardY }}><WorkspaceShell mode="ask" density="closing" /></motion.div>
    </div>
    <div className="closing-scene__fade" aria-hidden="true" />
  </section>;
}
