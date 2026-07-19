import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Owns the Lenis lifecycle and restores an incoming anchor after hydration.
 * The RAF loop is always cleaned up with Lenis to prevent duplicate scrollers.
 */
export function useLenisScroll(reducedMotion: boolean | null) {
  useEffect(() => {
    if (reducedMotion) return undefined

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      anchors: true,
    })
    let animationFrame = 0

    const renderFrame = (time: number) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(renderFrame)
    }

    animationFrame = requestAnimationFrame(renderFrame)

    if (window.location.hash) {
      requestAnimationFrame(() => {
        lenis.scrollTo(window.location.hash, { immediate: true })
      })
    }

    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [reducedMotion])
}
