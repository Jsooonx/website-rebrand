export type WhyPreviewVariant =
  | "memory"
  | "evidence"
  | "action"
  | "guardrails"
  | "patterns";

interface WhyProductPreviewProps {
  variant: WhyPreviewVariant;
  active: boolean;
}

function PreviewChrome({ label }: { label: string }) {
  return <div className="why-preview__chrome"><span>{label}</span><i /><i /></div>;
}

export function WhyProductPreview({ variant, active }: WhyProductPreviewProps) {
  const className = `why-preview why-preview--${variant}${active ? " is-active" : ""}`;

  if (variant === "memory") {
    return <div className={className} aria-label="Connected workspace preview"><PreviewChrome label="Workspace context" /><div className="why-preview__memory"><div className="why-preview__side"><span>NEXORA</span><i /><i /><i /></div><div className="why-preview__memory-main"><small>Context for the Acme renewal</small><strong>3 connected sources</strong><p>Docs, CRM, and Help Center stay together.</p><div><span>Docs</span><span>CRM</span><span>Help Center</span></div></div></div></div>;
  }

  if (variant === "evidence") {
    return <div className={className} aria-label="Verified answer preview"><PreviewChrome label="Verify" /><div className="why-preview__answer"><small>Answer with sources</small><strong>Verified answer</strong><p>Renewal is waiting on invoice approval and an unresolved SSO issue.</p><div className="why-preview__citations"><span>CRM · 2 min ago</span><span>Billing policy · current</span><span>Support ticket · open</span></div></div></div>;
  }

  if (variant === "action") {
    return <div className={className} aria-label="Action ready preview"><PreviewChrome label="Execute" /><div className="why-preview__task"><small>Prepared next step</small><strong>Escalation ready</strong><div><span>Owner</span><b>Jordan Lee</b></div><div><span>Priority</span><b className="why-preview__priority">High</b></div><footer><span>Review</span><button type="button">Send to support</button></footer></div></div>;
  }

  if (variant === "guardrails") {
    return <div className={className} aria-label="Approval guardrail preview"><PreviewChrome label="Policy check" /><div className="why-preview__policy"><small>Approval gate</small><strong>Approval required</strong><p>Create ticket and notify the owner.</p><ul><li><span>✓</span>Owner selected</li><li><span>✓</span>Policy matched</li><li><span>•</span>Manager confirmation</li></ul><footer><button type="button">Confirm</button><span>Cancel</span></footer></div></div>;
  }

  return <div className={className} aria-label="Patterns and insight preview"><PreviewChrome label="Measure" /><div className="why-preview__metrics"><div><small>Billing questions</small><strong>28%</strong><span>week over week</span></div><div><small>Follow-ups</small><strong>22%</strong><span>of all activity</span></div><ul><li><i style={{ width: "82%" }} /></li><li><i style={{ width: "58%" }} /></li><li><i style={{ width: "71%" }} /></li></ul><p>Patterns worth turning into better answers.</p></div></div>;
}
