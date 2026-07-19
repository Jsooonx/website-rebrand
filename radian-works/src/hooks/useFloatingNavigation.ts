import { useEffect, useState } from 'react'

/**
 * Keeps the hero navigation in document flow at #top and only promotes it to
 * the portal-backed floating state once the visitor has moved past the hero.
 */
export function useFloatingNavigation(threshold = 22) {
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    const updateNavigation = () => {
      // Use separate enter/leave thresholds so Lenis never toggles the portal
      // repeatedly while the scroll position settles near the handoff point.
      const releaseThreshold = Math.max(0, threshold - 4)
      setIsFloating((currentState) => (
        currentState
          ? window.scrollY > releaseThreshold
          : window.scrollY > threshold
      ))
    }

    const handleHashChange = () => {
      if (window.location.hash === '#top') {
        setIsFloating(false)
        return
      }

      updateNavigation()
    }

    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', updateNavigation)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [threshold])

  return isFloating
}
