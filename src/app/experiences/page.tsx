import { experiences } from "@/data/experiences";
import { getPriceBounds } from "@/lib/experiences";
import { ExperiencesPageClient } from "@/components/experiences/ExperiencesPageClient";
import { parseExperienceSearchParams, type RawSearchParams } from "@/lib/experience-url-params";

interface ExperiencesPageProps {
  searchParams: Promise<RawSearchParams>;
}

export default async function ExperiencesPage({ searchParams }: ExperiencesPageProps) {
  const rawSearchParams = await searchParams;
  const priceBounds = getPriceBounds();
  const initialFilters = parseExperienceSearchParams(rawSearchParams, priceBounds);

  return (
    <ExperiencesPageClient
      experiences={experiences}
      priceBounds={priceBounds}
      initialFilters={initialFilters}
    />
  );
}
