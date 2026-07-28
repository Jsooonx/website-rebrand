import {
  Aperture,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Atom,
  ChartLineUp,
  Check,
  CircleNotch,
  CirclesFour,
  CirclesThreePlus,
  Crosshair,
  Cube,
  GitBranch,
  Handshake,
  Lightning,
  List,
  MagnifyingGlass,
  Minus,
  Paperclip,
  Polygon,
  Plus,
  Pulse,
  Robot,
  ArrowsClockwise,
  UserFocus,
  X,
} from '@phosphor-icons/react'
import { useRef, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Approach', href: '#approach' },
  { label: 'Systems', href: '#systems' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
]

const easing = [0.22, 1, 0.36, 1] as const

const collaborators = [
  { name: 'Junction Health', Mark: Aperture },
  { name: 'Field & Form', Mark: Polygon },
  { name: 'Common Table', Mark: CirclesFour },
  { name: 'Northline', Mark: Atom },
  { name: 'Relay House', Mark: Cube },
]

const proofPoints = [
  { value: '74%', label: 'Less appointment briefing time', Icon: Pulse },
  { value: '6h', label: 'Returned to each project lead weekly', Icon: ChartLineUp },
  { value: '<1 day', label: 'Human-approved vendor replies', Icon: CircleNotch },
]

const services = [
  {
    index: '01',
    code: 'Map',
    title: 'Workflow Mapping',
    image: '/images/service-workflow-mapping.jpg',
    imageAlt: 'Hands arranging a physical service blueprint and decision route',
    outputs: ['Service blueprint', 'Friction audit', 'Decision map', 'Priority brief'],
  },
  {
    index: '02',
    code: 'Assist',
    title: 'AI Assist Design',
    image: '/images/service-ai-assist.jpg',
    imageAlt: 'Operator placing a human-review card into a workflow route',
    outputs: ['Prompt system', 'Routing logic', 'Review states', 'Working prototype'],
  },
  {
    index: '03',
    code: 'Embed',
    title: 'Operating Handover',
    image: '/images/service-operating-handover.jpg',
    imageAlt: 'Two operators reviewing a printed handover guide beside a route board',
    outputs: ['Implementation plan', 'Team guide', 'Training session', 'Improvement rhythm'],
  },
]

const visionCaseSlides = [
  {
    src: '/images/vision-human-review-system.jpg',
    alt: 'Graphite laptop displaying a workflow with a visible human-review checkpoint',
    title: 'Junction Health briefing route',
    description: 'A reviewable preparation layer turned scattered appointment inputs into a concise brief for five clinic teams.',
    metrics: [
      { value: '74%', label: 'Less prep time' },
      { value: '5', label: 'Clinic locations' },
      { value: '9 min', label: 'Reviewed brief' },
    ],
  },
  {
    src: '/images/service-workflow-mapping.jpg',
    alt: 'Hands arranging a physical service blueprint and decision route',
    title: 'Northline intake decision map',
    description: 'A physical mapping sprint made every intake branch, owner, and escalation point visible before automation began.',
    metrics: [
      { value: '31%', label: 'Fewer handoffs' },
      { value: '8', label: 'Decision points' },
      { value: '2 days', label: 'Mapping sprint' },
    ],
  },
  {
    src: '/images/service-operating-handover.jpg',
    alt: 'Two operators reviewing a printed handover guide beside a route board',
    title: 'Relay House operating handover',
    description: 'A traceable operating guide gave the internal team clear review states, ownership, and a repeatable improvement rhythm.',
    metrics: [
      { value: '12', label: 'Operators trained' },
      { value: '3', label: 'Review states' },
      { value: '90 min', label: 'Team handover' },
    ],
  },
]

const processSteps = [
  {
    index: '01',
    code: 'Observe',
    title: 'Analyze & discover',
    description: 'We trace the real workflow, business goal, and operating constraint before deciding where an assist belongs.',
    Icon: MagnifyingGlass,
    nodes: ['Goals', 'Friction', 'Owners'],
    status: 'Trace active',
    stamp: 'SC—P01 / 12.084',
    telemetry: [{ value: '03', label: 'Scopes' }, { value: '12', label: 'Signals' }, { value: '01', label: 'Owner' }],
  },
  {
    index: '02',
    code: 'Map',
    title: 'Plan the route',
    description: 'We turn the findings into a clear decision map with inputs, review points, fallbacks, and accountable owners.',
    Icon: GitBranch,
    nodes: ['Input', 'Decision', 'Fallback'],
    status: 'Route checked',
    stamp: 'SC—P02 / V1.4',
    telemetry: [{ value: '08', label: 'Branches' }, { value: '03', label: 'Reviews' }, { value: '02', label: 'Fallbacks' }],
  },
  {
    index: '03',
    code: 'Build',
    title: 'Build the assist',
    description: 'We prototype the smallest useful system, connect its working logic, and keep human judgment visible in the loop.',
    Icon: Robot,
    nodes: ['Prepare', 'Review', 'Release'],
    status: 'Assist online',
    stamp: 'SC—P03 / BUILD',
    telemetry: [{ value: '06', label: 'Inputs' }, { value: '01', label: 'Gate' }, { value: 'ON', label: 'Trace' }],
  },
  {
    index: '04',
    code: 'Embed',
    title: 'Embed & improve',
    description: 'We hand over the operating rhythm, train the team, and measure where the system should become clearer next.',
    Icon: ArrowsClockwise,
    nodes: ['Train', 'Measure', 'Refine'],
    status: 'Rhythm live',
    stamp: 'SC—P04 / W06',
    telemetry: [{ value: '12', label: 'Operators' }, { value: '06', label: 'Weeks' }, { value: '31%', label: 'Delta' }],
  },
]

const rise = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: easing } },
}

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28, ease: easing } },
}

const headlineReveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.52, ease: easing } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: easing } },
}

const microReveal = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: easing } },
}

const visionChipReveal = {
  hidden: {
    width: 0,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0,
  },
  visible: {
    width: 'var(--vision-chip-width)',
    marginLeft: '.16em',
    marginRight: '.16em',
    opacity: 1,
    transition: { delay: 0.28, duration: 0.82, ease: easing },
  },
}

const visionImageReveal = {
  hidden: { opacity: 0, scale: 1.08, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { delay: 0.48, duration: 0.52, ease: easing },
  },
}

const caseImageVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 72, scale: 1.015 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -42, scale: 1.006 }),
}

const reducedCaseImageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

const caseCopyVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 18, filter: 'blur(4px)' }),
  center: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: (direction: number) => ({ opacity: 0, x: direction * -12, filter: 'blur(4px)' }),
}

const reducedCaseCopyVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

function PixelField({ position }: { position: 'top' | 'bottom' }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`pixel-field pixel-field--${position}`}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reducedMotion ? { duration: 0.2 } : { duration: 0.55, delay: position === 'top' ? 0.08 : 0.7 }}
    >
      {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
    </motion.div>
  )
}

function DottedRail({ side }: { side: 'left' | 'right' }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`dotted-rail dotted-rail--${side}`}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reducedMotion ? { duration: 0.2 } : { duration: 0.45, delay: side === 'right' ? 0.66 : 0.76 }}
    >
      {Array.from({ length: 12 }, (_, index) => <span key={index}>‹</span>)}
    </motion.div>
  )
}

function SignalMark() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="mark-frame"
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0.18 } : { type: 'spring', duration: 0.74, bounce: 0, delay: 0.28 }}
    >
      <i className="anchor anchor--tl" />
      <i className="anchor anchor--tr" />
      <i className="anchor anchor--bl" />
      <i className="anchor anchor--br" />

      <div
        className="signal-orbit"
        role="img"
        aria-label="Signal Craft aperture logo"
      >
        <motion.img
          className="signal-logo"
          src="/brand/signal-craft-aperture.png"
          alt=""
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={reducedMotion ? { duration: 0.2 } : { type: 'spring', duration: 0.56, bounce: 0, delay: 0.64 }}
        />
      </div>
    </motion.div>
  )
}

function BrandSymbol() {
  return (
    <span className="brand-symbol" aria-hidden="true">
      <img src="/brand/signal-craft-aperture.png" alt="" />
    </span>
  )
}

function LogoCloud() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.section
      className="logo-cloud"
      aria-labelledby="logo-cloud-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: 0.03 } } }}
    >
      <motion.div
        className="logo-cloud__intro"
        variants={reducedMotion ? fade : rise}
        transition={{ duration: 0.42, ease: easing }}
      >
        <span aria-hidden="true">//</span>
        <p id="logo-cloud-title">Trusted by teams<br />building clearer systems</p>
      </motion.div>

      <div className="logo-cloud__track" role="list" aria-label="Selected collaborators">
        {collaborators.map(({ name, Mark }) => (
          <motion.div
            className="collaborator"
            key={name}
            role="listitem"
            variants={reducedMotion ? fade : rise}
            transition={{ duration: 0.42, ease: easing }}
          >
            <Mark className="collaborator__mark" size={32} weight="fill" aria-hidden="true" />
            <span>{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function AboutSection() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.section
      className="about-section"
      id="approach"
      aria-labelledby="about-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } } }}
    >
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />

      <motion.div
        className="about-heading"
        variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } } }}
      >
        <motion.span className="section-kicker" variants={reducedMotion ? fade : rise} transition={{ duration: 0.44, ease: easing }}>
          <i aria-hidden="true" /> About / 01
        </motion.span>
        <motion.h2 id="about-title" variants={reducedMotion ? fade : headlineReveal}>
          We believe useful AI starts with the work, not the tool.
        </motion.h2>
      </motion.div>

      <div className="about-body">
        <motion.div
          className="proof-panel"
          variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } } }}
        >
          <motion.p className="proof-intro" variants={reducedMotion ? fade : rise} transition={{ duration: 0.44, ease: easing }}>
            Better handoffs leave a trace. These outcomes show what clear, reviewable systems can return.
          </motion.p>

          <div className="proof-list" role="list" aria-label="Selected client outcomes">
            {proofPoints.map(({ value, label, Icon }) => (
              <motion.div className="proof-item" role="listitem" key={value} variants={reducedMotion ? fade : rise} transition={{ duration: 0.46, ease: easing }}>
                <span className="proof-item__icon" aria-hidden="true"><Icon size={19} weight="bold" /></span>
                <span className="proof-item__copy">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.figure
          className="about-visual"
          variants={reducedMotion ? fade : {
            hidden: { opacity: 0, clipPath: 'inset(0 0 14% 0)' },
            visible: { opacity: 1, clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.62, ease: easing } },
          }}
        >
          <img
            src="/images/about-workflow-studio.jpg"
            alt="Signal Craft team mapping a service workflow together in a bright studio"
          />
          <div className="visual-pixels" aria-hidden="true"><i /><i /><i /></div>
        </motion.figure>
      </div>

      <div className="about-hatch" aria-hidden="true" />
    </motion.section>
  )
}

function ServicesSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="services-section" id="systems" aria-labelledby="services-title">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />

      <motion.header
        className="services-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } } }}
      >
        <motion.span className="section-kicker" variants={reducedMotion ? fade : rise} transition={{ duration: 0.44, ease: easing }}>
          <i aria-hidden="true" /> Services / 02
        </motion.span>
        <motion.h2 id="services-title" variants={reducedMotion ? fade : headlineReveal}>
          Less chasing. More forward motion.
        </motion.h2>
      </motion.header>

      <motion.div
        className="service-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ visible: { transition: { staggerChildren: 0.065, delayChildren: 0.03 } } }}
      >
        {services.map((service) => (
          <motion.article
            className="service-card"
            key={service.index}
            tabIndex={0}
            variants={reducedMotion ? fade : cardReveal}
          >
            <img className="service-card__media" src={service.image} alt={service.imageAlt} loading="lazy" />
            <div className="service-card__shade" aria-hidden="true" />

            <div className="service-card__top">
              <span className="service-card__code"><i aria-hidden="true" /> {service.code}</span>
              <span className="service-card__hint">Hover to reveal</span>
            </div>

            <span className="service-card__number" aria-hidden="true">{service.index}</span>

            <div className="service-card__content">
              <h3>{service.title}</h3>
              <ul>
                {service.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="services-hatch" aria-hidden="true" />
    </section>
  )
}

function VisionSection() {
  const reducedMotion = useReducedMotion()
  const [activeCaseSlide, setActiveCaseSlide] = useState(0)
  const [caseDirection, setCaseDirection] = useState<1 | -1>(1)
  const selectedCase = visionCaseSlides[activeCaseSlide]

  const moveCaseImage = (direction: 1 | -1) => {
    setCaseDirection(direction)
    setActiveCaseSlide((current) => (current + direction + visionCaseSlides.length) % visionCaseSlides.length)
  }

  return (
    <section className="vision-section" id="vision" aria-labelledby="vision-title">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />

      <motion.div
        className="vision-intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } } }}
      >
        <motion.span className="section-kicker" variants={reducedMotion ? fade : rise} transition={{ duration: 0.44, ease: easing }}>
          <i aria-hidden="true" /> Our vision / 03
        </motion.span>
        <motion.h2 id="vision-title" variants={fade} transition={{ duration: 0.38, ease: easing }}>
          <span className="vision-line">Every useful system</span>
          <span className="vision-line vision-line--expand">
            <span>starts</span>
            <motion.span
              className="vision-chip"
              aria-hidden="true"
              variants={reducedMotion ? fade : visionChipReveal}
            >
              <motion.img
                src="/images/vision-human-review-system.jpg"
                alt=""
                variants={reducedMotion ? fade : visionImageReveal}
              />
            </motion.span>
            <span>with a</span>
          </span>
          <span className="vision-line">close look at the work.</span>
        </motion.h2>
        <motion.p variants={reducedMotion ? fade : rise}>
          We make the route, decision, and review point visible before automation enters the room. Technology follows the work—not the other way around.
        </motion.p>
        <motion.span className="vision-route" variants={reducedMotion ? fade : rise}>
          Observe → map → prepare → review → hand over
        </motion.span>
      </motion.div>

      <div className="vision-case-chapter">
        <motion.article
          className="vision-case"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 12% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.62, ease: easing }}
        >
          <AnimatePresence initial={false} custom={caseDirection} mode="popLayout">
            <motion.img
              key={selectedCase.src}
              className="vision-case__image"
              src={selectedCase.src}
              alt={selectedCase.alt}
              loading="lazy"
              custom={caseDirection}
              variants={reducedMotion ? reducedCaseImageVariants : caseImageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reducedMotion ? 0.12 : 0.48, ease: easing }}
            />
          </AnimatePresence>
          <div className="vision-case__wash" aria-hidden="true" />
          <div className="vision-pixels vision-pixels--left" aria-hidden="true"><i /><i /><i /></div>
          <div className="vision-pixels vision-pixels--right" aria-hidden="true"><i /><i /><i /></div>

          <motion.div
            className="vision-case__panel"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.44, delay: 0.1, ease: easing }}
          >
            <AnimatePresence initial={false} custom={caseDirection} mode="wait">
              <motion.div
                key={selectedCase.src}
                className="vision-case__panel-copy"
                custom={caseDirection}
                variants={reducedMotion ? reducedCaseCopyVariants : caseCopyVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reducedMotion ? 0.1 : 0.32, ease: easing }}
              >
                <span className="case-label">
                  Featured system / {String(activeCaseSlide + 1).padStart(2, '0')}
                </span>
                <h3>{selectedCase.title}</h3>
                <p>{selectedCase.description}</p>
                <dl className="case-metrics">
                  {selectedCase.metrics.map((metric) => (
                    <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>
                  ))}
                </dl>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="case-index" aria-label="Featured system image carousel">
            <motion.button
              type="button"
              aria-label="Show previous image"
              onClick={() => moveCaseImage(-1)}
              whileTap={reducedMotion ? undefined : { scale: 0.96 }}
            >
              <ArrowLeft size={17} weight="bold" />
            </motion.button>
            <span aria-live="polite">
              {String(activeCaseSlide + 1).padStart(2, '0')} / {String(visionCaseSlides.length).padStart(2, '0')}
            </span>
            <motion.button
              type="button"
              aria-label="Show next image"
              onClick={() => moveCaseImage(1)}
              whileTap={reducedMotion ? undefined : { scale: 0.96 }}
            >
              <ArrowRight size={17} weight="bold" />
            </motion.button>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

