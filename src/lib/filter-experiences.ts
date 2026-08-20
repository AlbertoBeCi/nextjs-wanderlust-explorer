import type { Experience, ExperienceFilters } from "@/types";

export function filterExperiences(
  list: Experience[],
  filters: ExperienceFilters
): Experience[] {
  let searchRegex: RegExp | null = null;
  try {
    searchRegex = filters.search === "" ? null : new RegExp(filters.search, "i");
  } catch {
    searchRegex = null;
  }

  return list.filter((experience) => {
    const matchesSearch = searchRegex === null || searchRegex.test(experience.title);

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
      matchesCategory &&
      matchesDestination &&
      matchesGroupType &&
      matchesPrice
    );
  });
}
