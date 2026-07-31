import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "../components/ui/Icon";
import { SectionHeader } from "../components/ui/SectionHeader";
import { plans } from "../content/siteData";

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  return <section id="pricing" className="section section--pricing" aria-labelledby="pricing-title"><div className="section__inner">
    <SectionHeader eyebrow="Pricing" index="05" titleId="pricing-title" title="Clear pricing plans that scale with you" description="Choose the workspace that fits your team today, then grow with connected context and controls." />
    <div className="pricing-toolbar"><a href="#faq">Compare plans →</a><button className="billing-switch" type="button" role="switch" aria-checked={annual} aria-label="Use annual billing" onClick={() => setAnnual((current) => !current)}><span>Monthly</span><i aria-hidden="true"><motion.b animate={{ x: annual ? "100%" : "0%" }} transition={{ type: "spring", stiffness: 430, damping: 34, bounce: 0 }} /></i><span>Yearly <em>Save 18%</em></span></button></div>
    <div className="pricing-grid">{plans.map((plan, index) => { const price = annual ? plan.annualPrice : plan.monthlyPrice; const plain = price === "Custom" || price === "Free"; return <article className={`pricing-card${plan.featured ? " is-featured" : ""}`} key={plan.id}><div className="pricing-card__top"><div className="pricing-card__name"><span>{plan.name.toUpperCase()}</span>{plan.badge && <em>{plan.badge}</em>}</div><div className="pricing-card__price" aria-live="polite"><AnimatePresence mode="popLayout" initial={false}><motion.strong key={price} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }}>{plain ? price : `$${price}`}</motion.strong></AnimatePresence>{!plain && <small>/ user / month</small>}</div><p>{plan.description}</p><a className="button button--full" href="#briefing">{plan.cta}</a></div><ul>{plan.features.map((feature) => <li key={feature}><span><Icon name="check" size={14} /></span>{feature}</li>)}</ul></article>; })}</div>
    <p className="pricing-note">Yearly pricing is billed annually and shown as an effective monthly rate.</p>
  </div></section>;
}
