"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favs", label: "Favs" },
];

interface NavLinksProps {
  className?: string;
  onNavigate?: () => void;
}

export function NavLinks({ className = "", onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={`text-sm font-bold transition-colors ${
              isActive
                ? "text-secondary"
                : "text-neutral/80 hover:text-neutral dark:text-surface/80 dark:hover:text-surface"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
