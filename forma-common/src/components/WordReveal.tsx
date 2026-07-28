import { motion, useReducedMotion, type Variants } from "framer-motion";

type WordRevealProps = {
  as?: "p" | "h2";
  className?: string;
  delay?: number;
  id?: string;
  text: string;
  trigger?: "load" | "view";
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.42em", filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WordReveal({
  as = "p",
  className,
  delay = 0,
  id,
  text,
  trigger = "view",
}: WordRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const motionProps = {
    className: `word-reveal ${className ?? ""}`,
    id,
    initial: reduceMotion ? { opacity: 0 } : "hidden",
    ...(trigger === "load"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, amount: 0.35 } }),
    variants: reduceMotion
      ? undefined
      : {
          hidden: {},
          visible: {
            transition: {
              delayChildren: delay,
              // Each word begins after the previous word has completed ~26%.
              staggerChildren: 0.09,
            },
          },
        },
  };

  const content = words.map((word, index) => (
    <motion.span
      className="word-reveal__word"
      key={`${word}-${index}`}
      variants={reduceMotion ? undefined : wordVariants}
    >
      {word}
    </motion.span>
  ));

  if (as === "h2") {
    return <motion.h2 {...motionProps}>{content}</motion.h2>;
  }

  return <motion.p {...motionProps}>{content}</motion.p>;
}
