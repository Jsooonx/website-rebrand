import radianMark1 from '../assets/radian-mark-1.png'
import radianMark2 from '../assets/radian-mark-2.png'
import radianMark3 from '../assets/radian-mark-3.png'
import radianMark4 from '../assets/radian-mark-4.png'
import radianMark5 from '../assets/radian-mark-5.png'
import radianMark6 from '../assets/radian-mark-6.png'
import testimonialElias from '../assets/testimonial-elias.webp'
import testimonialMara from '../assets/testimonial-mara.webp'
import testimonialNaomi from '../assets/testimonial-naomi.webp'
import type { CapabilityKind } from '../components/previews/CapabilityPreview'
import type { WorkflowPreviewKind } from '../components/previews/WorkflowPreview'
import type { MiniIconName } from '../components/ui/MiniIcon'

// Page content stays separate from presentation so sections can focus on layout and motion.
export const stars = [[7, 13, 1.5, .20], [11, 42, 2.2, .56], [16, 75, 1.4, .88], [21, 19, 1, .38], [27, 61, 2, .72], [34, 8, 1.3, .15], [39, 37, 2.4, .49], [44, 84, 1.1, .93], [53, 17, 1.8, .33], [59, 57, 1.1, .65], [64, 26, 2.5, .84], [69, 72, 1.4, .28], [76, 10, 1.7, .58], [81, 48, 1, .43], [87, 81, 2.3, .74], [92, 29, 1.3, .19], [96, 66, 1.9, .67], [4, 89, 1, .52], [49, 4, 1.6, .79], [72, 92, 1.2, .41]] as const

export const partnerMarks = [{ name: 'Verve', image: radianMark1 }, { name: 'Layerline', image: radianMark2 }, { name: 'Orbitale', image: radianMark3 }, { name: 'Morrow', image: radianMark4 }, { name: 'Kindred', image: radianMark5 }, { name: 'Nubis', image: radianMark6 }] as const

export const workflowSteps: ReadonlyArray<{ step: string; title: string; description: string; kind: WorkflowPreviewKind }> = [
  { step: '01', title: 'Map the repeat.', description: 'We find the handoffs that keep pulling your best people away from the work in front of them.', kind: 'map' },
  { step: '02', title: 'Build the assist.', description: 'We shape a useful workflow around your tools, team context, and the moments that need review.', kind: 'build' },
  { step: '03', title: 'Hand it over clearly.', description: 'Your team gets a visible, dependable system—and a practical way to keep improving it.', kind: 'handover' },
]

type CapabilityCard = { kind: CapabilityKind; size: 'tall' | 'short'; title: string; description: string }
export const capabilityColumns: readonly (readonly CapabilityCard[])[] = [
  [{ kind: 'mapping', size: 'tall', title: 'Workflow Mapping.', description: 'Find the repeated handoff worth fixing first—and make every review point visible.' }, { kind: 'review', size: 'short', title: 'Human Review.', description: 'Keep judgment with the people who already understand the work.' }],
  [{ kind: 'triage', size: 'short', title: 'Request Triage.', description: 'Sort new requests and route each one to the right owner.' }, { kind: 'followup', size: 'tall', title: 'Follow-up Queues.', description: 'Prepare useful follow-ups without sending anything before it is checked.' }],
  [{ kind: 'briefing', size: 'tall', title: 'Briefing Assist.', description: 'Prepare source-aware client briefs with the evidence still attached.' }, { kind: 'owner', size: 'short', title: 'Owner Handover.', description: 'Give the team the context, owner, and next action—not another black box.' }],
]

export const capabilityEntrances: Record<CapabilityKind, { x?: number; y?: number; scale?: number }> = { mapping: { x: -24, y: 12 }, review: { x: -18, y: 22 }, triage: { y: 26, scale: .97 }, followup: { y: 32, scale: .98 }, briefing: { x: 24, y: 12 }, owner: { x: 18, y: 22 } }

// The visual reading order differs from the underlying desktop column order.
export const capabilityStaggerOrder: Record<CapabilityKind, number> = { mapping: 0, triage: 1, briefing: 2, review: 3, followup: 4, owner: 5 }

type BenefitItem = { kind: 'manual' | 'time' | 'handoffs' | 'context' | 'checks' | 'ownership'; icon: MiniIconName; title: string; description: string; from: { x: number; y: number } }
export const benefits: readonly BenefitItem[] = [
  { kind: 'manual', icon: 'coin', title: 'Less Manual Drag.', description: 'Reduce repeated admin without losing visibility.', from: { x: 28, y: 24 } }, { kind: 'time', icon: 'hourglass', title: 'Time Returned.', description: 'Give recurring tasks a dependable route.', from: { x: 44, y: -12 } }, { kind: 'handoffs', icon: 'flow', title: 'Clearer Handoffs.', description: 'Keep owners, context, and next actions together.', from: { x: 26, y: -18 } }, { kind: 'context', icon: 'bulb', title: 'Better Context.', description: 'See the sources behind every prepared output.', from: { x: -28, y: 24 } }, { kind: 'checks', icon: 'target', title: 'Human Checks.', description: 'Put review exactly where judgment matters.', from: { x: -26, y: -18 } }, { kind: 'ownership', icon: 'chart', title: 'Ready to Own.', description: 'Leave the team with a system they can understand.', from: { x: -44, y: -12 } },
]

