export type DossierStage = "collect" | "validate" | "act";

export interface CaseSource {
  label: string;
  detail: string;
}

export interface CaseFile {
  request: string;
  sources: readonly CaseSource[];
  conclusion: string;
  action: string;
}

export const caseFile: CaseFile = {
  request: "Can we commit to the Acme renewal before Friday?",
  sources: [
    { label: "Renewal brief", detail: "Commercial terms awaiting confirmation" },
    { label: "Support record", detail: "SSO incident resolved; follow-up complete" },
    { label: "Billing policy", detail: "Finance approval required above threshold" },
  ],
  conclusion: "Verified conclusion: Acme can renew when finance confirms the revised invoice.",
  action: "Action owner: Jordan Lee — request finance confirmation before Friday.",
} as const;

export interface WorkflowChapter {
  id: DossierStage;
  number: string;
  label: string;
  title: string;
  summary: string;
  evidence: string;
}

export const workflowChapters: readonly WorkflowChapter[] = [
  {
    id: "collect",
    number: "01",
    label: "Collect",
    title: "Capture the request with its working context.",
    summary: "A live case begins with the question, the people involved, and the records already close to the work.",
    evidence: "3 attached records: renewal brief, support record, billing policy",
  },
  {
    id: "validate",
    number: "02",
    label: "Validate",
    title: "Turn connected records into a decision people can inspect.",
    summary: "Nexora surfaces the evidence beside the conclusion, so the next step is anchored in the current source of truth.",
    evidence: "Conclusion verified against policy and incident status",
  },
  {
    id: "act",
    number: "03",
    label: "Act",
    title: "Assign the accountable next move without losing the thread.",
    summary: "The resolved decision becomes an owned action with a clear destination, due point, and review trail.",
    evidence: "Action destination: Finance review — owner Jordan Lee",
  },
] as const;

export interface PracticeScenario {
  id: string;
  label: string;
  problem: string;
  signal: string;
  outcome: string;
}

export const practiceScenarios: readonly PracticeScenario[] = [
  {
    id: "renewal-risk",
    label: "Renewal risk",
    problem: "A strategic renewal stalls between support, finance, and account ownership.",
    signal: "Two unresolved dependencies across three systems",
    outcome: "A verified renewal path with one named next action",
  },
  {
    id: "incident-response",
    label: "Incident response",
    problem: "An incident handoff lacks a current record of customer impact and remediation.",
    signal: "The latest support and status evidence is attached to the working case",
    outcome: "A ready-to-send customer update with a review trail",
  },
  {
    id: "policy-review",
    label: "Policy review",
    problem: "A sensitive exception needs a decision that reflects policy, owner, and approval history.",
    signal: "Policy clauses and approval conditions remain visible in the file",
    outcome: "A documented approval request routed to the correct owner",
  },
] as const;

export interface SystemRow {
  id: string;
  source: string;
  reasoning: string;
  output: string;
}

export const systemRows: readonly SystemRow[] = [
  { id: "docs-answer", source: "Docs", reasoning: "Policy context", output: "Verified answer" },
  { id: "crm-owner", source: "CRM", reasoning: "Account context", output: "Assigned owner" },
  { id: "support-ticket", source: "Support", reasoning: "Incident context", output: "Prepared ticket" },
  { id: "data-insight", source: "Data", reasoning: "Pattern context", output: "Review signal" },
] as const;

export interface AdoptionPath {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  intendedUse: string;
  operatingMode: string;
  detail: string;
  featured?: boolean;
}

export const adoptionPaths: readonly AdoptionPath[] = [
  {
    id: "explore",
    name: "Explore",
    price: "$0",
    priceNote: "per workspace / month",
    intendedUse: "For a focused team testing one recurring work question.",
    operatingMode: "Connected case review",
    detail: "One recurring question, connected context, and a clear handoff.",
  },
  {
    id: "coordinate",
    name: "Coordinate",
    price: "$29",
    priceNote: "per seat / month",
    intendedUse: "For teams aligning evidence, decisions, and owners across a workflow.",
    operatingMode: "Shared operating case",
    detail: "Shared evidence, aligned decisions, and visible ownership.",
    featured: true,
  },
  {
    id: "govern",
    name: "Govern",
    price: "$79",
    priceNote: "per seat / month",
    intendedUse: "For operating groups that need visible review paths for sensitive decisions.",
    operatingMode: "Accountable decision trail",
    detail: "Approval-aware actions with a complete decision trail.",
  },
] as const;

export interface FieldNote {
  id: string;
  keyword: string;
  question: string;
  answer: string;
}

export const fieldNotes: readonly FieldNote[] = [
  {
    id: "what-is-nexora",
    keyword: "Purpose",
    question: "What is Nexora?",
    answer: "Nexora turns a work request and connected context into a verified decision and accountable next action.",
  },
  {
    id: "how-evidence-works",
    keyword: "Evidence",
    question: "How does Nexora validate a decision?",
    answer: "The relevant source records stay alongside the conclusion, so a person can inspect the basis for the next step.",
  },
  {
    id: "how-actions-work",
    keyword: "Action",
    question: "What happens after the decision?",
    answer: "The case resolves into a destination, an accountable owner, and a readable review trail rather than an unsupported automated action.",
  },
  {
    id: "start",
    keyword: "Start",
    question: "How quickly can a team start?",
    answer: "Start with one recurring work question, connect the records around it, and expand the workflow once the first handoff is clear.",
  },
] as const;

export interface ScenarioStory {
  id: string;
  role: string;
  portrait: string;
  label: string;
  story: string;
  result: string;
}

export const scenarioStories: readonly ScenarioStory[] = [
  {
    id: "account-lead",
    role: "Account lead",
    portrait: "/images/scenario-lead.png",
    label: "Workflow snapshot",
    story: "A renewal owner opens one case instead of reconstructing the account across an inbox, a support queue, and a finance thread.",
    result: "Result: the renewal dependency is verified and routed to its named owner.",
  },
  {
    id: "support-operator",
    role: "Support operator",
    portrait: "/images/scenario-support.png",
    label: "Workflow snapshot",
    story: "An operator assembles the current incident record, drafts the update, and leaves the next handoff with the team that owns it.",
    result: "Result: customer communication retains the supporting record.",
  },
  {
    id: "policy-reviewer",
    role: "Policy reviewer",
    portrait: "/images/scenario-policy.png",
    label: "Workflow snapshot",
    story: "A reviewer sees the exception request, governing clauses, and approval route together before making a sensitive decision.",
    result: "Result: the decision has a visible policy basis and review path.",
  },
] as const;

export const closingCase = {
  label: "Resolved case",
  title: "The Acme renewal is ready for finance confirmation.",
  detail: "Three records checked. One owner assigned. Review due before Friday.",
} as const;

export const footerGroups = [
  {
    title: "Dossier",
    links: [
      { label: "Live case", href: "#top" },
      { label: "Workflow", href: "#workflow" },
      { label: "Scenarios", href: "#scenarios" },
    ],
  },
  {
    title: "System",
    links: [
      { label: "Systems index", href: "#systems" },
      { label: "Adoption paths", href: "#adoption" },
      { label: "Field notes", href: "#field-notes" },
    ],
  },
  {
    title: "Stackframe",
    links: [
      { label: "Nexora", href: "#top" },
      { label: "Contact", href: "#footer" },
    ],
  },
] as const;
