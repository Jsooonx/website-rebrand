import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

export type LayoutMode = "phone" | "tablet" | "desktop";

const queries = {
  phone: "(max-width: 519px)",
  tablet: "(min-width: 520px) and (max-width: 1023px)",
} as const;

function readLayoutMode(): LayoutMode {
  if (typeof window === "undefined") return "desktop";
  if (window.matchMedia(queries.phone).matches) return "phone";
  if (window.matchMedia(queries.tablet).matches) return "tablet";
  return "desktop";
}

export function useLayoutMode() {
  const [mode, setMode] = useState<LayoutMode>(readLayoutMode);

  useEffect(() => {
    const phone = window.matchMedia(queries.phone);
    const tablet = window.matchMedia(queries.tablet);
    const update = () => setMode(readLayoutMode());

    phone.addEventListener("change", update);
    tablet.addEventListener("change", update);
    update();

    return () => {
      phone.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return mode;
}

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

type RevealPreset = "default" | "subtle" | "media";

const revealVariants: Record<RevealPreset, Variants> = {
  default: {
    hidden: { opacity: 0, transform: "translateY(12px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 0.42, ease: [0.23, 1, 0.32, 1] },
    },
  },
  subtle: {
    hidden: { opacity: 0, transform: "translateY(7px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 0.36, ease: [0.23, 1, 0.32, 1] },
    },
  },
  media: {
    hidden: { opacity: 0, transform: "translateY(16px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1] },
    },
  },
};

const viewport = {
  once: true,
  amount: 0.16,
  margin: "0px 0px -8% 0px",
} as const;

type RevealProps = MotionDivProps & {
  children: ReactNode;
  preset?: RevealPreset;
};

export function Reveal({
  children,
  className,
  preset = "default",
  ...props
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={viewport}
      variants={reducedMotion ? undefined : revealVariants[preset]}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = MotionDivProps & {
  children: ReactNode;
  delay?: number;
  stagger?: number;
};

export function StaggerGroup({
  children,
  className,
  delay = 0.04,
  stagger,
  ...props
}: StaggerGroupProps) {
  const reducedMotion = useReducedMotion();
  const staggerChildren = stagger ?? 0.065;
  const groupVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={viewport}
      variants={reducedMotion ? undefined : groupVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  preset = "default",
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants[preset]}
      {...props}
    >
      {children}
    </motion.div>
  );
}
