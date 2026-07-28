import { StrictMode, useEffect, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import App from './App'
import 'lenis/dist/lenis.css'
import './styles.css'

function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ autoRaf: true, smoothWheel: true })
    return () => lenis.destroy()
  }, [])
  return children
}

createRoot(document.getElementById('root')!).render(<StrictMode><SmoothScroll><App /></SmoothScroll></StrictMode>)
