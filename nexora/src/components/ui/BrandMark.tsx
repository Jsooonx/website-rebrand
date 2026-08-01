interface BrandMarkProps {
  variant?: "full" | "symbol";
  className?: string;
}

export function BrandMark({
  variant = "full",
  className = "",
}: BrandMarkProps) {
  return (
    <span className={`brand-mark brand-mark--${variant} ${className}`} role="img" aria-label="Nexora">
      <img src="/images/nexora-mark.png" alt="" aria-hidden="true" />
      {variant === "full" && <span>Nexora</span>}
    </span>
  );
}
