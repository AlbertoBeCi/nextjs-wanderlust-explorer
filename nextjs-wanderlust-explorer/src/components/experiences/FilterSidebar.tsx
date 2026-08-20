"use client";

import type { ExperienceFilters } from "@/types";
import { Accordion } from "@/components/ui/Accordion";
import { CheckboxFilterGroup } from "@/components/experiences/CheckboxFilterGroup";
import { PriceRangeFilter } from "@/components/experiences/PriceRangeFilter";
import { Button } from "@/components/ui/Button";

const CATEGORIES = ["Gastronomía", "Aventura y Naturaleza", "Cultura", "Relax", "Entretenimiento", "Escapadas"] as const;
const DESTINATIONS = ["Montaña", "Playa", "Ciudad", "Rural", "Nieve", "Costa", "Islas", "Interior"] as const;
const GROUP_TYPES = ["Pareja", "Grupo de amigos", "Familia", "Solo"] as const;

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
