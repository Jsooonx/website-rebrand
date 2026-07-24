import { useState } from "react";
import Button from "@reference-export/button.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "../../shared/layout";

const questions = [
  {
    question: "Can Kindling start small?",
    answer:
      "Absolutely. We can begin with one sharp landing page, a launch idea, or a focused identity sprint. The scope can be small; the thinking and craft do not have to be.",
  },
  {
    question: "Can you work inside an existing brand?",
    answer:
      "Yes. We can work with a complete system or a logo and a handful of colours. We keep what carries and build the campaign, website, or visual layer the brand needs next.",
  },
  {
    question: "How long does the fire take to build?",
    answer:
      "Most focused engagements run for two to six weeks. Before we begin, we set a clear rhythm, decision points, and launch window.",
  },
  {
    question: "What happens after I send a note?",
    answer:
      "We reply within one or two working days, ask a few useful questions, and suggest a short call when the fit feels right.",
  },
  {
    question: "Do you offer a first conversation?",
    answer:
      "Yes. The first conversation is a short, pressure-free call to understand the venture, the moment you are in, and whether Kindling is the right office to help.",
  },
  {
    question: "What if the brief is still blurry?",
    answer:
      "That is a perfectly good place to begin. Bring the half-formed thought, product truth, or tension you cannot name yet. We can shape the useful brief together.",
  },
] as const;

export function FAQAdapter() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <Reveal className="faq-intro">
        <div>
          <p className="faq-label">BEFORE WE BEGIN</p>
          <h2 id="faq-title">
            A FEW GOOD
            <br />
            QUESTIONS
          </h2>
        </div>

        <div className="faq-contact">
          <h3>STILL CIRCLING?</h3>
          <p>
            Bring us the half-formed thought. We are happy to help find the
            useful question before either of us commits.
          </p>
          <div className="faq-contact__cta">
            <Button
              variant="Primary Color"
              text="SEND A SIGNAL"
              link="#contact"
              hasIcon
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Reveal>

      <StaggerGroup className="faq-accordion" stagger={0.05}>
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index + 1}`;

          return (
            <StaggerItem
              className={`faq-row${isOpen ? " faq-row--open" : ""}`}
              key={item.question}
              preset="subtle"
            >
              <article>
                <h3>
                  <button
                    className="faq-row__trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-row__icons" aria-hidden="true">
                      <span className={isOpen ? "is-hidden" : ""}>+</span>
                      <span className={isOpen ? "" : "is-hidden"}>−</span>
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-row__answer"
                  id={answerId}
                  aria-hidden={!isOpen}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
