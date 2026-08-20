import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function NavBrand() {
  return (
    <div className="flex items-center gap-3">
      <Link href="/" className="font-heading text-xl font-bold text-primary dark:text-surface">
        Wanderlust
      </Link>
      <ThemeToggle />
    </div>
  );
}
