interface MountainIconProps {
  className?: string;
}

export function MountainIcon({ className }: MountainIconProps) {
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
      <path d="M3 20l5.5-9 3.5 5 2-3 6.5 7H3z" />
    </svg>
  );
}
