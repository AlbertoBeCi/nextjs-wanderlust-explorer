"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Experience, ExperienceFilters } from "@/types";
import { useAppState } from "@/context/AppStateContext";
import { filterExperiences } from "@/lib/filter-experiences";
import { buildExperienceQueryString } from "@/lib/experience-url-params";

interface UseExperienceFiltersOptions {
  experiences: Experience[];
  priceBounds: { min: number; max: number };
  initialFilters: ExperienceFilters;
}

export function useExperienceFilters({
  experiences,
  priceBounds,
  initialFilters,
}: UseExperienceFiltersOptions) {
  const router = useRouter();
  const pathname = usePathname();
  const { search, setSearch } = useAppState();

  const [filters, setFilters] = useState<Omit<ExperienceFilters, "search">>(() => ({
    categories: initialFilters.categories,
    destinations: initialFilters.destinations,
    groupTypes: initialFilters.groupTypes,
    priceRange: initialFilters.priceRange,
    locationQuery: initialFilters.locationQuery,
  }));

  useEffect(() => {
    setSearch(initialFilters.search);
  }, [initialFilters.search, setSearch]);

  const isFirstUrlSync = useRef(true);
  useEffect(() => {
    if (isFirstUrlSync.current) {
      isFirstUrlSync.current = false;
      return;
    }
    const queryString = buildExperienceQueryString({ ...filters, search }, priceBounds);
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }, [filters, search, pathname, priceBounds, router]);

  const results = useMemo(
    () => filterExperiences(experiences, { ...filters, search }),
    [experiences, filters, search]
  );

  const clearFilters = () => {
    setFilters({
      categories: [],
      destinations: [],
      groupTypes: [],
      priceRange: priceBounds,
      locationQuery: "",
    });
    setSearch("");
  };

  return {
    filters: { ...filters, search } as ExperienceFilters,
    setFilters,
    results,
    clearFilters,
  };
}
