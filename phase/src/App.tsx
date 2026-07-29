import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import {
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

const works = [
  {
    name: "Aeru House",
    discipline: "Brand identity + launch campaign",
    year: "2026",
    image: "/images/aeru-house.jpg",
    alt: "Curved limestone courtyard at Aeru House",
    ratio: "work-landscape",
  },
  {
    name: "Sora Objects",
    discipline: "E-commerce + art direction",
    year: "2026",
    image: "/images/sora-objects.jpg",
    alt: "Brushed aluminium Sora Objects beside cobalt acrylic",
    ratio: "work-square",
  },
  {
    name: "Umami Radio",
    discipline: "Identity + motion system",
    year: "2026",
    image: "/images/umami-radio.jpg",
    alt: "Electronic musician performing at Umami Radio",
    ratio: "work-portrait",
  },
  {
    name: "Paloma Hotel",
    discipline: "Digital editorial + campaign",
    year: "2026",
    image: "/images/paloma-hotel.jpg",
    alt: "Tropical Paloma Hotel terrace at blue hour",
    ratio: "work-wide",
  },
];

const services = [
  {
    title: "Identity",
    statement: "Give the brand a usable point of view.",
    scope: "Positioning, verbal direction, identity systems",
    image: "/images/aeru-house.jpg",
  },
  {
    title: "Campaigns",
    statement: "Turn the point of view into a moment people notice.",
    scope: "Creative direction, concepts, launch assets",
    image: "/images/sora-objects.jpg",
  },
  {
    title: "Motion",
    statement: "Make the system move with purpose.",
    scope: "Motion language, film, social-first movement",
    image: "/images/umami-radio.jpg",
  },
  {
    title: "Digital",
    statement: "Build a destination that turns attention into action.",
    scope: "Editorial sites, product moments, digital experiences",
    image: "/images/paloma-hotel.jpg",
  },
];

const engagements = [
  {
    name: "Signal Sprint",
    eyebrow: "For the unresolved question",
    duration: "2 weeks",
    model: "Fixed scope",
    scope: [
      "Stakeholder working session",
      "Positioning direction",
      "Decision memo",
    ],
    cta: "See sprint scope",
  },
  {
    name: "Launch Phase",
    eyebrow: "For a brand ready to move",
    duration: "6–8 weeks",
    model: "Fixed project",
    scope: [
      "Creative direction",
      "Identity or campaign system",
      "Launch-ready assets",
    ],
    cta: "Plan a launch",
  },
  {
    name: "Studio Partner",
    eyebrow: "For an ongoing creative need",
    duration: "Monthly",
    model: "Scoped together",
    scope: [
      "Prioritised creative support",
      "Senior design direction",
      "Delivery oversight",
    ],
    cta: "Discuss a partnership",
    featured: true,
  },
];

const testimonials = [
  {
    quote:
      "They gave us the clarity to stop decorating and start building a brand people could recognise in one glance.",
    name: "Maya Santosa",
    role: "Founder · Aeru House",
    meta: "Identity + launch · 2026",
    image: "/images/aeru-house.jpg",
  },
  {
    quote:
      "PHASE connected the product, campaign, and store into one world. Every decision finally spoke the same language.",
    name: "Theo Lim",
    role: "Creative Director · Sora Objects",
    meta: "E-commerce + art direction · 2026",
    image: "/images/sora-objects.jpg",
  },
  {
    quote:
      "The digital experience now carries the quiet confidence guests feel when they arrive. That was the real brief.",
    name: "Rani Kusuma",
    role: "Brand Lead · Paloma Hotel",
    meta: "Digital editorial + campaign · 2026",
    image: "/images/paloma-hotel.jpg",
  },
];

const navItems = [
  ["Home", "home"],
  ["Work", "work"],
  ["About", "about"],
  ["Services", "services"],
  ["Engagements", "engagements"],
] as const;

const ease = [0.2, 0, 0, 1] as const;

function useSmoothScroll(reducedMotion: boolean | null) {
  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reducedMotion]);
}