function ProcessCard({ step, index }: { step: (typeof processSteps)[number]; index: number }) {
  const cardRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start 18%'],
  })
  const y = useTransform(scrollYProgress, [0, 0.72], [56, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.82, 1])

  return (
    <article
      ref={cardRef}
      className="process-card"
      style={{ '--stack-index': index } as CSSProperties}
    >
      <motion.div className="process-card__surface" style={reducedMotion ? undefined : { y, opacity }}>
        <motion.div
          className={`process-card__visual process-card__visual--${index + 1}`}
          aria-hidden="true"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.42 }}
          variants={{ visible: { transition: { staggerChildren: 0.038, delayChildren: 0.08 } } }}
        >
          <motion.span className="process-card__code" variants={reducedMotion ? fade : microReveal}>{step.code}</motion.span>
          <motion.span className="process-card__stamp" variants={reducedMotion ? fade : microReveal}>{step.stamp}</motion.span>
          <motion.span className="process-card__status" variants={reducedMotion ? fade : microReveal}>
            <i /> {step.status}
          </motion.span>
          <motion.div className={`process-card__diagram process-card__diagram--${index + 1}`} variants={reducedMotion ? fade : microReveal}>
            {index === 0 && (
              <div className="diagram-discover">
                <span className="diagram-block diagram-block--dark">{step.nodes[0]}</span>
                <span className="diagram-block diagram-block--ghost diagram-block--d2" />
                <span className="diagram-block diagram-block--ghost diagram-block--d3" />
                <span className="diagram-block diagram-block--accent">Challenges</span>
                <span className="diagram-block diagram-block--ghost diagram-block--d5" />
                <span className="diagram-block diagram-block--soft">Audience</span>
                <span className="diagram-lens"><step.Icon size={38} weight="regular" /></span>
              </div>
            )}
            {index === 1 && (
              <div className="diagram-flow">
                <span className="diagram-flow__label"><step.Icon size={16} weight="bold" /> Onboarding route</span>
                <i className="diagram-flow__line diagram-flow__line--1" />
                <i className="diagram-flow__line diagram-flow__line--2" />
                <i className="diagram-flow__line diagram-flow__line--3" />
                <span className="diagram-flow__box diagram-flow__box--1">{step.nodes[0]}</span>
                <span className="diagram-flow__box diagram-flow__box--2" />
                <span className="diagram-flow__box diagram-flow__box--3">{step.nodes[1]}</span>
                <span className="diagram-flow__box diagram-flow__box--4">{step.nodes[2]}</span>
                <i className="diagram-flow__dot" />
              </div>
            )}
            {index === 2 && (
              <div className="diagram-build">
                <span className="diagram-build__ghost diagram-build__ghost--left" />
                <span className="diagram-build__ghost diagram-build__ghost--right" />
                <div className="diagram-workspace">
                  <div className="diagram-workspace__bar"><i /><i /><i /><step.Icon size={18} weight="bold" /></div>
                  <span className="diagram-workspace__signal" />
                  <div className="diagram-workspace__body">
                    <span>{step.nodes[0]}</span><span>{step.nodes[1]}</span><span>{step.nodes[2]}</span>
                  </div>
                </div>
              </div>
            )}
            {index === 3 && (
              <div className="diagram-embed">
                <span className="diagram-embed__axis" />
                <div className="diagram-chart" aria-hidden="true">
                  <i /><i /><i className="diagram-chart__focus"><b /></i><i /><i />
                </div>
                <span className="diagram-embed__badge"><step.Icon size={18} weight="bold" /> {step.nodes[1]}</span>
              </div>
            )}
          </motion.div>
          <motion.div className="process-card__telemetry" variants={reducedMotion ? fade : microReveal}>
            {step.telemetry.map((item) => (
              <span key={item.label}><b>{item.value}</b><small>{item.label}</small></span>
            ))}
          </motion.div>
          <motion.span className="process-card__scan-track" variants={reducedMotion ? fade : microReveal}><i /></motion.span>
        </motion.div>
        <div className="process-card__copy">
          <span className="process-card__index">/{step.index}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      </motion.div>
    </article>
  )
}

function ProcessSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />

      <motion.div
        className="process-intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.03 } } }}
      >
        <motion.span className="section-kicker" variants={reducedMotion ? fade : rise}>
          <i aria-hidden="true" /> Process / 04
        </motion.span>
        <motion.h2 id="process-title" variants={reducedMotion ? fade : headlineReveal}>
          Make the work clear. Then automate.
        </motion.h2>
        <motion.p variants={reducedMotion ? fade : rise}>
          Four deliberate steps turn scattered work into a system your team can understand, review, and improve.
        </motion.p>
        <motion.a className="process-cta" href="#contact" variants={reducedMotion ? fade : rise}>
          <span><CirclesThreePlus size={18} weight="bold" /></span>
          Map a workflow
          <ArrowRight size={16} weight="bold" />
        </motion.a>
      </motion.div>

      <div className="process-stack" aria-label="Signal Craft process">
        {processSteps.map((step, index) => <ProcessCard key={step.index} step={step} index={index} />)}
      </div>
    </section>
  )
}

