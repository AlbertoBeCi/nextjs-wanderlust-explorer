"use client";

import { useState } from "react";
import Link from "next/link";
import { UserIcon } from "@/components/icons/UserIcon";
import { Modal } from "@/components/ui/Modal";

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de usuario"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary/5 dark:border-white/15 dark:text-surface dark:hover:bg-white/10"
      >
        <UserIcon className="h-4 w-4" />
      </button>

      <Modal open={open} onClose={() => setOpen(false)} align="top-right">
        <div className="flex flex-col gap-1 pt-2">
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 text-sm font-bold text-neutral hover:bg-primary/5 dark:text-surface dark:hover:bg-white/10"
          >
            Ir a mi perfil
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 text-left text-sm font-bold text-danger hover:bg-danger/10"
          >
            Cerrar sesión
          </button>
        </div>
      </Modal>
    </>
  );
}
