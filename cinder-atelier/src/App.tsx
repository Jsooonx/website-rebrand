import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion, useInView, useReducedMotion, type Variants } from 'framer-motion'

const navItems = ['Visions', 'Practice', 'Process', 'Experience', 'Services', 'Testimonials', 'FAQ', 'Contact']
const collaborators = [
  { name: 'ARC / OBJECTS', mark: 1, style: 'about__partner--serif' },
  { name: 'NIGHT / EDITION', mark: 2, style: 'about__partner--wide' },
  { name: 'MIRE / HOUSE', mark: 3, style: 'about__partner--italic' },
  { name: 'POEM / 17', mark: 4, style: 'about__partner--mono' },
  { name: 'LUMEN / FORM', mark: 5, style: 'about__partner--caps' },
  { name: 'CULT / INDEX', mark: 6, style: 'about__partner--round' },
]

const featuredWorks = [
  { title: 'Signal / One', discipline: 'Digital identity / 2026', image: '/assets/work-signal.webp', alt: 'A fashion-forward figure in a chrome visor with an ember-orange light ribbon.', accent: 'Digital ritual' },
  { title: 'Obsidian / Form', discipline: 'Object direction / 2025', image: '/assets/work-vessel.webp', alt: 'A sculptural smoked-glass and black ceramic perfume vessel in a warm dark studio.', accent: 'Material study' },
  { title: 'Veil / House', discipline: 'Culture campaign / 2025', image: '/assets/work-veil.webp', alt: 'A suspended dark textile installation traced by ember-orange light in a concrete room.', accent: 'Spatial language' },
]

const entranceCadence = 0.055

const sectionItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (order = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.42, delay: order * entranceCadence, ease: [0.22, 1, 0.36, 1] as const } }),
}

const labelCharacter: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (order = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.24, delay: order * entranceCadence, ease: [0.22, 1, 0.36, 1] as const } }),
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: (order = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.46, delay: order * entranceCadence, ease: [0.22, 1, 0.36, 1] as const } }),
}

const staggerGroup: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.04, staggerChildren: entranceCadence } },
}

const testimonialFeatureItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const } },
}

const testimonialFeatureCard: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.46, delayChildren: 0.08, staggerChildren: entranceCadence, ease: [0.22, 1, 0.36, 1] as const } },
}

const staged = (reduceMotion: boolean | null, order: number, variants: Variants = sectionItem) => reduceMotion ? {} : {
  variants,
  custom: order,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
}

const stagedGroup = (reduceMotion: boolean | null) => reduceMotion ? {} : {
  variants: staggerGroup,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
}

function AboutSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <section className="about" id="practice" aria-labelledby="about-title">
      <div className="about__topline">
        <motion.span {...staged(reduceMotion, 0)}>01</motion.span><motion.i {...staged(reduceMotion, .35)} /><motion.span {...staged(reduceMotion, .7)}>/ POINT OF VIEW</motion.span>
      </div>
      <div className="about__content">
        <p className="about__side-label" aria-hidden="true">{'/STANCE'.split('').map((character, index) => <motion.span key={`${character}-${index}`} {...staged(reduceMotion, 1 + index * .45, labelCharacter)}>{character}</motion.span>)}</p>
        <motion.h2 id="about-title" {...staged(reduceMotion, 5.6)}>We make a point of view <em>visible before it becomes familiar.</em></motion.h2>
        <div className="about__lower">
          <motion.figure className="about__portrait" {...staged(reduceMotion, 6.5)}><img src="/assets/cinder-portrait.webp" loading="lazy" decoding="async" alt="A fictional Cinder Atelier creative director in a dark material library." /></motion.figure>
          <motion.div className="about__copy" {...staged(reduceMotion, 7.5)}><p className="about__kicker">CINDER ATELIER / JAKARTA + WORLDWIDE</p><p>We are an independent practice for brands that need more than a polished surface. We shape the image, system, and digital presence that lets a clear idea hold its ground.</p></motion.div>
          <motion.a className="about__cta" href="mailto:hello@cinder-atelier.studio" {...staged(reduceMotion, 8.5)}>BEGIN A CONVERSATION <span aria-hidden="true">↗</span></motion.a>
        </div>
      </div>
      <div className="about__collaborators">
        <motion.p {...staged(reduceMotion, 9.7)}>/ IN GOOD COMPANY</motion.p>
        <motion.div className="about__logo-window" {...staged(reduceMotion, 10.6)}><div className="about__logo-track">{[...collaborators, ...collaborators].map((collaborator, index) => <div className={`about__partner ${collaborator.style}`} key={`${collaborator.name}-${index}`}><img src={`/assets/partner-marks/mark-${collaborator.mark}.png`} alt={index < collaborators.length ? `${collaborator.name} abstract partner mark` : ''} aria-hidden={index >= collaborators.length || undefined} /><span>{collaborator.name}</span></div>)}</div></motion.div>
      </div>
    </section>
  )
}

function WorkSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <section className="work" id="visions" aria-labelledby="work-title">
      <div className="work__topline"><motion.span {...staged(reduceMotion, 0)}>02</motion.span><motion.i {...staged(reduceMotion, .35)} /><motion.span {...staged(reduceMotion, .7)}>/ CASE FILES</motion.span></div>
      <div className="work__intro">
        <p className="work__side-label" aria-hidden="true">{'/ARCHIVE'.split('').map((character, index) => <motion.span key={`${character}-${index}`} {...staged(reduceMotion, 1 + index * .45, labelCharacter)}>{character}</motion.span>)}</p>
        <motion.h2 id="work-title" {...staged(reduceMotion, 5.3)}><small>..</small> worlds in motion</motion.h2>
      </div>
      <div className="work__stack">
        {featuredWorks.map((work, index) => index === 0 ? (
          <motion.article className="work-card work-card--1" key={work.title} {...staged(reduceMotion, 6.1, cardItem)}>
            <motion.div className="work-card__image" {...staged(reduceMotion, 6.8)}><img src={work.image} loading="lazy" decoding="async" alt={work.alt} /></motion.div>
            <div className="work-card__meta"><motion.span {...staged(reduceMotion, 7.7)}>{work.accent}</motion.span><motion.span {...staged(reduceMotion, 8.6)}>{work.discipline}</motion.span><motion.strong {...staged(reduceMotion, 9.5)}>{work.title}</motion.strong></div>
          </motion.article>
        ) : (
          <article className={`work-card work-card--${index + 1}`} key={work.title}><div className="work-card__image"><img src={work.image} loading="lazy" decoding="async" alt={work.alt} /></div><div className="work-card__meta"><span>{work.accent}</span><span>{work.discipline}</span><strong>{work.title}</strong></div></article>
        ))}
      </div>
    </section>
  )
}

function ServicesSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  const services = [
    { title: 'Moving image', copy: 'Moving-image systems that give a launch, product, or cultural moment its own velocity.', images: [{ title: 'EMBER CURRENT', type: 'MOTION STUDY', src: '/assets/service-signal-ember.webp' }, { title: 'AFTERGLOW', type: 'ART FILM', src: '/assets/service-signal-afterglow.webp' }] },
    { title: 'Visual matter', copy: 'Original image directions and tactile visual languages built to make the abstract feel immediate.', images: [{ title: 'SILVER FOLD', type: 'MATERIAL STUDY', src: '/assets/service-material-silver.webp' }, { title: 'SOFT VOLUME', type: 'OBJECT DIRECTION', src: '/assets/service-material-volume.webp' }] },
    { title: 'Launch terrain', copy: 'A complete visual territory for the moment your audience first meets the work.', images: [{ title: 'PALE DISTANCE', type: 'CAMPAIGN STILL', src: '/assets/service-campaign-distance.webp' }, { title: 'VEIL STUDY', type: 'EDITORIAL IMAGE', src: '/assets/service-campaign-veil.webp' }] },
  ]

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__topline"><motion.span {...staged(reduceMotion, 0)}>05</motion.span><motion.i {...staged(reduceMotion, .35)} /><motion.span {...staged(reduceMotion, .7)}>/ OFFERINGS</motion.span></div>
      <div className="services__intro">
        <p className="services__side-label" aria-hidden="true">{'/CAPABILITIES'.split('').map((character, index) => <motion.span key={`${character}-${index}`} {...staged(reduceMotion, 1 + index * .45, labelCharacter)}>{character}</motion.span>)}</p>
        <motion.h2 id="services-title" {...staged(reduceMotion, 5.4)}><small>..</small> ways to work</motion.h2>
      </div>
      <div className="services__stack">
        {services.map((service, index) => (
          <motion.article className={`service-card service-card--${index + 1}`} key={service.title} {...(index === 0 ? staged(reduceMotion, 6.1, cardItem) : {})}>
            <div className="service-card__copy"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.copy}</p></div>
            <div className="service-card__images">
              {service.images.map((image) => <figure className="service-thumb" key={image.title}><img className="service-thumb__image" src={image.src} loading="lazy" decoding="async" alt={`${image.title}, original Cinder Atelier service artwork.`} /><figcaption><strong>{image.title}</strong><span>{image.type}</span></figcaption></figure>)}
            </div>
          </motion.article>
        ))}
      </div>
      <a className="services__cta" href="mailto:hello@cinder-atelier.studio">START A CONVERSATION <span aria-hidden="true">↗</span></a>
    </section>
  )
}

function TestimonialsSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [hasEntered, setHasEntered] = useState(Boolean(reduceMotion))
  const railRef = useRef<HTMLDivElement>(null)
  const railInView = useInView(railRef, { once: true, amount: .2 })
  const testimonials = [
    { quote: 'They gave a complex launch a clear visual pulse: fast, precise, and unmistakably ours.', name: 'MAYA SEKAR', role: 'Brand director', initials: 'MS' },
    { quote: 'Great eye for detail and a rare sense of narrative. The work landed before we had to explain it.', name: 'DANIEL OKORO', role: 'Creative producer', initials: 'DO' },
    { quote: 'Clear communication, thoughtful choices, and a system strong enough to move with the business.', name: 'LINA MOREAU', role: 'Head of marketing', initials: 'LM' },
    { quote: 'Cinder brought confidence to the room, then made sure every surface held that feeling.', name: 'JUN PARK', role: 'Founder, Noma Objects', initials: 'JP' },
  ]
  const rail = [...testimonials, ...testimonials]

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__topline"><motion.span {...staged(reduceMotion, 0)}>06</motion.span><motion.i {...staged(reduceMotion, .35)} /><motion.span {...staged(reduceMotion, .7)}>/ FIELD VOICES</motion.span></div>
      <motion.h2 id="testimonials-title" {...staged(reduceMotion, 2.1)}><small>..</small> words from the room</motion.h2>
      <div className="testimonials__rail" aria-label="Client testimonials" ref={railRef}>
        <div className={`testimonials__track ${hasEntered && !reduceMotion ? 'is-looping' : ''}`}>
          {rail.map((testimonial, index) => {
            const isDuplicate = index >= testimonials.length
            const originalIndex = index % testimonials.length
            return <motion.article className="testimonial-card" key={`${testimonial.name}-${index}`} aria-hidden={isDuplicate || undefined}
              initial={reduceMotion ? false : isDuplicate ? { opacity: 0 } : { opacity: 0, y: originalIndex === 0 ? 22 : 148, x: originalIndex === 0 ? 0 : -originalIndex * 310 }}
              animate={reduceMotion ? { opacity: 1, x: 0, y: 0 } : isDuplicate ? hasEntered ? { opacity: 1 } : undefined : railInView ? { opacity: 1, x: 0, y: 0 } : undefined}
              transition={{ duration: isDuplicate ? .16 : .44, delay: isDuplicate ? 0 : originalIndex * .11, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => { if (!isDuplicate && originalIndex === testimonials.length - 1) setHasEntered(true) }}>
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">★★★★★ <span>5 / 5</span></div>
              <p>{testimonial.quote}</p>
              <footer><span className={`testimonial-card__avatar testimonial-card__avatar--${originalIndex}`} aria-hidden="true">{testimonial.initials}</span><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></footer>
            </motion.article>
          })}
        </div>
      </div>
      <motion.div className="testimonials__feature" {...stagedGroup(reduceMotion)}><motion.blockquote variants={testimonialFeatureItem}>“Professional, thoughtful, and easy to collaborate with. The process was smooth from first signal to final form.”</motion.blockquote><motion.article className="testimonial-feature-card" variants={testimonialFeatureCard}><motion.div className="testimonial-feature-card__stars" variants={testimonialFeatureItem}>★★★★★ <span>5 / 5</span></motion.div><motion.div className="testimonial-feature-card__person" variants={testimonialFeatureItem}><img src="/assets/cinder-portrait.webp" loading="lazy" decoding="async" alt="Fictional portrait of Lina Moreau." /><div><strong>LINA MOREAU</strong><span>HEAD OF MARKETING</span></div></motion.div><motion.p variants={testimonialFeatureItem}>“A calm, rigorous collaborator from the first conversation through launch.”</motion.p></motion.article></motion.div>
    </section>
  )
}

function FaqSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const questions = [
    { question: 'WHERE DO WE START?', answer: 'With the tension that needs resolving: a launch, a shift in perception, or a system that no longer reflects the organisation behind it.' },
    { question: 'HOW DO YOU BUILD A DIRECTION?', answer: 'We listen for the real signal first, then turn it into a working point of view through references, language, and useful experiments.' },
    { question: 'WHO NEEDS TO BE IN THE ROOM?', answer: 'The people who hold context and can make decisions. A focused team keeps momentum high and feedback clear.' },
    { question: 'WHAT DOES A COLLABORATION INCLUDE?', answer: 'The scope is shaped around the outcome: direction, identity, image, and digital behavior can move as one system or as a focused intervention.' },
    { question: 'HOW CAN WE CHECK THE FIT?', answer: 'Send a short note about the challenge. We will respond with the closest relevant material and a direct recommendation for the next step.' },
  ]

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__topline"><motion.span {...staged(reduceMotion, 0)}>07</motion.span><motion.i {...staged(reduceMotion, .35)} /><motion.span {...staged(reduceMotion, .7)}>/ COMMON GROUND</motion.span></div>
      <div className="faq__frame">
        <p className="faq__side-label" aria-hidden="true">{'/DISPATCH'.split('').map((character, index) => <motion.span key={`${character}-${index}`} {...staged(reduceMotion, 1 + index * .45, labelCharacter)}>{character}</motion.span>)}</p>
        <motion.h2 id="faq-title" {...staged(reduceMotion, 3.3)}>A few useful things to clarify before we begin.</motion.h2>
        <div className="faq__list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            const contentId = `faq-answer-${index}`
            return <motion.div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question} {...staged(reduceMotion, 4.6 + index * .6)}><button type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => setOpenIndex(isOpen ? null : index)}><span>{item.question}</span><i aria-hidden="true" /></button><AnimatePresence initial={false}>{isOpen && <motion.div id={contentId} className="faq-item__answer" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}><p>{item.answer}</p></motion.div>}</AnimatePresence></motion.div>
          })}
        </div>
        <motion.div className="faq__cta" {...staged(reduceMotion, 8.2)}><div><h3>Need a sharper answer?</h3><p>Send the context, even if it is still rough. We will help locate the first useful move.</p></div><a href="mailto:hello@cinder-atelier.studio">SEND A SIGNAL <span aria-hidden="true">↗</span></a></motion.div>
      </div>
    </section>
  )
}

function FooterSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  const socials = ['Instagram', 'LinkedIn', 'Behance', 'Are.na', 'Vimeo']

  return (
    <footer className="site-footer" id="contact" aria-labelledby="footer-title">
      <div className="site-footer__topline"><motion.a className="footer-brand" href="#top" {...staged(reduceMotion, 0)}><img src="/assets/cinder-mark.png" alt="" aria-hidden="true" /><span>CINDER ATELIER</span></motion.a><nav aria-label="Social links">{socials.map((social, index) => <motion.a href={`https://${social.toLowerCase().replace('.', '')}.com`} target="_blank" rel="noreferrer" key={social} {...staged(reduceMotion, .7 + index * .5)}>{social}</motion.a>)}</nav></div>
      <div className="site-footer__contact"><motion.p {...staged(reduceMotion, 3.5)}>• Taking on selected launches and long-term systems.</motion.p><motion.h2 id="footer-title" {...staged(reduceMotion, 4.2)}>Bring the next signal into focus.</motion.h2><motion.a className="site-footer__cta" href="mailto:hello@cinder-atelier.studio" {...staged(reduceMotion, 5.2)}>START A PROJECT <span aria-hidden="true">↗</span></motion.a></div>
      <motion.h3 {...staged(reduceMotion, 6.2)}>OPEN A CHANNEL</motion.h3>
      <motion.figure className="site-footer__art" {...staged(reduceMotion, 7.1, cardItem)}><img src="/assets/work-signal.webp" loading="lazy" decoding="async" alt="An original Cinder Atelier ember-orange signal study." /></motion.figure>
      <div className="site-footer__bottom"><span>© {new Date().getFullYear()} CINDER ATELIER. ALL RIGHTS RESERVED.</span><span>JAKARTA / WORKING WORLDWIDE.</span></div>
    </footer>
  )
}

function ProcessSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  const principles = [
    { className: 'process-card--aperture', title: 'Clarity before craft', copy: 'We name the decision before we make the thing.', image: '/assets/process-aperture.webp', alt: 'An abstract ember-orange beam passing through smoked glass panels.' },
    { className: 'process-card--visor', title: 'Form follows signal', copy: 'A clear system makes every expression feel considered.', image: '/assets/process-visor.webp', alt: 'Experimental silver and black visor glasses resting on a pale stone plinth.' },
    { className: 'process-card--honesty', title: 'No borrowed certainty', copy: 'We work in the open: constraints, choices, and trade-offs included.' },
    { className: 'process-card--contour', title: 'Pressure makes the edge', copy: 'The useful detail is usually where culture and utility meet.', image: '/assets/process-contour.webp', alt: 'A close abstract landscape of black folded material traced by an orange filament.' },
    { className: 'process-card--pace', title: 'Pace is a design tool', copy: 'We move with intent, then leave room for the work to prove itself.' },
  ]

  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="process__topline"><motion.span {...staged(reduceMotion, 0)}>03</motion.span><motion.i {...staged(reduceMotion, .35)} /><motion.span {...staged(reduceMotion, .7)}>/ WORKING METHOD</motion.span></div>
      <div className="process__frame">
        <p className="process__side-label" aria-hidden="true">{'/METHOD'.split('').map((character, index) => <motion.span key={`${character}-${index}`} {...staged(reduceMotion, 1 + index * .45, labelCharacter)}>{character}</motion.span>)}</p>
        <motion.h2 id="process-title" {...staged(reduceMotion, 5.1)}><small>..</small> operating rituals</motion.h2>
        <motion.p className="process__lead" {...staged(reduceMotion, 6.1)}>Every Cinder engagement is shaped around the real conditions of the brand, its audience, and its moment.</motion.p>
        <motion.p className="process__note" {...staged(reduceMotion, 5.8)}>A method flexible enough for a campaign, identity, or new digital world.</motion.p>
        <motion.div className="process__bento" {...stagedGroup(reduceMotion)}>
          {principles.map((principle, index) => (
            <motion.article className={`process-card ${principle.className}`} key={principle.title} variants={cardItem}>
              {principle.image && <img src={principle.image} loading="lazy" decoding="async" alt={principle.alt} />}
              <div className="process-card__content"><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.copy}</p></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CountUp({ value, suffix = '', reduceMotion, startDelay = 0 }: { value: number, suffix?: string, reduceMotion: boolean | null, startDelay?: number }) {
  const element = useRef<HTMLSpanElement>(null)
  const inView = useInView(element, { once: true, amount: .45 })
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduceMotion) {
      setDisplayed(value)
      return undefined
    }
    const duration = 1080
    let frame = 0
    const startAnimation = () => {
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setDisplayed(Math.round(value * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }
    const timer = window.setTimeout(startAnimation, startDelay)
    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [inView, reduceMotion, startDelay, value])

  return <span className="count-up" ref={element}>{displayed.toLocaleString('en-US')}{suffix}</span>
}

function ExperienceSection({ reduceMotion }: { reduceMotion: boolean | null }) {
  const signals = [
    { value: 12, label: 'founder sessions' },
    { value: 34, label: 'active signals' },
    { value: 86, label: 'decisions made visible' },
    { value: 480, label: 'delivered moments' },
  ]
  const figures = [
    { value: 8, suffix: '+', label: 'Years in motion' },
    { value: 24, suffix: '', label: 'Systems launched' },
    { value: 61, suffix: '', label: 'Collaborators across disciplines' },
    { value: 480, suffix: '+', label: 'Culture touchpoints' },
  ]

  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="experience__topline"><motion.span {...staged(reduceMotion, 0)}>04</motion.span><motion.i {...staged(reduceMotion, .35)} /><motion.span {...staged(reduceMotion, .7)}>/ SIGNAL ARCHIVE</motion.span></div>
      <div className="experience__frame">
        <p className="experience__side-label" aria-hidden="true">{'/SIGNALS'.split('').map((character, index) => <motion.span key={`${character}-${index}`} {...staged(reduceMotion, 1 + index * .4, labelCharacter)}>{character}</motion.span>)}</p>
        <div className="experience__intro">
          <div className="experience__signals">{signals.map((signal, index) => <motion.div key={signal.label} {...staged(reduceMotion, 6 + index * .8)}><CountUp value={signal.value} reduceMotion={reduceMotion} /><span>{signal.label}</span></motion.div>)}</div>
          <div className="experience__statement"><motion.h2 id="experience-title" {...staged(reduceMotion, 7.2)}>A brand becomes tangible when its choices <em>carry feeling, hold form, and stay useful.</em></motion.h2><motion.p {...staged(reduceMotion, 8.2)}>Cinder joins direction, design, and digital behavior so an organisation can act like itself at every scale.</motion.p><motion.div className="experience__channels" {...staged(reduceMotion, 9.1)}><span>DIRECTION</span><span>DESIGN</span><span>BEHAVIOR</span></motion.div></div>
          <motion.figure className="experience__portrait" {...staged(reduceMotion, 8.6, cardItem)}><img src="/assets/cinder-portrait.webp" loading="lazy" decoding="async" alt="A fictional Cinder Atelier creative director in a dark material library." /></motion.figure>
        </div>
        <div className="experience__figures">
          <motion.h3 {...staged(reduceMotion, 10.2)}>/ FACTS & FIGURES</motion.h3>
          <motion.div className="experience__stat-grid" {...stagedGroup(reduceMotion)}>{figures.map((figure, index) => <motion.article key={figure.label} variants={cardItem}><CountUp value={figure.value} suffix={figure.suffix} reduceMotion={reduceMotion} startDelay={40 + index * entranceCadence * 1000} /><p>{figure.label}</p></motion.article>)}</motion.div>
        </div>
        <motion.div className="experience__stories" {...stagedGroup(reduceMotion)}>
          <motion.article className="experience-story" variants={cardItem}><img src="/assets/experience-object.webp" loading="lazy" decoding="async" alt="A satin-black sculptural object emerging from an ember-orange illuminated plane." /><div><strong>FIELD NOTE / 01</strong><h3>When form gives signal a physical edge.</h3><p>Materials, movement, and information work as one coherent gesture.</p></div></motion.article>
          <motion.article className="experience-story" variants={cardItem}><img src="/assets/experience-portal.webp" loading="lazy" decoding="async" alt="A solitary silhouette standing inside an ember-orange light portal in a dark gallery." /><div><strong>FIELD NOTE / 02</strong><h3>A clear threshold changes how a world is entered.</h3><p>We design the invitation as carefully as the destination.</p></div></motion.article>
        </motion.div>
      </div>
    </section>
  )
}

function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Jakarta',
  }).format(now)
}

