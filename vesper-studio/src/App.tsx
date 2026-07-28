import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, Globe2, Home, Layers3, Mail, Minus, PanelsTopLeft, PenTool, Plus, Sparkles, UserRound } from 'lucide-react'
import { FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import aboutPortrait from '../assets/kaelen-voss-portrait.png'
import arcFormLogo from '../assets/logos/arc-form.svg'
import fieldTheoryLogo from '../assets/logos/field-theory.svg'
import lumaIndexImage from '../assets/luma-index.png'
import meridianConsoleImage from '../assets/meridian-console.png'
import noxGridImage from '../assets/nox-grid.png'
import northernUnitLogo from '../assets/logos/northern-unit.svg'
import orbitCollectiveLogo from '../assets/logos/orbit-collective.svg'
import dariusColePortrait from '../assets/testimonials/darius-cole.png'
import leilaHaddadPortrait from '../assets/testimonials/leila-haddad.png'
import minaParkPortrait from '../assets/testimonials/mina-park.png'
import xDirectImage from '../assets/x-direct-mobile.png'

const nav = ['Home', 'Capabilities', 'Experience', 'Philosophy', 'Flagships', 'Process', 'Investment', 'Contact']
const navIcons = [Home, Layers3, Sparkles, UserRound, PanelsTopLeft, BriefcaseBusiness, Layers3, Mail]
const experiences = [
  { role: 'Product Designer', period: '2023 - Present', detail: 'Directing product narratives, interface systems, and launch experiences for AI and software teams ready to set the category standard.' },
  { role: 'UI/UX Designer', period: '2022 - 2023', detail: 'Translating complex product logic into focused journeys, precise interaction models, and systems that teams can actually ship.' },
  { role: 'Intern UI Designer', period: '2020 - 2021', detail: 'Building the foundations: visual studies, responsive components, and the craft discipline behind clear digital communication.' },
]
const workProjects = [
  { title: 'X-direct Mobile', category: 'Mobile App Design', date: 'May 2026', image: '/assets/x-direct-mobile.png', href: '/work/x-direct-mobile', alt: 'Abstract cyan and ember mobile product artwork for X-direct Mobile' },
  { title: 'Luma Index', category: 'Brand Identity', date: 'Apr 2026', image: '/assets/luma-index.png', href: '/work/luma-index', alt: 'Abstract amber light and smoked glass identity artwork for Luma Index' },
  { title: 'Nox Grid', category: 'Web Design', date: 'Mar 2026', image: '/assets/nox-grid.png', href: '/work/nox-grid', alt: 'Abstract spatial grid artwork for Nox Grid' },
  { title: 'Meridian Console', category: 'Product Design', date: 'Feb 2026', image: '/assets/meridian-console.png', href: '/work/meridian-console', alt: 'Abstract black product sculpture artwork for Meridian Console' },
]
const services = [
  { title: 'Identity Systems', number: '[01]', details: ['Visual language architecture', 'Signature mark direction', 'Launch-ready brand playbook'] },
  { title: 'Product Narratives', number: '[02]', details: ['Interaction architecture', 'Decision-ready user journeys', 'Responsive product foundations'] },
  { title: 'Webflow Engines', number: '[03]', details: ['Composable content infrastructure', 'Editorial interaction builds', 'Conversion performance tuning'] },
  { title: 'Framer Launches', number: '[04]', details: ['Bespoke code modules', 'Cinematic motion systems', 'Scalable publishing workflows'] },
]
const aboutContent = {
  label: 'Studio dossier',
  titleStrong: 'Every flagship begins with',
  titleMuted: 'a story worth engineering',
  description: 'Vesper turns complex products into visual narratives with purpose. The work begins with the friction, the ambition, and the precise moment a brand needs to become impossible to ignore.',
  profileLabel: '@vesper.studio',
}
const aboutImages = [
  { src: xDirectImage, alt: 'Cyan and ember mobile portal visual for X-direct Mobile', position: '48% 50%' },
  { src: noxGridImage, alt: 'Dark spatial grid interface visual for Nox Grid', position: '50% 50%' },
  { src: lumaIndexImage, alt: 'Amber glass identity visual for Luma Index', position: '50% 50%' },
  { src: meridianConsoleImage, alt: 'Obsidian console visual for Meridian Console', position: '50% 50%' },
  { src: aboutPortrait, alt: 'Portrait of Kaelen Voss, Vesper Studio founder', position: '50% 17%' },
]
type LogoCloudItem = {
  name: string
  src: string
  alt: string
  href?: string
}
const logoCloudItems: LogoCloudItem[] = [
  { name: 'Arc Form', src: arcFormLogo, alt: 'Arc Form logo' },
  { name: 'Northern Unit', src: northernUnitLogo, alt: 'Northern Unit logo' },
  { name: 'Field Theory', src: fieldTheoryLogo, alt: 'Field Theory logo' },
  { name: 'Orbit Collective', src: orbitCollectiveLogo, alt: 'Orbit Collective logo' },
]
type Testimonial = {
  quote: string
  reviewer: {
    name: string
    role: string
    image: string
  }
}
const testimonials: Testimonial[] = [
  {
    quote: 'Vesper turned a dense AI platform into a flagship our investors understood in seconds. The craft felt editorial; the system underneath was exact.',
    reviewer: { name: 'Mina Park', role: 'Co-founder, Helix Protocol', image: minaParkPortrait },
  },
  {
    quote: 'They found the story inside our product, then engineered every interaction around it. Launch week felt calm because nothing had been left to chance.',
    reviewer: { name: 'Darius Cole', role: 'VP Product, Northstar Systems', image: dariusColePortrait },
  },
  {
    quote: 'We needed authority without noise. Vesper gave us a visual language that matched the ambition of the company—and a system our team can evolve.',
    reviewer: { name: 'Leila Haddad', role: 'Founder, Asteria Ventures', image: leilaHaddadPortrait },
  },
]
type PricingPlan = {
  id: string
  name: string
  subtitle?: string
  price: string
  unit: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}
const pricingPlans: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Embedded Studio',
    subtitle: 'Senior design-engineering capacity reserved for your product every month.',
    price: '$12.5K',
    unit: '/ month',
    features: ['One active flagship stream', 'Weekly strategy and build cycles', 'Product UI, motion, and front-end delivery', 'Direct access to the studio lead', 'Priority iteration and launch support'],
    ctaLabel: 'Reserve monthly capacity',
    ctaHref: '/contact?plan=monthly',
    highlighted: true,
  },
  {
    id: 'project',
    name: 'Flagship Sprint',
    subtitle: 'A focused engagement for a decisive product launch or category-level rebrand.',
    price: '$28K+',
    unit: '/ project',
    features: ['Narrative and conversion architecture', 'Complete responsive design system', 'Cinematic interaction direction', 'Production-ready React implementation', 'Launch audit and 30-day support'],
    ctaLabel: 'Scope a flagship',
    ctaHref: '/contact?plan=project',
  },
]
type FAQItem = {
  id: string
  question: string
  answer: string
}
const faqItems: FAQItem[] = [
  { id: 'start-window', question: 'How quickly can a flagship engagement begin?', answer: 'Most projects begin within two to four weeks of scope approval. We use that lead time to align access, decision-makers, technical constraints, and the launch target before the first working session.' },
  { id: 'design-and-code', question: 'Do you handle both design and front-end execution?', answer: 'Yes. Vesper owns the narrative, interface system, motion direction, and production front end, so the visual intent survives implementation without a separate handoff layer.' },
  { id: 'build-stack', question: 'Which platforms and frameworks do you build with?', answer: 'Our primary stack is React and TypeScript, with Framer or Webflow when their publishing models fit the brief. Every recommendation follows the product, team, and operational requirements—not a preferred tool quota.' },
  { id: 'engagement-models', question: 'How do monthly partnerships differ from project sprints?', answer: 'Monthly partnerships reserve ongoing senior capacity for evolving products. Project sprints have a defined launch outcome, schedule, and release scope. Both include direct studio access and weekly decision cycles.' },
  { id: 'post-launch', question: 'What happens after the flagship launches?', answer: 'Every project includes a launch audit and support window. We can then transition into a monthly partnership for experimentation, new product surfaces, performance work, or continuous release support.' },
]
type FooterProfile = {
  eyebrow: string
  name: string
  role: string
  image: string
  logoText: string
  ctaLabel: string
  ctaHref: string
  copyright: string
}
type SocialLink = {
  label: string
  href: string
  icon: string
}
const footerProfile: FooterProfile = {
  eyebrow: 'Open channel',
  name: 'Kaelen Voss',
  role: 'Founder & Lead Creative Technologist',
  image: aboutPortrait,
  logoText: 'Vesper',
  ctaLabel: 'Book A Call',
  ctaHref: '/contact',
  copyright: '© 2026 Vesper Studio. All signals reserved.',
}
const footerSocialLinks: SocialLink[] = [
  { label: 'Vesper Studio on LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'Vesper Studio on GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'Vesper Studio on Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
]
const footerSocialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  dribbble: FaDribbble,
}

