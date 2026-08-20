"use client";

import { useState } from "react";
import Link from "next/link";
import { UsersIcon } from "@/components/icons/UsersIcon";
import { CalendarIcon } from "@/components/icons/CalendarIcon";

interface BookingBoxProps {
  title: string;
  price: number;
}

const INPUT_CLASSES =
  "rounded-xl border border-primary/15 bg-transparent px-3 py-2 text-sm font-normal text-neutral dark:border-white/15 dark:text-surface";

export function BookingBox({ title, price }: BookingBoxProps) {
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const total = price * people;
  const bookingHref = `/booking?title=${encodeURIComponent(title)}&people=${people}&date=${date}&total=${total}`;

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-primary-elevated">
      <div>
        <p className="text-xs uppercase tracking-wide text-neutral/60 dark:text-surface/60">
          Precio por persona
        </p>
        <p className="font-heading text-2xl font-bold text-secondary">{price}€</p>
      </div>

      <label className="flex flex-col gap-1 text-sm font-bold text-neutral dark:text-surface">
        <span className="flex items-center gap-2">
          <UsersIcon className="h-4 w-4" /> Personas
        </span>
        <input
          type="number"
          min={1}
          max={20}
          value={people}
          onChange={(event) => setPeople(Math.max(1, Number(event.target.value)))}
          className={INPUT_CLASSES}
        />
      </label>

      <label className="flex flex-col gap-1 text-sm font-bold text-neutral dark:text-surface">
        <span className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" /> Fecha
        </span>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className={INPUT_CLASSES} />
      </label>

      <div className="flex items-center justify-between border-t border-primary/10 pt-4 dark:border-white/10">
        <span className="text-sm font-bold text-neutral dark:text-surface">Total</span>
        <span className="font-heading text-xl font-bold text-secondary">{total}€</span>
      </div>

      <Link
        href={bookingHref}
        className="flex items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-neutral transition-transform hover:scale-[1.02]"
      >
        Reservar ahora
      </Link>
    </div>
  );
}
