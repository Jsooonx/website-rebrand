import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { BrandMark } from './components/BrandMark'
import { useFloatingNavigation } from './hooks/useFloatingNavigation'
import { useLenisScroll } from './hooks/useLenisScroll'

const navItems = ['About', 'Capabilities', 'Work', 'Process']
const partners = [{ name: 'Verve', mark: 1, style: 'partner--serif' }, { name: 'Layerline', mark: 2, style: 'partner--wide' }, { name: 'Orbitale', mark: 3, style: 'partner--italic' }, { name: 'Morrow', mark: 4, style: 'partner--mono' }, { name: 'Kindred', mark: 5, style: 'partner--caps' }, { name: 'Nubis', mark: 6, style: 'partner--round' }]

/** Shared initial reveal for hero content and its inline navigation. */
const entrance: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.16 + index * 0.1,
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const stackEntrance: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.94, filter: 'blur(4px)' },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      delay: 0.78 + index * 0.13,
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

function NavContent() {
  return <>
    <motion.a className="flex items-center gap-2 whitespace-nowrap font-display text-[16px] font-semibold tracking-[-.06em]" href="#top" variants={entrance} custom={0}><Mark /><span>Radian Works</span></motion.a>
    <div className="flex items-center gap-7 font-nav text-[13px] font-medium tracking-[-.04em] max-[680px]:hidden">{navItems.map((item, index) => <motion.a href={`#${item.toLowerCase()}`} variants={entrance} custom={index + 1} key={item}>{item}</motion.a>)}</div>
    <motion.a className="flex min-h-10 items-center gap-[7px] rounded-full border border-[#111827] bg-transparent px-[14px] text-[11px] font-semibold transition-[color,background-color] duration-[180ms] hover:bg-[#111827] hover:text-white max-[680px]:min-h-[38px] max-[680px]:px-3" href="#contact" variants={entrance} custom={5}>Start a project <span aria-hidden="true">↗</span></motion.a>
  </>
}

/** Hero workflow art is intentionally self-contained so its timed entrance stays stable. */
function HeroSignal() {
  return (
    <div className="signal-stack" aria-label="An AI product workflow moving from brief to launch">
      <svg className="signal-path" viewBox="0 0 440 330" fill="none" aria-hidden="true">
        <path d="M57 257C134 244 146 203 219 180C282 160 314 98 390 71" stroke="rgba(17,24,39,.23)" strokeDasharray="3 8" strokeWidth="1.5" />
        <path d="M74 271C151 246 159 219 228 197" stroke="rgba(255,112,67,.6)" strokeWidth="1.5" />
      </svg>
      <motion.article className="signal-card signal-card--brief" style={{ rotate: -7 }} variants={stackEntrance} initial="hidden" animate="visible" custom={0}>
        <span className="signal-card__eyebrow">01 / BRIEF</span>
        <strong>Make the task clear.</strong>
        <div className="signal-card__lines"><i /><i /><i /></div>
      </motion.article>
      <motion.article className="signal-card signal-card--flow" style={{ rotate: 3 }} variants={stackEntrance} initial="hidden" animate="visible" custom={1}>
        <span className="signal-card__eyebrow">02 / FLOW</span>
        <div className="signal-card__flow"><i /><i /><i /></div>
        <strong>Shape the path.</strong>
      </motion.article>
      <motion.article className="signal-card signal-card--launch" style={{ rotate: 8 }} variants={stackEntrance} initial="hidden" animate="visible" custom={2}>
        <span className="signal-card__eyebrow">03 / LAUNCH</span>
        <div className="signal-card__chart"><i /><i /><i /><i /></div>
        <strong>Ready to use.</strong>
      </motion.article>
      <span className="signal-orb signal-orb--a" aria-hidden="true" />
      <span className="signal-orb signal-orb--b" aria-hidden="true" />
    </div>
  )
}

function Mark() {
  return <BrandMark />
}

