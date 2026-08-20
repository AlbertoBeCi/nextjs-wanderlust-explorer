import type {
  ExperienceCategory,
  ExperienceDestination,
  ExperienceFilters,
  GroupType,
  PriceRange,
} from "@/types";
import { CATEGORIES, DESTINATIONS, GROUP_TYPES } from "@/lib/experience-options";

export type RawSearchParams = Record<string, string | string[] | undefined>;

function toArray(value: string | string[] | undefined): string[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function parseEnumList<T extends string>(
  value: string | string[] | undefined,
  allowed: readonly T[]
): T[] {
  return toArray(value).filter((item): item is T => (allowed as readonly string[]).includes(item));
}

function parsePriceRange(searchParams: RawSearchParams, bounds: PriceRange): PriceRange {
  const min = Number(toArray(searchParams.priceMin)[0]);
  const max = Number(toArray(searchParams.priceMax)[0]);

  return {
    min: Number.isFinite(min) ? Math.min(Math.max(min, bounds.min), bounds.max) : bounds.min,
    max: Number.isFinite(max) ? Math.min(Math.max(max, bounds.min), bounds.max) : bounds.max,
  };
}

export function parseExperienceSearchParams(
  searchParams: RawSearchParams,
  priceBounds: PriceRange
): ExperienceFilters {
  return {
    search: toArray(searchParams.q)[0] ?? "",
    categories: parseEnumList<ExperienceCategory>(searchParams.category, CATEGORIES),
    destinations: parseEnumList<ExperienceDestination>(searchParams.destination, DESTINATIONS),
    groupTypes: parseEnumList<GroupType>(searchParams.group, GROUP_TYPES),
    priceRange: parsePriceRange(searchParams, priceBounds),
    locationQuery: toArray(searchParams.location)[0] ?? "",
  };
}

export function buildExperienceQueryString(
  filters: ExperienceFilters,
  priceBounds: PriceRange
): string {
  const params = new URLSearchParams();

  if (filters.search) params.set("q", filters.search);
  filters.categories.forEach((value) => params.append("category", value));
  filters.destinations.forEach((value) => params.append("destination", value));
  filters.groupTypes.forEach((value) => params.append("group", value));
  if (filters.locationQuery) params.set("location", filters.locationQuery);
  if (filters.priceRange.min !== priceBounds.min) {
    params.set("priceMin", String(filters.priceRange.min));
  }
  if (filters.priceRange.max !== priceBounds.max) {
    params.set("priceMax", String(filters.priceRange.max));
  }

  return params.toString();
}
