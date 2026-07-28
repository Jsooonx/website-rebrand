import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ctaImages } from "../content/site-data";

export function ClosingCta() {
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  const entranceVariants: Variants = {
    hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const groupVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };

  const mediaVariants: Variants = {
    hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delayChildren: 0.16,
        staggerChildren: 0.08,
      },
    },
  };

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % ctaImages.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <motion.section
      className="closing-cta"
      id="contact"
      aria-label="Project enquiry"
      initial={reduceMotion ? { opacity: 0 } : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.32 }}
      variants={
        reduceMotion
          ? undefined
          : groupVariants
      }
    >
      <motion.a
        className="closing-cta__link"
        href="mailto:hello@formacommon.studio?subject=Project%20enquiry"
        aria-label="Make something distinct. Start a project with Forma Common."
        variants={reduceMotion ? undefined : groupVariants}
      >
        <motion.h2
          className="closing-cta__word"
          variants={reduceMotion ? undefined : mediaVariants}
        >
          make
        </motion.h2>

        <motion.div
          className="closing-cta__media"
          aria-hidden="true"
          variants={reduceMotion ? undefined : entranceVariants}
        >
          <AnimatePresence initial={false}>
            <motion.img
              className="closing-cta__image"
              key={ctaImages[activeImage]}
              src={ctaImages[activeImage]}
              alt=""
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16, scale: 0.985 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, scale: 0.995 }
              }
              transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: [0.2, 0, 0, 1] }}
            />
          </AnimatePresence>
          <motion.span
            className="closing-cta__something"
            variants={reduceMotion ? undefined : entranceVariants}
          >
            something
          </motion.span>
          <motion.span
            className="closing-cta__index"
            variants={reduceMotion ? undefined : entranceVariants}
          >
            0{activeImage + 1} / 0{ctaImages.length}
          </motion.span>
        </motion.div>

        <motion.h2
          className="closing-cta__word closing-cta__word--right"
          variants={reduceMotion ? undefined : entranceVariants}
        >
          distinct
        </motion.h2>
      </motion.a>
    </motion.section>
  );
}