function StackframePreview({ reduceMotion }: { reduceMotion: boolean | null }) {
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [isStackframePreview, setIsStackframePreview] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)
  const restoreMenuFocusRef = useRef(true)

  useEffect(() => {
    if (reduceMotion) return undefined
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenisRef.current = lenis
    let frame = 0
    const raf = (currentTime: number) => {
      lenis.raf(currentTime)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      if (lenisRef.current === lenis) lenisRef.current = null
      lenis.destroy()
    }
  }, [reduceMotion])

  useEffect(() => {
    setIsStackframePreview(new URLSearchParams(window.location.search).get('preview') === 'stackframe')
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        restoreMenuFocusRef.current = true
        setMenuOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      const focusable = [menuTriggerRef.current, ...Array.from(menuPanelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])].filter((element): element is HTMLElement => Boolean(element))
      const first = focusable[0]
      const last = focusable.at(-1)
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow
    const previousTouchAction = document.documentElement.style.touchAction

    lenisRef.current?.stop()
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.touchAction = 'none'
    window.addEventListener('keydown', onKeyDown)
    const frame = window.requestAnimationFrame(() => menuPanelRef.current?.querySelector<HTMLElement>('a[href]')?.focus({ preventScroll: true }))

    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousRootOverflow
      document.documentElement.style.touchAction = previousTouchAction
      lenisRef.current?.start()
      window.removeEventListener('keydown', onKeyDown)
      if (restoreMenuFocusRef.current) menuTriggerRef.current?.focus()
    }
  }, [menuOpen])

  const heroReveal = (step: number) => reduceMotion ? {} : {
    initial: { opacity: 0, y: 22, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.42, delay: 0.08 + step * 0.075, ease: [0.22, 1, 0.36, 1] as const },
  }

  return (
    <main>
      {isStackframePreview && <StackframePreview reduceMotion={reduceMotion} />}
      <section className={`hero ${menuOpen ? 'menu-open' : ''}`} id="top" aria-labelledby="hero-title">
        <div className="hero__art" aria-hidden="true" />
        <div className="hero__veil" aria-hidden="true" />
        <nav className="hero__nav" aria-label="Primary navigation">
          <motion.a className="wordmark" href="#top" {...heroReveal(0)}><img className="wordmark__mark" src="/assets/cinder-mark.png" alt="" aria-hidden="true" /><span>CINDER<br />ATELIER</span></motion.a>
          <motion.a className="contact-link" href="mailto:hello@cinder-atelier.studio" {...heroReveal(1)}>HELLO@CINDER-ATELIER.STUDIO</motion.a>
          <motion.button ref={menuTriggerRef} className={`menu-trigger ${menuOpen ? 'is-open' : ''}`} type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => { restoreMenuFocusRef.current = true; setMenuOpen((open) => !open) }} {...heroReveal(2)}>
            <i /><i />
          </motion.button>
        </nav>

        <aside id="site-menu" className={`site-menu ${menuOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!menuOpen}>
          <div ref={menuPanelRef} className="site-menu__panel">
            <div className="site-menu__glow" aria-hidden="true" />
            <div className="site-menu__topline"><span>FIELD INDEX / 2026</span><span>JAKARTA + WORLDWIDE</span></div>
            <nav className="site-menu__links" aria-label="Menu links">
              {navItems.map((item, index) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => { restoreMenuFocusRef.current = false; setMenuOpen(false) }}><span className="site-menu__number" aria-hidden="true">0{index + 1}</span>{item}</a>)}
            </nav>
            <div className="site-menu__footer"><a href="mailto:hello@cinder-atelier.studio">HELLO@CINDER-ATELIER.STUDIO <span aria-hidden="true">↗</span></a><p>BUILT FOR<br />THE UNSEEN.</p></div>
          </div>
        </aside>

        <div className="hero__utility">
          <motion.p {...heroReveal(3)}>ART DIRECTION<br />VISUAL IDENTITY<br />DIGITAL WORLDS</motion.p>
          <motion.p className="hero__time" {...heroReveal(4)}>JAKARTA /<br /><time><Clock /></time></motion.p>
        </div>

        <div className="hero__statement">
          <motion.div className="project-count" {...heroReveal(5)}><strong>/04</strong><span>ACTIVE<br />CASE FILES</span></motion.div>
          <h1 id="hero-title">
            <motion.span {...heroReveal(6)}>LEAVE A MARK</motion.span>
            <motion.span {...heroReveal(7)}>IN THE DARK.</motion.span>
          </h1>
        </div>

        <motion.div className="hero__footer" {...heroReveal(8)}>
          <a href="#visions">MOVE TO EXPLORE <span aria-hidden="true">↓</span></a>
          <div className="hero__rule" />
          <div className="hero__links">{navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</div>
        </motion.div>
      </section>
      <AboutSection reduceMotion={reduceMotion} />
      <WorkSection reduceMotion={reduceMotion} />
      <ProcessSection reduceMotion={reduceMotion} />
      <ExperienceSection reduceMotion={reduceMotion} />
      <ServicesSection reduceMotion={reduceMotion} />
      <TestimonialsSection reduceMotion={reduceMotion} />
      <FaqSection reduceMotion={reduceMotion} />
      <FooterSection reduceMotion={reduceMotion} />
    </main>
  )
}

export default App
