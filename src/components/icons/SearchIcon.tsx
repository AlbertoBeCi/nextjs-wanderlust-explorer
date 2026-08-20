interface SearchIconProps {
  className?: string;
}

export function SearchIcon({ className }: SearchIconProps) {
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
      <path d="M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
