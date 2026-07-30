import { motion } from "framer-motion";
import type { CapabilityTab } from "../../content/siteData";
import { Icon } from "../ui/Icon";

interface CapabilityCanvasProps {
  capability: CapabilityTab;
}

function Shell({
  children,
  capability,
}: React.PropsWithChildren<{ capability: CapabilityTab }>) {
  return (
    <div className="capability-canvas">
      <div className="capability-canvas__rail">
        <div className="mini-brand">NX</div>
        <div className="mini-nav">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
        <div className="mini-avatar">AO</div>
      </div>
      <div className="capability-canvas__body">
        <header>
          <div>
            <span>{capability.eyebrow}</span>
            <strong>{capability.title}</strong>
          </div>
          <div className="canvas-status">
            <i /> LIVE / 07:42
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}

export function CapabilityCanvas({ capability }: CapabilityCanvasProps) {
  return (
    <Shell capability={capability}>
      <motion.div
        className={`capability-view capability-view--${capability.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.32, ease: [0.2, 0, 0, 1] }}
      >
        {capability.id === "detect" && <DetectView />}
        {capability.id === "explain" && <ExplainView />}
        {capability.id === "coordinate" && <CoordinateView />}
        {capability.id === "learn" && <LearnView />}
      </motion.div>
    </Shell>
  );
}

function DetectView() {
  return (
    <div className="detect-view">
      <div className="detect-map">
        <svg viewBox="0 0 600 320" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M24 246C98 160 176 264 250 172S424 79 572 156" />
            <path d="M60 74c72 95 151 54 216 90s91 117 177 62 79-68 120-38" opacity=".5" />
            <path d="M46 282c119-54 183 1 276-61s167-17 246 43" opacity=".3" />
          </g>
          <path
            d="M24 246C98 160 176 264 250 172S424 79 572 156"
            fill="none"
            stroke="var(--lime)"
            strokeWidth="2"
            strokeDasharray="8 9"
          />
          {[
            [24, 246],
            [137, 209],
            [250, 172],
            [393, 101],
            [572, 156],
          ].map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={index === 4 ? 6 : 4}
              fill={index === 4 ? "var(--ember)" : "var(--lime)"}
            />
          ))}
        </svg>
        <div className="map-label map-label--one">EAST HUB · CLEAR</div>
        <div className="map-label map-label--two">NORTH HUB · +26 MIN</div>
      </div>
      <div className="attention-list">
        <div className="panel-title">
          <span>ATTENTION QUEUE</span>
          <b>03</b>
        </div>
        <div className="attention-item attention-item--active">
          <i className="dot dot--ember" />
          <div><strong>North hub handoff</strong><span>42 orders exposed</span></div>
          <em>High</em>
        </div>
        <div className="attention-item">
          <i className="dot dot--lime" />
          <div><strong>Stock balance drift</strong><span>West facility</span></div>
          <em>Watch</em>
        </div>
        <div className="attention-item">
          <i />
          <div><strong>Carrier check-in</strong><span>Linehaul 07</span></div>
          <em>Review</em>
        </div>
      </div>
    </div>
  );
}

function ExplainView() {
  return (
    <div className="explain-view">
      <div className="trace-origin">
        <span>ORIGIN SIGNAL</span>
        <strong>North hub handoff</strong>
        <p>Carrier transfer missed the planned 07:10 window.</p>
      </div>
      <div className="trace-line" />
      <div className="trace-branches">
        {[
          ["Inventory", "18 priority units"],
          ["Orders", "42 customer orders"],
          ["Service", "6 SLA commitments"],
        ].map(([title, value], index) => (
          <div className="trace-node" key={title}>
            <span>0{index + 1}</span>
            <strong>{title}</strong>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <div className="exposure-panel">
        <span>PROJECTED EXPOSURE</span>
        <strong>2h 14m</strong>
        <p>until the first committed order misses its service window</p>
      </div>
    </div>
  );
}

function CoordinateView() {
  return (
    <div className="coordinate-view">
      <div className="response-plan">
        <div className="response-plan__top">
          <div><span>RESPONSE / NX-204</span><strong>Protect priority orders</strong></div>
          <span className="plan-ready">READY</span>
        </div>
        <div className="response-steps">
          {[
            ["01", "Move 18 units via East hub", "Asha R.", "Now"],
            ["02", "Hold standard orders at North", "Jules M.", "+12m"],
            ["03", "Notify service owners", "Mina K.", "+18m"],
          ].map(([number, title, owner, time]) => (
            <div className="response-step" key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <em>{owner}</em>
              <small>{time}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="approval-panel">
        <span>APPROVAL GATE</span>
        <strong>Reroute inventory</strong>
        <p>Protects all priority orders with an 11 minute buffer.</p>
        <div className="approval-actions">
          <button type="button">Hold</button>
          <button type="button">Approve <Icon name="arrow-right" size={13} /></button>
        </div>
      </div>
    </div>
  );
}

function LearnView() {
  return (
    <div className="learn-view">
      <div className="impact-metrics">
        <div><span>RECOVERY TIME</span><strong>−31%</strong><small>vs previous quarter</small></div>
        <div><span>DISRUPTION AVOIDED</span><strong>18</strong><small>priority order misses</small></div>
        <div><span>WEAK POINT</span><strong>North</strong><small>carrier handoff window</small></div>
      </div>
      <div className="impact-chart">
        <div className="chart-title"><span>RESPONSE TREND</span><strong>Last 8 incidents</strong></div>
        <svg viewBox="0 0 700 240" aria-hidden="true">
          <defs>
            <linearGradient id="impactFill" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#c8f05b" stopOpacity=".22" />
              <stop offset="1" stopColor="#c8f05b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M20 208C115 196 158 159 238 171s127-92 205-66 121-50 237-73v190H20Z" fill="url(#impactFill)" />
          <path d="M20 208C115 196 158 159 238 171s127-92 205-66 121-50 237-73" fill="none" stroke="#c8f05b" strokeWidth="2" />
          <g stroke="rgba(216,221,218,.12)"><path d="M20 60h660M20 120h660M20 180h660" /></g>
        </svg>
      </div>
    </div>
  );
}
