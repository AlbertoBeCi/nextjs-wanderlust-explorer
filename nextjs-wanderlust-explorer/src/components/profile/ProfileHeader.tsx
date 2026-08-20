import Image from "next/image";
import { mockUser } from "@/data/user";

interface ProfileHeaderProps {
  favoritesCount: number;
}

const formattedJoinDate = new Date(mockUser.joinedAt).toLocaleDateString("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function ProfileHeader({ favoritesCount }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-primary-elevated sm:flex-row sm:text-left">
      <Image
        src={mockUser.avatar}
        alt={mockUser.name}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full border-4 border-secondary/40 object-cover"
      />
      <div className="flex-1">
        <h1 className="font-heading text-2xl font-bold text-neutral dark:text-surface">
          {mockUser.name}
        </h1>
        <p className="text-sm text-neutral/70 dark:text-surface/70">{mockUser.email}</p>
        <p className="mt-1 text-xs text-neutral/50 dark:text-surface/50">
          Miembro desde el {formattedJoinDate}
        </p>
      </div>
      <div className="rounded-xl bg-secondary/10 px-5 py-3 text-center">
        <p className="font-heading text-2xl font-bold text-secondary">{favoritesCount}</p>
        <p className="text-xs font-bold text-neutral/70 dark:text-surface/70">favoritos guardados</p>
      </div>
    </div>
  );
}
