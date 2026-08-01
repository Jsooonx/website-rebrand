import { ArrowButton } from "../components/ui/ArrowButton";
import { closingCase } from "../content/siteData";
import { useEntrance } from "../hooks/useEntrance";

export function ClosingCta() {
  const entrance = useEntrance<HTMLElement>();
  return (
    <section ref={entrance.ref} id="briefing" className={`launch-section ${entrance.className}`} aria-labelledby="closing-title">
      <div className="launch-panel">
        <div className="launch-panel__copy entrance-item">
          <p className="dossier-kicker"><span /> Close the loop / 09</p>
          <h2 id="closing-title">Turn questions<br />into next moves.</h2>
          <p>Follow a request from its first signal to a decision people can inspect and an action someone can own.</p>
          <ArrowButton href="#top" className="launch-panel__cta">Open the live case</ArrowButton>
        </div>
        <article className="resolved-case entrance-item" aria-labelledby="resolved-case-title">
          <header><span>{closingCase.label}</span><strong>Closed / 16:40</strong></header>
          <div>
            <p>NX—CASE 001</p>
            <h3 id="resolved-case-title">{closingCase.title}</h3>
            <p>{closingCase.detail}</p>
          </div>
          <footer><span>Evidence checked</span><span>Owner assigned</span><span>Review scheduled</span></footer>
        </article>
      </div>
    </section>
  );
}
