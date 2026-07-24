import {
  ArrowUpRight,
  List,
  X,
} from "@phosphor-icons/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import MainHeader from "@reference-export/main-header.jsx";
import ProjectCard from "@reference-export/project-card.jsx";
import TextHeader from "@reference-export/text-header.jsx";
import {
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "./shared/layout";

const fieldNotes = [
  {
    title: "LUMEN SODA",
    note: "A botanical soda made legible at first glance.",
    src: "/assets/kindling-lumen-soda.webp",
    alt: "Condensation-covered botanical soda bottle on a blue plinth",
    className: "hero-field-card--lead",
  },
  {
    title: "RADIO KECIL",
    note: "A pocket radio with a louder cultural signal.",
    src: "/assets/kindling-radio-kecil.webp",
    alt: "Chrome portable radio beside a tomato-red wall",
    className: "hero-field-card--tall",
  },
  {
    title: "GOOD WEATHER PRESS",
    note: "An independent press with a tactile publishing rhythm.",
    src: "/assets/kindling-good-weather-press.webp",
    alt: "Stack of colourfully printed independent journals",
    className: "hero-field-card--small",
  },
] as const;

const navigation = [
  ["FIELD NOTES", "#field-notes"],
  ["SERVICES", "#services"],
  ["PRACTICE", "#practice"],
  ["CONTACT", "#contact"],
] as const;

function KindlingNavigation({
  compact,
  floating,
  hidden,
}: {
  compact: boolean;
  floating: boolean;
  hidden: boolean;
}) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!compact || hidden) setOpen(false);
  }, [compact, hidden]);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={[
        "kindling-nav",
        floating ? "kindling-nav--floating" : "",
        hidden ? "kindling-nav--hidden" : "",
      ].filter(Boolean).join(" ")}
    >
      <a
        className="kindling-nav__brand"
        href="#top"
        aria-label="Kindling Office, back to top"
      >
        <span className="kindling-nav__mark">
          <img
            src="/assets/kindling-mark.webp"
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </span>
        <span>Kindling Office</span>
      </a>

      {compact ? (
        <>
          <button
            className="kindling-nav__menu-button"
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="kindling-mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((current) => !current)}
          >
            <span
              className={`kindling-nav__menu-icon${open ? " is-hidden" : ""}`}
              aria-hidden="true"
            >
              <List size={23} />
            </span>
            <span
              className={`kindling-nav__menu-icon kindling-nav__menu-icon--close${open ? "" : " is-hidden"}`}
              aria-hidden="true"
            >
              <X size={21} />
            </span>
          </button>

          {open && (
            <nav
              className="kindling-nav__mobile-menu"
              id="kindling-mobile-menu"
              aria-label="Primary navigation"
            >
              {navigation.map(([label, href], index) => (
                <a
                  href={href}
                  key={label}
                  ref={index === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              ))}
            </nav>
          )}
        </>
      ) : (
        <nav className="kindling-nav__links" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
          <ArrowUpRight aria-hidden="true" size={16} weight="bold" />
        </nav>
      )}
    </header>
  );
}

export function KindlingOfficeHero() {
  const mode = useLayoutMode();
  const [navigationState, setNavigationState] = useState({
    floating: false,
    hidden: false,
  });
  const isPhone = mode === "phone";
  const isCompactNavigation = mode !== "desktop";

  useEffect(() => {
    let directionAnchor = window.scrollY;
    let frame = 0;

    const updateNavigation = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const atTop = scrollY <= 8;

      if (atTop) {
        directionAnchor = scrollY;
        setNavigationState({ floating: false, hidden: false });
        return;
      }

      const distance = scrollY - directionAnchor;
      if (Math.abs(distance) < 10) return;
      directionAnchor = scrollY;
      setNavigationState({ floating: true, hidden: distance > 0 });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="kindling-hero"
      id="top"
      aria-labelledby="kindling-hero-title"
    >
      <div className="kindling-nav-shell">
        <KindlingNavigation
          compact={isCompactNavigation}
          floating={navigationState.floating}
          hidden={navigationState.hidden}
        />
      </div>

      <StaggerGroup className="hero-editorial" stagger={0.075}>
        <StaggerItem className="hero-editorial__kicker" preset="subtle">
          <p>INDEPENDENT BRAND PRACTICE</p>
          <p>JAKARTA / WORKING EVERYWHERE</p>
        </StaggerItem>

        <StaggerItem className="main-header-adapter">
          <MainHeader
            id="kindling-hero-title"
            title="KINDLING OFFICE"
            text=""
            badge=""
            variant={isPhone ? "Default Phone" : "Default"}
            style={{ width: "100%" }}
          />
        </StaggerItem>

        <StaggerItem className="hero-editorial__brief">
          <p>
            We find the live wire in a venture, then turn it into an identity,
            campaign, and digital front door people want to pass on.
          </p>
          <div className="text-header-adapter">
            <TextHeader
              variant={isPhone ? "Phone" : "Desktop"}
              text=""
              badge=""
              badgeSecondary=""
              hasButtons
              button1Title="BRING US IN"
              button1Link="#contact"
              button2Title="READ THE FIELD"
              button2Link="#field-notes"
              style={{ width: "100%" }}
            />
          </div>
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup
        className="hero-field-strip"
        id="field-notes"
        aria-label="Selected Kindling Office field notes"
      >
        {fieldNotes.map((field) => (
          <StaggerItem
            className={`hero-field-card ${field.className}`}
            key={field.title}
            preset="media"
          >
            <figure>
              <ProjectCard
                image={{ src: field.src, alt: field.alt }}
                showVideo={false}
                badge=""
                title=""
                tag=""
                style={{ width: "100%", height: "100%" }}
              />
              <figcaption>
                <strong>{field.title}</strong>
                <span>{field.note}</span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
