interface TicketIconProps {
  className?: string;
}

export function TicketIcon({ className }: TicketIconProps) {
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
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <line x1="12" y1="7" x2="12" y2="17" strokeDasharray="2 2" />
    </svg>
  );
}
