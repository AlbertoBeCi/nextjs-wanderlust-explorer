import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";

export function BackButton() {
  return (
    <Link
      href="/experiences"
      className="inline-flex items-center gap-2 text-sm font-bold text-neutral/70 hover:text-neutral dark:text-surface/70 dark:hover:text-surface"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Volver a experiencias
    </Link>
  );
}