/** About proof combines a one-shot count-up with the partner-logo marquee. */
function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const target = 85
    const start = performance.now()
    let frame = 0
    const tick = (time: number) => {
      const progress = Math.min((time - start) / 1100, 1)
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView])

  const reveal = (delay: number) => ({ initial: { opacity: 0, y: 26, filter: 'blur(7px)' }, whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }, viewport: { once: true, amount: 0.2 }, transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } })

  return <section className="about-section" id="about" ref={ref} aria-labelledby="about-title">
    <div className="about-shell">
      <div className="about-heading">
        <motion.p className="about-eyebrow" {...reveal(0)}>✦ About Radian</motion.p>
        <h2 id="about-title"><motion.span className="about-title-line" {...reveal(.1)}>Human clarity,</motion.span><motion.span className="about-title-line about-title-line--accent" {...reveal(.22)}>built for launch.</motion.span></h2>
      </div>
      <div className="about-grid">
        <motion.article className="about-globe-card" {...reveal(.18)}>
          <div className="about-globe-copy"><p>Independent, embedded, and built around the work.</p><a href="#contact">Meet Radian ↗</a></div><img className="about-globe" src="/about/radian-globe.png" alt="A luminous dotted globe representing Radian's worldwide product partnerships" />
        </motion.article>
        <div className="about-side">
          <motion.article className="about-stat-card" {...reveal(.28)}><p>Trusted by focused teams across AI, fintech, and culture.</p><div><span>Independent<br />product partner</span><strong className="tabular-nums">{count}+</strong></div></motion.article>
          <motion.article className="about-note-card" {...reveal(.38)}><img className="about-portrait" src="/about/radian-portrait.png" alt="Portrait of a fictional Radian creative technologist" /><blockquote>“The useful version is nearly always the most memorable one.”</blockquote><p>Radian principle / 01</p></motion.article>
        </div>
      </div>
    </div>
    <motion.div className="logo-cloud" {...reveal(.5)}><p>Selected partner<br />signals</p><div className="logo-cloud-window"><div className="logo-cloud-intro"><div className="logo-cloud-track">{[...partners, ...partners].map((partner, index) => <div className={`partner-mark ${partner.style}`} key={`${partner.name}-${index}`}><img src={`/about/marks/mark-${partner.mark}.png`} alt={index < partners.length ? `${partner.name} abstract mark` : ''} aria-hidden={index >= partners.length || undefined} /><span>{partner.name}</span></div>)}</div></div></div></motion.div>
  </section>
}

const services = [
  { title: 'AI Strategy & Mapping', number: '01', description: 'Identify the highest-value use cases and define a measurable product roadmap.', tags: ['Stakeholder discovery', 'Value model', 'Roadmap'] },
  { title: 'AI UX & Product Design', number: '02', description: 'Turn new capability into an experience people immediately understand.', tags: ['Journeys', 'Prototypes', 'Systems'] },
  { title: 'Agent & Platform Build', number: '03', description: 'Build a dependable interface and handoff-ready technical foundation.', tags: ['Agents', 'Front end', 'Handoff'] },
  { title: 'Launch & Learning', number: '04', description: 'Measure real use, remove friction, and find the next clear improvement.', tags: ['Testing', 'Analytics', 'Iteration'] },
]

