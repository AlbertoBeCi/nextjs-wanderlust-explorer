"use client";

import { HeartIcon } from "@/components/icons/HeartIcon";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  label?: string;
}

export function FavoriteButton({ isFavorite, onToggle, label }: FavoriteButtonProps) {
  const positionClasses = label ? "relative" : "absolute right-3 top-3";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      className={`flex h-9 items-center gap-2 rounded-full bg-white px-3 shadow-sm transition-transform hover:scale-105 ${
        label ? "w-auto" : "w-9 justify-center px-0"
      } ${positionClasses}`}
    >
      <HeartIcon
        filled={isFavorite}
        className={`h-5 w-5 shrink-0 ${isFavorite ? "text-danger" : "text-neutral/70"}`}
      />
      {label && <span className="text-sm font-bold text-neutral">{label}</span>}
    </button>
  );
}
