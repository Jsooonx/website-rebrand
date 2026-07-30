import {
  type ReactNode,
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const EASE = [0.2, 0, 0, 1] as const;

const projects = [
  {
    name: "Aster House",
    discipline: "Hospitality / Identity",
    year: "2026",
    cover: "/images/aster-house-cover.webp",
    after: "/images/aster-house-after.webp",
    size: "project--large-left",
    alt: "Brutalist coastal hotel at blue hour",
  },
  {
    name: "Morrow Records",
    discipline: "Music / Campaign",
    year: "2026",
    cover: "/images/morrow-records-cover.webp",
    after: "/images/morrow-records-after.webp",
    size: "project--portrait-right",
    alt: "Electronic musician working under red stage light",
  },
  {
    name: "Nami After Dark",
    discipline: "Hospitality / Art Direction",
    year: "2025",
    cover: "/images/nami-after-dark-cover.webp",
    after: "/images/nami-after-dark-after.webp",
    size: "project--square-center",
    alt: "Late-night noodle counter seen through steamed glass",
  },
  {
    name: "Common Thread",
    discipline: "Fashion / Identity",
    year: "2025",
    cover: "/images/common-thread-cover.webp",
    after: "/images/common-thread-after.webp",
    size: "project--large-left",
    alt: "Tactile cream and black printed matter",
  },
  {
    name: "Lento Hotel",
    discipline: "Hospitality / Digital",
    year: "2025",
    cover: "/images/lento-hotel-cover.webp",
    after: "/images/lento-hotel-after.webp",
    size: "project--portrait-right",
    alt: "Cinematic theatre lobby in red velvet and chrome",
  },
  {
    name: "Theatres of Light",
    discipline: "Culture / Campaign",
    year: "2024",
    cover: "/images/theatres-of-light-cover.webp",
    after: "/images/theatres-of-light-after.webp",
    size: "project--wide-final",
    alt: "Motion-blurred crowd crossing wet asphalt",
  },
];

const capabilities = [
  {
    title: "Visual Identity",
    body: "Positioning, identity systems, image language, and guidelines built to outlive the launch.",
    image: "/images/common-thread-after.webp",
  },
  {
    title: "Campaign Direction",
    body: "Concept, casting, art direction, and rollout systems with one unmistakable point of view.",
    image: "/images/morrow-records-cover.webp",
  },
  {
    title: "Digital Environments",
    body: "Editorial websites and launch experiences that move with clarity, pace, and intent.",
    image: "/images/aster-house-cover.webp",
  },
  {
    title: "Launch Systems",
    body: "A complete visual world carried across campaign, digital, social, print, and physical space.",
    image: "/images/lento-hotel-after.webp",
  },
];

const testimonials = [
  {
    stamp: "01 / FIELD NOTE",
    quote:
      "NOCTRA found the tension we could feel but could not name. The identity gave our hotel a voice before we had even opened the doors.",
    name: "Mara Bell",
    company: "Aster House",
    tone: "paper",
  },
  {
    stamp: "02 / LAUNCH PARTNER",
    quote:
      "Every decision felt exact. They turned one night of music into a world that travelled from the room to every screen without losing its pulse.",
    name: "Ivo Chen",
    company: "Morrow Records",
    tone: "mist",
  },
  {
    stamp: "03 / CULTURAL PROGRAM",
    quote:
      "They did not decorate the idea. They sharpened it, questioned it, and gave the whole team a system we could actually keep using.",
    name: "Sana Okada",
    company: "Nami Group",
    tone: "sodium",
  },
  {
    stamp: "04 / CREATIVE LEAD",
    quote:
      "The work landed with a confidence that felt inevitable. It was strange, warm, precise—and completely ours.",
    name: "Noor Avery",
    company: "Common Thread",
    tone: "ember",
  },
];

const faqItems = [
  {
    q: "What kind of worlds do you build?",
    a: "We shape identities, campaign languages, digital environments, and launch systems for culture-led hospitality, fashion, music, and ambitious new ventures.",
  },
  {
    q: "When should we bring you in?",
    a: "As early as possible: when the ambition is clear but the visual language is not. We can also enter at a turning point, when an existing brand needs a more exact next chapter.",
  },
  {
    q: "What does a typical engagement include?",
    a: "Every engagement is scoped around the problem. Most combine strategic framing, identity or campaign direction, a digital expression, and a practical rollout system.",
  },
  {
    q: "Can you work with an existing team?",
    a: "Yes. We regularly partner with internal creative teams, founders, architects, photographers, developers, and production specialists.",
  },
  {
    q: "How do we start?",
    a: "Send a concise note about what is changing, what needs to launch, and the timing. We will reply with the useful questions and a clear next step.",
  },
];

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className={direction === "left" ? "arrow arrow--left" : "arrow"}
    >
      <path d="M3 9h11M10 5l4 4-4 4" />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="section-label"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <span>{children}</span>
      <motion.span
        className="section-label__rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
      />
    </motion.div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Header({
  onOpen,
  triggerRef,
}: {
  onOpen: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="NOCTRA home">
        NOCTRA
      </a>
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-expanded="false"
      >
        Menu
      </button>
    </header>
  );
}

function MenuOverlay({
  open,
  onClose,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const links = [
    ["01", "Home", "#home"],
    ["02", "Studio", "#studio"],
    ["03", "Selected Work", "#work"],
    ["04", "Capabilities", "#capabilities"],
    ["05", "Contact", "#contact"],
  ];

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusables?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, onClose, triggerRef]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          ref={panelRef}
          className="index-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site index"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: EASE }}
        >
          <div className="index-menu__head">
            <span className="wordmark wordmark--light">NOCTRA</span>
            <button
              className="menu-close"
              type="button"
              onClick={onClose}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <nav className="index-nav" aria-label="Primary navigation">
            {links.map(([index, label, href], order) => (
              <motion.a
                key={href}
                href={href}
                onClick={onClose}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.36,
                  delay: 0.06 + order * 0.07,
                  ease: EASE,
                }}
              >
                <span>{index}</span>
                <strong>{label}</strong>
                <i />
              </motion.a>
            ))}
          </nav>
          <div className="index-menu__foot">
            <span>New York / Everywhere</span>
            <a href="mailto:hello@noctra.studio">hello@noctra.studio</a>
            <span>© 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__paper">
        <span className="hero__eyebrow">Independent studio / 01</span>
        <div className="hero-title" aria-label="NOCTRA Studio">
          <div className="hero-title__mask">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.62, delay: 0.08, ease: EASE }}
            >
              NOCTRA
            </motion.span>
          </div>
          <div className="hero-title__mask hero-title__mask--studio">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.62, delay: 0.16, ease: EASE }}
            >
              STUDIO
            </motion.span>
          </div>
        </div>
      </div>
      <motion.div
        className="hero__image"
        initial={{ opacity: 0.65, filter: "blur(9px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
      >
        <div className="hero__shade" />
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.66, ease: EASE }}
        >
          <span>New York / Everywhere</span>
          <p>Visual worlds for the hours after obvious.</p>
          <small>Identity · Campaign · Digital · Launch</small>
        </motion.div>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </motion.div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="studio paper-section">
      <div className="page-shell studio__inner">
        <SectionLabel>STUDIO / 01</SectionLabel>
        <div className="studio__statement">
          {[
            "NOCTRA turns a point of view",
            "into a world people recognise.",
          ].map((line) => (
            <div className="line-mask" key={line}>
              <span>{line}</span>
            </div>
          ))}
        </div>
        <div className="studio__lower">
          <Reveal className="studio__copy">
            <p>
              We move from strategy to image, from identity to interface, and
              from the first signal to the full rollout—holding one point of
              view through every touchpoint.
            </p>
            <a className="text-link" href="#work">
              Enter the studio <Arrow />
            </a>
          </Reveal>
          <div className="proof-list">
            {[
              ["01", "New York + Everywhere"],
              ["02", "Identity to afterimage"],
              ["03", "Small studio, full world"],
            ].map(([index, text], order) => (
              <Reveal className="proof" delay={order * 0.08} key={index}>
                <span>{index}</span>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const frameRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <motion.article
      ref={frameRef}
      className={`project ${project.size}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <a className="project__link" href="#contact">
        <div className="project__frame">
          <motion.div className="project__drift" style={{ y }}>
            <div className="project__stack">
              <img
                className="project__image project__image--cover"
                src={project.cover}
                alt={project.alt}
                loading="lazy"
              />
              <img
                className="project__image project__image--after"
                src={project.after}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          </motion.div>
          <span className="project__number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="project__view">
            View project <Arrow />
          </span>
        </div>
        <div className="project__caption">
          <h3>{project.name}</h3>
          <p>{project.discipline}</p>
          <span>{project.year}</span>
        </div>
      </a>
    </motion.article>
  );
}

function Work() {
  return (
    <section id="work" className="work night-section">
      <div className="page-shell">
        <SectionLabel>SELECTED WORK / 02</SectionLabel>
        <Reveal>
          <h2 className="chapter-title">Worlds with a longer afterimage.</h2>
        </Reveal>
        <div className="project-field">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const [active, setActive] = useState(0);
  return (
    <section id="capabilities" className="capabilities night-section">
      <div className="page-shell">
        <SectionLabel>CAPABILITIES / 03</SectionLabel>
        <Reveal>
          <h2 className="chapter-title">
            A point of view,
            <br />
            carried everywhere.
          </h2>
        </Reveal>
        <div className="capability-layout">
          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <motion.button
                key={capability.title}
                className={
                  active === index
                    ? "capability-row is-active"
                    : "capability-row"
                }
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: EASE,
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </motion.button>
            ))}
          </div>
          <div className="afterimage-rail" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={capabilities[active].image}
                src={capabilities[active].image}
                alt={`${capabilities[active].title} visual`}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.38, ease: EASE }}
              />
            </AnimatePresence>
            <span>AFTERIMAGE / {String(active + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = testimonials[active];

  const move = (nextDirection: number) => {
    const next = active + nextDirection;
    if (next < 0 || next >= testimonials.length) return;
    setDirection(nextDirection);
    setActive(next);
  };

  return (
    <section id="signals" className="signals paper-section">
      <div className="page-shell signals__inner">
        <div className="signals__head">
          <SectionLabel>SIGNALS RECEIVED / 04</SectionLabel>
          <div className="carousel-controls">
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={active === 0}
              aria-label="Previous testimonial"
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={active === testimonials.length - 1}
              aria-label="Next testimonial"
            >
              <Arrow />
            </button>
          </div>
        </div>
        <div className="signal-stage">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.figure
              key={active}
              className={`signal-card signal-card--${current.tone}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <span className="signal-card__stamp">{current.stamp}</span>
              <blockquote>“{current.quote}”</blockquote>
              <motion.figcaption
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.3, ease: EASE }}
              >
                <strong>{current.name}</strong>
                <span>{current.company}</span>
              </motion.figcaption>
              <span className="signal-card__quote" aria-hidden="true">
                “
              </span>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
      <div className="signal-strip" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="signal-strip__track" key={copy}>
            {[
              ["VANTA", "/client-marks/vanta.svg"],
              ["ORISON", "/client-marks/orison.svg"],
              ["ARC HOUSE", "/client-marks/arc-house.svg"],
              ["MORROW", "/client-marks/morrow.svg"],
              ["NAMI", "/client-marks/nami.svg"],
              ["LENTO", "/client-marks/lento.svg"],
            ].map(([name, logo]) => (
              <span key={`${copy}-${name}`}>
                <img src={logo} alt="" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof faqItems)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <div className={open ? "faq-item is-open" : "faq-item"}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
      >
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{item.q}</strong>
        <span className="faq-item__icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: EASE }}
          >
            <motion.p
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              exit={{ y: -4 }}
              transition={{ duration: 0.24, ease: EASE }}
            >
              {item.a}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq paper-section">
      <div className="page-shell">
        <SectionLabel>THE PRACTICALS / 05</SectionLabel>
        <Reveal>
          <h2 className="faq__title">The practical things.</h2>
        </Reveal>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              index={index}
              open={open === index}
              onToggle={() => setOpen(open === index ? -1 : index)}
            />
          ))}
        </div>
        <a className="faq__handoff text-link" href="mailto:hello@noctra.studio">
          Still wondering? hello@noctra.studio <Arrow />
        </a>
      </div>
    </section>
  );
}

