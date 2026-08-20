import type { Experience } from "@/types";
import { CATEGORY_ICONS } from "@/lib/category-icons";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { StarIcon } from "@/components/icons/StarIcon";

type ExperienceHeaderProps = Pick<
  Experience,
  "title" | "category" | "destination" | "location" | "rating" | "reviewsCount"
>;

export function ExperienceHeader({
  title,
  category,
  destination,
  location,
  rating,
  reviewsCount,
}: ExperienceHeaderProps) {
  const CategoryIcon = CATEGORY_ICONS[category];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-neutral/70 dark:text-surface/70">
        <span className="flex items-center gap-1 rounded-full border border-secondary/50 px-3 py-1">
          <CategoryIcon className="h-3.5 w-3.5 text-secondary" />
          {category}
        </span>
        <span className="flex items-center gap-1 rounded-full border border-primary/15 px-3 py-1 dark:border-white/15">
          <MapPinIcon className="h-3.5 w-3.5 text-secondary" />
          {destination} · {location}
        </span>
      </div>

      <h1 className="font-heading text-3xl font-bold text-neutral dark:text-surface">{title}</h1>

      <div className="flex items-center gap-1 text-secondary">
        <StarIcon className="h-5 w-5" />
        <span className="text-base font-bold text-neutral dark:text-surface">
          {rating.toFixed(1)}
        </span>
        <span className="text-sm text-neutral/60 dark:text-surface/60">
          ({reviewsCount} opiniones)
        </span>
      </div>
    </div>
  );
}
