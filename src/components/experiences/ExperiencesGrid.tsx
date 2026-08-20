import type { Experience } from "@/types";
import { ExperienceCardConnected } from "@/components/experiences/ExperienceCardConnected";

interface ExperiencesGridProps {
  experiences: Experience[];
}

export function ExperiencesGrid({ experiences }: ExperiencesGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
      {experiences.map((experience) => (
        <div key={experience.id} className="mb-5 break-inside-avoid">
          <ExperienceCardConnected experience={experience} />
        </div>
      ))}
    </div>
  );
}
