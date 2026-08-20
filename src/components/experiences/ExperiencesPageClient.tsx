"use client";

import type { Experience, ExperienceFilters } from "@/types";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import { FilterSidebar } from "@/components/experiences/FilterSidebar";
import { FilterDrawer } from "@/components/experiences/FilterDrawer";
import { ExperiencesGrid } from "@/components/experiences/ExperiencesGrid";
import { EmptyState } from "@/components/ui/EmptyState";

interface ExperiencesPageClientProps {
  experiences: Experience[];
  priceBounds: { min: number; max: number };
  initialFilters: ExperienceFilters;
}

export function ExperiencesPageClient({
  experiences,
  priceBounds,
  initialFilters,
}: ExperiencesPageClientProps) {
  const { filters, setFilters, results, clearFilters } = useExperienceFilters({
    experiences,
    priceBounds,
    initialFilters,
  });

  const filterSidebarProps = {
    filters,
    onChange: setFilters,
    priceBounds,
    onClear: clearFilters,
  };

  return (
    <div className="mx-auto flex max-w-6xl gap-8 px-4 py-10">
      <aside className="hidden w-64 shrink-0 lg:block">
        <FilterSidebar {...filterSidebarProps} />
      </aside>

      <div className="flex-1">
        <FilterDrawer>
          <FilterSidebar {...filterSidebarProps} />
        </FilterDrawer>

        {results.length === 0 ? (
          <EmptyState
            title="No se encontraron resultados"
            description="Prueba a ajustar los filtros o la búsqueda para encontrar tu próxima experiencia."
            actionLabel="Limpiar filtros"
            onAction={clearFilters}
          />
        ) : (
          <ExperiencesGrid experiences={results} />
        )}
      </div>
    </div>
  );
}
