import Link from "next/link";
import { CATEGORY_ICONS } from "@/lib/category-icons";

export function CategoriesSection() {
  const categories = Object.entries(CATEGORY_ICONS);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <h2 className="font-heading text-2xl font-bold text-neutral dark:text-surface">
        Explora por categoría
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(([category, Icon]) => (
          <Link
            key={category}
            href={`/experiences?category=${encodeURIComponent(category)}`}
            className="flex flex-col items-center gap-2 rounded-2xl border border-primary/10 bg-white p-5 text-center shadow-sm transition-transform hover:scale-[1.03] dark:border-white/10 dark:bg-primary-elevated"
          >
            <Icon className="h-8 w-8 text-secondary" />
            <span className="text-sm font-bold text-neutral dark:text-surface">{category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
