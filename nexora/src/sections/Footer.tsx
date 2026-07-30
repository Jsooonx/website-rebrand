import { BrandMark } from "../components/ui/BrandMark";
import { footerGroups } from "../content/siteData";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">
        <div className="footer__lead">
          <a href="#top" aria-label="NEXORA, return to top">
            <BrandMark />
          </a>
          <p>Operations intelligence for the whole network.</p>
          <a className="footer__future-link" href="mailto:hello@nexora.example">
            hello@nexora.example
          </a>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <a href={link.href} key={link.label}>{link.label}</a>
              ))}
            </div>
          ))}
        </nav>

        <div className="footer__base">
          <span>© 2026 NEXORA. Product concept.</span>
          <span>Fictional brand and product experience.</span>
        </div>
      </div>
    </footer>
  );
}
