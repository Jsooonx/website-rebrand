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

type HeaderTheme = "dark" | "light";

type Project = {
  name: string;
  discipline: string;
  year: string;
  image: string;
  alt: string;
  shape: string;
};

const projects: Project[] = [
  {
    name: "Sable House",
    discipline: "Identity / Art Direction",
    year: "2026",
    image: "/images/sable-house.jpg",
    alt: "Lacquer-red packaging and warm-ivory stationery for Sable House.",
    shape: "project-wide project-left",
  },
  {
    name: "Vesper Skin",
    discipline: "Beauty / Campaign",
    year: "2026",
    image: "/images/vesper-skin.jpg",
    alt: "Beauty portrait with silver eye makeup and a lacquer-red accent.",
    shape: "project-portrait project-right",
  },
  {
    name: "Marea No. 7",
    discipline: "Hospitality / World Building",
    year: "2025",
    image: "/images/marea-no-7.jpg",
    alt: "Black-dressed figure on a warm-stone terrace above the sea.",
    shape: "project-landscape project-center",
  },
  {
    name: "Obscura",
    discipline: "Packaging / Image",
    year: "2025",
    image: "/images/obscura.jpg",
    alt: "Black glass fragrance bottle suspended above dark stone.",
    shape: "project-square project-left",
  },
  {
    name: "Nomae",
    discipline: "Fashion / Campaign",
    year: "2026",
    image: "/images/nomae.jpg",
    alt: "Fashion portrait in ivory tailoring with a deep-red glove.",
    shape: "project-wide project-right",
  },
  {
    name: "Parlor",
    discipline: "Editorial / Print",
    year: "2025",
    image: "/images/parlor.jpg",
    alt: "Red, black, and ivory editorial matter arranged as a tactile system.",
    shape: "project-landscape project-left",
  },
  {
    name: "Cinder Objects",
    discipline: "Objects / Direction",
    year: "2026",
    image: "/images/cinder-objects.jpg",
    alt: "Chrome vessel, red glass, and black stone in a balanced still life.",
    shape: "project-portrait project-center",
  },
  {
    name: "Lumen",
    discipline: "Spatial / Campaign",
    year: "2026",
    image: "/images/lumen.jpg",
    alt: "Warm-ivory light sculpture inside a lacquer-red architectural chamber.",
    shape: "project-wide project-center",
  },
];

const services = [
  {
    name: "Art Direction",
    image: "/images/vesper-skin.jpg",
    alt: "Silver eye makeup detail from the Vesper Skin campaign.",
    copy: "We build the visual premise, image language, and editorial logic that lets every execution belong to the same world.",
    scope: "Concept / Casting / Styling / Image",
  },
  {
    name: "Brand Worlds",
    image: "/images/sable-house.jpg",
    alt: "Sable House identity objects in red, ivory, and black.",
    copy: "Identity becomes atmosphere: a coherent system of colour, typography, material, photography, and voice.",
    scope: "Identity / Systems / Guidelines",
  },
  {
    name: "Digital Presence",
    image: "/images/lumen.jpg",
    alt: "Lumen light installation inside a red architectural space.",
    copy: "Digital experiences with a precise point of view—structured for clarity, paced for emotion, and built to move.",
    scope: "Web / Motion / Experience",
  },
  {
    name: "Campaign Systems",
    image: "/images/parlor.jpg",
    alt: "Parlor editorial pieces arranged in a campaign system.",
    copy: "Launches that hold together across image, story, social, and space without losing their edge.",
    scope: "Launch / Content / Rollout",
  },
];

const testimonials = [
  {
    project: "Sable House",
    name: "Mara Bell",
    role: "Founder, Sable House",
    quote:
      "ROUGE gave the brand a material language we could actually feel. The launch arrived complete—quiet, precise, and instantly recognisable.",
    image: "/images/sable-house.jpg",
    alt: "The Sable House identity system.",
  },
  {
    project: "Vesper Skin",
    name: "Aisha Cole",
    role: "Creative Director, Vesper Skin",
    quote:
      "They found the tension we were missing: clinical clarity with real sensuality. Every frame now feels unmistakably ours.",
    image: "/images/vesper-skin.jpg",
    alt: "Vesper Skin campaign portrait.",
  },
  {
    project: "Marea No. 7",
    name: "Leon Duarte",
    role: "Partner, Marea No. 7",
    quote:
      "The team turned a place into a point of view. Guests understood the world before we had to explain a single detail.",
    image: "/images/marea-no-7.jpg",
    alt: "Marea No. 7 campaign terrace.",
  },
  {
    project: "Lumen",
    name: "Noor Hadi",
    role: "Curator, Lumen",
    quote:
      "ROUGE made the campaign feel as architectural as the work itself. It created attention without competing for it.",
    image: "/images/lumen.jpg",
    alt: "Lumen campaign light sculpture.",
  },
];

