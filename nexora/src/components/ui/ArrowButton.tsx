import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Icon } from "./Icon";

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
  const classes = `arrow-button ${direction === "left" ? "arrow-button--left" : ""} ${className}`;
  const content = (
    <>
      {direction === "left" && <Icon name="arrow-left" size={16} />}
      <span>{children}</span>
      {direction === "right" && <Icon name="arrow-right" size={16} />}
    </>
  );

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
