import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "../components/ui/Icon";
import { SectionHeader } from "../components/ui/SectionHeader";
import { faqGroups } from "../content/siteData";

export function Faq() {
  const [groupIndex, setGroupIndex] = useState(0); const [openItem, setOpenItem] = useState(faqGroups[0].items[0].id); const activeGroup = faqGroups[groupIndex];
  const selectGroup = (index: number) => { setGroupIndex(index); setOpenItem(faqGroups[index].items[0].id); };
  return <section id="faq" className="section section--faq" aria-labelledby="faq-title"><div className="section__inner">
    <SectionHeader eyebrow="FAQ" index="06" titleId="faq-title" title="Answers to the questions that come up most." description="Learn how NEXORA works, what it connects to, how actions are handled, and what teams can expect day to day." />
    <div className="faq-layout"><aside className="faq-sidebar"><div className="faq-categories" role="tablist" aria-label="FAQ categories">{faqGroups.map((group, index) => <button id={`faq-tab-${group.id}`} key={group.id} type="button" role="tab" aria-label={group.label} aria-selected={index === groupIndex} aria-controls={`faq-panel-${group.id}`} onClick={() => selectGroup(index)}>{group.label}</button>)}</div><div className="faq-contact"><span>Got questions?</span><h3>Our team is here to make things easy.</h3><a href="mailto:hello@nexora.example">Email us →</a></div></aside>
    <motion.div className="faq-list" id={`faq-panel-${activeGroup.id}`} key={activeGroup.id} role="tabpanel" aria-labelledby={`faq-tab-${activeGroup.id}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>{activeGroup.items.map((item) => { const isOpen = openItem === item.id; return <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.id}><h3><button type="button" aria-label={item.question} aria-expanded={isOpen} aria-controls={`faq-answer-${item.id}`} onClick={() => setOpenItem(item.id)}><span>{item.question}</span><i><Icon name="chevron-down" /></i></button></h3><AnimatePresence initial={false}>{isOpen && <motion.div id={`faq-answer-${item.id}`} className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}><p>{item.answer}</p></motion.div>}</AnimatePresence></article>; })}</motion.div></div>
  </div></section>;
}
