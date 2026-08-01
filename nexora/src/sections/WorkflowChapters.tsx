import { useEffect, useRef, useState } from "react";
import { type DossierStage, workflowChapters } from "../content/siteData";
import { CaseFile } from "../components/visuals/CaseFile";
import { useEntrance } from "../hooks/useEntrance";

export function WorkflowChapters() {
  const entrance = useEntrance<HTMLElement>();
  const [activeStage, setActiveStage] = useState<DossierStage>("collect");
  const chapterRefs = useRef<Partial<Record<DossierStage, HTMLElement | null>>>({});

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
        const stage = mostVisible?.target.getAttribute("data-stage") as DossierStage | null;
        if (stage) setActiveStage(stage);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.4, 0.7] },
    );

    Object.values(chapterRefs.current).forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const selectChapter = (stage: DossierStage) => {
    setActiveStage(stage);
    const chapter = chapterRefs.current[stage];
    if (typeof chapter?.scrollIntoView === "function") {
      chapter.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section ref={entrance.ref} id="workflow" className={`workflow ${entrance.className}`} aria-labelledby="workflow-title">
      <div className="workflow__intro">
        <p className="dossier-kicker entrance-item">Operating sequence / 01—03</p>
        <h2 className="entrance-item" id="workflow-title">From context<br />to accountable action.</h2>
        <p className="entrance-item">Every chapter advances the same renewal request. The surrounding record stays inspectable as the work changes state.</p>
      </div>

      <div className="workflow__layout">
        <nav className="workflow__rail" aria-label="Workflow chapters">
          {workflowChapters.map((chapter) => {
            const isActive = activeStage === chapter.id;
            return (
              <button
                key={chapter.id}
                type="button"
                aria-current={isActive ? "step" : undefined}
                aria-pressed={isActive}
                onClick={() => selectChapter(chapter.id)}
              >
                <span>{chapter.number}</span>
                <strong>{chapter.label}</strong>
              </button>
            );
          })}
        </nav>

        <div className="workflow__chapters">
          {workflowChapters.map((chapter, index) => (
            <article
              key={chapter.id}
              ref={(element) => { chapterRefs.current[chapter.id] = element; }}
              className={`workflow-chapter entrance-item workflow-chapter--${chapter.id} ${activeStage === chapter.id ? "is-active" : ""}`}
              data-stage={chapter.id}
              aria-labelledby={`chapter-${chapter.id}`}
            >
              <div className="workflow-chapter__copy">
                <p>{chapter.number} / {chapter.label}</p>
                <h3 id={`chapter-${chapter.id}`}>{chapter.title}</h3>
                <p>{chapter.summary}</p>
                <small>{chapter.evidence}</small>
              </div>
              <CaseFile stage={chapter.id} className="workflow-chapter__case" idPrefix={`chapter-${chapter.id}`} />
              <span className="workflow-chapter__index" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
