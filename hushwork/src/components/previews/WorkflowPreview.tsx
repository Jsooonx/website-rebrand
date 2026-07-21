import { MiniIcon, type MiniIconName } from '../ui/MiniIcon'

export type WorkflowPreviewKind = 'map' | 'build' | 'handover'

const diagnosticRows: ReadonlyArray<{ icon: MiniIconName; eyebrow: string; label: string; meter: number; muted: boolean }> = [
  { icon: 'link', eyebrow: 'Bottlenecks', label: '3 handoffs found', meter: 88, muted: false },
  { icon: 'repeat', eyebrow: 'Repeated work', label: '82% follows a pattern', meter: 76, muted: false },
  { icon: 'chat', eyebrow: 'Communication gaps', label: 'Follow-up needs routing', meter: 61, muted: false },
  { icon: 'clock', eyebrow: 'Time reclaimed', label: '6.5 hours each week', meter: 44, muted: true },
  { icon: 'calendar', eyebrow: 'Missed moments', label: '2 deadlines at risk', meter: 30, muted: true },
]

const integrationGroups: ReadonlyArray<{ title: string; description: string; tools: readonly MiniIconName[]; muted: boolean }> = [
  { title: 'Project coordination', description: 'Briefs, owners, and due dates stay aligned.', tools: ['board', 'diamond', 'target'], muted: false },
  { title: 'Team communication', description: 'Useful context reaches the right channel.', tools: ['chat', 'orbit', 'rings'], muted: false },
  { title: 'Client follow-up', description: 'Prepared replies wait for a human check.', tools: ['bolt', 'link', 'calendar'], muted: true },
]

const updateRows = [
  { type: 'new', label: 'Intake routing is now active', muted: false },
  { type: 'new', label: 'Brief sources remain attached', muted: false },
  { type: 'improved', label: 'Review queue loads faster', muted: false },
  { type: 'improved', label: 'Owner alerts are clearer', muted: false },
  { type: 'fixed', label: 'Duplicate follow-ups removed', muted: false },
  { type: 'fixed', label: 'Deadline handoff secured', muted: true },
] as const

// Three explanatory mini-product stories for the workflow section.
export function WorkflowPreview({ kind }: { kind: WorkflowPreviewKind }) {
  if (kind === 'map') {
    return <div className="workflow-preview workflow-preview--map" aria-hidden="true">
      <div className="preview-heading"><span>Analyzing workflow<small>Finding where the day gets noisy</small></span><i>Live scan</i></div>
      <div className="diagnostic-list">
        {diagnosticRows.map((row) => <div className={`diagnostic-row${row.muted ? ' is-muted' : ''}`} key={row.eyebrow}>
          <span className="diagnostic-icon"><MiniIcon name={row.icon} /></span>
          <span className="diagnostic-copy"><small>{row.eyebrow}</small><strong>{row.label}</strong><i><b style={{ width: `${row.meter}%` }} /></i></span>
        </div>)}
      </div>
      <div className="map-note"><b />Analysis remains visible to your team</div>
    </div>
  }

  if (kind === 'build') {
    return <div className="workflow-preview workflow-preview--build" aria-hidden="true">
      <div className="preview-heading"><span>Connected workspace<small>Works with the tools your team knows</small></span><i>3 routes</i></div>
      <div className="integration-list">
        {integrationGroups.map((group) => <div className={`integration-group${group.muted ? ' is-muted' : ''}`} key={group.title}>
          <strong>{group.title}</strong><small>{group.description}</small>
          <div className="integration-tools">
            {group.tools.map((tool, index) => <span className={`tool-glyph tool-glyph--${index + 1}`} key={tool}><MiniIcon name={tool} /></span>)}
            <i className="request-chip">+ Request route</i>
          </div>
        </div>)}
      </div>
      <div className="sync-status"><span><b />Context synced</span><i>Human review on</i></div>
    </div>
  }

  return <div className="workflow-preview workflow-preview--handover" aria-hidden="true">
    <div className="preview-heading"><span>Workflow updates<small>A clear record of what changed</small></span><i>Live</i></div>
    <div className="update-legend"><span><b />New</span><span><b />Improved</span><span><b />Fixed</span><i>← →</i></div>
    <div className="update-window">
      <div className="update-window__heading"><span>Week 04 handover<small>Owner-ready improvements</small></span><i>•••</i></div>
      <div className="update-list">
        {updateRows.map((update, index) => <div className={`update-row update-row--${update.type}${update.muted ? ' is-muted' : ''}`} key={update.label}>
          <b /><span>{update.label}</span><i><MiniIcon name="arrow" /></i>{index === 2 && <em className="update-check"><svg viewBox="0 0 16 16"><path d="m4 8.2 2.5 2.5L12 5.5" /></svg></em>}
        </div>)}
      </div>
    </div>
    <div className="handover-footer"><span>Last checked today</span><i>Open owner guide ↗</i></div>
  </div>
}
