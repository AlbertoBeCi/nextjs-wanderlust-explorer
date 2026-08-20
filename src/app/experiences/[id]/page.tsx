import { notFound } from "next/navigation";
import { getExperienceById } from "@/lib/experiences";
import { BackButton } from "@/components/experiences/detail/BackButton";
import { ExperienceGallery } from "@/components/experiences/detail/ExperienceGallery";
import { ExperienceHeader } from "@/components/experiences/detail/ExperienceHeader";
import { ExperienceDescription } from "@/components/experiences/detail/ExperienceDescription";
import { ExperienceFavoriteAction } from "@/components/experiences/detail/ExperienceFavoriteAction";
import { BookingBox } from "@/components/experiences/detail/BookingBox";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10">
      <BackButton />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <ExperienceGallery image={experience.image} title={experience.title} />
          <div className="flex items-start justify-between gap-4">
            <ExperienceHeader {...experience} />
            <ExperienceFavoriteAction experienceId={experience.id} />
          </div>
          <ExperienceDescription description={experience.description} included={experience.included} />
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <BookingBox title={experience.title} price={experience.price} />
        </div>
      </div>
    </div>
  );
}
