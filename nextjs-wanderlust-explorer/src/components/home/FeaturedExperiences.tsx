import { getFeaturedExperiences } from "@/lib/experiences";
import { ExperienceCardConnected } from "@/components/experiences/ExperienceCardConnected";

export function FeaturedExperiences() {
  const featured = getFeaturedExperiences(4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-heading text-2xl font-bold text-neutral dark:text-surface">
        Las mejor valoradas
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((experience) => (
          <ExperienceCardConnected key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
