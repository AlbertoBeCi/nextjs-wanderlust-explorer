interface WineGlassIconProps {
  className?: string;
}

export function WineGlassIcon({ className }: WineGlassIconProps) {
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
      <path d="M7 3h10l-1.2 8a3.8 3.8 0 01-7.6 0L7 3z" />
      <line x1="12" y1="12.8" x2="12" y2="19" />
      <line x1="8.5" y1="21" x2="15.5" y2="21" />
    </svg>
  );
}
