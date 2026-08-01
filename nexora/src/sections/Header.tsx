import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandMark } from "../components/ui/BrandMark";
import { Icon } from "../components/ui/Icon";
import { PillActionContent } from "../components/ui/PillActionContent";

const links = [
  { label: "Workflow", href: "#workflow" },
  { label: "Scenarios", href: "#scenarios" },
  { label: "Systems", href: "#systems" },
  { label: "Field notes", href: "#field-notes" },
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

  return <header className="header">
    <div className="header__inner">
      <a className="header__brand" href="#top" aria-label="Nexora home"><BrandMark variant="full" /></a>
      <nav className="header__nav" aria-label="Primary navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="header__brief" href="#workflow"><PillActionContent>Open case</PillActionContent></a>
      <button className="header__menu" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}><Icon name={open ? "x" : "menu"} /></button>
    </div>
    <AnimatePresence initial={false}>
      {open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}>
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><span>{link.label}</span><Icon name="arrow-right" /></a>)}
        <a href="#workflow" onClick={() => setOpen(false)}><span>Open case</span><Icon name="arrow-right" /></a>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}
