import { Icon, type IconName } from "../components/ui/Icon";
import { SectionHeader } from "../components/ui/SectionHeader";
import { IntegrationFlow } from "../components/visuals/IntegrationFlow";

const integrationSteps = [
  { id: "context", title: "Connect context", description: "Bring the work systems behind every question into the same workspace.", icon: "plug" },
  { id: "ground", title: "Ground every answer", description: "Keep sources, records, and policy context visible when it matters.", icon: "spark" },
  { id: "route", title: "Route the next action", description: "Send the prepared task, update, or approval to the right place.", icon: "arrow-right" },
  { id: "learn", title: "Learn from outcomes", description: "Turn recurring work into clearer signals for the whole team.", icon: "chart" },
] as const;

export function Integrations() { return <section id="integrations" className="section section--integrations" aria-labelledby="integrations-title"><div className="section__inner">
  <SectionHeader eyebrow="Integrations" index="04" titleId="integrations-title" title="Connect the systems behind your workflow" description="NEXORA plugs into your docs, CRM, support stack, and internal tools to turn scattered context into clear answers and action." />
  <div className="integration-flow-wrap"><IntegrationFlow /></div>
  <div className="integration-groups">{integrationSteps.map((step, index) => <article className="integration-group" key={step.id}><div className="integration-group__index">0{index + 1}</div><Icon name={step.icon as IconName} /><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
</div></section>; }
