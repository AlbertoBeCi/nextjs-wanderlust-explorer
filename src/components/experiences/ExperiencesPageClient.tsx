"use client";

import { useMemo, useState } from "react";
import type { Experience, ExperienceCategory, ExperienceFilters } from "@/types";
import { useAppState } from "@/context/AppStateContext";
import { filterExperiences } from "@/lib/filter-experiences";
import { FilterSidebar } from "@/components/experiences/FilterSidebar";
import { FilterDrawer } from "@/components/experiences/FilterDrawer";
import { ExperiencesGrid } from "@/components/experiences/ExperiencesGrid";
import { EmptyState } from "@/components/ui/EmptyState";

interface ExperiencesPageClientProps {
  experiences: Experience[];
  priceBounds: { min: number; max: number };
  initialCategory?: ExperienceCategory;
}

export function ExperiencesPageClient({
  experiences,
  priceBounds,
  initialCategory,
}: ExperiencesPageClientProps) {
  const { search, setSearch } = useAppState();
  const [filters, setFilters] = useState<Omit<ExperienceFilters, "search">>({
    categories: initialCategory ? [initialCategory] : [],
    destinations: [],
    groupTypes: [],
    priceRange: priceBounds,
  });

  const results = useMemo(
    () => filterExperiences(experiences, { ...filters, search }),
    [experiences, filters, search]
  );

  const clearFilters = () => {
    setFilters({ categories: [], destinations: [], groupTypes: [], priceRange: priceBounds });
    setSearch("");
  };

  const filterSidebarProps = {
    filters: { ...filters, search },
    onChange: (next: ExperienceFilters) => setFilters(next),
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
