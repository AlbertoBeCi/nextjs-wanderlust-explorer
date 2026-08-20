interface UserIconProps {
  className?: string;
}

export function UserIcon({ className }: UserIconProps) {
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
      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      <path d="M4.5 20.25a7.5 7.5 0 0115 0" />
    </svg>
  );
}
