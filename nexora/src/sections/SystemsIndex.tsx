import { useState } from "react";
import { Icon, type IconName } from "../components/ui/Icon";
import { SystemConnectorRail } from "../components/visuals/SystemConnectorRail";
import { systemRows } from "../content/siteData";
import { useEntrance } from "../hooks/useEntrance";

const sourceIcons: IconName[] = ["warehouse", "route", "signal", "layers"];

export function SystemsIndex() {
  const entrance = useEntrance<HTMLElement>();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section ref={entrance.ref} id="systems" className={`dossier-section systems-section ${entrance.className}`} aria-labelledby="systems-title">
      <div className="dossier-shell">
        <header className="dossier-heading entrance-item">
          <p className="dossier-kicker"><span /> Systems index / 05</p>
          <h2 id="systems-title">Context in.<br />Decisions out.</h2>
          <p>Trace a source through the reasoning layer to the work it can unlock. A route only activates on direct pointer or keyboard focus.</p>
        </header>

        <div className="systems-directory">
          <div className="systems-directory__labels" aria-hidden="true">
            <span>Context in</span><span>Reasoning layer</span><span>Work out</span>
          </div>
          <SystemConnectorRail rows={systemRows} activeId={activeId} />
          <div className="systems-directory__rows">
            {systemRows.map((row, index) => {
              const isActive = activeId === row.id;
              return (
                <button
                  key={row.id}
                  type="button"
                  className="system-row entrance-item"
                  aria-label={`${row.source} to ${row.output}`}
                  data-active={isActive}
                  onMouseEnter={() => setActiveId(row.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(row.id)}
                  onBlur={() => setActiveId(null)}
                >
                  <span className="system-row__source"><i className="system-row__index">0{index + 1}</i><span className="system-row__source-chip"><Icon name={sourceIcons[index]} size={15} /><strong>{row.source}</strong></span></span>
                  <span className="system-row__reasoning"><span className="system-row__reasoning-node"><i aria-hidden="true" /><strong>{row.reasoning}</strong></span></span>
                  <span className="system-row__output"><strong className="system-row__output-pill">{row.output}<Icon name="arrow-right" size={14} /></strong></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
