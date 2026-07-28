type FormaMarkProps = {
  className?: string;
};

export function FormaMark({ className = "" }: FormaMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5h17v17H5zM26 5h17v8.5H26zM26 17.5h17V43H26zM5 26h17v17H5z"
        fill="currentColor"
      />
      <path d="M26 5h17v8.5H26z" fill="var(--accent)" />
    </svg>
  );
}
