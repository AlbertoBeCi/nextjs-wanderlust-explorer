import { NavBrand } from "@/components/layout/NavBrand";
import { NavLinks } from "@/components/layout/NavLinks";
import { SearchBar } from "@/components/layout/SearchBar";
import { UserMenu } from "@/components/layout/UserMenu";
import { NavMobileMenu } from "@/components/layout/NavMobileMenu";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-primary/10 bg-surface/95 backdrop-blur dark:border-white/10 dark:bg-primary/95">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <NavBrand />

        <NavLinks className="hidden items-center gap-6 md:flex" />

        <div className="flex items-center gap-3">
          <SearchBar className="hidden w-56 md:flex" />
          <UserMenu />
          <NavMobileMenu />
        </div>
      </div>
    </header>
  );
}
