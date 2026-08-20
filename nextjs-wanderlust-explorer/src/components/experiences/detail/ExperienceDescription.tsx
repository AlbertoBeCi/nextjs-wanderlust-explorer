import { CheckIcon } from "@/components/icons/CheckIcon";

interface ExperienceDescriptionProps {
  description: string;
  included: string[];
}

export function ExperienceDescription({ description, included }: ExperienceDescriptionProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-base leading-relaxed text-neutral/80 dark:text-surface/80">
        {description}
      </p>

      <div>
        <h2 className="font-heading text-xl font-bold text-neutral dark:text-surface">
          Qué incluye
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-neutral/80 dark:text-surface/80"
            >
              <CheckIcon className="h-4 w-4 shrink-0 text-secondary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
