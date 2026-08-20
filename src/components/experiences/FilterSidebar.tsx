"use client";

import type { ExperienceFilters } from "@/types";
import { Accordion } from "@/components/ui/Accordion";
import { CheckboxFilterGroup } from "@/components/experiences/CheckboxFilterGroup";
import { PriceRangeFilter } from "@/components/experiences/PriceRangeFilter";
import { Button } from "@/components/ui/Button";
import { CATEGORIES, DESTINATIONS, GROUP_TYPES } from "@/lib/experience-options";

interface FilterSidebarProps {
  filters: ExperienceFilters;
  onChange: (filters: ExperienceFilters) => void;
  priceBounds: { min: number; max: number };
  onClear: () => void;
}

export function FilterSidebar({ filters, onChange, priceBounds, onClear }: FilterSidebarProps) {
  return (
    <div className="flex flex-col">
      <Accordion title="Categoría">
        <CheckboxFilterGroup
          options={CATEGORIES}
          selected={filters.categories}
          onChange={(categories) => onChange({ ...filters, categories: categories as ExperienceFilters["categories"] })}
        />
      </Accordion>

      <Accordion title="Destino">
        <CheckboxFilterGroup
          options={DESTINATIONS}
          selected={filters.destinations}
          onChange={(destinations) => onChange({ ...filters, destinations: destinations as ExperienceFilters["destinations"] })}
        />
        <input
          type="text"
          value={filters.locationQuery}
          onChange={(event) => onChange({ ...filters, locationQuery: event.target.value })}
          placeholder="Ciudad o país"
          className="mt-3 w-full rounded-xl border border-primary/15 bg-transparent px-3 py-2 text-sm text-neutral placeholder:text-neutral/50 dark:border-white/15 dark:text-surface dark:placeholder:text-surface/50"
        />
      </Accordion>

      <Accordion title="¿Cuántos sois?">
        <CheckboxFilterGroup
          options={GROUP_TYPES}
          selected={filters.groupTypes}
          onChange={(groupTypes) => onChange({ ...filters, groupTypes: groupTypes as ExperienceFilters["groupTypes"] })}
        />
      </Accordion>

      <Accordion title="Precio">
        <PriceRangeFilter
          bounds={priceBounds}
          value={filters.priceRange}
          onChange={(priceRange) => onChange({ ...filters, priceRange })}
        />
      </Accordion>

      <Button variant="outline" onClick={onClear} className="mt-6 w-full">
        Limpiar todos los filtros
      </Button>
    </div>
  );
}
