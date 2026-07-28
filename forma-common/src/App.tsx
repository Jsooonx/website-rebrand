import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
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

export default function App() {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">
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
