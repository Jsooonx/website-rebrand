import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { projects } from "../content/site-data";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const cardElementVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WorkGrid() {
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState<{ x: number; y: number; accent: string } | null>(null);

  function showProjectCursor(event: PointerEvent<HTMLElement>, accent: string) {
    if (event.pointerType !== "mouse" || reduceMotion) return;
    setCursor({ x: event.clientX, y: event.clientY, accent });
  }

  function moveProjectCursor(event: PointerEvent<HTMLElement>, accent: string) {
    if (event.pointerType !== "mouse" || reduceMotion) return;
    setCursor({ x: event.clientX, y: event.clientY, accent });
  }

  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <motion.div
        className="section-kicker"
        initial={reduceMotion ? { opacity: 0 } : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={
          reduceMotion
            ? undefined
            : { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
        }
      >
        <motion.h2 id="work-heading" variants={reduceMotion ? undefined : cardElementVariants}>
          Selected work
        </motion.h2>
        <motion.span variants={reduceMotion ? undefined : cardElementVariants}>
          2022—2026 / Eight identities
        </motion.span>
      </motion.div>

      <motion.div
        className="work-grid"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.03 }}
        variants={reduceMotion ? undefined : gridVariants}
      >
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.layout}`}
            key={project.id}
            variants={reduceMotion ? undefined : cardVariants}
            style={{ "--project-accent": project.cursorAccent } as CSSProperties}
            onPointerEnter={(event) => showProjectCursor(event, project.cursorAccent)}
            onPointerMove={(event) => moveProjectCursor(event, project.cursorAccent)}
            onPointerLeave={() => setCursor(null)}
          >
            <motion.div
              className="project-card__image-wrap"
              variants={reduceMotion ? undefined : cardElementVariants}
            >
              <img
                className="project-card__image"
                src={project.image}
                alt={project.alt}
                loading={index < 2 ? "eager" : "lazy"}
                fetchPriority={index < 2 ? "high" : "auto"}
                decoding="async"
              />
              <motion.span
                className="project-card__number"
                variants={reduceMotion ? undefined : cardElementVariants}
              >
                {project.id}
              </motion.span>
            </motion.div>
            <motion.div
              className="project-card__caption"
              variants={reduceMotion ? undefined : cardElementVariants}
            >
              <h3>{project.name}</h3>
              <p>{project.discipline}</p>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {cursor && (
          <motion.div
            aria-hidden="true"
            className="project-cursor"
            initial={{ opacity: 0, scale: 0.78, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.88, filter: "blur(3px)" }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            style={{
              left: cursor.x,
              top: cursor.y,
              "--cursor-accent": cursor.accent,
            } as CSSProperties}
          >
            <span>See work</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
