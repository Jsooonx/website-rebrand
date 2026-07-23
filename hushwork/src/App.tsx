import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'
import { CaretDown } from '@phosphor-icons/react'
import { ArrowUpRight, HushworkMark } from './components/brand/BrandPrimitives'
import { CapabilityPreview } from './components/previews/CapabilityPreview'
import { WorkflowPreview } from './components/previews/WorkflowPreview'
import { MiniIcon } from './components/ui/MiniIcon'
import {
  benefits, capabilityColumns, capabilityEntrances, capabilityStaggerOrder,
  comparisonColumns, faqItems, footerColumns, partnerMarks, pricingPlans,
  stars, testimonials, workflowSteps,
} from './content/site-data'

const ease = [0.22, 1, 0.36, 1] as const
const reducedEase = [0, 0, 1, 1] as const

type EntranceVector = {
  x?: number
  y?: number
  scale?: number
  blur?: number
}

function StackframePreview({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.aside
      className="stackframe-preview"
      aria-label="Stackframe template preview"
      initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: 0.5, duration: 0.42, ease }}
    >
      <a className="stackframe-preview-back" href="https://stackframe.my.id/#library">
        <span>Back to template</span>
        <span aria-hidden="true">↗</span>
      </a>
      <a className="stackframe-preview-mark" href="https://stackframe.my.id" aria-label="Open Stackframe">
        <img src="/stackframe-mark.svg" alt="" aria-hidden="true" />
      </a>
    </motion.aside>
  )
}

