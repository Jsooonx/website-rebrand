import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'

const rise = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay,
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

function AsterMark() {
  return <img className="aster-mark" src="/aster-mark.svg" alt="" aria-hidden="true" />
}

function StackframePreview({ reduceMotion }) {
  return (
    <motion.aside
      className="stackframe-preview"
      aria-label="Stackframe template preview"
      initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: 0.5, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="stackframe-preview-back" href="https://stackframe.my.id/#library">
        <span>Back to template</span>
        <ArrowUpRight />
      </a>
      <a
        className="stackframe-preview-mark"
        href="https://stackframe.my.id"
        aria-label="Open Stackframe"
      >
        <img src="/stackframe-mark.svg" alt="" aria-hidden="true" />
      </a>
    </motion.aside>
  )
}

function CountUp({ target, suffix = '', reduceMotion }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return undefined
    if (reduceMotion) {
      setCount(target)
      return undefined
    }

    let frameId
    const startedAt = performance.now()
    const duration = 1100
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - ((1 - progress) ** 3)
      setCount(Math.max(1, Math.round(target * eased)))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, reduceMotion, target])

  return <span ref={ref} className="stat-number" aria-label={`${target}${suffix}`}>{count}{suffix}</span>
}

const phases = [
  { number: '01', title: 'Find the signal', copy: 'We get close to the context, then identify the one idea worth building around.', mark: '✦' },
  { number: '02', title: 'Give it a shape', copy: 'Strategy turns into a visual language, a voice, and a system that can move.', mark: '◒' },
  { number: '03', title: 'Make it real', copy: 'We craft the website with the same attention given to the identity behind it.', mark: '↗' },
]

const collaborators = ['Kora', 'Sola House', 'Relay', 'Mysa', 'Noma Studio']
const workProjects = [
  { name: 'Kora', type: 'Fintech / Identity', image: '/work/kora.png', alt: 'Cobalt geometric object and a floating metal payment card over warm fabric.' },
  { name: 'Sola House', type: 'Hospitality / Rebrand', image: '/work/sola-house.png', alt: 'Sunlit tropical courtyard with terracotta walls and a cream lounge chair.' },
  { name: 'Relay', type: 'SaaS / Digital', image: '/work/relay.png', alt: 'Layered translucent glass objects on a midnight-blue surface.' },
  { name: 'Mysa', type: 'Wellness / E-commerce', image: '/work/mysa.png', alt: 'Amber glass home fragrance vessel among linen and pale flowers.' },
]
const approachHeading = [
  ['A', 'clear', 'point', 'of', 'view'],
  ['changes', 'everything.'],
]
const portfolioHeading = ['Latest', 'portfolio']
const aboutHeading = [
  ['Made', 'with'],
  ['a', 'point', 'of', 'view.'],
]
const services = [
  { number: '01', title: 'Brand direction', detail: 'A focused foundation for what to say, what to show, and the role your brand should own.', deliverables: 'Positioning / messaging / creative direction' },
  { number: '02', title: 'Visual identity', detail: 'A complete visual language that gives your idea an unmistakable, lasting point of view.', deliverables: 'Identity system / art direction / guidelines' },
  { number: '03', title: 'Website design', detail: 'Editorial digital experiences that make the right information feel inevitable and memorable.', deliverables: 'UX direction / interface design / prototyping' },
  { number: '04', title: 'Creative development', detail: 'Thoughtful, responsive frontends that bring the design to life without losing its character.', deliverables: 'React / motion / launch support' },
]
const pricingPlans = {
  oneTime: [
    { name: 'Essential', price: '$2,400', note: 'A focused foundation for a clear launch.', items: ['Brand direction workshop', 'Core visual identity', 'One-page launch site'] },
    { name: 'Signature', price: '$5,800', note: 'A complete identity and a website built to carry it.', items: ['Full visual identity', 'Custom marketing website', 'Motion and launch support'], popular: true },
    { name: 'Flagship', price: '$9,600', note: 'For ambitious teams creating a category-defining presence.', items: ['Strategy through build', 'Advanced interaction design', 'CMS and handoff system'] },
  ],
  monthly: [
    { name: 'Essential', price: '$480', note: 'Reliable ongoing refinement for your core digital presence.', items: ['Monthly design support', 'Site health check', 'Priority email support'] },
    { name: 'Signature', price: '$980', note: 'A dedicated creative rhythm for changing products and stories.', items: ['Weekly design allocation', 'New page and campaign support', 'Monthly strategy review'], popular: true },
    { name: 'Flagship', price: '$1,650', note: 'An embedded creative partner for teams moving at full speed.', items: ['Priority creative direction', 'Development sprint support', 'Direct studio access'] },
  ],
}
const testimonials = [
  { name: 'Maya Chen', role: 'Founder, Kora', quote: 'Aster found the point of view our product was missing, then made every part of it feel inevitable.', image: '/work/kora.png' },
  { name: 'Elise Hart', role: 'Director, Sola House', quote: 'The process was calm, clear, and unusually thoughtful. The new identity feels exactly like us, only sharper.', image: '/work/sola-house.png' },
  { name: 'Jon Bell', role: 'Product lead, Relay', quote: 'A rare combination of strategic thinking and technical fluency. Nothing was decorative without a reason.', image: '/work/relay.png' },
  { name: 'Nadia Rami', role: 'Founder, Mysa', quote: 'From the first conversation to launch, every decision made the brand feel more confident and considered.', image: '/work/mysa.png' },
]
const testimonialLoop = [...testimonials, ...testimonials, ...testimonials, ...testimonials]
const faqs = [
  { question: 'What is the best way to get started?', answer: 'Start with a short note about what you are building, where you are now, and what needs to change. We will reply with the clearest next step.' },
  { question: 'Can we work with an existing identity?', answer: 'Yes. Aster can refine an existing system, identify what is worth keeping, and make the website feel like a confident next chapter.' },
  { question: 'How long does a typical project take?', answer: 'Most identity and website projects take between four and ten weeks, depending on scope, feedback rhythm, and the number of moving parts.' },
  { question: 'Do you offer development as well as design?', answer: 'Yes. Aster designs and builds responsive, motion-led websites in React, with a clean handoff or CMS setup where needed.' },
  { question: 'What happens after launch?', answer: 'You can continue with a monthly maintenance plan for iterations, campaign work, site care, and the next ideas worth making.' },
  { question: 'Do you work with teams outside Jakarta?', answer: 'Absolutely. Aster works remotely with teams worldwide and creates a clear, collaborative process around your timezone.' },
]

