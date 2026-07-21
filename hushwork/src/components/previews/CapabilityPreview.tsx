import { MiniIcon, type MiniIconName } from '../ui/MiniIcon'

export type CapabilityKind = 'mapping' | 'triage' | 'review' | 'followup' | 'briefing' | 'owner'

// Rich, self-contained capability surfaces. CSS owns their entrance and idle stories.
export function CapabilityPreview({ kind }: { kind: CapabilityKind }) {
  if (kind === 'mapping') {
    const nodes: ReadonlyArray<{ icon: MiniIconName; label: string; note: string; state: string }> = [
      { icon: 'clock', label: 'Count repeated hours', note: 'Pattern found', state: 'done' },
      { icon: 'document', label: 'Prepare the handoff', note: 'Review ready', state: 'waiting' },
      { icon: 'coin', label: 'Return time to the team', note: 'Owner approval', state: 'pending' },
    ]
    return <div className="cap-preview cap-preview--mapping" aria-hidden="true">
      <div className="cap-map-head"><span>Repeat audit</span><i>03 steps</i></div>
      <div className="cap-flow-line"><i /></div>
      <div className="cap-flow-list">
        {nodes.map((node, index) => <div className={`cap-flow-node cap-flow-node--${node.state}`} key={node.label}>
          <span className="cap-flow-icon"><MiniIcon name={node.icon} /></span>
          <span><strong>{node.label}</strong><small>{node.note}</small><i><b style={{ width: `${82 - index * 18}%` }} /></i></span>
          <em>{index === 0 ? '✓' : index === 1 ? '•' : '×'}</em>
        </div>)}
      </div>
      <div className="cap-map-foot"><span><b />Human check included</span><i>Owner: Ops</i></div>
    </div>
  }

  if (kind === 'triage') {
    return <div className="cap-preview cap-preview--triage" aria-hidden="true">
      <div className="triage-meta"><span><b />Incoming request</span><i>00:18</i></div>
      <div className="triage-stage"><div className="waveform">{[8, 18, 31, 14, 38, 24, 12].map((height, index) => <i key={index} style={{ height }} />)}</div><span className="triage-phone"><MiniIcon name="phone" /></span></div>
      <div className="triage-route"><span>Routing to client services</span><b>Ready</b></div>
    </div>
  }

  if (kind === 'review') {
    const people = [['Mara', 'Operations', 'online'], ['Jon', 'Client lead', 'away'], ['Nia', 'Reviewer', 'online'], ['Sam', 'Delivery', 'away'], ['Eli', 'Advisor', 'offline'], ['Rae', 'Owner', 'offline']] as const
    return <div className="cap-preview cap-preview--review" aria-hidden="true">
      <div className="review-head"><span>Review owners</span><i>3 available</i></div>
      <div className="review-grid">{people.map(([name, role, status], index) => <div className={`review-person review-person--${status}${index > 3 ? ' is-muted' : ''}`} key={name}>
        <span className={`review-avatar review-avatar--${index + 1}`}><MiniIcon name="user" /></span><span><strong>{name}</strong><small>{role}</small></span><i />
      </div>)}</div>
    </div>
  }

  if (kind === 'followup') {
    const routes: ReadonlyArray<readonly [string, MiniIconName, boolean]> = [['LinkedIn', 'rings', true], ['Email', 'mail', true], ['Client portal', 'board', true], ['Call notes', 'phone', false], ['SMS', 'chat', false], ['Calendar', 'calendar', false]]
    return <div className="cap-preview cap-preview--followup" aria-hidden="true">
      <div className="followup-window">
        <div className="followup-bar"><span><MiniIcon name="bolt" />Follow-up queue</span><i><b /><b /><b /></i></div>
        <div className="followup-search"><MiniIcon name="search" /><span>Searching for client context…</span></div>
        <div className="followup-label"><span>Prepared routes</span><i>⌃</i></div>
        <div className="followup-routes">{routes.map(([label, icon, enabled], index) => <div className={`${enabled ? '' : 'is-muted'}${index === 1 ? ' is-scanning' : ''}`} key={label}><span><MiniIcon name={icon} />{label}</span><i className={enabled ? 'is-on' : ''}><b /></i></div>)}</div>
        <div className="followup-foot"><span>3 drafts prepared</span><b>Human check</b></div>
      </div>
    </div>
  }

  if (kind === 'briefing') {
    const sources = [['Interviews', '12', 82], ['Notes', '28', 66], ['Reports', '09', 74], ['Emails', '34', 48]] as const
    return <div className="cap-preview cap-preview--briefing" aria-hidden="true">
      <div className="brief-metrics"><span><small>Sources</small><strong>83</strong></span><span><small>Linked</small><strong>76</strong></span><span><small>Review</small><strong>04</strong></span></div>
      <div className="brief-chart"><svg viewBox="0 0 240 82" preserveAspectRatio="none"><defs><linearGradient id="brief-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e1ff76" stopOpacity=".2" /><stop offset="1" stopColor="#e1ff76" stopOpacity="0" /></linearGradient></defs><path className="brief-chart__fill" d="M0 66 28 48 50 58 78 33 108 56 143 43 176 21 210 49 240 27V82H0Z" /><path className="brief-chart__line" d="M0 66 28 48 50 58 78 33 108 56 143 43 176 21 210 49 240 27" /><circle className="brief-chart__point" cx="176" cy="21" r="3" /></svg><span className="brief-tooltip">Source-linked</span></div>
      <div className="brief-sources">{sources.map(([label, value, width]) => <div key={label}><span>{label}</span><b>{value}</b><i><em style={{ width: `${width}%` }} /></i></div>)}</div>
    </div>
  }

  return <div className="cap-preview cap-preview--owner" aria-hidden="true">
    <div className="owner-history"><i /><i /><i /></div>
    <div className="owner-person"><span className="review-avatar review-avatar--3"><MiniIcon name="user" /></span><span><strong>Nia</strong><small>Workflow owner</small></span><b>Reviewing</b></div>
    <div className="owner-compose"><span>Prepared reply with source notes</span><i><MiniIcon name="send" /></i><em><svg viewBox="0 0 16 16"><path d="m4 8.2 2.5 2.5L12 5.5" /></svg></em></div>
    <div className="owner-state"><span>Context attached</span><i>Owner visible</i></div>
  </div>
}
