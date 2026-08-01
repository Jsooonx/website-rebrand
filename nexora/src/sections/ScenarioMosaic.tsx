import { practiceScenarios } from "../content/siteData";
import { Icon, type IconName } from "../components/ui/Icon";
import { useEntrance } from "../hooks/useEntrance";

const scenarioIcons: IconName[] = ["route", "signal", "warehouse"];

export function ScenarioMosaic() {
  const entrance = useEntrance<HTMLElement>();
  return (
    <section ref={entrance.ref} id="scenarios" className={`dossier-section scenario-section ${entrance.className}`} aria-labelledby="scenario-title">
      <div className="dossier-shell">
        <header className="dossier-heading dossier-heading--split">
          <div className="entrance-item">
            <p className="dossier-kicker"><span /> Nexora in practice / 04</p>
            <h2 id="scenario-title">Three situations.<br />One inspectable case.</h2>
          </div>
          <div className="dossier-heading__aside entrance-item">
            <p>Each view shows a different operating pressure, connected to the same evidence and action layer.</p>
          </div>
        </header>

        <div className="scenario-mosaic">
          {practiceScenarios.map((scenario, index) => (
            <article style={{ animationDelay: `${index * 90}ms` }} className={`scenario-tile entrance-item scenario-tile--${index + 1}`} key={scenario.id}>
              <header>
                <span>Case 0{index + 1}</span>
                <i aria-hidden="true" />
              </header>
              <div className="scenario-tile__body">
                <p className="scenario-tile__eyebrow"><Icon name={scenarioIcons[index]} size={15} /> Working situation</p>
                <h3>{scenario.label}</h3>
                <p>{scenario.problem}</p>
              </div>
              <dl>
                <div><dt>Signal</dt><dd>{scenario.signal}</dd></div>
                <div><dt>Outcome</dt><dd>{scenario.outcome}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
