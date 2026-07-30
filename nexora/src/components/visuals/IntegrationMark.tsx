interface IntegrationMarkProps {
  index: number;
  className?: string;
}

const markPaths = [
  <><circle cx="16" cy="16" r="8" /><path d="M8 16h16M16 8v16" /></>,
  <><path d="m8 10 8-4 8 4v12l-8 4-8-4Z" /><path d="m8 10 8 5 8-5M16 15v11" /></>,
  <><path d="M7 8h8v8H7zM17 16h8v8h-8z" /><path d="m15 12 4 4" /></>,
  <><path d="M7 20 12 9l5 14 4-11 4 8" /><path d="M7 24h18" /></>,
  <><circle cx="11" cy="16" r="5" /><circle cx="21" cy="16" r="5" /><path d="M16 11v10" /></>,
  <><path d="m8 22 8-16 8 16" /><path d="M11 17h10" /></>,
  <><path d="M8 8h16v16H8z" /><circle cx="16" cy="16" r="4" /></>,
  <><path d="M6 16h20M16 6v20" /><path d="m10 10 12 12M22 10 10 22" opacity=".45" /></>,
];

export function IntegrationMark({ index, className = "" }: IntegrationMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {markPaths[index % markPaths.length]}
    </svg>
  );
}