function AfterImage({
  progress,
  image,
  className,
  range,
}: {
  progress: MotionValue<number>;
  image: string;
  className: string;
  range: [number, number];
}) {
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1]],
    [0, 1, 1],
  );
  const y = useTransform(
    progress,
    [range[0], range[0] + 0.08],
    [80, 0],
  );
  return (
    <motion.img
      className={`afterhours__image ${className}`}
      src={image}
      alt=""
      aria-hidden="true"
      style={{ opacity, y }}
    />
  );
}

function Afterhours() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const statementY = useTransform(scrollYProgress, [0, 0.16], [120, 0]);
  const statementOpacity = useTransform(
    scrollYProgress,
    [0, 0.09],
    [0, 1],
  );
  const finalOpacity = useTransform(
    scrollYProgress,
    [0.78, 0.9],
    [0, 1],
  );

  if (reduceMotion) {
    return (
      <section id="contact" className="afterhours afterhours--reduced">
        <span>MAKE CONTACT / 06</span>
        <h2>Make the afterimage last.</h2>
        <div className="afterhours-reduced__grid">
          <img src="/images/contact-reflection.webp" alt="" />
          <img
            src="/images/contact-portrait.webp"
            alt="Portrait from a NOCTRA campaign world"
          />
          <img src="/images/contact-theatre-crowd.webp" alt="" />
        </div>
        <a href="mailto:hello@noctra.studio" className="contact-action">
          Start a conversation <Arrow />
        </a>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact" className="afterhours">
      <div className="afterhours__stage">
        <span className="afterhours__label">MAKE CONTACT / 06</span>
        <motion.div
          className="afterhours__statement"
          style={{ y: statementY, opacity: statementOpacity }}
        >
          <span>GET STARTED</span>
          <h2>
            Make the
            <br />
            afterimage last.
          </h2>
        </motion.div>
        <AfterImage
          progress={scrollYProgress}
          image="/images/contact-reflection.webp"
          className="afterhours__image--one"
          range={[0.17, 0.35]}
        />
        <AfterImage
          progress={scrollYProgress}
          image="/images/contact-portrait.webp"
          className="afterhours__image--two"
          range={[0.33, 0.5]}
        />
        <AfterImage
          progress={scrollYProgress}
          image="/images/contact-printed-matter.webp"
          className="afterhours__image--three"
          range={[0.49, 0.66]}
        />
        <AfterImage
          progress={scrollYProgress}
          image="/images/contact-theatre-crowd.webp"
          className="afterhours__image--four"
          range={[0.63, 0.8]}
        />
        <motion.div
          className="afterhours__final"
          style={{ opacity: finalOpacity }}
        >
          <img src="/images/hero-city.webp" alt="" aria-hidden="true" />
          <a href="mailto:hello@noctra.studio" className="contact-action">
            Start a conversation <Arrow />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["01", "Home", "#home"],
    ["02", "Studio", "#studio"],
    ["03", "Selected Work", "#work"],
    ["04", "Capabilities", "#capabilities"],
    ["05", "Contact", "#contact"],
  ];

  const backToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    document.getElementById("main")?.focus({ preventScroll: true });
  };

  return (
    <footer className="footer night-section">
      <div className="page-shell footer__inner">
        <Reveal className="footer__intro">
          <span>NOCTRA / NEW YORK + EVERYWHERE</span>
          <p>Visual worlds for the hours after obvious.</p>
        </Reveal>
        <nav className="footer__index" aria-label="Footer navigation">
          {links.map(([index, label, href]) => (
            <a key={href} href={href}>
              <span>{index}</span>
              <strong>{label}</strong>
              <Arrow />
            </a>
          ))}
        </nav>
        <Reveal className="footer__contact" delay={0.08}>
          <p>Ready to leave an afterimage?</p>
          <a href="mailto:hello@noctra.studio">
            hello@noctra.studio <Arrow />
          </a>
        </Reveal>
        <div className="footer__legal">
          <span>NOW BOOKING / SELECTED Q4</span>
          <span>© 2026 NOCTRA</span>
          <div>
            <a href="#instagram">Instagram</a>
            <a href="#arena">Are.na</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
          <button type="button" onClick={backToTop}>
            Back to top <Arrow />
          </button>
        </div>
        <Reveal className="footer__masthead" delay={0.1} y={24}>
          <span aria-hidden="true">NOCTRA</span>
        </Reveal>
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      smoothWheel: true,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Header onOpen={() => setMenuOpen(true)} triggerRef={menuTriggerRef} />
      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={menuTriggerRef}
      />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Studio />
        <Work />
        <Capabilities />
        <Testimonials />
        <FAQ />
        <Afterhours />
      </main>
      <Footer />
    </>
  );
}
