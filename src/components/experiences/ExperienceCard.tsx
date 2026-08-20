import Link from "next/link";
import Image from "next/image";
import type { Experience } from "@/types";
import { CATEGORY_ICONS } from "@/lib/category-icons";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { StarIcon } from "@/components/icons/StarIcon";
import { FavoriteButton } from "@/components/experiences/FavoriteButton";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  const { id, title, category, location, price, rating, reviewsCount, image } =
    experience;
  const CategoryIcon = CATEGORY_ICONS[category];

  return (
    <article className="flex aspect-[9/16] w-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm dark:border-white/10 dark:bg-primary-elevated md:aspect-auto">
      <div className="relative h-1/2 w-full md:h-56">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-secondary/50 bg-white/90 px-3 py-1 text-xs font-bold text-neutral">
          <CategoryIcon className="h-3.5 w-3.5 text-secondary" />
          {category}
        </span>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(id)}
        />
      </div>

      <div className="flex h-1/2 flex-col justify-between p-4 md:h-auto md:gap-3">
        <div className="flex items-center gap-1 text-xs font-semibold text-neutral/70 dark:text-surface/70">
          <MapPinIcon className="h-4 w-4 text-secondary" />
          {location}
        </div>

        <Link href={`/experiences/${id}`} className="block">
          <h3 className="font-heading text-lg font-bold leading-snug text-neutral dark:text-surface">
            {title}
          </h3>
        </Link>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-neutral/60 dark:text-surface/60">
              from
            </p>
            <p className="font-heading text-lg font-bold text-secondary">
              {price}€
            </p>
          </div>

          <div className="flex items-center gap-1 text-secondary">
            <StarIcon className="h-4 w-4" />
            <span className="text-sm font-bold text-neutral dark:text-surface">
              {rating.toFixed(1)}
            </span>
            <span className="text-xs text-neutral/60 dark:text-surface/60">
              ({reviewsCount})
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
