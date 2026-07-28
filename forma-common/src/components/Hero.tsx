import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FormaMark } from "./FormaMark";
import { WordReveal } from "./WordReveal";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <motion.h1
        className="hero__title"
        aria-label="Forma Common"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
        }}
      >
        <motion.span variants={reduceMotion ? undefined : wordVariants}>
          forma
        </motion.span>
        <motion.span variants={reduceMotion ? undefined : wordVariants}>
          common
        </motion.span>
      </motion.h1>

      <motion.div
        className="hero__meta"
        initial={reduceMotion ? { opacity: 0 } : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: reduceMotion ? 0 : 0.48,
              staggerChildren: 0.16,
            },
          },
        }}
      >
        <motion.div
          className="hero__mark-wrap"
          variants={
            reduceMotion
              ? undefined
              : {
                  hidden: { opacity: 0, scale: 0.88, filter: "blur(4px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                  },
                }
          }
        >
          <FormaMark className="hero__mark" />
          <span className="hero__edition">FC / 01</span>
        </motion.div>
        <WordReveal
          className="hero__intro"
          delay={0.62}
          text="We shape clear, contemporary identities for ambitious founder-led businesses ready to become the obvious choice."
          trigger="load"
        />
      </motion.div>
    </section>
  );
}
