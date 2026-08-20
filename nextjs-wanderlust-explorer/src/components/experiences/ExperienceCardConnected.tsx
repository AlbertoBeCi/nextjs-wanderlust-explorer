"use client";

import type { Experience } from "@/types";
import { useAppState } from "@/context/AppStateContext";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";

interface ExperienceCardConnectedProps {
  experience: Experience;
}

export function ExperienceCardConnected({ experience }: ExperienceCardConnectedProps) {
  const { isFavorite, toggleFavorite } = useAppState();

  return (
    <ExperienceCard
      experience={experience}
      isFavorite={isFavorite(experience.id)}
      onToggleFavorite={toggleFavorite}
    />
  );
}
