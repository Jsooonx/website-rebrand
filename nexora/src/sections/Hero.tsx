import { ArrowButton } from "../components/ui/ArrowButton";
import { CaseFile } from "../components/visuals/CaseFile";

export function Hero() {
  return (
    <section id="top" className="hero dossier-hero hero--dashboard-led hero--centered" aria-label="Live case">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="dossier-kicker"><span /> Operations workspace</p>
          <h1 id="hero-title">The whole case <span>behind every move.</span></h1>
          <p>Nexora connects a live work request to the evidence, decision, and accountable destination around it.</p>
          <div className="hero__actions">
            <ArrowButton href="#workflow" className="arrow-button--primary">Follow the case</ArrowButton>
            <span className="hero__note">Context, evidence, action — one continuous thread.</span>
          </div>
        </div>
        <div className="hero__case hero__case--wide" aria-label="Live case workspace"><CaseFile stage="collect" /></div>
      </div>
    </section>
  );
}
