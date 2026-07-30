export type CapabilityId = "detect" | "explain" | "coordinate" | "learn";

export interface CapabilityTab {
  id: CapabilityId;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  metric: string;
}

export const capabilityTabs: readonly CapabilityTab[] = [
  {
    id: "detect",
    label: "Detect",
    eyebrow: "Signal map",
    title: "Know where attention belongs.",
    summary:
      "Live inventory, route, and order signals become one ranked operating picture.",
    metric: "12 live signals · 3 need attention",
  },
  {
    id: "explain",
    label: "Explain",
    eyebrow: "Cause trace",
    title: "See what changed—and what it touches next.",
    summary:
      "Trace a delayed handoff through stock exposure, downstream orders, and service risk.",
    metric: "4 dependencies mapped in 1.2s",
  },
  {
    id: "coordinate",
    label: "Coordinate",
    eyebrow: "Response plan",
    title: "Give the response an owner.",
    summary:
      "Turn the signal into a reroute, approval, and accountable next action without losing context.",
    metric: "Owner assigned · approval ready",
  },
  {
    id: "learn",
    label: "Learn",
    eyebrow: "Impact review",
    title: "Make the next recovery faster.",
    summary:
      "Compare response time, prevented disruption, and weak points across every location.",
    metric: "31% faster exception recovery",
  },
] as const;

export type WhyDiagramType =
  | "early"
  | "trace"
  | "align"
  | "control"
  | "learn";

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  diagram: WhyDiagramType;
}

export const whyCards: readonly WhyCard[] = [
  {
    id: "early",
    title: "See it early",
    description: "Surface risk before a local exception becomes broad disruption.",
    diagram: "early",
  },
  {
    id: "trace",
    title: "Trace the cause",
    description: "Understand the source and its downstream effect—not only the symptom.",
    diagram: "trace",
  },
  {
    id: "align",
    title: "Align the response",
    description: "Give every owner the same context, sequence, and accountable action.",
    diagram: "align",
  },
  {
    id: "control",
    title: "Keep humans in control",
    description: "Hold recommendations inside your approvals and operational guardrails.",
    diagram: "control",
  },
  {
    id: "learning",
    title: "Learn from every move",
    description: "Feed each outcome into a stronger response for the next disruption.",
    diagram: "learn",
  },
] as const;

export const integrationGroups = [
  {
    id: "warehouse",
    title: "Warehouse systems",
    description: "Stock, scan events, fulfilment, and exceptions.",
    icon: "warehouse",
  },
  {
    id: "transport",
    title: "Transport networks",
    description: "ETA, route changes, and carrier handoffs.",
    icon: "route",
  },
  {
    id: "orders",
    title: "Orders and ERP",
    description: "Demand, purchase orders, and exposure.",
    icon: "layers",
  },
  {
    id: "customer",
    title: "Customer operations",
    description: "SLA risk, escalations, and service impact.",
    icon: "signal",
  },
] as const;

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  featured?: boolean;
  badge?: string;
  cta: string;
  features: readonly string[];
}

export const plans: readonly Plan[] = [
  {
    id: "signal",
    name: "Signal",
    monthlyPrice: "1,200",
    annualPrice: "1,000",
    description: "For teams operating up to three locations with core data sources.",
    cta: "Request briefing",
    features: [
      "Up to 3 monitored facilities",
      "4 connected data sources",
      "Hourly signal refresh",
      "Core attention queue",
      "Standard implementation",
    ],
  },
  {
    id: "control",
    name: "Control",
    monthlyPrice: "2,800",
    annualPrice: "2,350",
    description:
      "For multi-location networks that need response plans and approval flows.",
    featured: true,
    badge: "Recommended for multi-site teams",
    cta: "Request briefing",
    features: [
      "Up to 12 monitored facilities",
      "Unlimited core data sources",
      "15-minute signal refresh",
      "Response plans and approvals",
      "Guided implementation",
    ],
  },
  {
    id: "network",
    name: "Network",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description:
      "For complex operations, regional rollout, and custom integrations.",
    cta: "Talk to NEXORA",
    features: [
      "Custom operating footprint",
      "Custom system connectors",
      "Near-live refresh options",
      "Advanced audit controls",
      "Dedicated rollout partner",
    ],
  },
] as const;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  items: readonly FaqItem[];
}

