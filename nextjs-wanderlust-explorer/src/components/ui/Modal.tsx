"use client";

import type { ReactNode } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  align?: "center" | "top-right";
}

export function Modal({ open, onClose, children, align = "center" }: ModalProps) {
  if (!open) return null;

  const panelPosition =
    align === "center" ? "items-center justify-center p-4" : "items-start justify-end p-4 pt-16";

  return (
    <div className={`fixed inset-0 z-50 flex ${panelPosition}`}>
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-neutral/40 backdrop-blur-sm"
      />
      <div className="relative z-10 w-full max-w-xs rounded-2xl border border-primary/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-primary-elevated">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-3 top-3 text-neutral/60 hover:text-neutral dark:text-surface/60 dark:hover:text-surface"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
