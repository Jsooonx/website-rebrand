import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CapabilityCanvas } from "../components/visuals/CapabilityCanvas";
import { capabilityTabs } from "../content/siteData";

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reducedMotion = useReducedMotion();
  const active = capabilityTabs[activeIndex];

  const moveFocus = (index: number) => {
    const next = (index + capabilityTabs.length) % capabilityTabs.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="capabilities"
      className="section section--capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="section__inner">
        <SectionHeader
          eyebrow="Operations intelligence"
          index="02"
          title="From signal to decision."
          description="One operational picture, four ways to stay ahead of the disruption."
        />

        <div className="capability-tabs" role="tablist" aria-label="NEXORA capabilities">
          {capabilityTabs.map((tab, index) => (
            <button
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`panel-${tab.id}`}
              tabIndex={index === activeIndex ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  moveFocus(activeIndex + 1);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  moveFocus(activeIndex - 1);
                }
              }}
            >
              {index === activeIndex && (
                <motion.span
                  layoutId="capability-active"
                  className="capability-tabs__active"
                  transition={{ type: "spring", duration: 0.36, bounce: 0 }}
                />
              )}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="capability-panel"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : -7 }}
              transition={{ duration: reducedMotion ? 0.12 : 0.28 }}
            >
              <CapabilityCanvas capability={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="capability-controls">
          <ArrowButton
            direction="left"
            aria-label="Show previous capability"
            onClick={() =>
              setActiveIndex((activeIndex - 1 + capabilityTabs.length) % capabilityTabs.length)
            }
          >
            Previous
          </ArrowButton>
          <div className="capability-controls__outcome">
            <span>{active.eyebrow}</span>
            <strong>{active.metric}</strong>
          </div>
          <ArrowButton
            aria-label="Show next capability"
            onClick={() => setActiveIndex((activeIndex + 1) % capabilityTabs.length)}
          >
            Next
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
