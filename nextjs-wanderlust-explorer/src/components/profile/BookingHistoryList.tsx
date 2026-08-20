import { mockBookingHistory } from "@/data/user";

export function BookingHistoryList() {
  return (
    <ul className="flex flex-col gap-3">
      {mockBookingHistory.map((booking) => (
        <li
          key={booking.id}
          className="flex items-center justify-between rounded-xl border border-primary/10 bg-white p-4 dark:border-white/10 dark:bg-primary-elevated"
        >
          <div>
            <p className="font-heading font-bold text-neutral dark:text-surface">{booking.title}</p>
            <p className="text-xs text-neutral/60 dark:text-surface/60">
              {booking.date} · {booking.people} personas
            </p>
          </div>
          <p className="font-heading text-lg font-bold text-secondary">{booking.total}€</p>
        </li>
      ))}
    </ul>
  );
}
