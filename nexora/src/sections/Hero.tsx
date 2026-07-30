import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { SignalMap } from "../components/visuals/SignalMap";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mapY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -52]);
  const terrainY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : -22],
  );

  return (
    <section ref={ref} id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <motion.div
          className="hero__copy"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
          }}
        >
          <motion.div
            className="eyebrow"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span />
            NETWORK INTELLIGENCE / 01
          </motion.div>
          <motion.h1
            id="hero-title"
            variants={{
              hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.62, ease: [0.2, 0, 0, 1] }}
          >
            See the next disruption{" "}
            <span>before it spreads.</span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            NEXORA turns inventory, route, and order signals into a clear
            operational read—so your team can act while there is still time.
          </motion.p>
          <motion.div
            className="hero__actions"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ArrowButton href="#briefing" className="arrow-button--primary">
              Request an operational briefing
            </ArrowButton>
            <a className="text-link" href="#capabilities">
              Explore the signal map
              <span>↓</span>
            </a>
          </motion.div>
          <motion.p
            className="hero__trust"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            Built for distribution teams operating across locations.
          </motion.p>
        </motion.div>

        <motion.div className="hero__map" style={{ y: mapY }}>
          <SignalMap />
        </motion.div>
      </div>

      <motion.div className="hero__terrain" style={{ y: terrainY }} aria-hidden="true">
        <img src="/images/terrain-hero.webp" alt="" />
      </motion.div>
      <div className="hero__fade" aria-hidden="true" />
    </section>
  );
}
