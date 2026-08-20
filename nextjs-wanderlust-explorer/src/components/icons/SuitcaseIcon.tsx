interface SuitcaseIconProps {
  className?: string;
}

export function SuitcaseIcon({ className }: SuitcaseIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </svg>
  );
}
