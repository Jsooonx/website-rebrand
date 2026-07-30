import { motion, useReducedMotion } from "framer-motion";
import type { WhyDiagramType } from "../../content/siteData";

interface WhyDiagramProps {
  type: WhyDiagramType;
  active: boolean;
}

const paths: Record<WhyDiagramType, string[]> = {
  early: [
    "M54 150C83 110 122 94 165 95s79 26 101 60",
    "M74 148c23-27 52-38 87-37s62 17 80 43",
    "M100 147c16-13 36-20 58-19s40 10 56 26",
  ],
  trace: [
    "M48 159h70c16 0 24-10 24-28V72",
    "M142 112h58c18 0 30-8 30-24V51",
    "M142 138h58c18 0 30 9 30 25v22",
  ],
  align: [
    "M48 165h69c18 0 22-19 38-19h111",
    "M117 165c18 0 22-57 38-57h111",
    "M117 165c18 0 22 38 38 38h111",
  ],
  control: [
    "M48 160h72c16 0 24-7 24-21V76",
    "M144 116h78v66h-78Z",
    "M161 116V92c0-35 44-35 44 0v24",
  ],
  learn: [
    "M48 180c42 0 62-92 108-92s55 61 104 61",
    "M216 116c39 12 48 64 8 83s-79-3-86-42",
    "m135 158 5-17 15 9",
  ],
};

export function WhyDiagram({ type, active }: WhyDiagramProps) {
  const reducedMotion = useReducedMotion();
  const show = active || reducedMotion;
  return (
    <svg viewBox="0 0 320 240" aria-hidden="true" className={`why-diagram why-diagram--${type}`}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {paths[type].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            initial={false}
            animate={{ pathLength: show ? 1 : 0, opacity: show ? 1 : 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, delay: index * 0.12, ease: "easeOut" }}
          />
        ))}
      </g>
      <motion.circle
        cx="48"
        cy={type === "learn" ? "180" : type === "early" ? "150" : type === "align" ? "165" : "160"}
        r="5"
        fill="var(--lime)"
        initial={false}
        animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.25 }}
        transition={{ duration: reducedMotion ? 0 : 0.24 }}
      />
    </svg>
  );
}