/** Single-open accordion: a selected service keeps its detail panel in view. */
function ServicesSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="services-section" id="capabilities" aria-labelledby="services-title">
      <div className="services-shell">
        <div className="services-intro">
          <motion.p initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: .55 }}>✦ Services</motion.p>
          <motion.h2 id="services-title" initial={{ opacity: 0, y: 24, filter: 'blur(7px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: .1, duration: .6 }}>End-to-end<br />AI services.</motion.h2>
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }} />
          <motion.p className="services-copy" initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: .28 }}>We turn ambiguous AI ideas into useful product systems through strategy, design, engineering, and rigorous evaluation.</motion.p>
          <motion.img className="services-image" src="/about/radian-service-object.png" alt="Precision product object with controls and an orange cord" initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: .38, duration: .65 }} />
        </div>
        <div className="services-accordion">
          {services.map((service, index) => {
            const open = active === index

            return (
              <motion.article
                className={`service-item ${open ? 'is-open' : ''}`}
                key={service.number}
                initial={{ opacity: 0, y: index === 0 ? 24 : 70, filter: 'blur(7px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: .15 + index * .12, duration: .6, ease: [.22, 1, .36, 1] }}
              >
                <button type="button" onClick={() => setActive(open ? -1 : index)} aria-expanded={open}>
                  <span>{service.title}</span>
                  <i>({service.number})</i>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="service-body-clip"
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: .38, ease: [.22, 1, .36, 1] }}
                    >
                      <motion.div
                        className="service-body"
                        initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -5, filter: 'blur(3px)' }}
                        transition={{ duration: .24, ease: [.22, 1, .36, 1] }}
                      >
                        <p>{service.description}</p>
                        <div>{service.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const selectedWorks = [
  { title: 'Support Copilot for SaaS', client: 'Codaire', description: 'Draft replies and resolve account context before the handoff.', deliverables: 'AI strategy, UX flows, RAG', industry: 'SaaS', image: '/works/support-copilot.png', alt: 'Close-up of a white and black service robot with coral orange cabling' },
  { title: 'Route Intelligence', client: 'Morrow', description: 'Turn live delivery data into a clear operating rhythm.', deliverables: 'Product design, agent workflows', industry: 'Logistics', image: '/works/route-intelligence.png', alt: 'Sculptural data blocks and chrome sphere following a coral path' },
  { title: 'Care Operations', client: 'Penum', description: 'Make the next clinical action visible when it matters most.', deliverables: 'Service design, prototyping', industry: 'Health', image: '/works/care-ops.png', alt: 'White diagnostic device revealing a coral core and sensor rings' },
  { title: 'Ledger, Reframed', client: 'Dovetail', description: 'Bring financial operations into one decisive workspace.', deliverables: 'AI UX, systems, launch', industry: 'Fintech', image: '/works/ledger-ops.png', alt: 'Graphite discs, an ivory card, and coral capsule in a sculptural arrangement' },
]

/** Case-study grid data lives above the section to keep editorial content easy to edit. */
function SelectedWorksSection() {
  const itemMotion = (index: number) => ({
    initial: { opacity: 0, y: 34, filter: 'blur(8px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { delay: index * .12, duration: .68, ease: [.22, 1, .36, 1] as const },
  })

  return <section className="works-section" id="work" aria-labelledby="works-title">
    <div className="works-shell">
      <motion.div className="works-heading" {...itemMotion(0)}>
        <p>✦ Selected works</p>
        <h2 id="works-title">Useful products,<br />made tangible.</h2>
      </motion.div>
      <div className="works-grid">
        {selectedWorks.map((work, index) => <motion.article className="work-card" key={work.title} {...itemMotion(index + 1)}>
          <div className="work-image-wrap"><img src={work.image} alt={work.alt} /></div>
          <div className="work-meta">
            <span className="work-index">0{index + 1}</span>
            <h3>{work.title}</h3>
            <div className="work-detail"><span>Brief</span><p>{work.description}</p></div>
            <div className="work-detail"><span>Deliverables</span><p>{work.deliverables}</p></div>
            <div className="work-detail"><span>Industry</span><p>{work.industry}</p></div>
          </div>
          <p className="work-client">In partnership with {work.client}</p>
        </motion.article>)}
      </div>
    </div>
  </section>
}

const processSteps = [
  { number: '01', title: 'Discover & Scope', description: 'Align the problem, data reality, and the success signals worth pursuing.', timing: '3–7 days', icon: '⌕' },
  { number: '02', title: 'Prototype', description: 'De-risk unknowns and validate the useful version quickly.', timing: '1–2 weeks', icon: 'ϟ' },
  { number: '03', title: 'Build & Integrate', description: 'Bring the product into the workflows, tools, and teams that make it real.', timing: '3–6 weeks', icon: '↗' },
  { number: '04', title: 'Launch & Learn', description: 'Measure use, resolve friction, and turn early signal into progress.', timing: 'Ongoing', icon: '◌' },
]

/** Two-card viewport with a CSS track shift for predictable process navigation. */
function ProcessSection() {
  const [position, setPosition] = useState(0)
  const maxPosition = processSteps.length - 2
  const shiftClass = `process-track--shift-${position}`
  const reveal = (delay: number) => ({ initial: { opacity: 0, y: 26, filter: 'blur(7px)' }, whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }, viewport: { once: true, amount: .2 }, transition: { delay, duration: .62, ease: [.22, 1, .36, 1] as const } })

  return <section className="process-section" id="process" aria-labelledby="process-title">
    <div className="process-shell">
      <div className="process-intro">
        <motion.p {...reveal(0)}>✦ Process</motion.p>
        <motion.h2 id="process-title" {...reveal(.1)}>From idea<br />to production.</motion.h2>
        <motion.div className="process-controls" {...reveal(.22)}>
          <motion.button whileTap={{ scale: .96 }} type="button" aria-label="Show previous process step" onClick={() => setPosition(current => Math.max(0, current - 1))} disabled={position === 0}>←</motion.button>
          <motion.button whileTap={{ scale: .96 }} type="button" aria-label="Show next process step" onClick={() => setPosition(current => Math.min(maxPosition, current + 1))} disabled={position === maxPosition}>→</motion.button>
        </motion.div>
      </div>
      <div className="process-window" aria-live="polite">
        <div className={`process-track ${shiftClass}`}>
          {processSteps.map((step, index) => <motion.article className="process-card" key={step.number} {...(index < 2 ? reveal(.14 + index * .12) : {})}>
            <span className="process-icon" aria-hidden="true">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <div><em>{step.timing}</em><strong><b>{step.number}</b> /04</strong></div>
          </motion.article>)}
        </div>
      </div>
    </div>
  </section>
}

const benefitReveal = (delay: number) => ({ initial: { opacity: 0, y: 28, filter: 'blur(7px)' }, whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }, viewport: { once: true, amount: .2 }, transition: { delay, duration: .62, ease: [.22, 1, .36, 1] as const } })

/** Each bento card owns a small, independent motion metaphor. */
function BenefitsSection() {
  return <section className="benefits-section" aria-labelledby="benefits-title">
    <div className="benefits-shell">
      <motion.div className="benefits-heading" {...benefitReveal(0)}><p>✦ Benefits</p><h2 id="benefits-title">Built for the work<br />that follows.</h2></motion.div>
      <div className="benefits-grid">
        <motion.article className="benefit-card benefit-card--outcome" {...benefitReveal(.1)}>
          <div className="outcome-orbit">{[0, 1, 2].map(index => <motion.i key={index} initial={{ opacity: 0, scale: .5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: .2 + index * .12, duration: .44, ease: [.22, 1, .36, 1] }} />)}<motion.b initial={{ opacity: 0, rotate: -50, scale: .4 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: .58, type: 'spring', duration: .4, bounce: 0 }}>✦</motion.b></div>
          <BenefitCopy title="Outcome over output" body="We measure what matters—quality, speed, safety, and cost—so every sprint earns its place." />
        </motion.article>
        <motion.article className="benefit-card benefit-card--reliability" {...benefitReveal(.2)}>
          <div className="signal-rail">{[.48, .78, 1].map((width, index) => <motion.i key={width} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: .26 + index * .12, duration: .55, ease: [.22, 1, .36, 1] }} style={{ width: `${width * 100}%` }}><b /></motion.i>)}</div>
          <BenefitCopy title="Eval-first reliability" body="Tests, guardrails, and traceable behaviour are part of the product from day one." />
        </motion.article>
        <motion.article className="benefit-card benefit-card--secure" {...benefitReveal(.3)}>
          <div className="permission-orbit"><motion.i animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 16, ease: 'linear' }} /><motion.i animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 11, ease: 'linear' }} /><motion.b initial={{ opacity: 0, scale: .25, filter: 'blur(4px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: .42, type: 'spring', duration: .3, bounce: 0 }}>⌘</motion.b></div>
          <BenefitCopy title="Secure by design" body="Privacy, access controls, and auditability are shaped into the system—not bolted on later." />
        </motion.article>
        <motion.article className="benefit-card benefit-card--design" {...benefitReveal(.4)}>
          <div className="design-blocks">{[0, 1, 2].map(index => <motion.i key={index} initial={{ opacity: 0, y: 22, rotate: index === 1 ? -9 : 9 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ delay: .34 + index * .12, type: 'spring', duration: .4, bounce: 0 }}><b>{index === 0 ? '↗' : index === 1 ? '●' : '≡'}</b></motion.i>)}</div>
          <BenefitCopy title="Design-led AI experiences" body="Useful AI feels clear, calm, and native to the product people already know." />
        </motion.article>
      </div>
    </div>
  </section>
}

function BenefitCopy({ title, body }: { title: string, body: string }) {
  return <div className="benefit-copy"><h3>{title}</h3><p>{body}</p></div>
}

const testimonials = [
  { quote: 'Radian gave our team a practical path through a difficult product decision. We got to a useful launch without losing the human part of the work.', name: 'Mara Vale', role: 'VP Product, Codaire', image: '/testimonials/mara-vale.png' },
  { quote: 'The work was unusually clear. Every prototype helped us decide what to build, what to defer, and what to measure when it shipped.', name: 'Ishan Reed', role: 'Founder, Latticewell', image: '/testimonials/mara-vale.png' },
  { quote: 'They held strategy and craft in the same room. The result feels simpler for customers and much more actionable for our team.', name: 'Nia Harris', role: 'Chief of Staff, Penum', image: '/testimonials/mara-vale.png' },
]

/** Local testimonial state updates copy and portrait together. */
function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const testimonial = testimonials[current]
  const reveal = (delay: number) => ({ initial: { opacity: 0, y: 24, filter: 'blur(7px)' }, whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }, viewport: { once: true, amount: .22 }, transition: { delay, duration: .62, ease: [.22, 1, .36, 1] as const } })
  const change = (direction: number) => setCurrent(value => (value + direction + testimonials.length) % testimonials.length)
  return <section className="testimonials-section" aria-labelledby="testimonials-title"><div className="testimonials-shell">
    <div className="testimonials-copy">
      <motion.p className="testimonials-eyebrow" {...reveal(0)}>✦ Notes from the field</motion.p>
      <motion.h2 id="testimonials-title" {...reveal(.1)}>The work<br />speaks back.</motion.h2>
      <motion.div className="testimonial-stars" {...reveal(.2)} aria-label="Five out of five stars">★★★★★</motion.div>
      <motion.blockquote key={testimonial.name} initial={{ opacity: 0, y: 16, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .45, ease: [.22, 1, .36, 1] }}>“{testimonial.quote}”</motion.blockquote>
      <motion.p className="testimonial-author" key={`${testimonial.name}-role`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .1, duration: .35 }}>{testimonial.name}<span>{testimonial.role}</span></motion.p>
      <motion.div className="testimonial-controls" {...reveal(.42)}><div><motion.button whileTap={{ scale: .96 }} onClick={() => change(-1)} type="button" aria-label="Previous testimonial">←</motion.button><motion.button whileTap={{ scale: .96 }} onClick={() => change(1)} type="button" aria-label="Next testimonial">→</motion.button></div><strong><b>0{current + 1}</b> /0{testimonials.length}</strong></motion.div>
    </div>
    <motion.div className="testimonial-portrait" {...reveal(.24)}><img key={testimonial.name} src={testimonial.image} alt={`Portrait of ${testimonial.name}, a fictional Radian client`} /><span>Radian<br />field note</span></motion.div>
  </div></section>
}

