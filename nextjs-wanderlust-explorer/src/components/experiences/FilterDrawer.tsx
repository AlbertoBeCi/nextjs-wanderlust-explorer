"use client";

import { useState, type ReactNode } from "react";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";

interface FilterDrawerProps {
  children: ReactNode;
}

export function FilterDrawer({ children }: FilterDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mb-4 flex items-center gap-2 rounded-xl border border-primary/15 px-4 py-2 text-sm font-bold text-neutral dark:border-white/15 dark:text-surface"
      >
        <MenuIcon className="h-4 w-4" />
        Filtros
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex">
          <button
            type="button"
            aria-label="Cerrar filtros"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-neutral/40 backdrop-blur-sm"
          />
          <div className="relative z-10 h-full w-80 max-w-[85vw] overflow-y-auto bg-surface p-5 dark:bg-primary">
            <button
              type="button"
              aria-label="Cerrar filtros"
              onClick={() => setOpen(false)}
              className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-neutral dark:border-white/15 dark:text-surface"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
