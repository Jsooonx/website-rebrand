import { useState } from "react";
import { BrandMark } from "../ui/BrandMark";
import { IntegrationMark } from "./IntegrationMark";

type FlowSide = "source" | "destination";

interface FlowNode {
  id: string;
  label: string;
  side: FlowSide;
  mark: number;
  description: string;
}

const sourceNodes: FlowNode[] = [
  { id: "docs", label: "Docs", side: "source", mark: 1, description: "Docs context flows through NEXORA" },
  { id: "crm", label: "CRM", side: "source", mark: 2, description: "CRM context flows through NEXORA" },
  { id: "support", label: "Support", side: "source", mark: 4, description: "Support context flows through NEXORA" },
  { id: "data", label: "Data", side: "source", mark: 6, description: "Data context flows through NEXORA" },
  { id: "knowledge", label: "Knowledge", side: "source", mark: 0, description: "Knowledge context flows through NEXORA" },
];

const destinationNodes: FlowNode[] = [
  { id: "answer", label: "Answer", side: "destination", mark: 5, description: "NEXORA turns context into a verified answer" },
  { id: "ticket", label: "Ticket", side: "destination", mark: 3, description: "NEXORA routes the next ticket with context" },
  { id: "approval", label: "Approval", side: "destination", mark: 7, description: "NEXORA sends sensitive work through approval" },
  { id: "update", label: "Update", side: "destination", mark: 2, description: "NEXORA prepares a clear system update" },
  { id: "insight", label: "Insight", side: "destination", mark: 3, description: "NEXORA turns outcomes into an insight" },
];

function FlowButton({ node, active, index, onActivate }: { node: FlowNode; active: boolean; index: number; onActivate: (id: string) => void }) {
  const action = node.side === "source" ? `Connect ${node.label}` : `Inspect ${node.label} destination`;
  return <button type="button" className={`integration-flow__node integration-flow__node--${node.side}-${index}${active ? " is-active" : ""}`} aria-label={action} aria-pressed={active} onMouseEnter={() => onActivate(node.id)} onFocus={() => onActivate(node.id)} onClick={() => onActivate(node.id)}><span><IntegrationMark index={node.mark} /></span><small>{node.label}</small></button>;
}

export function IntegrationFlow() {
  const [activeId, setActiveId] = useState("docs");
  const activeNode = [...sourceNodes, ...destinationNodes].find((node) => node.id === activeId) ?? sourceNodes[0];

  return <div className="integration-flow" data-testid="integration-flow">
    <svg className="integration-flow__routes" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
      {sourceNodes.map((node, index) => <path key={node.id} className={activeId === node.id ? "is-active" : ""} d={`M ${120 + index * 38} ${92 + index * 88} C 315 ${105 + index * 54}, 390 216, 500 280`} />)}
      {destinationNodes.map((node, index) => <path key={node.id} className={activeId === node.id ? "is-active" : ""} d={`M 500 280 C 640 ${218 + index * 24}, 710 ${112 + index * 54}, ${830 - index * 38} ${92 + index * 88}`} />)}
    </svg>
    <div className="integration-flow__eyebrow">Context in</div>
    <div className="integration-flow__eyebrow integration-flow__eyebrow--out">Work out</div>
    {sourceNodes.map((node, index) => <FlowButton key={node.id} node={node} active={activeId === node.id} index={index} onActivate={setActiveId} />)}
    {destinationNodes.map((node, index) => <FlowButton key={node.id} node={node} active={activeId === node.id} index={index} onActivate={setActiveId} />)}
    <div className="integration-flow__core"><BrandMark variant="symbol" /><span>NEXORA</span><small>reasoning layer</small></div>
    <p className="integration-flow__status" role="status">{activeNode.description}.</p>
  </div>;
}
