import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "../components/ui/Icon";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { faqGroups } from "../content/siteData";

export function Faq() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [openItem, setOpenItem] = useState(faqGroups[0].items[0].id);
  const activeGroup = faqGroups[groupIndex];

  function selectGroup(index: number) {
    setGroupIndex(index);
    setOpenItem(faqGroups[index].items[0].id);
  }

  return (
    <section id="faq" className="section section--faq" aria-labelledby="faq-title">
      <div className="section__inner">
        <SectionHeader
          eyebrow="FAQ"
          index="06"
          titleId="faq-title"
          title="Answers for the operating room."
          description="A practical view of what NEXORA connects to, how it decides, and where your team stays in control."
        />

        <div className="faq-layout">
          <aside className="faq-sidebar">
            <Reveal>
              <div className="faq-categories" role="tablist" aria-label="FAQ categories">
                {faqGroups.map((group, index) => (
                  <button
                    id={`faq-tab-${group.id}`}
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-label={group.label}
                    aria-selected={index === groupIndex}
                    aria-controls={`faq-panel-${group.id}`}
                    onClick={() => selectGroup(index)}
                  >
                    <span>0{index + 1}</span>
                    {group.label}
                  </button>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="faq-contact">
                <span>Still mapping the problem?</span>
                <h3>Bring us the operating question.</h3>
                <a href="#briefing">Request an operator brief <span aria-hidden="true">↗</span></a>
              </div>
            </Reveal>
          </aside>

          <motion.div
            className="faq-list"
            id={`faq-panel-${activeGroup.id}`}
            key={activeGroup.id}
            role="tabpanel"
            aria-labelledby={`faq-tab-${activeGroup.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeGroup.items.map((item, index) => {
              const isOpen = openItem === item.id;
              return (
                <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.id}>
                  <h3>
                    <button
                      type="button"
                      aria-label={item.question}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      onClick={() => setOpenItem(item.id)}
                    >
                      <span><em>0{index + 1}</em>{item.question}</span>
                      <i><Icon name="chevron-down" /></i>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
