"use client";

import { useState } from "react";
import type { Experience } from "@/types";
import { useAppState } from "@/context/AppStateContext";
import { ExperiencesGrid } from "@/components/experiences/ExperiencesGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { BookingHistoryList } from "@/components/profile/BookingHistoryList";

const TABS = ["Mis Favoritos", "Historial de reservas simuladas"] as const;

interface ProfileTabsProps {
  experiences: Experience[];
}

export function ProfileTabs({ experiences }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);
  const { favorites } = useAppState();
  const favoriteExperiences = experiences.filter((experience) => favorites.includes(experience.id));

  return (
    <div className="mt-10">
      <div className="flex gap-2 border-b border-primary/10 dark:border-white/10">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-4 py-3 text-sm font-bold transition-colors ${
              activeTab === tab
                ? "border-secondary text-secondary"
                : "border-transparent text-neutral/60 dark:text-surface/60"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "Mis Favoritos" ? (
          favoriteExperiences.length === 0 ? (
            <EmptyState
              title="Todavía no tienes favoritos"
              description="Explora experiencias y guarda tus favoritas para verlas aquí."
              actionLabel="Explorar experiencias"
              actionHref="/experiences"
            />
          ) : (
            <ExperiencesGrid experiences={favoriteExperiences} />
          )
        ) : (
          <BookingHistoryList />
        )}
      </div>
    </div>
  );
}