const pricingPlans = [
  { name: 'Studio Sprint', note: 'For focused teams', monthly: '4,800', annual: '48,000', dark: false, intro: 'A defined product question, a practical prototype, and momentum for the next decision.', items: ['Discovery & scope', 'Working prototype', 'Decision-ready roadmap'] },
  { name: 'Embedded Partner', note: 'For product teams', monthly: '9,500', annual: '96,000', dark: true, intro: 'An ongoing senior product partner across strategy, design, delivery, and learning.', items: ['Everything in Studio', 'Monthly product cadence', 'Embedded design & AI support'] },
]

/** Annual billing keeps price values keyed so their morph is intentional. */
function PricingSection() {
  const [annual, setAnnual] = useState(false)
  const reveal = (delay: number) => ({ initial: { opacity: 0, y: 25, filter: 'blur(7px)' }, whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }, viewport: { once: true, amount: .18 }, transition: { delay, duration: .62, ease: [.22, 1, .36, 1] as const } })
  return <section className="pricing-section" id="pricing" aria-labelledby="pricing-title"><div className="pricing-shell">
    <motion.p className="pricing-eyebrow" {...reveal(0)}>✦ Engagement</motion.p>
    <motion.h2 id="pricing-title" {...reveal(.1)}>Clear scope.<br />Confident momentum.</motion.h2>
    <motion.div className="billing-switch-wrap" {...reveal(.22)}><span className={!annual ? 'is-selected' : ''}>Monthly</span><button className={`billing-switch ${annual ? 'is-annual' : ''}`} type="button" onClick={() => setAnnual(value => !value)} aria-pressed={annual} aria-label="Toggle annual billing"><motion.i layout transition={{ type: 'spring', duration: .32, bounce: 0 }} /></button><span className={annual ? 'is-selected' : ''}>Annual <b>Save 16%</b></span></motion.div>
    <div className="pricing-grid">{pricingPlans.map((plan, index) => <motion.article className={`price-card ${plan.dark ? 'price-card--dark' : ''}`} key={plan.name} {...reveal(.34 + index * .12)}><div className="price-card-top"><div><p>{plan.name}</p><span>{plan.note}</span></div><motion.a whileTap={{ scale: .96 }} href="#contact">Start a conversation <i>↗</i></motion.a></div><div className="price-value"><motion.strong className="tabular-nums" key={`${plan.name}-${annual}`} initial={{ opacity: 0, y: 15, filter: 'blur(5px)', scale: .96 }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }} transition={{ type: 'spring', duration: .38, bounce: 0 }}>${annual ? plan.annual : plan.monthly}</motion.strong><motion.span key={`${plan.name}-${annual}-period`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .22 }}>/{annual ? 'year' : 'month'}</motion.span></div><div className="price-bottom"><p>{plan.intro}</p><ul>{plan.items.map(item => <li key={item}>✓ <span>{item}</span></li>)}</ul></div></motion.article>)}</div>
  </div></section>
}

