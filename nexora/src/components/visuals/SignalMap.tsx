import { motion } from "framer-motion";
import { Icon } from "../ui/Icon";

export function SignalMap() {
  return (
    <div className="signal-map" aria-label="NEXORA live Signal Map preview">
      <div className="signal-map__topline">
        <div>
          <span className="signal-map__label">NETWORK / LIVE</span>
          <strong>Signal Map</strong>
        </div>
        <span className="signal-map__live">
          <i />
          12 live
        </span>
      </div>

      <div className="signal-map__stage">
        <svg
          className="signal-map__routes"
          viewBox="0 0 760 360"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M45 242C155 147 248 276 338 178S509 94 706 156" />
            <path d="M86 80c91 112 167 63 239 102s100 122 210 65 120-62 181-25" />
            <path d="M58 307c99-56 188-16 271-55s170-42 267 16" opacity=".35" />
          </g>
          <motion.path
            d="M45 242C155 147 248 276 338 178S509 94 706 156"
            fill="none"
            stroke="var(--lime)"
            strokeWidth="2"
            strokeDasharray="8 12"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
          />
          {[
            [45, 242],
            [174, 199],
            [338, 178],
            [498, 111],
            [706, 156],
            [86, 80],
            [535, 247],
          ].map(([cx, cy], index) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={index === 4 ? 7 : 5} fill="#11171b" />
              <circle
                cx={cx}
                cy={cy}
                r={index === 4 ? 6 : 4}
                fill={index === 4 ? "var(--ember)" : index < 5 ? "var(--lime)" : "#8b9693"}
                opacity={index < 5 ? 1 : 0.72}
              />
            </g>
          ))}
        </svg>

        <div className="signal-card signal-card--risk">
          <span>ATTENTION 03</span>
          <strong>North hub handoff</strong>
          <p>ETA drift could expose 42 priority orders.</p>
          <div className="signal-card__meta">
            <span className="dot dot--ember" />
            26 min late
          </div>
        </div>

        <div className="signal-card signal-card--action">
          <span>RECOMMENDED NEXT</span>
          <strong>Move 18 units via East hub</strong>
          <p>Protects all priority orders with 11 min buffer.</p>
          <button type="button">
            Review response
            <Icon name="arrow-right" size={14} />
          </button>
        </div>
      </div>

      <div className="signal-map__status">
        <span>
          <i className="dot dot--lime" /> 12 live signals
        </span>
        <span>3 require attention</span>
        <span>Updated 18 sec ago</span>
      </div>
    </div>
  );
}
