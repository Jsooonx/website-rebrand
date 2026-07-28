import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";

const signals = [
  ["Base", "Jakarta, Indonesia"],
  ["Reach", "Working across Asia"],
  ["Now", "Select projects / Q4"],
];

const signalVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <WordReveal
        as="h2"
        className="about-section__statement"
        id="about-heading"
        text="Brands become valuable when people can recognise what they stand for."
      />

      <div className="about-section__grid">
        <Reveal className="about-section__portrait">
          <img
            src="/assets/about/studio-director.webp"
            alt="Creative director of Forma Common in a contemporary Jakarta studio."
            loading="lazy"
            decoding="async"
          />
          <span className="about-section__image-note">Studio / JKT</span>
        </Reveal>

        <div className="about-section__body">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={
              reduceMotion
                ? undefined
                : {
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.14 } },
                  }
            }
          >
            <motion.p
              className="eyebrow"
              variants={reduceMotion ? undefined : signalVariants}
            >
              Why work with Forma Common
            </motion.p>
            <WordReveal
              className="about-section__copy"
              delay={0.12}
              text="We bring strategy and visual craft into one close collaboration. The result is a brand system that feels unmistakably yours—and works clearly everywhere it needs to."
            />
            <motion.a
              className="text-link"
              href="#work"
              variants={reduceMotion ? undefined : signalVariants}
            >
              <span>View selected work</span>
              <span aria-hidden="true">↘</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="signals"
            initial={reduceMotion ? { opacity: 0 } : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={
              reduceMotion
                ? undefined
                : {
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.22 } },
                  }
            }
          >
            {signals.map(([label, value]) => (
              <motion.div
                className="signal"
                key={label}
                variants={reduceMotion ? undefined : signalVariants}
              >
                <span>{label}</span>
                <strong>{value}</strong>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
