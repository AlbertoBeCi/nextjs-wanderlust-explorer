"use client";

import { SunIcon } from "@/components/icons/SunIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";

export function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar entre modo claro y oscuro"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-primary/5 dark:border-white/15 dark:text-surface dark:hover:bg-white/10"
    >
      <SunIcon className="hidden h-4 w-4 dark:block" />
      <MoonIcon className="block h-4 w-4 dark:hidden" />
    </button>
  );
}
