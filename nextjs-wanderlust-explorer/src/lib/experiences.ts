import { experiences } from "@/data/experiences";
import type { Experience } from "@/types";

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((experience) => experience.id === id);
}

export function getFeaturedExperiences(count = 4): Experience[] {
  return [...experiences]
    .sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount)
    .slice(0, count);
}

export function getPriceBounds(): { min: number; max: number } {
  const prices = experiences.map((experience) => experience.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
