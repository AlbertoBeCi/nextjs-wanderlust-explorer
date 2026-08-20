interface MoonIconProps {
  className?: string;
}

export function MoonIcon({ className }: MoonIconProps) {
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
      <path d="M21 12.79A9 9 0 1111.21 3 7.25 7.25 0 0021 12.79z" />
    </svg>
  );
}