function Arrow() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" /></svg>
}

function LogoCloud({ items }: { items: LogoCloudItem[] }) {
  const reduceMotion = useReducedMotion()
  return <section className="logo-cloud" aria-labelledby="logo-cloud-title">
    <div className="logo-cloud-frame">
      <p id="logo-cloud-title" className="logo-cloud-label"><span aria-hidden="true" /> Trusted by teams building what is next</p>
      <div className="logo-cloud-row">
        <div className="logo-cloud-track" data-reduced={reduceMotion}>
          <div className="logo-cloud-group">
            {items.map((item) => item.href ? <a className="logo-cloud-item" href={item.href} key={item.name} aria-label={`Visit ${item.name}`}><img src={item.src} alt={item.alt} /></a> : <div className="logo-cloud-item" key={item.name}><img src={item.src} alt={item.alt} /></div>)}
          </div>
          {!reduceMotion && <div className="logo-cloud-group" aria-hidden="true">
            {items.map((item) => <div className="logo-cloud-item" key={`${item.name}-duplicate`}><img src={item.src} alt="" /></div>)}
          </div>}
        </div>
      </div>
    </div>
  </section>
}

export default function App() {
  const reduceMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [activeService, setActiveService] = useState<number | null>(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [testimonialDirection, setTestimonialDirection] = useState(1)
  const [activePricingId, setActivePricingId] = useState('monthly')
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqItems[0].id)
  const aboutGalleryRef = useRef<HTMLDivElement>(null)
  const aboutTouchStartRef = useRef<number | null>(null)
  const [aboutIndex, setAboutIndex] = useState(0)
  const [aboutDirection, setAboutDirection] = useState<-1 | 0 | 1>(0)
  const [aboutMetrics, setAboutMetrics] = useState({ cardWidth: 0, gap: 14, visible: 4 })
  const aboutCardStep = aboutMetrics.cardWidth + aboutMetrics.gap
  const aboutCarouselStart = aboutDirection === -1 ? aboutIndex - 1 : aboutIndex
  const aboutCarouselImages = Array.from(
    { length: aboutMetrics.visible + (aboutDirection === 0 ? 0 : 1) },
    (_, index) => aboutImages[(aboutCarouselStart + index + aboutImages.length) % aboutImages.length],
  )

  useEffect(() => {
    const gallery = aboutGalleryRef.current
    if (!gallery) return

    const measure = () => {
      const width = gallery.clientWidth
      const visible = width >= 680 ? 4 : width >= 460 ? 2 : 1
      const gap = width < 460 ? 12 : 14
      const cardWidth = (width - gap * (visible - 1)) / visible
      setAboutMetrics({ cardWidth, gap, visible })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(gallery)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => {
      setAboutDirection((current) => current === 0 ? 1 : current)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  const moveAboutGallery = (direction: number) => {
    if (aboutDirection !== 0) return
    if (reduceMotion) {
      setAboutIndex((current) => (current + direction + aboutImages.length) % aboutImages.length)
      return
    }
    setAboutDirection(direction > 0 ? 1 : -1)
  }

  const finishAboutMove = () => {
    if (aboutDirection === 0) return
    setAboutIndex((current) => (current + aboutDirection + aboutImages.length) % aboutImages.length)
    setAboutDirection(0)
  }

  const moveTestimonial = (direction: number) => {
    setTestimonialDirection(direction)
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[testimonialIndex]
  const activePricingPlan = pricingPlans.find((plan) => plan.id === activePricingId) ?? pricingPlans[0]
  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(7px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <>
    <main className="shell" id="home">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <div className="header-frame">
          <span className="frame-dot dot-left-top" /><span className="frame-dot dot-right-top" />
          <div className="topbar-content">
            <a className="brand" href="#home" aria-label="Vesper Studio home"><span className="mark"><i /><i /></span><span>Vesper</span></a>
            <span className="availability"><b aria-hidden="true" /> Available for <strong>2 flagships</strong></span>
            <span className="location">ZURICH, CH <br /><b>GLOBAL REMOTE</b></span>
            <button className="mobile-menu-button" aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
          </div>
          <span className="frame-dot dot-left-bottom" /><span className="frame-dot dot-right-bottom" />
        </div>
      </header>

      <aside className="dock" aria-label="Page sections">
        {nav.map((item, index) => { const Icon = navIcons[index]; return <a key={item} href={index === 0 ? '#home' : `#${item.toLowerCase()}`} className={index === 0 ? 'active' : ''} aria-label={item}><Icon aria-hidden="true" /></a> })}
      </aside>
      <nav id="mobile-nav" className={menuOpen ? 'mobile-nav open' : 'mobile-nav'} aria-label="Mobile page sections">{nav.map((item) => <a key={item} href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>

      <section className="hero" aria-labelledby="hero-title">
        <motion.p className="eyebrow" {...reveal(0.08)}><span /> INDEPENDENT DESIGN—ENGINEERING PRACTICE</motion.p>
        <motion.div className="portrait-wrap" {...reveal(0.18)}>
          <div className="portrait-grid" /><img src="/assets/kaelen-voss-portrait.png" alt="Kaelen Voss, founder and lead creative technologist" />
          <span className="portrait-code">K.V / 01—26</span><span className="portrait-glint" />
        </motion.div>
        <motion.div className="hero-copy" {...reveal(0.31)}>
          <span className="signature">Vesper</span>
          <p className="intro">Hi, I’m Kaelen Voss.<br />I build cinematic digital flagships for ambitious technology brands.</p>
          <h1 id="hero-title">High-precision <span>digital craft</span> for brands that lead in the dark.</h1>
          <div className="actions">
            <a className="button button-solid" href="/contact"><span>Get started</span><span className="arrow-swap"><Arrow /><Arrow /></span></a>
            <a className="button button-ghost" href="/work"><span>View my work</span></a>
          </div>
        </motion.div>
        <motion.div className="hero-bottom" {...reveal(0.48)}>
          <div className="socials"><a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a><a href="https://github.com" aria-label="GitHub"><FaGithub aria-hidden="true" /></a><a href="https://dribbble.com" aria-label="Dribbble"><FaDribbble aria-hidden="true" /></a></div>
          <p>DESIGNING THE NEXT<br />CATEGORY LEADERS</p><span className="scroll-cue">SCROLL TO EXPLORE <b>↓</b></span>
        </motion.div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="experience-frame">
          <div className="experience-intro">
            <p className="section-label"><span aria-hidden="true" /> Experiences</p>
            <h2 id="experience-title"><strong>Vesper shapes digital flagships with clarity and conviction.</strong> <span>Every engagement balances a sharp narrative with high-performance execution.</span></h2>
          </div>
          <ul className="experience-list">
            {experiences.map((experience, index) => {
              const isActive = activeExperience === index
              const isExpanded = expandedExperience === index
              const detailId = `experience-detail-${index}`
              return <li key={experience.role} className="experience-item" data-active={isActive} data-expanded={isExpanded}>
                <button
                  type="button"
                  onClick={() => { setActiveExperience(index); setExpandedExperience(isExpanded ? null : index) }}
                  onFocus={() => setActiveExperience(index)}
                  onMouseEnter={() => setActiveExperience(index)}
                  aria-pressed={isActive}
                  aria-expanded={isExpanded}
                  aria-controls={detailId}
                >
                  <span className="experience-role"><i aria-hidden="true" />{experience.role}</span>
                  <span className="period-badge">{experience.period}</span>
                  <ArrowUpRight className="experience-arrow" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false} mode="popLayout">
                  {isExpanded && <motion.div
                    className="experience-detail"
                    id={detailId}
                    initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0.16 : 0.32, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="experience-detail-inner"><p>{experience.detail}</p><span>Selected discipline <ArrowUpRight aria-hidden="true" /></span></div>
                  </motion.div>}
                </AnimatePresence>
              </li>
            })}
          </ul>
        </div>
      </section>

      <section className="work-stack" id="flagships" aria-labelledby="work-title">
        <div className="work-frame">
          <div className="work-heading"><h2 id="work-title"><span>Selected</span> work</h2><i aria-hidden="true" /></div>
          <div className="work-stack-cards">
            {workProjects.map((project) => <article className="work-card" key={project.title}>
              <a href={project.href} className="work-card-link" aria-label={`View ${project.title} project`}>
                <img src={project.image} alt={project.alt} />
                <div className="work-card-info">
                  <div><p>{project.category}</p><h3>{project.title}</h3><span className="work-date">{project.date}</span></div>
                  <span className="work-action"><ArrowUpRight aria-hidden="true" /></span>
                </div>
              </a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="services" id="capabilities" aria-labelledby="services-title">
        <div className="services-frame">
          <div className="services-panel">
            <p className="services-label"><span aria-hidden="true" /> Capability Index</p>
            <div className="services-list" role="list">
              {services.map((service, index) => {
                const isActive = activeService === index
                const detailId = `service-detail-${index}`
                return <motion.article layout="position" className="service-item" data-active={isActive} key={service.title} role="listitem">
                  <button
                    type="button"
                    className="service-trigger"
                    onClick={() => setActiveService(isActive ? null : index)}
                    aria-pressed={isActive}
                    aria-expanded={isActive}
                    aria-controls={isActive && service.details.length > 0 ? detailId : undefined}
                  >
                    <span className="service-icon" aria-hidden="true"><PenTool /></span>
                    <span className="service-title">{service.title}</span>
                    <span className="service-number">{service.number}</span>
                  </button>
                  <motion.div
                      className="service-detail"
                      id={detailId}
                      initial={false}
                      animate={isActive ? { height: 'auto', opacity: 1, y: 0 } : { height: 0, opacity: 0, y: -6 }}
                      transition={{ duration: reduceMotion ? 0.16 : 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                    <ul className="service-details">
                      {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </motion.div>
                </motion.article>
              })}
            </div>
            <footer className="services-meta">
              <span><Globe2 aria-hidden="true" /> Remote by design</span>
              <a href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
            </footer>
          </div>
        </div>
      </section>

      <section className="about-section" id="philosophy" aria-labelledby="about-title">
        <div className="about-frame">
          <div className="about-intro">
            <p className="about-label"><span aria-hidden="true" /> {aboutContent.label}</p>
            <div className="about-copy">
              <h2 id="about-title"><strong>{aboutContent.titleStrong}</strong><span>{aboutContent.titleMuted}</span></h2>
              <p>{aboutContent.description}</p>
            </div>
          </div>

          <section className="about-gallery" aria-label="Vesper studio visual gallery">
            <span className="about-profile">{aboutContent.profileLabel}</span>
            <div className="about-gallery-controls">
              <button type="button" onClick={() => moveAboutGallery(-1)} aria-label="Show previous gallery images"><ArrowLeft aria-hidden="true" /></button>
              <button type="button" onClick={() => moveAboutGallery(1)} aria-label="Show next gallery images"><ArrowRight aria-hidden="true" /></button>
            </div>
            <div
              className="about-gallery-viewport"
              ref={aboutGalleryRef}
              onPointerDown={(event) => { aboutTouchStartRef.current = event.clientX }}
              onPointerUp={(event) => {
                const start = aboutTouchStartRef.current
                if (start === null) return
                const distance = event.clientX - start
                if (distance > 44) moveAboutGallery(-1)
                if (distance < -44) moveAboutGallery(1)
                aboutTouchStartRef.current = null
              }}
              onPointerCancel={() => { aboutTouchStartRef.current = null }}
            >
              <motion.div
                className="about-gallery-track"
                key={`${aboutIndex}-${aboutDirection}`}
                initial={{ x: aboutDirection === -1 ? -aboutCardStep : 0 }}
                animate={{ x: aboutDirection === 1 ? -aboutCardStep : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.23, 1, 0.32, 1] }}
                style={{ gap: aboutMetrics.gap }}
                onAnimationComplete={finishAboutMove}
              >
                {aboutCarouselImages.map((image, index) => <figure
                  className="about-gallery-tile"
                  key={`${image.alt}-${index}`}
                  style={aboutMetrics.cardWidth ? { flexBasis: aboutMetrics.cardWidth } : undefined}
                >
                  <img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} />
                </figure>)}
              </motion.div>
            </div>

            <p className="about-gallery-status" aria-live="polite">Gallery frame {aboutIndex + 1} of {aboutImages.length}</p>
          </section>
        </div>
      </section>

      <LogoCloud items={logoCloudItems} />

      <section className="testimonial-section" id="testimonial" aria-labelledby="testimonial-title">
        <div className="testimonial-frame">
          <div className="testimonial-panel">
            <div className="testimonial-glow" aria-hidden="true" />
            <span className="testimonial-quote-mark" aria-hidden="true">“</span>
            <p className="testimonial-label"><span aria-hidden="true" /> Testimonial</p>
            <h2 id="testimonial-title" className="testimonial-heading">Founder signals from the field</h2>

            <div className="testimonial-slider" aria-live="polite" aria-atomic="true">
              <AnimatePresence initial={false} mode="wait" custom={testimonialDirection}>
                <motion.div
                  className="testimonial-slide"
                  key={activeTestimonial.reviewer.name}
                  custom={testimonialDirection}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: testimonialDirection * 22 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: testimonialDirection * -14 }}
                  transition={{ duration: reduceMotion ? 0.12 : 0.32, ease: [0.23, 1, 0.32, 1] }}
                >
                  <blockquote><p>“{activeTestimonial.quote}”</p></blockquote>
                  <div className="testimonial-controls" aria-label="Testimonial navigation">
                    <button type="button" onClick={() => moveTestimonial(-1)} aria-label="Show previous testimonial"><ArrowLeft aria-hidden="true" /></button>
                    <button type="button" onClick={() => moveTestimonial(1)} aria-label="Show next testimonial"><ArrowRight aria-hidden="true" /></button>
                  </div>
                  <figure className="testimonial-reviewer">
                    <img src={activeTestimonial.reviewer.image} alt={`Portrait of ${activeTestimonial.reviewer.name}`} />
                    <figcaption><strong>{activeTestimonial.reviewer.name}</strong><span>{activeTestimonial.reviewer.role}</span></figcaption>
                  </figure>
                  <span className="testimonial-announcement">Testimonial {testimonialIndex + 1} of {testimonials.length}, by {activeTestimonial.reviewer.name}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="investment" aria-labelledby="pricing-title">
        <div className="pricing-frame">
          <header className="pricing-header">
            <p className="pricing-eyebrow"><span aria-hidden="true" /> Engagement models</p>
            <h2 id="pricing-title">My Pricing</h2>
            <div className="pricing-toggle" role="group" aria-label="Choose pricing model">
              {pricingPlans.map((plan) => <button
                type="button"
                key={plan.id}
                aria-pressed={activePricingId === plan.id}
                aria-controls="active-pricing-card"
                onClick={() => setActivePricingId(plan.id)}
              >{plan.id === 'monthly' ? 'Monthly' : 'Per Project'}</button>)}
            </div>
          </header>

          <div className="pricing-stack">
            <div className="pricing-card" id="active-pricing-card" aria-live="polite">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  className="pricing-plan"
                  key={activePricingPlan.id}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="pricing-summary">
                    <p className="pricing-plan-name"><span aria-hidden="true" /> {activePricingPlan.name}</p>
                    <p className="pricing-plan-subtitle">{activePricingPlan.subtitle}</p>
                    <p className="pricing-price"><strong>{activePricingPlan.price}</strong><span>{activePricingPlan.unit}</span></p>
                  </div>
                  <ul className="pricing-features">
                    {activePricingPlan.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <a className="pricing-cta" href={activePricingPlan.ctaHref}><span>{activePricingPlan.ctaLabel}</span><span className="pricing-cta-icon"><ArrowUpRight aria-hidden="true" /></span></a>
                </motion.div>
              </AnimatePresence>
            </div>

            <a className="custom-quote-card" href="/contact?plan=custom">
              <span><strong>Custom Quote</strong><small>Multi-product systems, venture portfolios, and complex release scopes.</small></span>
              <span className="custom-quote-icon"><ArrowUpRight aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="faq-frame">
          <h2 id="faq-title">FAQs</h2>
          <div className="faq-list">
            {faqItems.map((item) => {
              const isOpen = openFaqId === item.id
              const answerId = `faq-answer-${item.id}`
              const triggerId = `faq-trigger-${item.id}`
              const answerContent = <div className="faq-answer-inner"><p>{item.answer}</p></div>
              const toggleFaq = () => setOpenFaqId(isOpen ? null : item.id)
              return <article className="faq-item" data-open={isOpen} key={item.id}>
                <button
                  type="button"
                  className="faq-trigger"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={toggleFaq}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      toggleFaq()
                    }
                  }}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? <Minus /> : <Plus />}</span>
                </button>
                {reduceMotion ? isOpen && <div className="faq-answer" id={answerId} role="region" aria-labelledby={triggerId}>{answerContent}</div> : <AnimatePresence initial={false}>
                  {isOpen && <motion.div
                    className="faq-answer"
                    id={answerId}
                    role="region"
                    aria-labelledby={triggerId}
                    initial={{ height: 0, opacity: 0, y: -4 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -3 }}
                    transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  >{answerContent}</motion.div>}
                </AnimatePresence>}
              </article>
            })}
          </div>
          <footer className="faq-footer">
            <p>Do you have any other questions?</p>
            <a href="/contact">Ask me directly <ArrowUpRight aria-hidden="true" /></a>
          </footer>
        </div>
      </section>
    </main>

    <footer className="site-footer" id="contact" aria-labelledby="footer-title">
        <div className="footer-decoration" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="footer-frame">
          <div className="footer-profile">
            <p className="footer-eyebrow"><span aria-hidden="true" /> {footerProfile.eyebrow}</p>
            <div className="footer-portrait">
              <img src={footerProfile.image} alt={`Portrait of ${footerProfile.name}, ${footerProfile.role} at Vesper Studio`} />
            </div>
            <h2 id="footer-title">{footerProfile.name}</h2>
            <p className="footer-role">{footerProfile.role}</p>
          </div>

          <div className="footer-action">
            <p className="footer-wordmark" aria-label={`${footerProfile.logoText} Studio`}>{footerProfile.logoText}</p>
            <a className="footer-cta" href={footerProfile.ctaHref}>
              <span>{footerProfile.ctaLabel}</span>
              <span className="footer-cta-icon" aria-hidden="true"><ArrowUpRight /></span>
            </a>
          </div>

          <div className="footer-bottom">
            <nav className="footer-socials" aria-label="Vesper Studio social links">
              {footerSocialLinks.map((link) => {
                const Icon = footerSocialIcons[link.icon as keyof typeof footerSocialIcons]
                return <a href={link.href} key={link.label} aria-label={link.label}>
                  <Icon aria-hidden="true" />
                </a>
              })}
            </nav>
            <p>{footerProfile.copyright}</p>
          </div>
        </div>
    </footer>
    </>
  )
}
