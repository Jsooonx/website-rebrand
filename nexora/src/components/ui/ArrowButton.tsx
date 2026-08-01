import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { PillActionContent } from "./PillActionContent";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  direction?: "left" | "right";
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  direction?: "left" | "right";
};

type ArrowButtonProps = AnchorProps | NativeButtonProps;

export function ArrowButton({
  direction = "right",
  className = "",
  children,
  ...props
}: ArrowButtonProps) {
  const isCta = "href" in props && Boolean(props.href);
  const classes = `arrow-button ${isCta ? "arrow-button--cta" : ""} ${direction === "left" ? "arrow-button--left" : ""} ${className}`;
  const content = <PillActionContent direction={direction} withArrow>{children}</PillActionContent>;

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as NativeButtonProps)}>
      {content}
    </button>
  );
}
