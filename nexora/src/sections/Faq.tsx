import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "../components/ui/Icon";
import { fieldNotes } from "../content/siteData";
import { useEntrance } from "../hooks/useEntrance";

export function Faq() {
  const entrance = useEntrance<HTMLElement>();
  const [openItem, setOpenItem] = useState<string | null>(fieldNotes[0].id);

  return (
    <section ref={entrance.ref} id="field-notes" className={`dossier-section field-notes-section ${entrance.className}`} aria-labelledby="faq-title">
      <div className="dossier-shell">
        <header className="dossier-heading dossier-heading--split">
          <div className="entrance-item">
            <p className="dossier-kicker"><span /> Field notes / 07</p>
            <h2 id="faq-title">What the dossier means,<br />in plain language.</h2>
          </div>
          <p className="dossier-heading__aside entrance-item">A compact index for the product model, evidence flow, and daily operating rhythm.</p>
        </header>
        <div className="field-notes" aria-label="Field notes index">
          {fieldNotes.map((item, index) => {
            const isOpen = openItem === item.id;
            return (
              <article className={`field-note entrance-item${isOpen ? " is-open" : ""}`} key={item.id}>
                <div className="field-note__index"><span>0{index + 1}</span><span>{item.keyword}</span></div>
                <h3 className="field-note__question">
                  <button
                    type="button"
                    aria-label={item.question}
                    aria-expanded={isOpen}
                    aria-controls={`field-note-${item.id}`}
                    onClick={() => setOpenItem((current) => current === item.id ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <i aria-hidden="true"><Icon name="chevron-down" /></i>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`field-note-${item.id}`}
                      className="field-note__answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
          <footer className="field-notes__footer">
            <p><span>Keep moving</span> Start with one recurring question, connect the records around it, and leave every decision with a clear owner.</p>
            <a href="#top">Return to live case ↗</a>
          </footer>
        </div>
      </div>
    </section>
  );
}
