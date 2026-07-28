import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormaMark } from "./FormaMark";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const focusableLinks = Array.from(
      menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
    );
    const focusableElements = [
      menuButtonRef.current,
      ...focusableLinks,
    ].filter(
      (element): element is HTMLButtonElement | HTMLAnchorElement =>
        element !== null,
    );

    const focusTimer = window.requestAnimationFrame(() => {
      focusableLinks[0]?.focus();
    });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) return;

      const currentIndex = focusableElements.findIndex(
        (element) => element === document.activeElement,
      );
      const lastIndex = focusableElements.length - 1;

      if (event.shiftKey && currentIndex <= 0) {
        event.preventDefault();
        focusableElements[lastIndex]?.focus();
      } else if (!event.shiftKey && currentIndex === lastIndex) {
        event.preventDefault();
        focusableElements[0]?.focus();
      }
    };

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.header
      className="site-header"
      initial={reduceMotion ? { opacity: 0 } : "hidden"}
      animate="visible"
      variants={
        reduceMotion
          ? undefined
          : { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } }
      }
    >
      <motion.a
        className="brand-link"
        href="#top"
        aria-label="Forma Common, home"
        variants={reduceMotion ? undefined : headerItemVariants}
      >
        <FormaMark className="brand-link__mark" />
        <span>forma common</span>
      </motion.a>

      <motion.nav
        className="desktop-nav"
        aria-label="Primary navigation"
        variants={
          reduceMotion
            ? undefined
            : { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }
        }
      >
        {links.map((link) => (
          <motion.a
            className="nav-link"
            href={link.href}
            key={link.href}
            variants={reduceMotion ? undefined : headerItemVariants}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.nav>

      <motion.a
        className="nav-link nav-link--project"
        href="#contact"
        variants={reduceMotion ? undefined : headerItemVariants}
      >
        Start a project
      </motion.a>

      <motion.button
        ref={menuButtonRef}
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
        variants={reduceMotion ? undefined : headerItemVariants}
      >
        <span className={open ? "menu-line menu-line--top is-open" : "menu-line menu-line--top"} />
        <span className={open ? "menu-line menu-line--bottom is-open" : "menu-line menu-line--bottom"} />
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            ref={menuRef}
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            {[...links, { label: "Start a project", href: "#contact" }].map(
              (link, index) => (
                <a
                  className="mobile-menu__link"
                  href={link.href}
                  key={link.href}
                  onClick={close}
                >
                  <span>{link.label}</span>
                  <span className="mobile-menu__index">
                    0{index + 1}
                  </span>
                </a>
              ),
            )}
            <p className="mobile-menu__note">
              Independent brand practice
              <br />
              Jakarta / Indonesia
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
