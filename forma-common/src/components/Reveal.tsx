import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "div" | "section";
}>;

const variants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? { opacity: 0 } : "hidden"}
      whileInView={reduceMotion ? { opacity: 1 } : "visible"}
      viewport={{ once: true, amount: 0.12 }}
      variants={reduceMotion ? undefined : variants}
      transition={
        reduceMotion ? { duration: 0.2, delay } : { delayChildren: delay }
      }
    >
      {children}
    </Component>
  );
}
