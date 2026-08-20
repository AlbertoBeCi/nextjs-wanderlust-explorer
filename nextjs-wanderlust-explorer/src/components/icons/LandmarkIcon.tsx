interface LandmarkIconProps {
  className?: string;
}

export function LandmarkIcon({ className }: LandmarkIconProps) {
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
      <path d="M4 9l8-5 8 5" />
      <path d="M6 9v10M10 9v10M14 9v10M18 9v10" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}
