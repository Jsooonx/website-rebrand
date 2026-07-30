import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "../components/ui/Icon";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { plans } from "../content/siteData";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section section--pricing" aria-labelledby="pricing-title">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Pricing"
          index="05"
          title="Start with one signal. Scale to the network."
          description="Plans follow the operating footprint, refresh cadence, and control your team actually needs."
        />

        <Reveal className="pricing-toolbar">
          <div>
            <span className="pricing-toolbar__label">Billing cadence</span>
            <strong>{annual ? "Annual contract" : "Monthly contract"}</strong>
          </div>
          <button
            className="billing-switch"
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Use annual billing"
            onClick={() => setAnnual((current) => !current)}
          >
            <span>Monthly</span>
            <i aria-hidden="true">
              <motion.b
                animate={{ x: annual ? "100%" : "0%" }}
                transition={{ type: "spring", stiffness: 430, damping: 34 }}
              />
            </i>
            <span>Annual <em>Save 16%</em></span>
          </button>
        </Reveal>

        <div className="pricing-grid">
          {plans.map((plan, index) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = price === "Custom";

            return (
              <Reveal delay={index * 0.07} key={plan.id}>
                <article className={`pricing-card${plan.featured ? " is-featured" : ""}`}>
                  <div className="pricing-card__top">
                    <div className="pricing-card__name">
                      <span>0{index + 1}</span>
                      <h3>{plan.name}</h3>
                    </div>
                    {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}
                    <div className="pricing-card__price" aria-live="polite">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.strong
                          key={price}
                          initial={{ y: 10, opacity: 0, filter: "blur(5px)" }}
                          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                          exit={{ y: -10, opacity: 0, filter: "blur(5px)" }}
                          transition={{ duration: 0.22 }}
                        >
                          {isCustom ? price : `$${price}`}
                        </motion.strong>
                      </AnimatePresence>
                      {!isCustom && <small>/ month</small>}
                    </div>
                    <p>{plan.description}</p>
                    <a className="button button--full" href="#briefing">
                      {plan.cta}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span><Icon name="check" size={14} /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="pricing-note">
          Annual pricing is shown as the effective monthly rate and billed annually.
        </p>
      </div>
    </section>
  );
}
