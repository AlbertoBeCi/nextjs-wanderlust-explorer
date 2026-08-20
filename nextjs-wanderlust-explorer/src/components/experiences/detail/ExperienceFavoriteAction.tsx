"use client";

import { useAppState } from "@/context/AppStateContext";
import { FavoriteButton } from "@/components/experiences/FavoriteButton";

interface ExperienceFavoriteActionProps {
  experienceId: string;
}

export function ExperienceFavoriteAction({ experienceId }: ExperienceFavoriteActionProps) {
  const { isFavorite, toggleFavorite } = useAppState();
  const active = isFavorite(experienceId);

  return (
    <FavoriteButton
      isFavorite={active}
      onToggle={() => toggleFavorite(experienceId)}
      label={active ? "Guardado en favoritos" : "Añadir a favoritos"}
    />
  );
}