const faqItems = [
  { question: 'What does a typical engagement look like?', answer: 'Most teams begin with a focused sprint, then decide whether an embedded product cadence is the right next move.' },
  { question: 'What do you need from our team?', answer: 'A decision-maker, access to the people closest to the problem, and enough context to make the work concrete.' },
  { question: 'Do you work with our existing stack?', answer: 'Yes. We design around the systems, policies, and product constraints your team already operates.' },
  { question: 'Can you work alongside internal teams?', answer: 'That is our preferred mode: independent enough to move, embedded enough to make the work stick.' },
]

/** FAQ supports both opening another item and collapsing the active item. */
function FaqSection() {
  const [open, setOpen] = useState(0)
  return <section className="faq-section" aria-labelledby="faq-title"><div className="faq-shell">
    <motion.p className="faq-eyebrow" initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: .55 }}>✦ Common questions</motion.p>
    <motion.h2 id="faq-title" initial={{ opacity: 0, y: 24, filter: 'blur(7px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ delay: .1, duration: .62, ease: [.22, 1, .36, 1] }}>Questions, answered<br />with context.</motion.h2>
    <div className="faq-list">{faqItems.map((item, index) => { const expanded = open === index; return <motion.article className={`faq-item ${expanded ? 'is-open' : ''}`} key={item.question} initial={{ opacity: 0, y: index === 0 ? 28 : 80, filter: 'blur(7px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: .22 }} transition={{ delay: .24 + index * .12, duration: .62, ease: [.22, 1, .36, 1] }}><button type="button" onClick={() => setOpen(expanded ? -1 : index)} aria-expanded={expanded}><span>{item.question}</span><motion.i animate={{ rotate: expanded ? 45 : 0 }} transition={{ type: 'spring', duration: .3, bounce: 0 }}><b /><b /></motion.i></button><motion.div className="faq-answer" initial={false} animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }} transition={{ duration: .34, ease: [.22, 1, .36, 1] }}><p>{item.answer}</p></motion.div></motion.article> })}</div>
  </div></section>
}

/** Client-side form feedback only; submission data is deliberately not persisted. */
function ContactSection() {
  const [sent, setSent] = useState(false)
  const reveal = (delay: number) => ({ initial: { opacity: 0, y: 24, filter: 'blur(7px)' }, whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }, viewport: { once: true, amount: .18 }, transition: { delay, duration: .6, ease: [.22, 1, .36, 1] as const } })
  return <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-art"><img src="/contact/contact-arc.png" alt="Abstract coral and ivory product form" /></div><div className="contact-shell">
    <div className="contact-copy"><motion.p {...reveal(0)}>✦ Contact</motion.p><motion.h2 id="contact-title" {...reveal(.1)}>Let’s make the<br />next thing useful.</motion.h2><motion.div className="contact-details" {...reveal(.24)}><a href="mailto:hello@radian.works"><i aria-hidden="true">↗</i><span>Email<br /><b>hello@radian.works</b></span></a><a href="tel:+622155501982"><i className="contact-phone" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7.1 3.7 9.5 3a1.7 1.7 0 0 1 2 1l.8 3.6a1.7 1.7 0 0 1-.8 1.8l-1.3.8a14.2 14.2 0 0 0 3.6 3.6l.8-1.3a1.7 1.7 0 0 1 1.8-.8L20 13a1.7 1.7 0 0 1 1 2l-.7 2.4a2.7 2.7 0 0 1-3 1.9C10.2 18.4 5.6 13.8 4.7 6.7a2.7 2.7 0 0 1 2.4-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></i><span>Call us<br /><b>+62 21 555 01982</b></span></a></motion.div></div>
    <motion.form className="contact-form" onSubmit={event => { event.preventDefault(); setSent(true) }} {...reveal(.16)}><motion.h3 {...reveal(.28)}>Start with a few details.</motion.h3><motion.p className="form-note" {...reveal(.34)}>All fields are required.</motion.p><motion.label {...reveal(.4)}>Your name<input name="name" type="text" placeholder="Your full name" required /></motion.label><motion.label {...reveal(.48)}>Work email<input name="email" type="email" placeholder="you@company.com" required /></motion.label><motion.label {...reveal(.56)}>What would you like to explore?<select name="interest" defaultValue="" required><option value="" disabled>Select an engagement</option><option>Studio Sprint</option><option>Embedded Partner</option><option>Not sure yet</option></select></motion.label><motion.label {...reveal(.64)}>A little about the project<textarea name="message" placeholder="A short note is perfect." required /></motion.label><motion.button whileTap={{ scale: .96 }} type="submit" {...reveal(.72)}>{sent ? 'Message received ✓' : 'Send inquiry ↗'}</motion.button></motion.form>
  </div></section>
}

const socialLinks = [{ name: 'LinkedIn', image: '/social/linkedin.png', href: 'https://www.linkedin.com' }, { name: 'Instagram', image: '/social/instagram.png', href: 'https://www.instagram.com' }, { name: 'Dribbble', image: '/social/dribbble.png', href: 'https://dribbble.com' }, { name: 'Email', image: '/social/email.png', href: 'mailto:hello@radian.works' }]

/** Footer wordmark and social links reveal independently for a paced outro. */
function Footer() {
  const reveal = (delay: number) => ({ initial: { opacity: 0, y: 20, filter: 'blur(6px)' }, whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }, viewport: { once: true, amount: .18 }, transition: { delay, duration: .58, ease: [.22, 1, .36, 1] as const } })
  return <footer className="site-footer"><motion.div className="footer-wordmark" aria-hidden="true">{'RADIAN'.split('').map((letter, index) => <motion.span key={`${letter}-${index}`} initial={{ opacity: 0, y: 42, filter: 'blur(9px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: .18 }} transition={{ delay: index * .09, duration: .62, ease: [.22, 1, .36, 1] }}>{letter}</motion.span>)}</motion.div><div className="footer-shell"><motion.div className="footer-intro" {...reveal(.5)}><Mark /><h2>Keep the signal<br />moving.</h2><p>Notes, experiments, and useful things from the studio.</p></motion.div><div className="footer-socials">{socialLinks.map((social, index) => <motion.a href={social.href} key={social.name} {...reveal(.64 + index * .1)}><span>{social.name}</span><i><img src={social.image} alt="" /></i></motion.a>)}</div><motion.div className="footer-bottom" {...reveal(1.08)}><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#capabilities">Services</a><a href="#work">Works</a><a href="#pricing">Pricing</a></nav><p>© 2026 Radian Works. All rights reserved.</p><a href="#top">Back to top ↑</a></motion.div></div></footer>
}

function App() {
  const reducedMotion = useReducedMotion()
  const navFloating = useFloatingNavigation()

  useLenisScroll(reducedMotion)

  return (
    <main>
      <section id="top" className="relative isolate m-2 min-h-[min(760px,calc(100svh-28px))] overflow-hidden rounded-[38px] bg-[#e7e4de] max-[680px]:m-[5px] max-[680px]:min-h-[700px] max-[680px]:rounded-[26px]" aria-labelledby="hero-title">
        <div className="hero-ring" aria-hidden="true" />
        <div className="pointer-events-none absolute -z-20 top-[-56%] left-[-12%] h-[95%] w-[60%] rotate-[-28deg] rounded-full bg-[#8e8cff]/16 blur-[76px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -z-20 top-[-48%] right-[-4%] h-[115%] w-[42%] rotate-[-24deg] rounded-full bg-[radial-gradient(circle,rgba(255,112,67,.92)_0_14%,rgba(255,179,150,.58)_35%,rgba(255,179,150,0)_68%)] blur-[20px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -z-20 bottom-[-26%] left-[-14%] h-[62%] w-[57%] rotate-[-30deg] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,.42),rgba(17,24,39,0)_68%)] blur-[39px]" aria-hidden="true" />

        <motion.nav
          className={`site-nav mx-auto mt-7 flex min-h-[48px] w-[min(1120px,calc(100%-72px))] items-center justify-between border-b border-[#111827]/12 pb-4 max-[680px]:mt-4 max-[680px]:w-[calc(100%-36px)] ${navFloating ? 'is-placeholder' : ''}`}
          aria-label="Main navigation"
          initial={false}
          animate={{
            opacity: navFloating ? 0 : 1,
            y: navFloating ? -2 : 0,
            scaleX: navFloating ? .985 : 1,
            filter: navFloating ? 'blur(1.5px)' : 'blur(0px)',
          }}
          transition={{
            opacity: { duration: .16, ease: [.22, 1, .36, 1] },
            filter: { duration: .18, ease: [.22, 1, .36, 1] },
            y: { type: 'spring', duration: .3, bounce: 0 },
            scaleX: { type: 'spring', duration: .3, bounce: 0 },
          }}
          style={{ transformOrigin: '50% 0%', willChange: 'transform, opacity, filter' }}
        >
          <motion.div className="flex w-full items-center justify-between" initial="hidden" animate="visible">
            <NavContent />
          </motion.div>
        </motion.nav>
        {createPortal(
          <motion.nav
            className="site-nav is-floating flex items-center justify-between"
            aria-label="Main navigation"
            aria-hidden={!navFloating}
            inert={!navFloating}
            initial={false}
            animate={{
              opacity: navFloating ? 1 : 0,
              y: navFloating ? 0 : -3,
              scaleX: navFloating ? 1 : .94,
              scaleY: navFloating ? 1 : .92,
              filter: navFloating ? 'blur(0px)' : 'blur(3px)',
            }}
            transition={{
              opacity: { duration: .18, ease: [.22, 1, .36, 1] },
              filter: { duration: .2, ease: [.22, 1, .36, 1] },
              y: { type: 'spring', duration: .32, bounce: 0 },
              scaleX: { type: 'spring', duration: .32, bounce: 0 },
              scaleY: { type: 'spring', duration: .32, bounce: 0 },
            }}
            style={{
              pointerEvents: navFloating ? 'auto' : 'none',
              transformOrigin: '50% 0%',
              willChange: 'transform, opacity, filter',
            }}
          >
            <NavContent />
          </motion.nav>,
          document.body,
        )}

        <motion.div className="mx-auto grid w-[min(1120px,calc(100%-72px))] grid-cols-[.94fr_1.06fr] items-center gap-8 pt-[clamp(84px,11vh,128px)] max-[900px]:flex max-[900px]:flex-col max-[900px]:items-start max-[900px]:pt-[76px] max-[680px]:w-[calc(100%-36px)]" initial="hidden" animate="visible">
          <div className="flex max-w-[610px] flex-col items-start text-left">
          <motion.p className="mb-6 inline-flex items-center gap-[7px] border-b border-[#111827]/25 pb-2 text-[11px] font-bold uppercase tracking-[.13em] text-[#5e625f]" variants={entrance} custom={0}>
            <span aria-hidden="true">✦</span> Embedded AI product studio
          </motion.p>
          <motion.h1 className="font-display text-[clamp(58px,6.3vw,96px)] leading-[.86] font-semibold tracking-[-.085em] text-[#111827] [text-wrap:balance]" id="hero-title" variants={entrance} custom={1}>
            <span className="whitespace-nowrap">Make complexity</span><br />
            <em className="font-normal italic text-[#ff7043]">useful.</em>
          </motion.h1>
          <motion.p className="mt-8 max-w-[405px] text-[14px] leading-[1.55] tracking-[-.025em] text-[#454a48] [text-wrap:pretty]" variants={entrance} custom={3}>
            Radian joins ambitious teams to shape, design, and ship AI products
            people can use from day one.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-4" variants={entrance} custom={4}>
            <motion.a whileTap={{ scale: 0.96 }} className="cta-3d cta-3d--dark" href="#contact">
              Start a project <span aria-hidden="true">↗</span>
            </motion.a>
            <motion.a whileTap={{ scale: 0.96 }} className="cta-3d cta-3d--light" href="#work">
              See the work <span aria-hidden="true">↓</span>
            </motion.a>
          </motion.div>
          </div>
          <div className="relative flex min-h-[330px] items-center justify-center max-[900px]:min-h-[300px] max-[900px]:w-full max-[900px]:justify-end">
            <HeroSignal />
          </div>
        </motion.div>

        <motion.a className="scroll-bridge" href="#about" variants={entrance} initial="hidden" animate="visible" custom={7}>
          <span>Scroll to explore</span>
          <i aria-hidden="true">↓</i>
        </motion.a>
      </section>
      <AboutSection />
      <ServicesSection />
      <SelectedWorksSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
