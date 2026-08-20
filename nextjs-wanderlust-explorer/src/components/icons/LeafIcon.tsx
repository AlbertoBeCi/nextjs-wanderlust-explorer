interface LeafIconProps {
  className?: string;
}

export function LeafIcon({ className }: LeafIconProps) {
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
      <path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14z" />
      <path d="M7 17C10 13 13 10 17 7" />
    </svg>
  );
}
