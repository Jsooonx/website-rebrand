import { useEffect, useRef, useState } from "react";

export function useEntrance<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    setPrepared(true);
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.14, rootMargin: "0px 0px -8%" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, className: `entrance-surface${prepared ? " is-prepared" : ""}${visible ? " is-inview" : ""}` };
}
