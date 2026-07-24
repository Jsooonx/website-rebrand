import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";

const scrollEasing = (time: number) =>
  Math.min(1, 1.001 - Math.pow(2, -10 * time));

export function SmoothScroll() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <ReactLenis
      root
      options={{
        anchors: {
          duration: 0.82,
          easing: scrollEasing,
        },
        autoRaf: true,
        duration: 0.88,
        easing: scrollEasing,
        overscroll: true,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
        syncTouch: false,
      }}
    />
  );
}
