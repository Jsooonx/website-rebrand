import { useState, type FormEvent } from "react";
import {
  BehanceLogo,
  InstagramLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import FormButton from "@reference-export/form-button.jsx";
import ProjectRow from "@reference-export/project-row.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "../../shared/layout";

const featuredProjects = [
  {
    title: "LUMEN SODA",
    image: "/assets/kindling-lumen-soda.webp",
  },
  {
    title: "RADIO KECIL",
    image: "/assets/kindling-radio-kecil.webp",
  },
  {
    title: "GOOD WEATHER PRESS",
    image: "/assets/kindling-good-weather-press.webp",
  },
] as const;

const navigation = [
  [
    ["FIELD NOTES", "#field-notes"],
    ["PROJECTS", "#projects"],
    ["ABOUT", "#about"],
  ],
  [
    ["SERVICES", "#services"],
    ["FLOW", "#practice"],
    ["PRICING", "#pricing"],
  ],
  [
    ["CONTACT", "#contact"],
    ["PRIVACY", "#legal"],
    ["TERMS", "#legal"],
  ],
] as const;

const socials = [
  { href: "https://behance.net", name: "Behance", Icon: BehanceLogo },
  { href: "https://instagram.com", name: "Instagram", Icon: InstagramLogo },
  { href: "https://x.com", name: "X", Icon: XLogo },
  { href: "https://youtube.com", name: "YouTube", Icon: YoutubeLogo },
  { href: "https://tiktok.com", name: "TikTok", Icon: TiktokLogo },
] as const;

export function FooterAdapter() {
  const mode = useLayoutMode();
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterMessage(
      "The field-note list is not connected yet. Please use the contact link.",
    );
  };

  return (
    <footer className="site-footer" aria-labelledby="footer-wordmark">
      <Reveal preset="subtle">
        <h2 className="site-footer__wordmark" id="footer-wordmark">
          KINDLING OFFICE
        </h2>
      </Reveal>

      <StaggerGroup className="site-footer__middle">
        <StaggerItem>
          <form
            className="footer-newsletter"
            aria-label="Kindling Office field notes newsletter"
            onSubmit={handleNewsletter}
          >
            <p>
              Field notes on identity, launches, and the work behind them—once a
              month.
            </p>
            <label className="footer-newsletter__label" htmlFor="footer-email">
              EMAIL ADDRESS
            </label>
            <div className="footer-newsletter__field">
              <input
                id="footer-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Your email address"
                required
              />
              <div className="footer-newsletter__submit">
                <FormButton variant="Default" />
              </div>
            </div>
            <p
              className="footer-newsletter__status"
              role="status"
              aria-live="polite"
            >
              {newsletterMessage}
            </p>
          </form>
        </StaggerItem>

        <StaggerItem>
          <div className="footer-projects" aria-label="Featured projects">
            {featuredProjects.map((project) => (
              <a
                className="footer-project"
                href="#projects"
                aria-label={`View ${project.title} project`}
                key={project.title}
              >
                <ProjectRow
                  variant={mode === "phone" ? "Phone" : "Desktop"}
                  image={{ src: project.image, alt: `${project.title} preview` }}
                  title={project.title}
                  style={{ width: "100%" }}
                />
              </a>
            ))}
          </div>
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="site-footer__information">
        <StaggerItem preset="subtle">
          <address className="footer-address">
            Jl. Kemang Raya 17,
            <br />
            Jakarta, Indonesia
          </address>
        </StaggerItem>

        <StaggerItem preset="subtle">
          <nav className="footer-navigation" aria-label="Footer navigation">
            {navigation.map((group, index) => (
              <div className="footer-navigation__group" key={index}>
                {group.map(([label, href]) => (
                  <a href={href} key={label}>
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </StaggerItem>
      </StaggerGroup>

      <Reveal className="site-footer__bottom" id="legal" preset="subtle">
        <p>© 2026 KINDLING OFFICE</p>
        <div className="footer-socials" aria-label="Social links">
          {socials.map(({ Icon, href, name }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} (opens in a new tab)`}
              key={name}
            >
              <Icon aria-hidden="true" size={16} weight="regular" />
            </a>
          ))}
        </div>
      </Reveal>
    </footer>
  );
}
