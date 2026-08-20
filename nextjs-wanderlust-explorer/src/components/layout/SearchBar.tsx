"use client";

import { useAppState } from "@/context/AppStateContext";
import { SearchIcon } from "@/components/icons/SearchIcon";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className = "" }: SearchBarProps) {
  const { search, setSearch } = useAppState();

  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-primary/15 bg-surface px-3 py-2 dark:border-white/15 dark:bg-primary-elevated ${className}`}
    >
      <SearchIcon className="h-4 w-4 text-neutral/50 dark:text-surface/50" />
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Introduce destino"
        className="w-full bg-transparent text-sm text-neutral placeholder:text-neutral/50 focus:outline-none dark:text-surface dark:placeholder:text-surface/50"
      />
    </div>
  );
}
