interface CompanyMarkProps {
  company: string;
  className?: string;
}

export function CompanyMark({ company, className = "" }: CompanyMarkProps) {
  const variant = company.startsWith("Northline")
    ? "northline"
    : company.startsWith("Fieldmark")
      ? "fieldmark"
      : "morrow";

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {variant === "northline" && (
        <>
          <path d="M8 28 20 9l12 19" />
          <path d="M13 25h14M16 20h8" opacity=".55" />
        </>
      )}
      {variant === "fieldmark" && (
        <>
          <path d="M10 10h20v20H10z" />
          <path d="M10 17h20M17 10v20" opacity=".55" />
          <circle cx="24" cy="24" r="3" />
        </>
      )}
      {variant === "morrow" && (
        <>
          <circle cx="20" cy="20" r="11" />
          <path d="M9 20h22M20 9c5 4 5 18 0 22M20 9c-5 4-5 18 0 22" />
        </>
      )}
    </svg>
  );
}