function App() {
  const reduceMotion = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [activePreviews, setActivePreviews] = useState<Record<string, boolean>>({})
  const [activeCapabilities, setActiveCapabilities] = useState<Record<string, boolean>>({})
  const [activeBenefits, setActiveBenefits] = useState<Record<string, boolean>>({})
  const [testimonialView, setTestimonialView] = useState({ start: 0, direction: 1 as -1 | 1 })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isStackframePreview, setIsStackframePreview] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    setReady(true)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [])

  useEffect(() => {
    setIsStackframePreview(new URLSearchParams(window.location.search).get('preview') === 'stackframe')
  }, [])

  const reveal = (delay: number, y = 18) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(7px)' },
    animate: ready || reduceMotion ? (reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }) : {},
    transition: reduceMotion ? { delay: delay * .2, duration: .18, ease: reducedEase } : { delay, duration: .72, ease },
  })

  const entranceVariants = (from: EntranceVector = {}, duration = .62, delay = 0) => ({
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: from.x ?? 0, y: from.y ?? 0, scale: from.scale ?? 1, filter: `blur(${from.blur ?? 6}px)` },
    visible: reduceMotion
      ? { opacity: 1, transition: { delay: delay * .2, duration: .18, ease: reducedEase } }
      : { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)', transition: { delay, duration, ease } },
  })

  const staggerContainerVariants = (delayChildren = 0, staggerChildren = 0) => ({
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? delayChildren * .2 : delayChildren,
        staggerChildren: reduceMotion && staggerChildren > 0 ? .035 : staggerChildren,
      },
    },
  })

  const visibleTestimonials = testimonials.map((_, index) => testimonials[(testimonialView.start + index) % testimonials.length])
  const shiftTestimonials = (direction: -1 | 1) => {
    setTestimonialView((current) => ({
      start: (current.start + direction + testimonials.length) % testimonials.length,
      direction,
    }))
  }

  return (
    <>
    {isStackframePreview && <StackframePreview reduceMotion={reduceMotion} />}
    <main>
      {/* Hero: brand promise, primary navigation, and partner proof. */}
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__field" aria-hidden="true">
          <div className="hero__warmth" />
          <div className="hero__blue-haze" />
          {stars.map(([left, top, size, delay], index) => (
            <motion.i
              key={index}
              className="star"
              style={{ left: `${left}%`, top: `${top}%`, width: size * 2, height: size * 2 }}
              animate={reduceMotion ? undefined : { y: [0, index % 2 ? -5 : 5, 0], opacity: [.24, .92, .24] }}
              transition={{ delay, duration: 6 + (index % 5) * 1.7, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <motion.nav
          className="site-nav"
          aria-label="Primary navigation"
          initial={reduceMotion ? false : { opacity: 0, y: -18, filter: 'blur(6px)' }}
          animate={ready || reduceMotion ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ delay: .08, duration: .56, ease }}
        >
          <a className="site-nav__brand" href="#top" aria-label="Hushwork home">
            <HushworkMark />
            <span>Hushwork</span>
          </a>
          <div className="site-nav__links">
            <a href="#about">About</a>
            <a href="#benefits">Benefits</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="site-nav__signal" href="#contact">
            <span>Start</span><ArrowUpRight />
          </a>
        </motion.nav>

        <div className="hero__content">
          <motion.p className="eyebrow" {...reveal(.22, 10)}>
            <span className="eyebrow__badge">New</span>
            <span>Custom AI Agents</span>
          </motion.p>

          <h1 id="hero-title">
            <motion.span className="headline-line" {...reveal(.37, 28)}>The busywork can</motion.span>
            <motion.span className="headline-line headline-line--accent" {...reveal(.51, 22)}>be quieter.</motion.span>
          </h1>

          <motion.p className="hero__summary" {...reveal(.68, 14)}>
            Hushwork turns the repeatable parts of your client operations into dependable AI-assisted workflowsâ€”so your team can stay present for the work only people can do.
          </motion.p>

          <motion.div className="hero__actions" {...reveal(.83, 12)}>
            <a className="button button--primary" href="#contact">Map a workflow <ArrowUpRight /></a>
            <a className="button button--secondary" href="#about">See the approach</a>
          </motion.div>
        </div>

        <motion.div className="hero__proof" {...reveal(1.04, 10)} aria-label="Partner mark cloud moving from right to left">
          <div className="hero__logo-window" aria-hidden="true">
            <div className="hero__logo-track">
              {[0, 1].map((group) => (
                <div className="hero__logo-group" key={group}>
                  {partnerMarks.map((partner) => (
                    <div className="hero__partner-mark" key={`${partner.name}-${group}`}>
                      <img src={partner.image} alt="" />
                      <span>{partner.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      {/* About: editorial transition into the operating model. */}
      <section className="statement" id="about" aria-labelledby="statement-title">
        <motion.span
          className="statement__word"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(7px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: .35 }}
          transition={{ duration: .58, ease }}
        >ROOM</motion.span>
        <motion.h2
          id="statement-title"
          initial={reduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(7px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: .45 }}
          transition={{ delay: .2, duration: .66, ease }}
        >
          <span>Make room for the work</span>
          <span>that matters most.</span>
        </motion.h2>
      </section>
      {/* Workflow: three-step explanatory mini-product stories. */}
      <section className="workflow" id="workflow" aria-labelledby="workflow-title">
        <div className="workflow__intro">
          <motion.p
            className="section-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ duration: .52, ease }}
          ><span />How it works</motion.p>
          <motion.h2
            id="workflow-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ delay: .1, duration: .64, ease }}
          >A calmer path through the repeat.</motion.h2>
        </div>
        <motion.div
          className="workflow__grid"
          variants={staggerContainerVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: .25 }}
        >
          {workflowSteps.map((step, index) => (
            <motion.article
              className={`workflow-card workflow-card--${step.kind}${activePreviews[step.kind] ? ' is-active' : ''}`}
              key={step.step}
              variants={entranceVariants([
                { x: -24, y: 10 },
                { y: 30, scale: .97 },
                { x: 24, y: 10 },
              ][index], .62, index * .075)}
              onAnimationComplete={() => setActivePreviews((previews) => previews[step.kind] ? previews : { ...previews, [step.kind]: true })}
            >
              <p className="workflow-card__step">Step {step.step}</p>
              <div className="workflow-card__visual"><WorkflowPreview kind={step.kind} /></div>
              <h3>{step.title}</h3>
              <p className="workflow-card__copy">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* Capabilities: masonry bento with independently animated previews. */}
      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div className="capabilities__intro">
          <motion.p
            className="section-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: .52, ease }}
          ><span />What we build</motion.p>
          <motion.h2
            id="capabilities-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ delay: .1, duration: .64, ease }}
          >Useful systems for the work between the work.</motion.h2>
        </div>
        <motion.div
          className="capabilities__columns"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: .24 }}
        >
          {capabilityColumns.map((column, columnIndex) => <div className={`capabilities__column capabilities__column--${columnIndex + 1}`} key={columnIndex}>
            {column.map((card) => {
              const entrance = capabilityEntrances[card.kind]
              const order = capabilityStaggerOrder[card.kind]
              return <motion.article
                className={`capability-card capability-card--${card.size} capability-card--${card.kind}${activeCapabilities[card.kind] ? ' is-active' : ''}`}
                key={card.kind}
                variants={entranceVariants(entrance, .62, .06 + order * .075)}
                onAnimationComplete={() => setActiveCapabilities((active) => active[card.kind] ? active : { ...active, [card.kind]: true })}
              >
                <div className="capability-card__visual"><CapabilityPreview kind={card.kind} /></div>
                <div className="capability-card__copy"><h3>{card.title}</h3><p>{card.description}</p></div>
              </motion.article>
            })}
          </div>)}
        </motion.div>
      </section>
      {/* Benefits: central brand core with sequential supporting signals. */}
      <section className="benefits" id="benefits" aria-labelledby="benefits-title">
        <div className="benefits__intro">
          <motion.p
            className="section-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: .52, ease }}
          ><span />Why Hushwork</motion.p>
          <motion.h2
            id="benefits-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ delay: .1, duration: .64, ease }}
          >What makes useful automation easier to trust.</motion.h2>
        </div>
        <motion.div
          className={`benefits-map${activeBenefits.core ? ' is-active' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: .35 }}
        >
          <motion.div
            className="benefit-core"
            variants={entranceVariants({ scale: .94, blur: 8 }, .66)}
            onAnimationComplete={() => setActiveBenefits((active) => active.core ? active : { ...active, core: true })}
          >
            <span className="benefit-core__orbit" />
            <span className="benefit-core__mark"><HushworkMark /></span>
            <span className="benefit-core__status"><b />Human-guided systems</span>
          </motion.div>
          {benefits.map((benefit, index) => <motion.article
            className={`benefit-card benefit-card--${benefit.kind}${activeBenefits[benefit.kind] ? ' is-active' : ''}`}
            key={benefit.kind}
            variants={entranceVariants({ ...benefit.from, scale: .97 }, .58, .34 + index * .075)}
            onAnimationComplete={() => setActiveBenefits((active) => active[benefit.kind] ? active : { ...active, [benefit.kind]: true })}
          >
            <span className="benefit-card__icon"><MiniIcon name={benefit.icon} /></span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </motion.article>)}
        </motion.div>
      </section>
      {/* Social proof: manually controlled, looping testimonial carousel. */}
      <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
        <div className="testimonials__header">
          <div className="testimonials__intro">
            <motion.p
              className="section-kicker"
              initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: .6 }}
              transition={{ duration: .52, ease }}
            ><span />Client notes</motion.p>
            <motion.h2
              id="testimonials-title"
              initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: .5 }}
              transition={{ delay: .1, duration: .64, ease }}
            >The quiet difference, felt in the day-to-day.</motion.h2>
          </div>
          <motion.div
            className="testimonials__controls"
            initial={reduceMotion ? false : { opacity: 0, x: 16, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .8 }}
            transition={{ delay: .24, duration: .54, ease }}
          >
            <button type="button" aria-label="Previous client note" onClick={() => shiftTestimonials(-1)}><MiniIcon name="arrow" /></button>
            <button type="button" aria-label="Next client note" onClick={() => shiftTestimonials(1)}><MiniIcon name="arrow" /></button>
          </motion.div>
        </div>
        <motion.div
          className="testimonials__viewport"
          initial={reduceMotion ? false : { opacity: 0, y: 28, filter: 'blur(7px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: .24 }}
          transition={{ delay: .12, duration: .64, ease }}
        >
          <AnimatePresence initial={false} custom={testimonialView.direction} mode="popLayout">
            <motion.div
              className="testimonials__grid"
              key={testimonialView.start}
              custom={testimonialView.direction}
              initial={reduceMotion ? false : { x: `${testimonialView.direction * 100}%` }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: `${testimonialView.direction * -100}%` }}
              transition={{ duration: reduceMotion ? 0 : .68, ease: [.4, 0, .2, 1] }}
              style={{ willChange: reduceMotion ? undefined : 'transform' }}
            >
              {visibleTestimonials.map((testimonial) => <article
                className={`testimonial-card testimonial-card--${testimonial.id}`}
                key={testimonial.id}
              >
                <img src={testimonial.image} alt={testimonial.alt} />
                <span className="testimonial-card__shade" aria-hidden="true" />
                <div className="testimonial-card__person"><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
                <div className="testimonial-card__rating" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, star) => <svg key={star} viewBox="0 0 16 16" aria-hidden="true"><path d="m8 1.5 1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6Z" /></svg>)}</div>
                <blockquote>â€œ{testimonial.quote}â€</blockquote>
                <span className="testimonial-card__signal" aria-hidden="true"><i /><b>Verified workflow</b></span>
              </article>)}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>
      {/* Pricing: three engagement paths and their included scope. */}
      <section className="pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="pricing__intro">
          <motion.p
            className="section-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: .52, ease }}
          ><span />Ways to work</motion.p>
          <motion.h2
            id="pricing-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ delay: .1, duration: .64, ease }}
          >Start with one repeat. Build what works.</motion.h2>
        </div>
        <motion.div
          className="pricing__grid"
          variants={staggerContainerVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: .22 }}
        >
          {pricingPlans.map((plan, index) => <motion.article
            className={`pricing-card pricing-card--${plan.id}${plan.popular ? ' pricing-card--popular' : ''}`}
            key={plan.id}
            variants={entranceVariants({ x: index === 0 ? -22 : index === 2 ? 22 : 0, y: index === 1 ? 28 : 18, scale: index === 1 ? .97 : 1, blur: 7 }, .64, index * .075)}
          >
            {plan.popular && <span className="pricing-card__popular"><i />Most chosen</span>}
            <div className="pricing-card__name"><span><MiniIcon name={plan.icon} /></span><strong>{plan.name}</strong></div>
            <div className="pricing-card__price"><strong>{plan.price}</strong><span>{plan.cadence}</span></div>
            <p className="pricing-card__description">{plan.description}</p>
            <a className="pricing-card__action" href="#contact">{plan.action}<ArrowUpRight /></a>
            <div className="pricing-card__features">
              <h3>Whatâ€™s included</h3>
              <ul>{plan.features.map((feature) => <li key={feature}><span><svg viewBox="0 0 14 14" aria-hidden="true"><path d="m3.2 7.1 2.2 2.2 5.2-5.1" /></svg></span>{feature}</li>)}</ul>
            </div>
            <p className="pricing-card__meta"><i />{plan.meta}</p>
          </motion.article>)}
        </motion.div>
      </section>
      {/* Comparison: two operating models shown side by side. */}
      <section className="comparison" id="comparison" aria-labelledby="comparison-title">
        <div className="comparison__intro">
          <motion.p
            className="section-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: .52, ease }}
          ><span />A clearer comparison</motion.p>
          <motion.h2
            id="comparison-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ delay: .1, duration: .64, ease }}
          >Installed automation vs. a system your team owns.</motion.h2>
        </div>
        <motion.div
          className="comparison__switch"
          initial={reduceMotion ? false : { opacity: 0, scaleX: .74, filter: 'blur(5px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scaleX: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: .7 }}
          transition={{ delay: .16, duration: .62, ease }}
        >
          {comparisonColumns.map((column) => <span key={column.id}><MiniIcon name={column.icon} />{column.label}</span>)}
          <motion.b
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: .9, filter: 'blur(4px)' }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .8 }}
            transition={reduceMotion ? { duration: .18, ease: reducedEase } : { type: 'spring', duration: .3, bounce: 0, delay: .5 }}
          >VS</motion.b>
        </motion.div>
        <div className="comparison__grid">
          {comparisonColumns.map((column, columnIndex) => <motion.article
            className={`comparison-panel comparison-panel--${column.id}`}
            key={column.id}
            initial={reduceMotion ? false : { opacity: 0, x: columnIndex === 0 ? -24 : 24, y: 12, filter: 'blur(7px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .25 }}
            transition={{ delay: .24 + columnIndex * .08, duration: .64, ease }}
          >
            <h3><MiniIcon name={column.icon} />{column.label}</h3>
            <ul>{column.points.map((point, index) => <motion.li
              key={point}
              initial={reduceMotion ? false : { opacity: 0, x: columnIndex === 0 ? -10 : 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .8 }}
              transition={{ delay: .34 + index * .045, duration: .38, ease }}
            ><span />{point}</motion.li>)}</ul>
          </motion.article>)}
        </div>
      </section>
      {/* FAQ: expandable objections and pre-engagement detail. */}
      <section className="faq" id="faq" aria-labelledby="faq-title">
        <div className="faq__intro">
          <motion.p
            className="section-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: .52, ease }}
          ><span />Questions, answered</motion.p>
          <motion.h2
            id="faq-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(7px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ delay: .1, duration: .64, ease }}
          >The useful details, before we begin.</motion.h2>
          <motion.p
            className="faq__contact"
            initial={reduceMotion ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .6 }}
            transition={{ delay: .2, duration: .54, ease }}
          >Have a particular repeat in mind? <a href="mailto:hello@hushwork.studio">Tell us about it</a></motion.p>
        </div>
        <motion.div
          className="faq__list"
          variants={staggerContainerVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: .35 }}
        >
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index
            const panelId = `faq-panel-${index}`
            return <motion.article
              className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
              key={item.question}
              variants={entranceVariants({ x: 24, y: 8 }, .56, index * .07)}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <CaretDown aria-hidden="true" weight="bold" />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && <motion.div
                  className="faq-item__answer"
                  id={panelId}
                  role="region"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ height: { duration: .34, ease }, opacity: { duration: .2, ease } }}
                ><motion.p
                  initial={reduceMotion ? false : { y: -8, filter: 'blur(4px)' }}
                  animate={{ y: 0, filter: 'blur(0px)' }}
                  exit={reduceMotion ? undefined : { y: -4, filter: 'blur(3px)' }}
                  transition={{ duration: .28, ease }}
                >{item.answer}</motion.p></motion.div>}
              </AnimatePresence>
            </motion.article>
          })}
        </motion.div>
      </section>
      {/* Closing CTA: direct contact route and return path into workflow. */}
      <section className="closing" id="contact" aria-labelledby="closing-title">
        <motion.div
          className="closing__line"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scaleX: .3 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: .8 }}
          transition={{ duration: .9, ease }}
        />
        <div className="closing__content">
          <motion.div
            className="closing__brand"
            initial={reduceMotion ? false : { opacity: 0, y: 14, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .7 }}
            transition={{ delay: .08, duration: .54, ease }}
          ><HushworkMark /><span>Hushwork</span></motion.div>
          <motion.h2
            id="closing-title"
            initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .6 }}
            transition={{ delay: .16, duration: .68, ease }}
          >What would your team do with a clearer week?</motion.h2>
          <motion.div
            className="closing__actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .7 }}
            transition={{ delay: .27, duration: .56, ease }}
          >
            <a className="closing__action closing__action--primary" href="mailto:hello@hushwork.studio">Map a workflow <ArrowUpRight /></a>
            <a className="closing__action closing__action--secondary" href="#workflow">See where to start</a>
          </motion.div>
        </div>
      </section>
    </main>
    {/* Footer: newsletter capture and secondary navigation. */}
    <motion.footer
      className="site-footer"
      initial={reduceMotion ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: .2 }}
      transition={{ duration: .7, ease }}
    >
      <motion.a
        className="site-footer__notch"
        href="#top"
        aria-label="Back to the top"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: .9, filter: 'blur(4px)' }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: .8 }}
        transition={reduceMotion ? { duration: .18, ease: reducedEase } : { type: 'spring', duration: .3, bounce: 0, delay: .36 }}
      ><HushworkMark /><span>Hushwork</span></motion.a>
      <div className="site-footer__main">
        <motion.div
          className="site-footer__lead"
          initial={reduceMotion ? false : { opacity: 0, x: -16, filter: 'blur(5px)' }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: .5 }}
          transition={{ delay: .18, duration: .58, ease }}
        >
          <h2>Useful systems.<br />Human judgment intact.</h2>
          <p>A quiet note on practical AI-assisted work.</p>
          <form className="site-footer__newsletter" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">Work email</label>
            <input id="footer-email" type="email" placeholder="name@company.com" autoComplete="email" required />
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          {footerColumns.map((column, columnIndex) => <motion.div
            key={column.label}
            initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(5px)' }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: .5 }}
            transition={{ delay: .25 + columnIndex * .09, duration: .54, ease }}
          >
            <h3>{column.label}</h3>
            {column.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </motion.div>)}
        </nav>
      </div>
      <motion.div
        className="site-footer__meta"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={reduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: .8 }}
        transition={{ delay: .46, duration: .5, ease }}
      >
        <span>Hushwork Studio Â© 2026</span>
        <span>Quiet systems, clearly handed over.</span>
        <a href="#top">Privacy</a>
      </motion.div>
    </motion.footer>
    </>
  )
}

export default App
