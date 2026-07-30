import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandMark } from "../components/ui/BrandMark";
import { Icon } from "../components/ui/Icon";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Why NEXORA", href: "#why" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#top" aria-label="NEXORA home">
          <BrandMark variant="full" />
        </a>
        <nav className="header__nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header__brief" href="#briefing">
          Book briefing
          <Icon name="arrow-right" size={14} />
        </a>
        <button
          className="header__menu"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <span>{link.label}</span>
                <Icon name="arrow-right" />
              </a>
            ))}
            <a href="#briefing" onClick={() => setOpen(false)}>
              <span>Request briefing</span>
              <Icon name="arrow-right" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