const marqueeRows = [
  ['Creative', 'Innovative', 'Intentional'],
  ['Visionary', 'Systematic', 'Human-centered'],
]

function MarqueeStatement() {
  const reducedMotion = useReducedMotion()
  const [marqueeReady, setMarqueeReady] = useState(false)

  const rowVariants = {
    hiddenReduced: { opacity: 0 },
    hiddenTop: { opacity: 0, y: -22, filter: 'blur(4px)' },
    hiddenBottom: { opacity: 0, y: 22, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  return (
    <section className="marquee-statement" aria-label="Signal Craft principles">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />
      <div className="marquee-statement__stripe marquee-statement__stripe--top" aria-hidden="true" />

      <motion.div
        className={`marquee-row marquee-row--top${marqueeReady ? ' is-running' : ''}`}
        initial={reducedMotion ? 'hiddenReduced' : 'hiddenTop'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={rowVariants}
        transition={{ duration: 0.58, delay: 0.04, ease: easing }}
        aria-label={marqueeRows[0].join(', ')}
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeRows[0].map((word) => <span className="marquee-word" key={`${copy}-${word}`}>{word}<i className="marquee-separator" /></span>)}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={`marquee-row marquee-row--bottom${marqueeReady ? ' is-running' : ''}`}
        initial={reducedMotion ? 'hiddenReduced' : 'hiddenBottom'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={rowVariants}
        transition={{ duration: 0.58, delay: 0.12, ease: easing }}
        onAnimationComplete={() => { if (!reducedMotion) setMarqueeReady(true) }}
        aria-label={marqueeRows[1].join(', ')}
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {marqueeRows[1].map((word) => <span className="marquee-word" key={`${copy}-${word}`}>{word}<i className="marquee-separator" /></span>)}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="marquee-statement__stripe marquee-statement__stripe--bottom" aria-hidden="true" />
    </section>
  )
}

const testimonials = [
  {
    image: '/images/testimonial-daniel-kim.png',
    imageAlt: 'Daniel Kim writing beside his laptop in a quiet concrete studio',
    eyebrow: 'Beyond expectations',
    quote: 'Signal Craft transformed how we prepare product decisions. The system feels considered, reviewable, and genuinely useful to the people doing the work.',
    name: 'Daniel Kim',
    role: 'Product Director, Northline',
  },
  {
    image: '/images/testimonial-amara-okafor.png',
    imageAlt: 'Amara Okafor discussing a workflow wall with a colleague',
    eyebrow: 'Clarity we could act on',
    quote: 'They found the friction our team had learned to work around, then gave us a simpler operating rhythm without losing human judgment.',
    name: 'Amara Okafor',
    role: 'Founder, Common Table',
  },
  {
    image: '/images/testimonial-mei-tanaka.png',
    imageAlt: 'Mei Tanaka reviewing service maps at a studio table',
    eyebrow: 'Built to keep improving',
    quote: 'The handover was as thoughtful as the build. Our team understood the logic, owned the review points, and could improve the system independently.',
    name: 'Mei Tanaka',
    role: 'Service Design Lead, Field & Form',
  },
]

const reasons = [
  { title: 'Strategy driven', copy: 'We connect the system to the decision, outcome, and operating constraint that matter.', Icon: Crosshair },
  { title: 'Built for results', copy: 'Every workflow is shaped around a measurable improvement your team can actually see.', Icon: Lightning },
  { title: 'Collaborative process', copy: 'We build closely with the people who own the work, review the edge cases, and run it daily.', Icon: Handshake },
  { title: 'Consistent excellence', copy: 'Clear standards, visible checkpoints, and thoughtful handovers keep quality in the loop.', Icon: UserFocus },
]

function WhyUsSection() {
  const reducedMotion = useReducedMotion()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonial = testimonials[activeTestimonial]
  const moveTestimonial = (direction: number) => setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length)

  return (
    <section className="why-us" id="why-us" aria-labelledby="why-us-title">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />
      <div className="why-us__stripe" aria-hidden="true" />

      <motion.div className="testimonial-stage" initial={reducedMotion ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 9% 0)' }} whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }} viewport={{ once: true, amount: 0.28 }} transition={{ duration: reducedMotion ? 0.2 : 0.62, ease: easing }}>
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={testimonial.image}
            className="testimonial-stage__image"
            src={testimonial.image}
            alt={testimonial.imageAlt}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.015, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.008, filter: 'blur(4px)' }}
            transition={{ duration: reducedMotion ? 0.01 : 0.42, ease: easing }}
          />
        </AnimatePresence>
        <div className="testimonial-pixels testimonial-pixels--left" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="testimonial-pixels testimonial-pixels--right" aria-hidden="true"><i /><i /><i /><i /></div>

        <motion.div className="testimonial-card" initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: reducedMotion ? 0.2 : 0.44, delay: reducedMotion ? 0 : 0.08, ease: easing }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={activeTestimonial} className="testimonial-card__content" initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }} transition={{ duration: reducedMotion ? 0.01 : 0.3, ease: easing }}>
              <span>{testimonial.eyebrow}</span>
              <blockquote>“{testimonial.quote}”</blockquote>
              <div><strong>{testimonial.name}</strong><small>{testimonial.role}</small></div>
            </motion.div>
          </AnimatePresence>
          <div className="testimonial-card__controls">
            <span>{String(activeTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => moveTestimonial(-1)} aria-label="Previous testimonial"><ArrowLeft size={18} weight="bold" /></button>
            <button type="button" onClick={() => moveTestimonial(1)} aria-label="Next testimonial"><ArrowRight size={18} weight="bold" /></button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="why-us__body" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.03 } } }}>
        <motion.div className="why-us__heading" variants={reducedMotion ? fade : headlineReveal}>
          <span className="section-kicker"><i aria-hidden="true" /> Why choose us</span>
          <h2 id="why-us-title">Help businesses<br />scale with AI.</h2>
        </motion.div>
        <motion.div className="why-us__pixels" variants={reducedMotion ? fade : rise} aria-hidden="true"><i /><i /><i /><i /><i /></motion.div>
        <div className="reason-grid">
          {reasons.map(({ title, copy, Icon }, index) => (
            <motion.article className="reason-card" key={title} variants={reducedMotion ? fade : cardReveal}>
              <span className="reason-card__icon"><Icon size={18} weight="bold" /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>0{index + 1}</small>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const pricingPlans = [
  {
    name: 'Foundation sprint',
    availability: 'Booking August',
    description: 'For teams that need one important workflow made clear, reviewable, and ready to test.',
    price: '$2,800',
    cadence: 'per sprint',
    featured: false,
    features: ['Workflow and friction audit', 'Decision-route blueprint', 'One working AI assist', 'Human review checkpoints', 'Implementation brief', 'Two stakeholder sessions', '14-day delivery window', '30-day improvement check'],
  },
  {
    name: 'Embedded build',
    availability: 'Available now',
    description: 'For established teams ready to design, ship, and hand over a complete operating system.',
    price: '$6,400',
    cadence: 'from / project',
    featured: true,
    features: ['Multi-workflow system design', 'Production-ready integrations', 'Custom assist and routing logic', 'Review and fallback states', 'Team training and playbook', 'Weekly decision sessions', 'Priority build support', '60-day improvement rhythm'],
  },
]

function PricingSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />

      <motion.header className="pricing-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.55 }} variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } } }}>
        <motion.span className="section-kicker" variants={reducedMotion ? fade : rise}><i aria-hidden="true" /> Pricing plans</motion.span>
        <motion.h2 id="pricing-title" variants={reducedMotion ? fade : headlineReveal}>Plans that<br />scale with you.</motion.h2>
        <motion.p variants={reducedMotion ? fade : rise}>Clear starting points, shaped around the work—not a pile of unused features.</motion.p>
      </motion.header>

      <motion.div className="pricing-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } } }}>
        {pricingPlans.map((plan, index) => (
          <div className="pricing-grid__cell" key={plan.name}>
            <motion.article className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`} variants={reducedMotion ? fade : cardReveal} whileHover={reducedMotion ? undefined : { y: -4 }}>
              <div className="pricing-card__pixels" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <div className="pricing-card__topline">
                <span>{plan.name}</span>
                <small><i /> {plan.availability}</small>
              </div>
              <h3>{plan.description}</h3>
              <div className="pricing-card__price">
                <strong>{plan.price}</strong>
                <span>{plan.cadence}</span>
                <motion.a href="#contact">Get started <ArrowRight size={15} weight="bold" /></motion.a>
              </div>
              <ul>
                {plan.features.map((feature) => <li key={feature}><i><Check size={11} weight="bold" /></i>{feature}</li>)}
              </ul>
              <span className="pricing-card__index">0{index + 1} / 02</span>
            </motion.article>
          </div>
        ))}
      </motion.div>
      <div className="pricing-section__stripe" aria-hidden="true" />
    </section>
  )
}

const faqs = [
  {
    question: 'Can we start with one specific workflow?',
    answer: 'Yes. Most strong engagements begin with one high-friction route. We map the work, define its review points, and build the smallest useful system before expanding the scope.',
  },
  {
    question: 'How long does a typical AI systems project take?',
    answer: 'A focused Foundation sprint typically takes two to three weeks. Embedded builds usually run six to ten weeks, depending on integrations, review requirements, and the number of workflows involved.',
  },
  {
    question: 'Do you work with teams internationally?',
    answer: 'Yes. Signal Craft is based in Jakarta and works remotely with teams worldwide. Workshops, reviews, documentation, and handovers are designed to work clearly across time zones.',
  },
  {
    question: 'Can you integrate with our current tools?',
    answer: 'Usually. We design around the systems your team already trusts, then recommend new infrastructure only where it removes real friction or improves reliability.',
  },
  {
    question: 'What happens after the system is delivered?',
    answer: 'Every engagement includes a documented handover, team training, visible operating rules, and an improvement rhythm so your team can run and refine the system without depending on us.',
  },
]

function FaqSection() {
  const reducedMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(1)

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />
      <div className="faq-pixels" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>

      <motion.header className="faq-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } } }}>
        <motion.span className="section-kicker" variants={reducedMotion ? fade : rise}><i aria-hidden="true" /> FAQs</motion.span>
        <motion.h2 id="faq-title" variants={reducedMotion ? fade : headlineReveal}>Before you get started.</motion.h2>
        <motion.p variants={reducedMotion ? fade : rise}>A few useful answers before we map the first workflow.</motion.p>
      </motion.header>

      <motion.div className="faq-list" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.03 } } }}>
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index
          const answerId = `faq-answer-${index}`
          return (
            <motion.article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question} variants={reducedMotion ? fade : cardReveal}>
              <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? null : index)}>
                <span>{faq.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.span key={isOpen ? 'minus' : 'plus'} initial={reducedMotion ? false : { opacity: 0, scale: 0.25, filter: 'blur(4px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }} transition={{ type: 'spring', duration: reducedMotion ? 0.01 : 0.3, bounce: 0 }}>
                      {isOpen ? <Minus size={15} weight="bold" /> : <Plus size={15} weight="bold" />}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div id={answerId} className="faq-item__answer" initial={reducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0.01 : 0.3, ease: easing }}>
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </motion.div>
      <div className="faq-section__stripe" aria-hidden="true" />
    </section>
  )
}

function ContactSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />

      <motion.div
        className="contact-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.03 } } }}
      >
        <div className="contact-hero__grid" aria-hidden="true" />
        <div className="contact-hero__routes contact-hero__routes--left" aria-hidden="true"><i /><i /><i /></div>
        <div className="contact-hero__routes contact-hero__routes--right" aria-hidden="true"><i /><i /><i /></div>
        <motion.h2 id="contact-title" variants={reducedMotion ? fade : headlineReveal}>
          Let’s build<br />your AI system.
        </motion.h2>
        <motion.div className="contact-hero__mark" variants={reducedMotion ? fade : { hidden: { opacity: 0, scale: .94, filter: 'blur(4px)' }, visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: .46, ease: easing } } }}><BrandSymbol /></motion.div>
        <motion.div className="contact-hero__pixels" aria-hidden="true" variants={reducedMotion ? fade : { hidden: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' }, visible: { opacity: 1, clipPath: 'inset(0 0% 0 0%)', transition: { duration: .62, ease: easing } } }}><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></motion.div>
        <motion.span className="contact-hero__tag contact-hero__tag--left" variants={reducedMotion ? fade : microReveal}><i /> Reviewable systems</motion.span>
        <motion.span className="contact-hero__tag contact-hero__tag--right" variants={reducedMotion ? fade : microReveal}><i /> Worldwide support</motion.span>
      </motion.div>

      <motion.div className="contact-panel" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }} variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } } }}>
        <div className="contact-panel__details">
          <motion.div className="contact-block contact-block--primary" variants={reducedMotion ? fade : rise}>
            <span className="contact-label"><i /> Contact</span>
            <a href="mailto:hello@signalcraft.studio">hello@signalcraft.studio</a>
            <a href="tel:+622150842600">(+62) 21 5084 2600</a>
          </motion.div>
          <motion.div className="contact-block contact-block--offices" variants={reducedMotion ? fade : rise}>
            <span className="contact-label"><i /> Studios</span>
            <div><strong>Jakarta</strong><small>SCBD, South Jakarta<br />Indonesia 12190</small></div>
            <div><strong>Singapore</strong><small>Robinson Road<br />Singapore 068914</small></div>
          </motion.div>
        </div>

        <motion.form className="contact-form" onSubmit={(event) => event.preventDefault()} variants={reducedMotion ? fade : rise}>
          <label><span>Your name</span><input name="name" type="text" placeholder="Enter your full name" autoComplete="name" required /></label>
          <label><span>Your email</span><input name="email" type="email" placeholder="Enter your email" autoComplete="email" required /></label>
          <label><span>More about the project</span><textarea name="project" placeholder="What should become clearer?" rows={4} required /></label>
          <div className="contact-form__actions">
            <button className="contact-form__attach" type="button"><Paperclip size={15} weight="bold" /> Add an attachment</button>
            <motion.button className="contact-form__submit" type="submit">Submit message <ArrowRight size={16} weight="bold" /></motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  )
}

const footerLinks = [
  { label: 'About', href: '#approach' },
  { label: 'Services', href: '#systems' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Behance', href: 'https://www.behance.net' },
]

function Footer() {
  const reducedMotion = useReducedMotion()
  const footerRise = reducedMotion ? fade : rise

  return (
    <motion.footer
      className="site-footer"
      id="footer"
      aria-label="Footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{ visible: { transition: { staggerChildren: 0.035, delayChildren: 0.02 } } }}
    >
      <i className="section-anchor section-anchor--tl" aria-hidden="true" />
      <i className="section-anchor section-anchor--tr" aria-hidden="true" />
      <i className="section-anchor section-anchor--bl" aria-hidden="true" />
      <i className="section-anchor section-anchor--br" aria-hidden="true" />

      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <motion.a key={link.label} href={link.href} variants={footerRise}>
            <span>{link.label}</span><i aria-hidden="true" />
          </motion.a>
        ))}
      </nav>

      <motion.div className="footer-brand-stage" variants={reducedMotion ? fade : headlineReveal}>
        <div className="footer-brand-grid" aria-hidden="true" />
        <div className="footer-pixels footer-pixels--left" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="footer-pixels footer-pixels--right" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <a className="footer-brand" href="#home" aria-label="Signal Craft, back to home">
          <BrandSymbol />
          <span>Signal Craft</span>
        </a>
      </motion.div>

      <motion.div className="footer-bottom" variants={footerRise}>
        <div className="footer-socials">
          {socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
        </div>
        <small>© 2026 Signal Craft. All rights reserved.</small>
        <a className="footer-back" href="#home">Back to home <ArrowUpRight size={13} weight="bold" /></a>
      </motion.div>
    </motion.footer>
  )
}

function App() {
  const reducedMotion = useReducedMotion()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <main className="page-shell">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="draft-grid" aria-hidden="true" />
        <div className="frame-line frame-line--outer" aria-hidden="true">
          <i className="page-anchor page-anchor--tl" />
          <i className="page-anchor page-anchor--tr" />
          <i className="page-anchor page-anchor--bl" />
          <i className="page-anchor page-anchor--br" />
        </div>
        <PixelField position="top" />
        <PixelField position="bottom" />

        <motion.header
          className="navbar"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } } }}
        >
          <motion.a className="brand" href="#home" variants={reducedMotion ? fade : rise} transition={{ duration: 0.42, ease: easing }}>
            <BrandSymbol />
            <span>Signal Craft</span>
          </motion.a>

          <nav aria-label="Main navigation">
            {navItems.map((item) => (
              <motion.a key={item.label} href={item.href} variants={reducedMotion ? fade : rise} transition={{ duration: 0.4, ease: easing }}>
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.a className="start-button" href="#contact" variants={reducedMotion ? fade : rise} transition={{ duration: 0.42, ease: easing }}>
            Start a project <ArrowUpRight size={15} weight="bold" />
          </motion.a>
          <motion.button
            className="menu-button"
            type="button"
            aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            variants={reducedMotion ? fade : rise}
            onClick={() => setMobileNavOpen((open) => !open)}
            whileTap={reducedMotion ? undefined : { scale: 0.96 }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                key={mobileNavOpen ? 'close' : 'open'}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
                transition={{ type: 'spring', duration: reducedMotion ? 0.01 : 0.3, bounce: 0 }}
              >
                {mobileNavOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </motion.header>

        <AnimatePresence initial={false}>
          {mobileNavOpen && (
            <motion.nav
              className="mobile-nav"
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, filter: 'blur(3px)' }}
              transition={{ duration: reducedMotion ? 0.12 : 0.22, ease: easing }}
            >
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileNavOpen(false)}>
                  <span>{item.label}</span>
                  <ArrowRight size={15} weight="bold" />
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        <div className="hero-stage">
          <motion.div
            className="availability"
            initial="hidden"
            animate="visible"
            variants={reducedMotion ? fade : rise}
            transition={{ duration: 0.44, delay: 0.13, ease: easing }}
          >
            <span className="availability__dot" />
            Independent AI systems studio
            <span className="availability__location">JKT / WORLDWIDE</span>
          </motion.div>

          <motion.div
            className="guide guide--vertical"
            aria-hidden="true"
            initial={reducedMotion ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easing }}
          />
          <motion.div
            className="guide guide--upper"
            aria-hidden="true"
            initial={reducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: easing }}
          />
          <motion.div
            className="guide guide--lower"
            aria-hidden="true"
            initial={reducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.24, ease: easing }}
          />

          <DottedRail side="right" />
          <DottedRail side="left" />

          <motion.h1
            className="hero-title"
            id="hero-title"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.075, delayChildren: 0.28 } } }}
          >
            <span className="title-clip title-clip--left">
              <motion.span variants={reducedMotion ? fade : headlineReveal}>MAKE THE</motion.span>
            </span>
            <span className="title-clip title-clip--right">
              <motion.span variants={reducedMotion ? fade : headlineReveal}>SIGNAL LOUDER</motion.span>
            </span>
          </motion.h1>

          <SignalMark />

          <motion.div
            className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.58 } } }}
          >
            <motion.p variants={reducedMotion ? fade : rise} transition={{ duration: 0.46, ease: easing }}>
              We design AI-assisted workflows that clear the repeat work from your team’s day—without taking judgment out of the loop.
            </motion.p>
            <motion.div className="hero-actions" variants={reducedMotion ? fade : rise} transition={{ duration: 0.46, ease: easing }}>
              <a className="button button--light" href="#systems">
                Explore systems <ArrowRight size={17} weight="bold" />
              </a>
              <a className="button button--dark" href="#contact">
                <span className="button__icon"><CirclesThreePlus size={18} weight="bold" /></span>
                Map a workflow
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="corner-note"
            initial={reducedMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.78, ease: easing }}
          >
            <span>SC / SYSTEM 01</span>
            <span>ROUTE → REVIEW → RELEASE</span>
          </motion.div>
        </div>

        <div className="frame-meta" aria-hidden="true">
          <span>SC—01</span>
          <span>1920 / 1080</span>
          <span>© 2026</span>
        </div>

        {!reducedMotion && <div className="signal-pulse" aria-hidden="true" />}
      </section>
      <LogoCloud />
      <AboutSection />
      <ServicesSection />
      <VisionSection />
      <ProcessSection />
      <MarqueeStatement />
      <WhyUsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
