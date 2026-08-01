import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowButton } from "../components/ui/ArrowButton";
import { scenarioStories } from "../content/siteData";
import { useEntrance } from "../hooks/useEntrance";

export function ScenarioStories() {
  const entrance = useEntrance<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const story = scenarioStories[activeIndex];
  const move = (direction: number) => setActiveIndex((activeIndex + direction + scenarioStories.length) % scenarioStories.length);

  return (
    <section ref={entrance.ref} id="stories" className={`dossier-section stories-section ${entrance.className}`} aria-labelledby="stories-title">
      <div className="dossier-shell">
        <header className="dossier-heading dossier-heading--split">
          <div className="entrance-item">
            <p className="dossier-kicker"><span /> Scenario stories / 08</p>
            <h2 id="stories-title">Every question.<br />An owned next step.</h2>
          </div>
          <p className="dossier-heading__aside entrance-item">Follow three operating roles as they move from an open question to a resolved next step.</p>
        </header>

        <div className="story-frame entrance-item">
          <div className="story-frame__gutter" aria-hidden="true">
            <span>NX / WORKFLOW</span><span>08—{String(activeIndex + 1).padStart(2, "0")}</span>
          </div>
          <motion.article
              key={story.id}
              className="story"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: [0.2, 0, 0, 1] }}
            >
              <p className="story__label">{story.label}</p>
              <div className="story__copy">
                <p>{story.story}</p>
              </div>
              <div className="story__meta">
                <div><span>Role</span><h3>{story.role}</h3></div>
                <div><span>Resolved state</span><p>{story.result.replace("Result: ", "")}</p></div>
              </div>
          </motion.article>
          <motion.aside
            key={`${story.id}-portrait`}
            className="story__portrait"
            data-story={story.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.38, ease: [0.2, 0, 0, 1] }}
            aria-label={`${story.role} profile image`}
          >
            <img src={story.portrait} alt={`${story.role} portrait`} />
            <div className="story__portrait-caption"><span>Active role</span><strong>{story.role}</strong></div>
          </motion.aside>
          <div className="story-controls">
            <div>
              <ArrowButton direction="left" aria-label="Previous scenario" onClick={() => move(-1)}>Previous scenario</ArrowButton>
              <ArrowButton aria-label="Next scenario" onClick={() => move(1)}>Next scenario</ArrowButton>
            </div>
            <p>Story {activeIndex + 1} of {scenarioStories.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