function useLenis(disabled: boolean) {
  useEffect(() => {
    if (disabled) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    let frame = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [disabled]);
}

function WordReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = children.split(" ");

  if (reduced) return <span className={className}>{children}</span>;

  return (
    <motion.span
      className={`word-reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: delay, staggerChildren: 0.042 },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          className="word"
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Arrow({ direction = "right" }: { direction?: "left" | "right" | "up" }) {
  const symbols = { left: "←", right: "→", up: "↗" };
  return (
    <span className={`arrow arrow-${direction}`} aria-hidden="true">
      {symbols[direction]}
    </span>
  );
}

function SectionHeader({
  index,
  title,
  dark = false,
}: {
  index: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className={`section-header ${dark ? "section-header-dark" : ""}`}>
      <span>{index}</span>
      <span>({title})</span>
      <span>© 2026</span>
    </div>
  );
}

function Header({ theme }: { theme: HeaderTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header header-${theme} ${menuOpen ? "menu-open" : ""}`}>
      <a href="#home" className="brand-link" aria-label="ROUGE home" onClick={close}>
        <img src="/images/rouge-mark-web.png" alt="" className="brand-mark" />
        <span>ROUGE<sup>®</sup></span>
      </a>
      <span className="header-time">JKT / {time || "00:00"}</span>
      <nav aria-label="Primary navigation" className="desktop-nav">
        <a href="#work">Work</a>
        <a href="#studio">Studio</a>
        <a href="#services">Services</a>
        <a href="#journal">Notes</a>
      </nav>
      <a href="#contact" className="header-contact">
        Contact
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {[
              ["Work", "#work"],
              ["Studio", "#studio"],
              ["Services", "#services"],
              ["Notes", "#journal"],
              ["Contact", "#contact"],
            ].map(([label, href], index) => (
              <a href={href} onClick={close} key={href}>
                <span>{label}</span>
                <span>0{index + 1}</span>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  return (
    <section
      id="home"
      className="hero"
      data-header-theme="dark"
      aria-label="ROUGE introduction"
    >
      <motion.img
        src="/images/hero.jpg"
        alt="Editorial portrait against a lacquer-red studio background."
        className="hero-image"
        initial={reduced ? false : { opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="image-overlay" />
      <div className="grain" aria-hidden="true" />
      <motion.div
        className="hero-services"
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.45 }}
      >
        <span>Art Direction</span>
        <span>Brand Worlds</span>
        <span>Digital Presence</span>
      </motion.div>
      <motion.p
        className="hero-manifesto"
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.45 }}
      >
        Original visual worlds for culture-led brands that refuse to disappear
        into the feed.
      </motion.p>
      <h1 className="hero-title">
        <WordReveal delay={0.16}>ART DIRECTION</WordReveal>
        <WordReveal delay={0.32}>+ BRAND WORLDS</WordReveal>
      </h1>
      <div className="hero-footer-meta">
        <span>Independent studio</span>
        <span>Jakarta / Everywhere</span>
        <a href="#work">
          Enter <Arrow direction="right" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="studio" className="about light-section" data-header-theme="light">
      <div className="page-shell">
        <SectionHeader index="02" title="About ROUGE" />
        <h2 className="about-statement balance">
          <WordReveal>
            ROUGE gives ambitious brands a visual world worth entering.
          </WordReveal>
        </h2>
        <div className="about-grid">
          <Reveal className="about-artifact">
            <img
              src="/images/cinder-objects.jpg"
              alt="Cinder Objects sculptural still life in chrome, red glass, and stone."
              loading="lazy"
            />
            <span>Material study / 01</span>
          </Reveal>
          <Reveal className="about-copy" delay={0.08}>
            <p>
              We are an independent art-direction studio shaping distinct
              identities, campaigns, and digital experiences. Strategy gives
              the work its spine; image gives it memory.
            </p>
          </Reveal>
          <Reveal className="about-copy" delay={0.14}>
            <p>
              Our role is to find the visual tension that belongs only to you,
              then build a system capable of carrying it across every
              touchpoint without sanding away the edge.
            </p>
            <a className="button button-dark" href="#services">
              Enter the studio <Arrow direction="right" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work light-section" data-header-theme="light">
      <div className="page-shell">
        <SectionHeader index="03" title="Selected Worlds" />
        <div className="work-intro">
          <p>Eight original worlds, built from premise to presence.</p>
          <span>Scroll to sequence</span>
        </div>
        <div className="project-stack">
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.shape}`}
              style={{ "--project-index": index } as React.CSSProperties}
              key={project.name}
            >
              <a href="#contact" aria-label={`Discuss a project like ${project.name}`}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="project-meta">
                  <h3>{project.name}</h3>
                  <span>{project.discipline}</span>
                  <span>{project.year}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="more-work">
          <a href="#contact" className="button button-dark">
            More works <Arrow direction="right" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services dark-section" data-header-theme="dark">
      <div className="page-shell">
        <SectionHeader index="04" title="Capabilities" dark />
        <h2 className="services-heading balance">
          <WordReveal>One visual premise. Every expression aligned.</WordReveal>
        </h2>
        <div className="services-list">
          {services.map((service, index) => (
            <motion.article
              className="service-row"
              key={service.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              <motion.span
                className="service-index"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <motion.div
                className="service-image"
                variants={{
                  hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
                  visible: {
                    opacity: 1,
                    clipPath: "inset(0% 0 0 0)",
                    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <img src={service.image} alt={service.alt} loading="lazy" />
              </motion.div>
              <motion.h3
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                {service.name}
              </motion.h3>
              <motion.div
                className="service-copy"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                <p>{service.copy}</p>
                <span>{service.scope}</span>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  const notes = [
    ["No. 01", "When consistency becomes invisibility", "4 min"],
    ["No. 02", "The image needs a premise", "6 min"],
    ["No. 03", "Why restraint still creates tension", "5 min"],
  ];
  return (
    <section id="journal" className="journal light-section" data-header-theme="light">
      <div className="page-shell">
        <SectionHeader index="05" title="Field Notes" />
        <div className="journal-grid">
          <h2>
            Notes on image,
            <br />
            identity, and attention.
          </h2>
          <div className="note-list">
            {notes.map(([number, title, time]) => (
              <a href="#contact" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <span>{time}</span>
                <Arrow direction="up" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const move = (nextDirection: number) => {
    setDirection(nextDirection);
    setActive((current) => {
      const next = current + nextDirection;
      return Math.max(0, Math.min(testimonials.length - 1, next));
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft" && active > 0) move(-1);
    if (event.key === "ArrowRight" && active < testimonials.length - 1) move(1);
  };

  const item = testimonials[active];
  const enterX = reduced ? 0 : direction * 12;
  const transition = {
    duration: reduced ? 0 : 0.34,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="testimonials"
      className="testimonials light-section"
      data-header-theme="light"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-label="Partner testimonials. Use left and right arrow keys to navigate."
    >
      <div className="page-shell">
        <SectionHeader index="06" title="Partner Notes" />
        <div className="testimonial-layout" aria-live="polite">
          <div className="testimonial-visual">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.img
                key={item.project}
                src={item.image}
                alt={item.alt}
                initial={{ opacity: 0, x: enterX, filter: reduced ? "none" : "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  x: -enterX,
                  filter: reduced ? "none" : "blur(4px)",
                }}
                transition={transition}
              />
            </AnimatePresence>
          </div>
          <div className="testimonial-content">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={item.quote}
                className="testimonial-state"
                initial={{ opacity: 0, x: enterX, filter: reduced ? "none" : "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  x: -enterX,
                  filter: reduced ? "none" : "blur(4px)",
                }}
                transition={transition}
              >
                <span className="testimonial-project">{item.project}</span>
                <blockquote>“{item.quote}”</blockquote>
                <div className="testimonial-person">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="testimonial-controls">
              <span className="testimonial-count">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <div>
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
                  <Arrow direction="right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section id="contact" className="closing-cta dark-section" data-header-theme="dark">
      <img
        src="/images/nomae.jpg"
        alt="Editorial portrait in ivory tailoring and a lacquer-red glove."
        loading="lazy"
      />
      <div className="image-overlay" />
      <div className="grain" aria-hidden="true" />
      <div className="closing-content">
        <span>Have a world in mind?</span>
        <h2>
          <WordReveal>Make the next image matter.</WordReveal>
        </h2>
        <a className="button button-outline" href="mailto:hello@rouge.studio">
          Start a conversation <Arrow direction="right" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [42, 0]);

  return (
    <footer ref={footerRef} className="footer light-section" data-header-theme="light">
      <motion.div className="footer-inner page-shell" style={{ y }}>
        <div className="footer-top">
          <h2>
            <img src="/images/rouge-mark-web.png" alt="" className="footer-mark" />
            <span>ROUGE<sup>®</sup></span>
          </h2>
          <div className="footer-links">
            <div>
              <span>Explore</span>
              <a href="#home">Home</a>
              <a href="#work">Work</a>
              <a href="#studio">Studio</a>
              <a href="#services">Services</a>
            </div>
            <div>
              <span>Connect</span>
              <a href="mailto:hello@rouge.studio">Email</a>
              <a href="#contact">Instagram</a>
              <a href="#contact">Are.na</a>
              <a href="#contact">LinkedIn</a>
            </div>
          </div>
        </div>
        <a className="footer-email" href="mailto:hello@rouge.studio">
          hello@rouge.studio <Arrow direction="up" />
        </a>
        <div className="footer-bottom">
          <span>Jakarta / Everywhere</span>
          <span>All projects and people are fictional.</span>
          <span>© 2026</span>
          <a href="#home">
            Back to top <Arrow direction="up" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

function App() {
  const reduced = useReducedMotion();
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>("dark");

  useLenis(Boolean(reduced));

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-header-theme]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderTheme(
              (entry.target.getAttribute("data-header-theme") as HeaderTheme) ?? "light",
            );
          }
        });
      },
      { rootMargin: "-1px 0px -88% 0px", threshold: 0 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Header theme={headerTheme} />
      <main className="page-layer">
        <Hero />
        <About />
        <Work />
        <Services />
        <Journal />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
