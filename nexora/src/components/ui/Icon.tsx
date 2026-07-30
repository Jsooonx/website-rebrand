export type IconName =
  | "arrow-left"
  | "arrow-right"
  | "check"
  | "chevron-down"
  | "layers"
  | "menu"
  | "route"
  | "signal"
  | "warehouse"
  | "x";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const paths: Record<IconName, React.ReactNode> = {
  "arrow-left": <path d="m19 12-7-7-7 7m7-7v14" transform="rotate(-90 12 12)" />,
  "arrow-right": <path d="m19 12-7-7-7 7m7-7v14" transform="rotate(90 12 12)" />,
  check: <path d="m5 12 4 4L19 7" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  layers: <><path d="m12 3 9 5-9 5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
  menu: <><path d="M5 8h14M5 12h14M5 16h14" /></>,
  route: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" /></>,
  signal: <><path d="M4 17h3l2-5 3 8 3-14 2 11h3" /><path d="M4 21h16" opacity=".4" /></>,
  warehouse: <><path d="m3 10 9-6 9 6v10H3Z" /><path d="M8 20v-6h8v6M3 10h18" /></>,
  x: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({ name, size = 20, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