const wordReveal = {
  hidden: { opacity: 0, y: '1.08em', filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
}
const quickWordReveal = {
  hidden: { opacity: 0, y: '0.55em', filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] } },
}

const aboutTitleStagger = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.12, staggerChildren: 0.11 },
  },
}
const quickWordStagger = { hidden: {}, visible: { transition: { delayChildren: 0.1, staggerChildren: 0.035 } } }
const footerElementReveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: (delay = 0) => ({ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

const portfolioTextReveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay, duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  }),
}

const portfolioWordReveal = {
  hidden: { opacity: 0, y: '1.05em', filter: 'blur(7px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay, duration: 0.64, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function App() {
  const heroImageRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const storySectionRef = useRef(null)
  const pricingImageRef = useRef(null)
  const testimonialsSectionRef = useRef(null)
  const footerSectionRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const [openService, setOpenService] = useState(null)
  const [pricingMode, setPricingMode] = useState('oneTime')
  const [openFaq, setOpenFaq] = useState(null)
  const [testimonialsLooping, setTestimonialsLooping] = useState(false)
  const [isStackframePreview, setIsStackframePreview] = useState(false)
  const testimonialsInView = useInView(testimonialsSectionRef, { once: true, amount: 0.18 })
  const { scrollYProgress } = useScroll({
    target: heroImageRef,
    offset: ['start 75%', 'end 75%'],
  })
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -68])
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutSectionRef,
    offset: ['start start', 'end end'],
  })
  const aboutImageY = useTransform(aboutScrollProgress, [0, 0.7, 1], ['34vh', '-24vh', '-24vh'])
  const aboutImageScale = useTransform(aboutScrollProgress, [0, 0.7, 1], [0.92, 1, 1])
  const aboutPhotoY = useTransform(aboutScrollProgress, [0, 1], ['-1%', '-10%'])
  const aboutTitleY = useTransform(aboutScrollProgress, [0, 0.34, 0.52, 1], ['0vh', '15vh', '15vh', '15vh'])
  const aboutTitleScale = useTransform(aboutScrollProgress, [0, 0.34, 0.52, 0.72], [1, 1, 0.72, 0.34])
  const aboutTitleOpacity = useTransform(aboutScrollProgress, [0, 0.34, 0.52, 0.7, 1], [1, 1, 1, 0, 0])
  const aboutCopyOpacity = useTransform(aboutScrollProgress, [0, 0.58, 0.82, 1], [0, 0, 1, 1])
  const aboutCopyY = useTransform(aboutScrollProgress, [0, 0.58, 0.82, 1], [22, 22, 0, 0])
  const { scrollYProgress: storyScrollProgress } = useScroll({
    target: storySectionRef,
    offset: ['start start', 'end end'],
  })
  const storyFloatOneY = useTransform(storyScrollProgress, [0, 0.18, 0.78, 1], ['112vh', '7vh', '-78vh', '-78vh'])
  const storyFloatTwoY = useTransform(storyScrollProgress, [0, 0.24, 0.78, 1], ['118vh', '9vh', '-64vh', '-64vh'])
  const storyFloatThreeY = useTransform(storyScrollProgress, [0, 0.3, 0.78, 1], ['124vh', '8vh', '-54vh', '-54vh'])
  const storyFloatFourY = useTransform(storyScrollProgress, [0, 0.36, 0.78, 1], ['130vh', '10vh', '-44vh', '-44vh'])
  const storyFloatOpacity = useTransform(storyScrollProgress, [0, 0.62, 0.78, 1], [1, 1, 0, 0])
  const storyFeatureY = useTransform(storyScrollProgress, [0, 0.72, 1], ['124vh', '-4vh', '-4vh'])
  const storyFeatureScale = useTransform(storyScrollProgress, [0, 0.72, 1], [0.8, 1, 1])
  const { scrollYProgress: pricingImageProgress } = useScroll({
    target: pricingImageRef,
    offset: ['start 85%', 'end 65%'],
  })
  const pricingImageY = useTransform(pricingImageProgress, [0, 1], [0, -68])
  const { scrollYProgress: footerScrollProgress } = useScroll({ target: footerSectionRef, offset: ['start end', 'end end'] })
  const footerPhotoY = useTransform(footerScrollProgress, [0, 1], [0, -64])
  const activePricingPlans = pricingPlans[pricingMode]
  const testimonialMotionClass = shouldReduceMotion ? ' is-static' : testimonialsInView ? (testimonialsLooping ? ' is-looping' : ' is-entering') : ''

  useEffect(() => {
    if (shouldReduceMotion) return undefined

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      anchors: true,
    })
    let frameId
    const animate = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [shouldReduceMotion])

  useEffect(() => {
    if (!testimonialsInView || shouldReduceMotion) return undefined
    const loopTimer = window.setTimeout(() => setTestimonialsLooping(true), 1260)
    return () => window.clearTimeout(loopTimer)
  }, [shouldReduceMotion, testimonialsInView])

  useEffect(() => {
    setIsStackframePreview(new URLSearchParams(window.location.search).get('preview') === 'stackframe')
  }, [])

  return (
    <main id="top" className="site-shell">
      <div className="grain" aria-hidden="true" />
      {isStackframePreview && <StackframePreview reduceMotion={shouldReduceMotion} />}

      <nav className="nav" aria-label="Primary navigation">
        <motion.a className="brand" href="#" variants={rise} initial="hidden" animate="visible" custom={0.08}>
          <AsterMark />
          <span>ASTER<br />STUDIO</span>
        </motion.a>

        <motion.p className="nav-location" variants={rise} initial="hidden" animate="visible" custom={0.16}>
          JAKARTA / WORLDWIDE
        </motion.p>

        <motion.a className="contact-link" href="mailto:hello@aster.studio" variants={rise} initial="hidden" animate="visible" custom={0.24}>
          LET'S TALK <ArrowUpRight />
        </motion.a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-heading-wrap">
          <motion.p className="eyebrow" variants={rise} initial="hidden" animate="visible" custom={0.28}>
            Independent design practice / 2025—26
          </motion.p>
          <h1 id="hero-title" className="hero-title">
            <motion.span variants={rise} initial="hidden" animate="visible" custom={0.34}>ASTER</motion.span>
            <motion.span variants={rise} initial="hidden" animate="visible" custom={0.44}>STUDIO</motion.span>
          </h1>
        </div>

        <motion.div className="hero-details" variants={rise} initial="hidden" animate="visible" custom={0.54}>
          <p>Brand direction<br />&amp; digital experiences</p>
          <p className="detail-center">Building distinct identities<br />with clarity and care.</p>
          <a href="#approach">Discover the practice <ArrowUpRight /></a>
        </motion.div>

        <motion.figure
          ref={heroImageRef}
          className="hero-image"
          initial={{ opacity: 0, clipPath: 'inset(12% 0 0 0 round 22px)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0 round 22px)' }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            className="hero-photo"
            src="/aster-hero.png"
            alt="Creative director in ivory tailoring against an indigo studio backdrop."
            draggable="false"
            style={{ y: shouldReduceMotion ? 0 : heroImageY }}
          />
          <figcaption>
            <span>01 / A point of view</span>
            <span>ASTER©2026</span>
          </figcaption>
          <motion.a
            className="image-badge"
            href="#work"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Selected work <ArrowUpRight />
          </motion.a>
        </motion.figure>
      </section>

      <footer id="approach" className="hero-footer">
        <span>01</span>
        <span>Approach</span>
        <span>Made for momentum</span>
      </footer>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="approach-intro">
          <motion.p className="section-kicker" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
            02 / The approach
          </motion.p>
          <motion.h2
            id="approach-title"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.35 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.075 } } }}
          >
            {approachHeading.map((line) => (
              <span className="approach-line" key={line.join('-')}>
                {line.map((word) => <motion.span className="approach-word" variants={wordReveal} key={word}>{word}</motion.span>)}
              </span>
            ))}
          </motion.h2>
          <motion.p className="approach-lede" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.12, duration: 0.55 }}>
            Aster works in close partnership with ambitious teams—from first thought to the final live experience.
          </motion.p>
        </div>

        <div className="phase-grid">
          {phases.map((phase, index) => (
            <motion.article className="phase-card" key={phase.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <div className="phase-topline"><span>{phase.number}</span><span className="phase-mark" aria-hidden="true">{phase.mark}</span></div>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
            </motion.article>
          ))}
        </div>

        <div className="collaborator-block">
          <p>In good company</p>
          <div className="collaborator-list" aria-label="Selected collaborators">
            {collaborators.map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>
      </section>

      <section id="work" className="portfolio-section" aria-labelledby="work-title">
        <div className="portfolio-header">
          <motion.p className="section-kicker" variants={portfolioTextReveal} custom={0} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.7 }}>
            03 / Selected work
          </motion.p>
          <h2 id="work-title">
            {portfolioHeading.map((word, index) => (
              <motion.span className="portfolio-title-word" variants={portfolioWordReveal} custom={0.1 + index * 0.14} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.7 }} key={word}>
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p variants={portfolioTextReveal} custom={0.46} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.7 }}>
            Four ideas made tangible through strategy, identity, and digital craft.
          </motion.p>
        </div>

        <div className="portfolio-grid">
          {workProjects.map((project, index) => (
            <motion.a
              className="portfolio-card"
              href="#contact"
              key={project.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={project.alt} />
                <span className="project-view">View case study <ArrowUpRight /></span>
              </div>
              <div className="project-meta">
                <span className="project-dots" aria-hidden="true"><i /><i /><i /></span>
                <div><h3>{project.name}</h3><p>{project.type}</p></div>
                <ArrowUpRight />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="about" className="about-section" ref={aboutSectionRef} aria-labelledby="about-title">
        <div className="about-stage">
          <motion.p className="about-index" variants={portfolioTextReveal} custom={0} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.7 }}>04 / About Aster</motion.p>
          <motion.p className="about-corner" variants={portfolioTextReveal} custom={0.68} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.7 }}>Independent since 2026</motion.p>

          <div className="about-title-reveal">
            <motion.h2
              id="about-title"
              variants={shouldReduceMotion ? undefined : aboutTitleStagger}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView={shouldReduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.35 }}
              style={{ y: shouldReduceMotion ? 0 : aboutTitleY, scale: shouldReduceMotion ? 1 : aboutTitleScale, opacity: shouldReduceMotion ? 1 : aboutTitleOpacity }}
            >
              {aboutHeading.map((line) => (
                <span className="about-title-line" key={line.join('-')}>
                  {line.map((word) => <motion.span className="about-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}
                </span>
              ))}
            </motion.h2>
          </div>

          <motion.figure className="about-image-frame" style={{ y: shouldReduceMotion ? '-18vh' : aboutImageY, scale: shouldReduceMotion ? 1 : aboutImageScale }}>
            <motion.img src="/aster-about.png" alt="Aster Studio creative director in a cream suit in a midnight-blue gallery." style={{ y: shouldReduceMotion ? 0 : aboutPhotoY }} />
          </motion.figure>

          <motion.div className="about-copy" style={{ opacity: shouldReduceMotion ? 1 : aboutCopyOpacity, y: shouldReduceMotion ? 0 : aboutCopyY }}>
            <p className="about-kicker">Aster Studio / Jakarta + Worldwide</p>
            <p>Thoughtful strategy, sharp visual systems, and digital experiences that make ambitious ideas feel unmistakably themselves.</p>
            <a href="mailto:hello@aster.studio">Meet the studio <ArrowUpRight /></a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="services-section" aria-labelledby="services-title">
        <div className="services-header">
          <motion.p className="section-kicker" variants={portfolioTextReveal} custom={0} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.55 }}>05 / Services</motion.p>
          <motion.h2 id="services-title" variants={shouldReduceMotion ? undefined : aboutTitleStagger} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.55 }}>
            <span className="services-title-line"><motion.span className="services-title-word" variants={shouldReduceMotion ? undefined : wordReveal}>Pro</motion.span></span>
            <span className="services-title-line"><motion.span className="services-title-word" variants={shouldReduceMotion ? undefined : wordReveal}>services</motion.span></span>
          </motion.h2>
          <motion.p variants={portfolioTextReveal} custom={0.24} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.55 }}>A clear scope for the work that helps your next chapter take shape.</motion.p>
        </div>

        <div className="services-accordion">
          {services.map((service) => {
            const isOpen = openService === service.number
            return (
              <article className={`service-item${isOpen ? ' is-open' : ''}`} key={service.number}>
                <button className="service-trigger" type="button" aria-expanded={isOpen} aria-controls={`service-panel-${service.number}`} onClick={() => setOpenService(isOpen ? null : service.number)}>
                  <span className="service-dots" aria-hidden="true"><i /><i /><i /></span>
                  <span className="service-name"><b>{service.number}</b>{service.title}</span>
                  <span className="service-toggle" aria-hidden="true"><i /><i /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`service-panel-${service.number}`} className="service-panel" role="region" aria-label={`${service.title} details`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
                      <div><p>{service.detail}</p><span>{service.deliverables}</span></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            )
          })}
        </div>

        <motion.figure className="services-visual" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <img src="/aster-hero.png" alt="Creative director lit in warm red light." />
          <figcaption><span>Clarity, from first signal to final detail.</span><span>05</span></figcaption>
        </motion.figure>
      </section>

      <section className="story-section" ref={storySectionRef} aria-labelledby="story-title">
        <div className="story-stage">
          <p className="story-index">06 / In practice</p>
          <p className="story-corner">Aster Studio</p>
          <div className="story-copy">
            <p id="story-title">Aster is an independent creative practice for teams with a clear ambition. We turn the useful into something people can feel, remember, and choose again.</p>
            <span>Made with attention</span>
          </div>

          <motion.figure className="story-float story-float-one" style={{ y: shouldReduceMotion ? 0 : storyFloatOneY, opacity: shouldReduceMotion ? 1 : storyFloatOpacity }}><img src="/work/sola-house.png" alt="Sunlit Sola House courtyard." /></motion.figure>
          <motion.figure className="story-float story-float-two" style={{ y: shouldReduceMotion ? 0 : storyFloatTwoY, opacity: shouldReduceMotion ? 1 : storyFloatOpacity }}><img src="/work/relay.png" alt="Translucent Relay glass objects." /></motion.figure>
          <motion.figure className="story-float story-float-three" style={{ y: shouldReduceMotion ? 0 : storyFloatThreeY, opacity: shouldReduceMotion ? 1 : storyFloatOpacity }}><img src="/work/mysa.png" alt="Mysa fragrance still life." /></motion.figure>
          <motion.figure className="story-float story-float-four" style={{ y: shouldReduceMotion ? 0 : storyFloatFourY, opacity: shouldReduceMotion ? 1 : storyFloatOpacity }}><img src="/aster-about.png" alt="Aster creative director in a gallery." /></motion.figure>
          <motion.figure className="story-feature" style={{ y: shouldReduceMotion ? '-4vh' : storyFeatureY, scale: shouldReduceMotion ? 1 : storyFeatureScale }}><img src="/aster-hero.png" alt="Creative director in warm red light." /></motion.figure>
        </div>
      </section>

      <section className="stats-section" aria-labelledby="stats-title">
        <div className="stats-topline"><span>07</span><span id="stats-title">/ Stats</span><span>Fun facts</span></div>
        <div className="stats-grid">
          {[
            { target: 60, suffix: '+', label: 'Global clients' },
            { target: 14, suffix: '+', label: 'Years of experience' },
            { target: 16, suffix: '+', label: 'Awards won' },
            { target: 99, suffix: '%', label: 'Success rate' },
          ].map((stat, index) => (
            <motion.div className="stat-card" key={stat.label} initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.55 }} transition={{ delay: index * 0.09, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}>
              <CountUp target={stat.target} suffix={stat.suffix} reduceMotion={shouldReduceMotion} />
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pricing-section" aria-labelledby="pricing-title">
        <div className="pricing-topline"><span>08</span><span>/ Pricing</span><span>Best plans</span></div>
        <div className="pricing-intro">
          <motion.h2 id="pricing-title" variants={shouldReduceMotion ? undefined : aboutTitleStagger} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.65 }}>
            <span className="pricing-title-line">{['A', 'clear', 'scope.'].map((word) => <motion.span className="pricing-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
            <span className="pricing-title-line pricing-title-accent">{['Made', 'for', 'your', 'next', 'move.'].map((word) => <motion.span className="pricing-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
          </motion.h2>
          <motion.div className="pricing-switch" role="group" aria-label="Pricing type" initial={shouldReduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.65 }} transition={{ delay: 0.6, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <button className={pricingMode === 'oneTime' ? 'is-active' : ''} type="button" aria-pressed={pricingMode === 'oneTime'} onClick={() => setPricingMode('oneTime')}>One-time payment</button>
            <button className={pricingMode === 'monthly' ? 'is-active' : ''} type="button" aria-pressed={pricingMode === 'monthly'} onClick={() => setPricingMode('monthly')}>Monthly maintenance</button>
          </motion.div>
        </div>

        <div className="pricing-grid">
          {activePricingPlans.map((plan, index) => (
            <motion.article className="pricing-card" key={`${pricingMode}-${plan.name}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <div className="pricing-card-top"><p>{plan.price}<small>{pricingMode === 'monthly' ? ' / month' : ' one time'}</small></p><span aria-hidden="true">+</span></div>
              <h3>{plan.name}{plan.popular && <em>Popular</em>}</h3>
              <p className="pricing-note">{plan.note}</p>
              <div className="pricing-includes"><strong>What's included</strong><ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <a href="mailto:hello@aster.studio">Start a conversation <ArrowUpRight /></a>
            </motion.article>
          ))}
        </div>

        <motion.figure ref={pricingImageRef} className="pricing-visual" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <motion.img src="/aster-hero.png" alt="Creative director against an expressive red studio backdrop." style={{ y: shouldReduceMotion ? 0 : pricingImageY }} />
          <figcaption><span>Aster Studio / Made for momentum</span><span>08</span></figcaption>
        </motion.figure>
      </section>

      <section className="testimonials-section" ref={testimonialsSectionRef} aria-labelledby="testimonials-title">
        <div className="testimonials-topline"><span>09</span><span>/ Testimonials</span><span>Voices</span></div>
        <div className="testimonials-heading">
          <motion.h2 id="testimonials-title" variants={shouldReduceMotion ? undefined : aboutTitleStagger} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.6 }}>
            <span className="testimonials-title-line">{['Trusted', 'by'].map((word) => <motion.span className="testimonials-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
            <span className="testimonials-title-line">{['ambitious', 'teams.'].map((word) => <motion.span className="testimonials-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
          </motion.h2>
        </div>
        <div className={`testimonial-marquee${testimonialMotionClass}`} aria-label="Client testimonials">
          <div className="testimonial-row testimonial-row-left"><div className="testimonial-track">
            {testimonialLoop.map((testimonial, index) => <article className="testimonial-card" key={`top-${testimonial.name}-${index}`} aria-hidden={index >= testimonials.length}>
              <header><img src={testimonial.image} alt="" /><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div><b aria-hidden="true">✦</b></header><p>“{testimonial.quote}”</p>
            </article>)}
          </div></div>
          <div className="testimonial-row testimonial-row-right"><div className="testimonial-track">
            {[...testimonialLoop].reverse().map((testimonial, index) => <article className="testimonial-card" key={`bottom-${testimonial.name}-${index}`} aria-hidden={index >= testimonials.length}>
              <header><img src={testimonial.image} alt="" /><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div><b aria-hidden="true">✦</b></header><p>“{testimonial.quote}”</p>
            </article>)}
          </div></div>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="faq-topline"><span>10</span><span>/ FAQ</span><span>Concerns</span></div>
        <div className="faq-heading">
          <motion.h2 id="faq-title" variants={shouldReduceMotion ? undefined : aboutTitleStagger} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.6 }}>
            <span className="faq-title-line">{['Clarity', 'starts'].map((word) => <motion.span className="faq-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
            <span className="faq-title-line faq-title-accent">{['with', 'a', 'good', 'question.'].map((word) => <motion.span className="faq-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
          </motion.h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <motion.article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question} initial={shouldReduceMotion ? false : { opacity: 0, y: index === 0 ? 0 : -index * 58 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ delay: index === 0 ? 0.08 : 0.16 + index * 0.1, duration: index === 0 ? 0.48 : 0.62, ease: [0.22, 1, 0.36, 1] }} style={{ zIndex: faqs.length - index }}>
                <button type="button" className="faq-trigger" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => setOpenFaq(isOpen ? null : index)}>
                  <span className="faq-number">{String(index + 1).padStart(2, '0')}</span><span>{faq.question}</span><i aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>{isOpen && <motion.div id={`faq-panel-${index}`} className="faq-panel" role="region" aria-label={faq.question} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}><p>{faq.answer}</p></motion.div>}</AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </section>

      <footer className="site-footer" ref={footerSectionRef} aria-labelledby="footer-title">
        <div className="footer-topline"><span>11</span><span>/ Contact</span><span>Open for selected work</span></div>
        <div className="footer-intro">
          <motion.h2 id="footer-title" variants={shouldReduceMotion ? undefined : aboutTitleStagger} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.55 }}>
            <span className="footer-title-line">{['Let’s', 'make'].map((word) => <motion.span className="footer-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
            <span className="footer-title-line">{['something', 'clear.'].map((word) => <motion.span className="footer-title-word" variants={shouldReduceMotion ? undefined : wordReveal} key={word}>{word}</motion.span>)}</span>
          </motion.h2>
          <motion.a className="footer-contact" href="mailto:hello@aster.studio" variants={footerElementReveal} custom={0.16} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.55 }}>Start a conversation <ArrowUpRight /></motion.a>
        </div>
        <div className="footer-portrait-area">
          <motion.p className="footer-side footer-side-left" variants={footerElementReveal} custom={0.28} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.45 }}>Jakarta / worldwide<br />Independent design practice</motion.p>
          <motion.figure className="footer-portrait" variants={footerElementReveal} custom={0.4} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.45 }}><motion.img src="/aster-about.png" alt="Aster Studio creative director in a midnight-blue gallery." style={{ y: shouldReduceMotion ? 0 : footerPhotoY }} /></motion.figure>
          <motion.p className="footer-side footer-side-right" variants={footerElementReveal} custom={0.52} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.45 }}>Brand direction<br />Digital experiences</motion.p>
        </div>
        <motion.p className="footer-description" variants={shouldReduceMotion ? undefined : quickWordStagger} initial={shouldReduceMotion ? false : 'hidden'} whileInView={shouldReduceMotion ? undefined : 'visible'} viewport={{ once: true, amount: 0.55 }}>
          {'Aster partners with ambitious teams to turn thoughtful strategy into identities and digital experiences people remember.'.split(' ').map((word, index) => <motion.span variants={shouldReduceMotion ? undefined : quickWordReveal} key={`${word}-${index}`}>{word}&nbsp;</motion.span>)}
        </motion.p>
        <nav className="footer-socials" aria-label="Social media"><a href="#instagram">Instagram <ArrowUpRight /></a><a href="#linkedin">LinkedIn <ArrowUpRight /></a><a href="#dribbble">Dribbble <ArrowUpRight /></a></nav>
        <motion.div className="footer-wordmark" initial={shouldReduceMotion ? false : { y: '18vh', opacity: 0 }} whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>ASTER</motion.div>
        <div className="footer-bottom"><span>©2026 Aster Studio</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}
