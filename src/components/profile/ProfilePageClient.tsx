"use client";

import type { Experience } from "@/types";
import { useAppState } from "@/context/AppStateContext";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";

interface ProfilePageClientProps {
  experiences: Experience[];
}

export function ProfilePageClient({ experiences }: ProfilePageClientProps) {
  const { favorites } = useAppState();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <ProfileHeader favoritesCount={favorites.length} />
      <ProfileTabs experiences={experiences} />
    </div>
  );
}
