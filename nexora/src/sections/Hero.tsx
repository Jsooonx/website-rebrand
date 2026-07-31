import { motion, useReducedMotion } from "framer-motion";
import { ArrowButton } from "../components/ui/ArrowButton";
import { WorkspaceShell } from "../components/visuals/WorkspaceShell";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const rise = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

  return <section id="top" className="hero" aria-labelledby="hero-title">
    <div className="hero__inner">
      <motion.div className="hero__copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } } }}>
        <motion.div className="hero__badge" variants={rise}><span />New · Connected actions and verified answers <b>→</b></motion.div>
        <motion.h1 id="hero-title" variants={{ hidden: { opacity: 0, y: 22, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.62, ease: [0.2, 0, 0, 1] }}>One AI workspace for <span>answers and action.</span></motion.h1>
        <motion.p variants={rise}>Ask across your work, verify the answer, and move the next action forward in seconds.</motion.p>
        <motion.div className="hero__actions" variants={rise}>
          <ArrowButton href="#briefing" className="arrow-button--primary">Get started</ArrowButton>
          <a className="hero__round-link" href="#capabilities" aria-label="Explore features">→</a>
        </motion.div>
      </motion.div>
      <motion.div className="hero__workspace" initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.62, ease: [0.2, 0, 0, 1] }}><WorkspaceShell mode="ask" density="hero" /></motion.div>
    </div>
    <div className="hero__fade" aria-hidden="true" />
  </section>;
}
