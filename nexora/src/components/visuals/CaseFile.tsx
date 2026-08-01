import { caseFile, type DossierStage } from "../../content/siteData";

interface CaseFileProps {
  stage: DossierStage;
  className?: string;
  idPrefix?: string;
}

const stageLabels: Record<DossierStage, string> = {
  collect: "Collecting context",
  validate: "Validating evidence",
  act: "Preparing action",
};

export function CaseFile({ stage, className = "", idPrefix = "case" }: CaseFileProps) {
  return (
    <section className={`case-file ${className}`} data-stage={stage} aria-label="Live case file">
      <header className="case-file__header">
        <span>Live case / 01</span>
        <strong>{stageLabels[stage]}</strong>
      </header>

      <div className="case-file__dashboard" aria-label="Nexora workspace overview">
        <div className="case-file__dashboard-top"><span className="case-file__label">Nexora workspace</span><span className="case-file__status"><i /> synced just now</span></div>
        <div className="case-file__metrics">
          <div><span>Open threads</span><strong>12</strong></div>
          <div><span>Sources online</span><strong>08</strong></div>
          <div><span>Actions ready</span><strong>04</strong></div>
        </div>
        <div className="case-file__signal"><span>Decision signal</span><b><i style={{ width: "78%" }} /></b><strong>78%</strong></div>
      </div>

      <section className={`case-file__region ${stage === "collect" ? "is-emphasized" : ""}`} aria-labelledby={`${idPrefix}-request`}>
        <p className="case-file__label">Incoming request</p>
        <h2 id={`${idPrefix}-request`}>{caseFile.request}</h2>
      </section>

      <section className={`case-file__region ${stage === "collect" ? "is-emphasized" : ""}`} aria-labelledby={`${idPrefix}-sources`}>
        <div className="case-file__section-heading">
          <p className="case-file__label">Attached evidence</p>
          <span>{caseFile.sources.length} records</span>
        </div>
        <h3 id={`${idPrefix}-sources`}>Connected sources</h3>
        <ul>
          {caseFile.sources.map((source) => (
            <li key={source.label}>
              <strong>{source.label}</strong>
              <span>{source.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`case-file__region ${stage === "validate" ? "is-emphasized" : ""}`} aria-labelledby={`${idPrefix}-conclusion`}>
        <p className="case-file__label">Evidence checked</p>
        <h3 id={`${idPrefix}-conclusion`}>Verified conclusion</h3>
        <p>{caseFile.conclusion.replace("Verified conclusion: ", "")}</p>
      </section>

      <section className={`case-file__region ${stage === "act" ? "is-emphasized" : ""}`} aria-labelledby={`${idPrefix}-action`}>
        <p className="case-file__label">Next accountable move</p>
        <h3 id={`${idPrefix}-action`}>Action destination</h3>
        <p>{caseFile.action.replace("Action owner: ", "")}</p>
      </section>
    </section>
  );
}