function WordReveal({
  children,
  className = "",
  as = "p",
  amount = 0.45,
}: {
  children: string;
  className?: string;
  as?: "p" | "h1" | "h2";
  amount?: number;
}) {
  const Tag = motion[as];
  const words = children.split(" ");
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      aria-label={children}
      variants={{
        visible: { transition: { staggerChildren: 0.042 } },
      }}
    >
      <span aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="word"
            variants={{
              hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.3, ease },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}

function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.48, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={`arrow-link ${light ? "arrow-link-light" : ""}`}
      whileTap={{ scale: 0.96 }}
    >
      <span>{children}</span>
      <span className="arrow" aria-hidden="true">
        ↗
      </span>
    </motion.a>
  );
}

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" className={`brand-mark ${inverse ? "brand-inverse" : ""}`}>
      <span className="brand-symbol" aria-hidden="true">
        <img src="/images/phase-mark.png" alt="" width="24" height="24" />
      </span>
      <span>PHASE</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, id], index) => (
          <a href={`#${id}`} key={id}>
            <span>{label}</span>
            <small>{String(index + 1).padStart(2, "0")}</small>
          </a>
        ))}
      </nav>
      <motion.a
        href="#contact"
        className="header-cta"
        whileTap={{ scale: 0.96 }}
      >
        Start a project <span aria-hidden="true">↗</span>
      </motion.a>
      <button
        type="button"
        className={`menu-toggle ${open ? "is-open" : ""}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease }}
          >
            {navItems.map(([label, id], index) => (
              <a href={`#${id}`} key={id} onClick={close}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
            <a href="#contact" onClick={close}>
              <span>06</span>Start a project
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const headline = "Make the next move visible.";
  const words = headline.split(" ");
  return (
    <section id="home" className="hero hero-reference">
      <Header />
      <div className="hero-grid page-shell">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.075, delayChildren: 0.1 } },
          }}
        >
          <motion.p
            className="eyebrow"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
            }}
          >
            Independent creative studio
            <span>Jakarta / Everywhere</span>
          </motion.p>
          <motion.h1
            aria-label={headline}
            variants={{
              visible: { transition: { staggerChildren: 0.045 } },
            }}
          >
            <span aria-hidden="true">
              {words.map((word, index) => (
                <motion.span
                  className="word"
                  key={`${word}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.34, ease },
                    },
                  }}
                >
                  {word}
                  {index < words.length - 1 ? "\u00a0" : ""}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.p
            className="hero-intro"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease },
              },
            }}
          >
            PHASE gives ambitious brands a sharper point of view, a release
            worth noticing, and a system that can keep moving.
          </motion.p>
          <motion.div
            className="hero-actions"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease },
              },
            }}
          >
            <motion.a
              href="#contact"
              className="primary-button"
              whileTap={{ scale: 0.96 }}
            >
              Explore Phase <span aria-hidden="true">↗</span>
            </motion.a>
            <ArrowLink href="#work" light>
              View selected work
            </ArrowLink>
          </motion.div>
        </motion.div>

        <motion.figure
          className="hero-visual"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease }}
        >
          <img
            src="/images/hero-phase.jpg"
            alt="Editorial portrait in ember-orange and cyan studio light"
            width="1920"
            height="1080"
            fetchPriority="high"
          />
        </motion.figure>

        <motion.div
          className="hero-services"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.68, ease }}
        >
          <span>01 / Identity</span>
          <span>02 / Campaigns</span>
          <span>03 / Motion</span>
          <span>04 / Digital</span>
        </motion.div>
      </div>
      <motion.div
        className="hero-wordmark"
        initial={{ opacity: 0, y: "35%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 0.48, ease }}
        aria-hidden="true"
      >
        <span>PHASE</span>
      </motion.div>
    </section>
  );
}

function SectionLabel({
  index,
  children,
  light = false,
}: {
  index: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-label ${light ? "section-label-light" : ""}`}>
      <span>◆ ({index})</span>
      <span>{children}</span>
      <span>© 2026</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about section-bone">
      <div className="page-shell">
        <SectionLabel index="01">About the work</SectionLabel>
        <WordReveal as="h2" className="about-statement" amount={0.3}>
          We make the next move visible—before the market asks for it.
        </WordReveal>
        <div className="about-grid">
          <FadeIn className="about-image">
            <img
              src="/images/hero-director.jpg"
              alt="PHASE creative director"
              loading="lazy"
            />
            <span>Independent studio · Jakarta</span>
          </FadeIn>
          <div className="principles">
            {[
              [
                "Signal",
                "Find the creative decision that matters before production begins.",
              ],
              [
                "System",
                "Turn the decision into an identity and campaign that holds up.",
              ],
              [
                "Release",
                "Bring it into the world through motion, digital, and launch support.",
              ],
            ].map(([title, copy], index) => (
              <FadeIn
                className="principle"
                delay={index * 0.08}
                key={title}
              >
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      <LogoCloud />
    </section>
  );
}

const logoMarks = [
  { name: "Aeru", type: 0 },
  { name: "Sora", type: 1 },
  { name: "Umami", type: 2 },
  { name: "Paloma", type: 3 },
  { name: "Kanso", type: 4 },
  { name: "Telu", type: 5 },
];

function LogoSvg({ type }: { type: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <svg viewBox="0 0 48 32" aria-hidden="true">
      {type === 0 && (
        <>
          <circle cx="16" cy="16" r="10" {...common} />
          <path d="M26 6v20h12" {...common} />
        </>
      )}
      {type === 1 && (
        <>
          <rect x="6" y="6" width="20" height="20" rx="3" {...common} />
          <circle cx="34" cy="16" r="8" {...common} />
        </>
      )}
      {type === 2 && (
        <path d="M4 20c6-16 12 8 20-8s12 8 20-8" {...common} />
      )}
      {type === 3 && (
        <>
          <path d="M6 25V7h18c8 0 8 12 0 12H13" {...common} />
          <path d="M35 7v18M29 19l6 6 7-7" {...common} />
        </>
      )}
      {type === 4 && (
        <>
          <path d="M7 25V7M7 16h16M23 7v18" {...common} />
          <circle cx="36" cy="16" r="8" {...common} />
        </>
      )}
      {type === 5 && (
        <>
          <path d="M5 8h38M24 8v18" {...common} />
          <path d="M10 22c4-7 8-7 12 0" {...common} />
        </>
      )}
    </svg>
  );
}

function LogoCloud() {
  const repeated = [...logoMarks, ...logoMarks];
  return (
    <div className="logo-cloud" aria-label="Selected fictional partners">
      <div className="logo-track">
        {repeated.map((logo, index) => (
          <div
            className="partner-mark"
            key={`${logo.name}-${index}`}
            aria-hidden={index >= logoMarks.length}
          >
            <LogoSvg type={logo.type} />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Work() {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: "-32% 0px -45% 0px", threshold: 0.01 },
      );
      observer.observe(card);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <section id="work" className="work section-ink">
      <div className="page-shell">
        <SectionLabel index="02" light>
          Selected phases
        </SectionLabel>
        <div className="work-layout">
          <aside className="work-rail">
            <p>Four moves, made visible.</p>
            <div className="active-count" aria-live="polite">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <small>/ 04</small>
            </div>
            <ArrowLink href="#services" light>
              View capabilities
            </ArrowLink>
          </aside>
          <div className="work-stack">
            {works.map((work, index) => (
              <motion.article
                key={work.name}
                ref={(node) => {
                  cardsRef.current[index] = node;
                }}
                className="work-card"
                initial={{ opacity: 0.4, scale: 0.985 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.52, ease }}
              >
                <a href="#contact" aria-label={`View ${work.name} project`}>
                  <div className={`work-image ${work.ratio}`}>
                    <img src={work.image} alt={work.alt} loading="lazy" />
                    <span className="work-view">View phase ↗</span>
                  </div>
                  <div className="work-meta">
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{work.name}</h3>
                      <p>{work.discipline}</p>
                    </div>
                    <span>{work.year}</span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services section-ink">
      <div className="page-shell">
        <SectionLabel index="03" light>
          Capabilities
        </SectionLabel>
        <div className="services-intro">
          <FadeIn className="services-kicker">
            <img
              src="/images/hero-director.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </FadeIn>
          <WordReveal as="h2" className="services-headline" amount={0.25}>
            From the first signal to the final release, we build the systems
            that make a brand move.
          </WordReveal>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <motion.article
              className="service-row"
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              <motion.span
                className="service-index"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.42, ease },
                  },
                }}
              >
                0{index + 1}
              </motion.span>
              <motion.div
                className="service-image"
                variants={{
                  hidden: { opacity: 0, scale: 1.04 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.48, ease },
                  },
                }}
              >
                <img src={service.image} alt="" loading="lazy" />
              </motion.div>
              <motion.div
                className="service-copy"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.42, ease },
                  },
                }}
              >
                <h3>{service.title}</h3>
                <strong>{service.statement}</strong>
                <p>{service.scope}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engagements() {
  return (
    <section id="engagements" className="engagements section-bone">
      <div className="page-shell">
        <SectionLabel index="04">Ways to work</SectionLabel>
        <div className="engagement-heading">
          <FadeIn>
            <p className="eyebrow-dark">Engagements</p>
            <h2>Choose the phase you’re in.</h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p>
              Every engagement starts with a real scope conversation. These
              are three clear ways in—not rigid tiers.
            </p>
          </FadeIn>
        </div>
        <div className="engagement-grid">
          {engagements.map((engagement, index) => (
            <FadeIn
              key={engagement.name}
              className={`engagement-card ${
                engagement.featured ? "featured" : ""
              }`}
              delay={index * 0.08}
            >
              <div className="engagement-top">
                <span>0{index + 1}</span>
                <small>{engagement.eyebrow}</small>
              </div>
              <h3>{engagement.name}</h3>
              <div className="engagement-model">
                <strong>{engagement.duration}</strong>
                <span>{engagement.model}</span>
              </div>
              <ul>
                {engagement.scope.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <ArrowLink href="#contact" light={engagement.featured}>
                {engagement.cta}
              </ArrowLink>
            </FadeIn>
          ))}
        </div>
        <p className="pricing-note">
          Final fees follow the approved scope, timing, and team—not an
          arbitrary feature count.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const change = (nextDirection: number) => {
    setDirection(nextDirection);
    setCurrent((index) =>
      (index + nextDirection + testimonials.length) % testimonials.length,
    );
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") change(-1);
    if (event.key === "ArrowRight") change(1);
  };

  const testimonial = testimonials[current];
  return (
    <section
      className="testimonials section-bone"
      aria-label="Client testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="page-shell">
        <SectionLabel index="05">Partner notes</SectionLabel>
        <div className="testimonial-layout">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={current}
              className="testimonial-image"
              custom={direction}
              initial={{ opacity: 0, x: direction * 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: direction * -12, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease }}
            >
              <img src={testimonial.image} alt="" />
              <span>{testimonial.meta}</span>
            </motion.div>
          </AnimatePresence>
          <div className="testimonial-main">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.blockquote
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: direction * -12, filter: "blur(4px)" }}
                transition={{ duration: 0.32, ease }}
              >
                “{testimonial.quote}”
              </motion.blockquote>
            </AnimatePresence>
            <div className="testimonial-proof" aria-live="polite">
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
              <span>{testimonial.meta}</span>
              <span className="testimonial-count">
                {String(current + 1).padStart(2, "0")} / 03
              </span>
            </div>
          </div>
        </div>
        <div className="testimonial-controls">
          <motion.button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => change(-1)}
            whileTap={{ scale: 0.96 }}
          >
            <span aria-hidden="true">←</span>
          </motion.button>
          <motion.button
            type="button"
            aria-label="Next testimonial"
            onClick={() => change(1)}
            whileTap={{ scale: 0.96 }}
          >
            <span aria-hidden="true">→</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section id="contact" className="closing-cta">
      <img
        className="closing-background"
        src="/images/paloma-hotel.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div className="closing-overlay" />
      <h2 className="sr-only">Make the next move visible.</h2>
      <div className="closing-marquee" aria-hidden="true">
        <div>
          <span>MAKE THE NEXT MOVE VISIBLE → START A PROJECT →</span>
          <span>MAKE THE NEXT MOVE VISIBLE → START A PROJECT →</span>
        </div>
      </div>
      <motion.div
        className="closing-card"
        initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.48, ease }}
      >
        <img
          src="/images/hero-director.jpg"
          alt="PHASE creative director"
          loading="lazy"
        />
        <p>Tell us what needs to move. We’ll reply with the right next step.</p>
        <ArrowLink href="mailto:hello@phase.studio" light>
          Start a project
        </ArrowLink>
      </motion.div>
    </section>
  );
}

function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [42, 0]);
  return (
    <footer ref={ref} className="footer">
      <div className="page-shell footer-inner">
        <div className="footer-top">
          <div>
            <p>Let’s make the next move.</p>
            <a href="mailto:hello@phase.studio">
              hello@phase.studio
            </a>
          </div>
          <nav aria-label="Footer navigation">
            {navItems.map(([label, id], index) => (
              <a href={`#${id}`} key={id}>
                <span>{label}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </a>
            ))}
          </nav>
        </div>
        <motion.div
          className="footer-wordmark"
          style={{ y: reducedMotion ? 0 : wordmarkY }}
          aria-hidden="true"
        >
          PHASE
        </motion.div>
        <div className="footer-meta">
          <span>Jakarta / Everywhere</span>
          <span>All projects and people are fictional.</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();
  useSmoothScroll(reducedMotion);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Services />
        <Engagements />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}