export const testimonials = [
  { id: 'mara', name: 'Mara Voss', role: 'Operations Director, Northstar Partners', image: testimonialMara, alt: 'Mara Voss reviewing a workflow on her laptop in a quiet studio.', quote: 'Hushwork gave every recurring request a clear route. We spend less time chasing context and more time with clients.' },
  { id: 'elias', name: 'Elias Reed', role: 'Client Services Lead, Fieldwork Studio', image: testimonialElias, alt: 'Elias Reed organizing client notes beside an open laptop.', quote: 'Nothing feels like a black box. We see what was prepared, review it, and keep the final call with our team.' },
  { id: 'naomi', name: 'Naomi Chen', role: 'Strategy Partner, Common Thread', image: testimonialNaomi, alt: 'Naomi Chen checking a prepared client brief on a tablet.', quote: 'The handover was unusually clear. Owners, sources, and next actions stayed together—and the workflow became ours to run.' },
] as const

export const pricingPlans: ReadonlyArray<{ id: 'map' | 'build' | 'partner'; icon: MiniIconName; name: string; price: string; cadence: string; description: string; action: string; popular?: boolean; features: readonly string[]; meta: string }> = [
  { id: 'map', icon: 'target', name: 'Workflow Map', price: '$1,500', cadence: 'fixed scope', description: 'Find the repeated handoff worth improving first.', action: 'Start with a map', features: ['Team workflow session', 'Recurring-work inventory', 'Friction and handoff map', 'Prioritised first workflow', 'Implementation brief', 'Ownership recommendation'], meta: 'One focused engagement' },
  { id: 'build', icon: 'bolt', name: 'Assisted Build', price: '$4,800', cadence: 'from', description: 'Design and put one reviewable workflow into use.', action: 'Build the first workflow', popular: true, features: ['Everything in Workflow Map', 'Working assisted prototype', 'Source and routing logic', 'Human-check decision points', 'Two iteration cycles', 'Owner guide and team training'], meta: 'Built around your current tools' },
  { id: 'partner', icon: 'orbit', name: 'Studio Partner', price: 'Custom', cadence: 'by scope', description: 'Create a dependable rhythm across several workflows.', action: 'Talk through scope', features: ['Multi-workflow roadmap', 'Custom implementation sequence', 'Stakeholder workshops', 'Governance and data boundaries', 'Team rollout support', 'Ongoing improvement reviews'], meta: 'For connected operational systems' },
]

export const comparisonColumns: ReadonlyArray<{ id: 'generic' | 'hushwork'; icon: MiniIconName; label: string; points: readonly string[] }> = [
  { id: 'generic', icon: 'hourglass', label: 'Generic automation', points: ['Starts with the tool', 'Assumes a standard process', 'Source context gets hidden', 'Review is added at the end', 'One person holds the logic', 'Documentation comes later', 'Changes mean rebuilding', 'Teams learn by trial and error', 'Activity becomes the measure', 'The handover stays unclear'] },
  { id: 'hushwork', icon: 'bolt', label: 'Hushwork approach', points: ['Starts with repeated work', 'Fits around your current tools', 'Sources stay attached', 'Human checks are placed by design', 'Owners remain visible', 'Documentation grows with the build', 'Routes can be adjusted', 'Teams learn before launch', 'Useful relief becomes the measure', 'Context, owner, and next action stay together'] },
]

export const faqItems = [
  { question: 'What kind of work is a good place to start?', answer: 'A strong first workflow is repetitive, rules-led, and currently held together by handoffs, reminders, or copy-and-paste work. We map it before recommending what should be assisted.' }, { question: 'Will this replace the tools our team already uses?', answer: 'Usually, no. Hushwork is designed around the tools and sources your team already trusts, adding a clearer route between them instead of creating another place to manage.' }, { question: 'Where does human review stay in the process?', answer: 'We place review at decisions that need context, judgment, or approval. Prepared work can move faster, while the final call remains visible and owned by a person.' }, { question: 'How do we know what the system is doing?', answer: 'Sources, routing rules, owners, and next actions remain visible. Every handover includes practical documentation so your team can inspect the workflow without relying on us.' }, { question: 'What happens after the first workflow is live?', answer: 'We review how the workflow behaves in real use, refine the weak handoffs, and leave your team with a clear owner guide. From there, you can maintain it or map the next repeat.' },
] as const

export const footerColumns = [
  { label: 'Navigate', links: [{ label: 'About', href: '#about' }, { label: 'Workflow', href: '#workflow' }, { label: 'Benefits', href: '#benefits' }, { label: 'Pricing', href: '#pricing' }, { label: 'Contact', href: '#contact' }] },
  { label: 'Elsewhere', links: [{ label: 'LinkedIn', href: '#top' }, { label: 'Instagram', href: '#top' }, { label: 'X / Twitter', href: '#top' }, { label: 'YouTube', href: '#top' }] },
] as const
