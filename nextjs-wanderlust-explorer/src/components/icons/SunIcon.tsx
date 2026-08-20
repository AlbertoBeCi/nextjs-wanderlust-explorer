interface SunIconProps {
  className?: string;
}

export function SunIcon({ className }: SunIconProps) {
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
      <path d="M12 3v2.25M12 18.75V21M4.5 12H2.25M21.75 12H19.5M6 6l1.5 1.5M16.5 16.5L18 18M6 18l1.5-1.5M16.5 7.5L18 6" />
      <path d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
    </svg>
  );
}
