import type { CSSProperties } from "react";
import { BrandMark } from "../components/ui/BrandMark";
import { Icon, type IconName } from "../components/ui/Icon";
import { SectionHeader } from "../components/ui/SectionHeader";
import { IntegrationMark } from "../components/visuals/IntegrationMark";
import { integrationGroups } from "../content/siteData";

const outerAngles = [-76, -48, -18, 14, 45, 74];
const innerAngles = [-68, -30, 4, 40, 68];
function FanNode({ index, angle, radius }: { index: number; angle: number; radius: string }) { return <span className="integration-node" style={{ "--node-angle": `${angle}deg`, "--node-radius": radius } as CSSProperties}><IntegrationMark index={index} /></span>; }

export function Integrations() { return <section id="integrations" className="section section--integrations" aria-labelledby="integrations-title"><div className="section__inner">
  <SectionHeader eyebrow="Integrations" index="04" titleId="integrations-title" title="Connect the systems behind your workflow" description="NEXORA plugs into your docs, CRM, support stack, and internal tools to turn scattered context into clear answers and action." />
  <div className="integration-fan-wrap"><div className="integration-fan" data-testid="integration-fan" aria-hidden="true"><div className="integration-orbit integration-orbit--outer">{outerAngles.map((angle, index) => <FanNode key={angle} index={index} angle={angle} radius="clamp(12rem, 34vw, 31rem)" />)}</div><div className="integration-orbit integration-orbit--inner">{innerAngles.map((angle, index) => <FanNode key={angle} index={index + 3} angle={angle} radius="clamp(8rem, 24vw, 21rem)" />)}</div><span className="integration-arc integration-arc--outer" /><span className="integration-arc integration-arc--inner" /><span className="integration-arc integration-arc--core" /><div className="integration-core"><BrandMark variant="symbol" /><span>NEXORA core</span></div></div></div>
  <div className="integration-groups">{integrationGroups.map((group, index) => <article className="integration-group" key={group.id}><div className="integration-group__index">0{index + 1}</div><Icon name={group.icon as IconName} /><h3>{group.title}</h3><p>{group.description}</p></article>)}</div>
</div></section>; }