export const faqGroups: readonly FaqGroup[] = [
  {
    id: "product",
    label: "Product & operations",
    items: [
      {
        id: "monitor",
        question: "What does NEXORA monitor?",
        answer:
          "NEXORA reads the inventory, route, order, and service signals you choose, then ranks the changes that could affect the wider network.",
      },
      {
        id: "priority",
        question: "How are signals prioritised?",
        answer:
          "Priority combines operational exposure, urgency, affected locations, and the cost of waiting. Your team can tune those rules by workflow.",
      },
      {
        id: "brief",
        question: "Who uses the daily brief?",
        answer:
          "Operations leaders get the network view while facility, fulfilment, and customer teams receive the part of the response they own.",
      },
      {
        id: "actions",
        question: "Does NEXORA take action automatically?",
        answer:
          "Only inside the guardrails you define. Sensitive reroutes, order changes, and escalations can always require an accountable human approval.",
      },
      {
        id: "locations",
        question: "Can each location use different rules?",
        answer:
          "Yes. Shared policies keep the network aligned, while local thresholds and ownership can reflect the way each facility operates.",
      },
    ],
  },
  {
    id: "implementation",
    label: "Implementation & integrations",
    items: [
      {
        id: "timeline",
        question: "How long does onboarding take?",
        answer:
          "A focused first signal set can be live in two to four weeks. Wider regional rollouts are staged by system and operating team.",
      },
      {
        id: "systems",
        question: "Which systems can NEXORA connect to?",
        answer:
          "Warehouse, transport, ERP, order, and customer-operations systems can be connected through APIs, scheduled feeds, or secure exports.",
      },
      {
        id: "readiness",
        question: "What data needs to be prepared?",
        answer:
          "We start with the decisions you want to improve, then identify the smallest reliable set of events, ownership data, and operational context.",
      },
      {
        id: "replace",
        question: "Do we need to replace our current dashboards?",
        answer:
          "No. NEXORA sits across your existing systems and directs attention back to the source workflow when a deeper operational action is required.",
      },
      {
        id: "support",
        question: "Who supports the rollout?",
        answer:
          "Every plan includes implementation support. Control and Network add guided workflow design, stakeholder reviews, and rollout measurement.",
      },
    ],
  },
  {
    id: "governance",
    label: "Governance & commercial",
    items: [
      {
        id: "approval",
        question: "Can we require approval before action?",
        answer:
          "Yes. Approvals can be required by action type, exposure, location, or team, with a named owner and expiry window.",
      },
      {
        id: "audit",
        question: "What is captured in the audit trail?",
        answer:
          "NEXORA records the signal, context available at the time, recommendation, human decision, action owner, and measured outcome.",
      },
      {
        id: "security",
        question: "How is access controlled?",
        answer:
          "Role-based access, scoped data views, and identity-provider integration keep operational detail limited to the teams that need it.",
      },
      {
        id: "pricing",
        question: "How does pricing scale?",
        answer:
          "Pricing follows monitored facilities, connected systems, refresh cadence, workflow depth, and the implementation support your network requires.",
      },
      {
        id: "annual",
        question: "Can we start monthly and move to annual billing?",
        answer:
          "Yes. Teams can validate an initial signal set monthly, then move to annual billing as the operating footprint expands.",
      },
    ],
  },
] as const;

export interface Testimonial {
  id: string;
  person: string;
  role: string;
  company: string;
  quote: string;
  outcome: string;
  image: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    id: "asha",
    person: "Asha Raman",
    role: "VP Operations",
    company: "Northline Supply",
    quote:
      "We went from chasing exceptions across three systems to agreeing the next action in one briefing.",
    outcome: "31% faster exception resolution",
    image: "/images/testimonial-asha.webp",
  },
  {
    id: "tomas",
    person: "Tomas Wren",
    role: "Head of Fulfilment",
    company: "Fieldmark Commerce",
    quote:
      "The team now sees the knock-on effect before a late handoff becomes a customer problem.",
    outcome: "18% fewer preventable SLA misses",
    image: "/images/testimonial-tomas.webp",
  },
  {
    id: "leila",
    person: "Leila Sato",
    role: "Director of Customer Operations",
    company: "Morrow & Co.",
    quote:
      "NEXORA gave service and distribution the same operational picture for the first time.",
    outcome: "Two hours saved per daily escalation review",
    image: "/images/testimonial-leila.webp",
  },
] as const;

export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#why" },
      { label: "Contact", href: "#briefing" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Security", href: "#faq" },
      { label: "Privacy", href: "#footer" },
      { label: "Terms", href: "#footer" },
    ],
  },
] as const;
