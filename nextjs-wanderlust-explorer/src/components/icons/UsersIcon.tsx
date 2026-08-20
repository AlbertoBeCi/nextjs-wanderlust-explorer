interface UsersIconProps {
  className?: string;
}

export function UsersIcon({ className }: UsersIconProps) {
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
      <path d="M15 19.5a3 3 0 00-3-3H6a3 3 0 00-3 3M9 13.5a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M16.5 19.5a3 3 0 013-3M21 13.5a2.5 2.5 0 10-1.5-4.5" />
    </svg>
  );
}
