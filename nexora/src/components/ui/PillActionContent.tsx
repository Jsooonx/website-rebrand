import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface PillActionContentProps {
  children: ReactNode;
  direction?: "left" | "right";
  withArrow?: boolean;
}

export function PillActionContent({
  children,
  direction = "right",
  withArrow = false,
}: PillActionContentProps) {
  return <span className={`pill-action__content pill-action__content--${direction}`}>
    <span className="pill-action__label"><span>{children}</span><span aria-hidden="true">{children}</span></span>
    {withArrow && <span className="pill-action__icon" aria-hidden="true"><Icon className="pill-action__arrow pill-action__arrow--out" name={direction === "left" ? "arrow-left" : "arrow-right"} size={16} /><Icon className="pill-action__arrow pill-action__arrow--in" name={direction === "left" ? "arrow-left" : "arrow-right"} size={16} /></span>}
  </span>;
}
