export type WorkspaceMode = "ask" | "verify" | "execute" | "measure";
export type WhyDiagramType = "early" | "trace" | "align" | "control" | "learn";

export interface WorkspaceModeDefinition { id: WorkspaceMode; label: string; eyebrow: string; metric: string; }

export const workspaceModes: readonly WorkspaceModeDefinition[] = [
  { id: "ask", label: "Ask", eyebrow: "Connected context", metric: "3 sources connected" },
  { id: "verify", label: "Verify", eyebrow: "Trusted answers", metric: "94% confidence" },
  { id: "execute", label: "Execute", eyebrow: "Action preview", metric: "Approval ready" },
  { id: "measure", label: "Measure", eyebrow: "Continuous insight", metric: "28% trend detected" },
] as const;

export const integrationGroups = [
  { id: "source", title: "Source connect", description: "Connect helpdesk, CRM, and knowledge.", icon: "layers" },
  { id: "action", title: "Action runner", description: "Connect helpdesk, CRM, and knowledge.", icon: "signal" },
  { id: "approval", title: "Approval gate", description: "Require approval for sensitive actions.", icon: "check" },
  { id: "audit", title: "Audit and insights", description: "Track every change and spot patterns.", icon: "route" },
] as const;

export interface Plan { id: string; name: string; monthlyPrice: string; annualPrice: string; description: string; featured?: boolean; badge?: string; cta: string; features: readonly string[]; }

export const plans: readonly Plan[] = [
  { id: "starter", name: "Starter", monthlyPrice: "Free", annualPrice: "Free", description: "For small teams getting started with AI support.", cta: "Get started", features: ["Team members: up to 3", "AI queries / mo: 200", "Integrations: 2", "Source attribution", "Conversation history"] },
  { id: "team", name: "Team", monthlyPrice: "39", annualPrice: "32", description: "For teams that need connected answers and accountable actions.", featured: true, badge: "Most popular", cta: "Get started", features: ["Team members: unlimited", "AI queries / mo: 2,000", "Integrations: unlimited", "Source attribution", "Conversation history"] },
  { id: "enterprise", name: "Enterprise", monthlyPrice: "Custom", annualPrice: "Custom", description: "For organizations needing security, governance, and scale.", cta: "Talk to us", features: ["Team members: custom", "AI queries: custom", "Integrations: unlimited", "Approval workflows", "Advanced audit controls"] },
] as const;

export interface FaqItem { id: string; question: string; answer: string; }
export interface FaqGroup { id: string; label: string; items: readonly FaqItem[]; }

export const faqGroups: readonly FaqGroup[] = [
  { id: "general", label: "General", items: [
    { id: "what", question: "What is NEXORA and how does it work?", answer: "NEXORA is an AI workspace that connects your company context, answers work questions, and helps turn the next step into accountable action." },
    { id: "setup", question: "How long does it take to set up?", answer: "Start with the sources your team already uses. A focused workspace can be useful in a single working session." },
    { id: "technical", question: "Do I need technical knowledge to use NEXORA?", answer: "No. People ask questions in natural language while admins choose connected sources and access rules." },
    { id: "free", question: "Is there a free plan available?", answer: "Yes. Starter gives a small team space to evaluate connected answers before scaling up." },
  ] },
  { id: "ai", label: "AI & capabilities", items: [
    { id: "verify", question: "How does NEXORA verify answers?", answer: "Answers bring their sources forward, so people can inspect the records and policy context that informed them." },
    { id: "actions", question: "Can NEXORA take action for my team?", answer: "It can prepare drafts, tickets, updates, and next steps. Sensitive actions can require named approval." },
    { id: "measure", question: "What does Measure show?", answer: "Measure surfaces recurring questions, patterns, and knowledge gaps based on real workspace activity." },
  ] },
  { id: "security", label: "Integrations & security", items: [
    { id: "connect", question: "Which systems can NEXORA connect to?", answer: "NEXORA connects knowledge bases, helpdesks, CRMs, and internal systems through the integrations your team chooses." },
    { id: "access", question: "How is access controlled?", answer: "Workspace access can be scoped by role, source, and action so sensitive context stays with the right people." },
    { id: "approval", question: "Can I require approvals before actions?", answer: "Yes. Approval gates can be set for the actions and workflows your organization considers sensitive." },
  ] },
] as const;

export interface Testimonial { id: string; person: string; role: string; company: string; quote: string; outcome: string; image: string; }
export const testimonials: readonly Testimonial[] = [
  { id: "asha", person: "Asha Raman", role: "Head of Customer Operations", company: "Northline", quote: "NEXORA gives every agent the context and next action before they have to chase it across tools.", outcome: "Ticket resolution time reduced by 42%", image: "/images/testimonial-asha.webp" },
  { id: "tomas", person: "Tomas Wren", role: "Director of Support", company: "Fieldmark", quote: "The sources are right beside the answer, so our team can move with confidence instead of forwarding questions.", outcome: "One shared view across support and success", image: "/images/testimonial-tomas.webp" },
  { id: "leila", person: "Leila Sato", role: "VP Enablement", company: "Morrow", quote: "We moved from undocumented answers to a workspace that turns the team’s knowledge into useful work.", outcome: "2 hours saved in each weekly review", image: "/images/testimonial-leila.webp" },
] as const;

export const footerGroups = [
  { title: "Product", links: [{ label: "Homepage", href: "#top" }, { label: "Features", href: "#capabilities" }, { label: "Pricing", href: "#pricing" }, { label: "Get started", href: "#briefing" }] },
  { title: "Company", links: [{ label: "About", href: "#why" }, { label: "Careers", href: "#footer" }, { label: "Blog", href: "#footer" }] },
  { title: "Legal", links: [{ label: "Terms of use", href: "#footer" }, { label: "Privacy policy", href: "#footer" }, { label: "Cookie policy", href: "#footer" }] },
] as const;
