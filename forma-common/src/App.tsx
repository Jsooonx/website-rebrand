import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { About } from "./components/About";
import { ClosingCta } from "./components/ClosingCta";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkGrid } from "./components/WorkGrid";

function useSmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -72 },
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.85,
    });

    return () => lenis.destroy();
  }, []);
}

function StackframePreview({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.aside
      className="stackframe-preview"
      aria-label="Stackframe template preview"
      initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(5px)" }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.5, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="stackframe-preview-back" href="https://stackframe.my.id/#library">
        <span>Back to template</span>
        <span aria-hidden="true">↗</span>
      </a>
      <a className="stackframe-preview-mark" href="https://stackframe.my.id" aria-label="Open Stackframe">
        <img src="/stackframe-mark.svg" alt="" aria-hidden="true" />
      </a>
    </motion.aside>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [isStackframePreview, setIsStackframePreview] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    setIsStackframePreview(
      new URLSearchParams(window.location.search).get("preview") === "stackframe",
    );
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
        {isStackframePreview && <StackframePreview reduceMotion={reduceMotion} />}
        <Header />
        <main>
          <Hero />
          <WorkGrid />
          <About />
          <ClosingCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
