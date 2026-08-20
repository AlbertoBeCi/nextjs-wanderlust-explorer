"use client";

import { useState } from "react";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { NavLinks } from "@/components/layout/NavLinks";
import { SearchBar } from "@/components/layout/SearchBar";

export function NavMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary dark:border-white/15 dark:text-surface"
      >
        {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 flex flex-col gap-4 border-t border-primary/10 bg-surface p-4 dark:border-white/10 dark:bg-primary">
          <NavLinks className="flex flex-col gap-3" onNavigate={() => setOpen(false)} />
          <SearchBar />
        </div>
      )}
    </div>
  );
}
