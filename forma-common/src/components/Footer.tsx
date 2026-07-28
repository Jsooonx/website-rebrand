import { FormaMark } from "./FormaMark";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="footer"
      initial={reduceMotion ? { opacity: 0 } : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={
        reduceMotion
          ? undefined
          : { hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }
      }
    >
      <motion.div className="footer__top" variants={reduceMotion ? undefined : footerItemVariants}>
        <motion.div
          className="footer__contact"
          variants={
            reduceMotion
              ? undefined
              : { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
          }
        >
          <motion.a href="mailto:hello@formacommon.studio" variants={reduceMotion ? undefined : footerItemVariants}>
            hello@formacommon.studio
          </motion.a>
          <motion.p variants={reduceMotion ? undefined : footerItemVariants}>Jakarta, Indonesia</motion.p>
          <motion.p variants={reduceMotion ? undefined : footerItemVariants}>Available for select projects</motion.p>
        </motion.div>

        <motion.div
          className="footer__links"
          variants={
            reduceMotion
              ? undefined
              : { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
          }
        >
          <motion.div variants={reduceMotion ? undefined : footerItemVariants}>
            <span>Navigate</span>
            <a href="#top">Home</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : footerItemVariants}>
            <span>Connect</span>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer__wordmark"
        aria-label="Forma Common"
        variants={
          reduceMotion
            ? undefined
            : { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }
        }
      >
        <motion.span variants={reduceMotion ? undefined : footerItemVariants}>forma</motion.span>
        <motion.span variants={reduceMotion ? undefined : footerItemVariants}>common</motion.span>
      </motion.div>

      <motion.div className="footer__bottom" variants={reduceMotion ? undefined : footerItemVariants}>
        <span>© 2026 Forma Common</span>
        <span className="footer__location">
          <FormaMark />
          JKT / ID
        </span>
      </motion.div>
    </motion.footer>
  );
}
