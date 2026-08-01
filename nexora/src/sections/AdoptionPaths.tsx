import { adoptionPaths } from "../content/siteData";
import { Icon, type IconName } from "../components/ui/Icon";
import { useEntrance } from "../hooks/useEntrance";

const pathIcons: IconName[] = ["layers", "route", "check"];

export function AdoptionPaths() {
  const entrance = useEntrance<HTMLElement>();
  return (
    <section ref={entrance.ref} id="adoption" className={`dossier-section adoption-section ${entrance.className}`} aria-labelledby="adoption-title">
      <div className="dossier-shell">
        <header className="dossier-heading dossier-heading--split">
          <div className="entrance-item">
            <p className="dossier-kicker"><span /> Operating paths / 06</p>
            <h2 id="adoption-title">Start with the operating mode,<br />not a price tier.</h2>
          </div>
          <p className="dossier-heading__aside entrance-item">Choose the operating depth that matches the way your team makes decisions.</p>
        </header>

        <div className="adoption-paths">
          {adoptionPaths.map((path, index) => (
            <article style={{ animationDelay: `${index * 90}ms` }} className={`adoption-path entrance-item${path.featured ? " is-featured" : ""}`} key={path.id}>
              <header>
                <span>Path 0{index + 1}</span>
                <span>{path.featured ? "Suggested sequence" : "Operating sequence"}</span>
              </header>
              <div className="adoption-path__name">
                <div className="adoption-path__marker"><Icon name={pathIcons[index]} size={16} /><span>0{index + 1}</span></div>
                <h3>{path.name}</h3>
              </div>
              <div className="adoption-path__price"><strong>{path.price}</strong><span>{path.priceNote}</span></div>
              <p>{path.intendedUse}</p>
              <dl>
                <dt>Operating mode</dt>
                <dd>{path.operatingMode}</dd>
                <dt>Field note</dt>
                <dd>{path.detail}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
