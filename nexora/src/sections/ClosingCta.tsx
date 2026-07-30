import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Icon } from "../components/ui/Icon";
import { Reveal } from "../components/ui/Reveal";
import { OperatorBrief } from "../components/visuals/OperatorBrief";

const trustSignals = [
  "Approval-aware workflows",
  "Traceable operational decisions",
  "Built for distributed teams",
] as const;

export function ClosingCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const briefY = useTransform(scrollYProgress, [0.18, 1], ["4%", "-10%"]);
  const briefOpacity = useTransform(scrollYProgress, [0.2, 0.82], [1, 0.7]);
  const terrainY = useTransform(scrollYProgress, [0.15, 1], ["28%", "0%"]);

  return (
    <section
      id="briefing"
      ref={sectionRef}
      className="closing-scene"
      aria-labelledby="closing-title"
    >
      <div className="closing-scene__inner">
        <div className="closing-copy">
          <Reveal>
            <div className="eyebrow"><span />Start with the signal / 08</div>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 id="closing-title">See the next move before it becomes urgent.</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p>
              Bring your operating footprint, priority systems, and first signal set.
              We’ll show you where NEXORA can create clarity first.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a className="closing-copy__cta" href="mailto:briefing@nexora.example">
              Request an operational briefing <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
          <ul className="closing-trust">
            {trustSignals.map((signal, index) => (
              <motion.li
                key={signal}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.22 + index * 0.05 }}
              >
                <span><Icon name="check" size={13} /></span>{signal}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="closing-brief"
          style={{
            y: reducedMotion ? 0 : briefY,
            opacity: reducedMotion ? 1 : briefOpacity,
          }}
        >
          <OperatorBrief />
        </motion.div>
      </div>

      <motion.div
        className="closing-terrain"
        style={{ y: reducedMotion ? 0 : terrainY }}
        aria-hidden="true"
      >
        <img src="/images/terrain-closing.webp" alt="" />
        <div className="closing-terrain__signal"><i /><span>Signal resolved</span></div>
      </motion.div>
    </section>
  );
}
