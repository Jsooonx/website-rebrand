import type { SystemRow } from "../../content/siteData";

interface SystemConnectorRailProps {
  rows: readonly SystemRow[];
  activeId: string | null;
}

export function SystemConnectorRail({ rows, activeId }: SystemConnectorRailProps) {
  return (
    <div className="systems-rail" aria-hidden="true">
      <svg viewBox="0 0 520 360" preserveAspectRatio="none">
        {rows.map((row, index) => {
          const y = 48 + index * 88;
          const isActive = activeId === row.id;
          return (
            <g key={row.id} className={isActive ? "is-active" : ""}>
              <path d={`M 30 ${y} C 120 ${y}, 175 ${y}, 260 ${y}`} />
              <path d={`M 260 ${y} C 345 ${y}, 400 ${y}, 490 ${y}`} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
