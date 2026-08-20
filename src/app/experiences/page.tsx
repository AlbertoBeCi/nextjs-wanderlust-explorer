import { experiences } from "@/data/experiences";
import { getPriceBounds } from "@/lib/experiences";
import { ExperiencesPageClient } from "@/components/experiences/ExperiencesPageClient";
import type { ExperienceCategory } from "@/types";

const CATEGORIES: readonly string[] = [
  "Gastronomía",
  "Aventura y Naturaleza",
  "Cultura",
  "Relax",
  "Entretenimiento",
  "Escapadas",
];

interface ExperiencesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ExperiencesPage({ searchParams }: ExperiencesPageProps) {
  const { category } = await searchParams;
  const initialCategory = CATEGORIES.includes(category ?? "")
    ? (category as ExperienceCategory)
    : undefined;

  return (
    <ExperiencesPageClient
      experiences={experiences}
      priceBounds={getPriceBounds()}
      initialCategory={initialCategory}
    />
  );
}
