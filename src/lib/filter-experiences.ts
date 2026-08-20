import type { Experience, ExperienceFilters } from "@/types";

function buildSafeRegex(pattern: string): RegExp | null {
  if (pattern === "") return null;
  try {
    return new RegExp(pattern, "i");
  } catch {
    return null;
  }
}

export function filterExperiences(
  list: Experience[],
  filters: ExperienceFilters
): Experience[] {
  const searchRegex = buildSafeRegex(filters.search);
  const locationRegex = buildSafeRegex(filters.locationQuery);

  return list.filter((experience) => {
    const matchesSearch = searchRegex === null || searchRegex.test(experience.title);

    const matchesLocation = locationRegex === null || locationRegex.test(experience.location);

    const matchesCategory =
      filters.categories.length === 0 || filters.categories.includes(experience.category);

    const matchesDestination =
      filters.destinations.length === 0 ||
      filters.destinations.includes(experience.destination);

    const matchesGroupType =
      filters.groupTypes.length === 0 || filters.groupTypes.includes(experience.groupType);

    const matchesPrice =
      experience.price >= filters.priceRange.min && experience.price <= filters.priceRange.max;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory &&
      matchesDestination &&
      matchesGroupType &&
      matchesPrice
    );
  });
}
