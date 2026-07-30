interface BrandMarkProps {
  variant?: "full" | "symbol";
  className?: string;
}

export function BrandMark({
  variant = "full",
  className = "",
}: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox={variant === "full" ? "0 0 184 32" : "0 0 32 32"}
      role="img"
      aria-label="NEXORA"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 22.5 16 5l11 17.5-11 4.5Z" />
        <path d="m9.5 20.6 6.5-9.9 6.5 9.9-6.5 2.6Z" opacity=".55" />
        <path d="M16 5v22" opacity=".35" />
      </g>
      {variant === "full" && (
        <text
          x="44"
          y="21.5"
          fill="currentColor"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="17"
          fontWeight="620"
          letterSpacing="4"
        >
          NEXORA
        </text>
      )}
    </svg>
  );
}
