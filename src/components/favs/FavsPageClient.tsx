"use client";

import type { Experience } from "@/types";
import { useAppState } from "@/context/AppStateContext";
import { ExperiencesGrid } from "@/components/experiences/ExperiencesGrid";
import { EmptyState } from "@/components/ui/EmptyState";

interface FavsPageClientProps {
  experiences: Experience[];
}

export function FavsPageClient({ experiences }: FavsPageClientProps) {
  const { favorites } = useAppState();
  const favoriteExperiences = experiences.filter((experience) => favorites.includes(experience.id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading text-3xl font-bold text-neutral dark:text-surface">
        Mis favoritos
      </h1>

      <div className="mt-8">
        {favoriteExperiences.length === 0 ? (
          <EmptyState
            title="Todavía no tienes favoritos"
            description="Guarda las experiencias que más te gusten pulsando el corazón y las encontrarás aquí."
            actionLabel="Explorar experiencias"
            actionHref="/experiences"
          />
        ) : (
          <ExperiencesGrid experiences={favoriteExperiences} />
        )}
      </div>
    </div>
  );
}
