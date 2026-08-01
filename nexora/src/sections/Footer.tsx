import { BrandMark } from "../components/ui/BrandMark";
import { footerGroups } from "../content/siteData";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">
        <div className="footer__lead">
          <a href="#top" aria-label="Nexora, return to top"><BrandMark /></a>
          <p>One operating layer for the questions, records, and actions moving through your team.</p>
          <span>STACKFRAME / NEXORA</span>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          {footerGroups.map((group) => <div key={group.title}><h2>{group.title}</h2>{group.links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}</div>)}
        </nav>
        <div className="footer__base"><span>© 2026 Nexora — Stackframe template.</span><span>Built for connected work.</span></div>
      </div>
    </footer>
  );
}
