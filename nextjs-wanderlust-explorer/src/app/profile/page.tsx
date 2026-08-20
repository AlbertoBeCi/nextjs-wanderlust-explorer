import { experiences } from "@/data/experiences";
import { ProfilePageClient } from "@/components/profile/ProfilePageClient";

export default function ProfilePage() {
  return <ProfilePageClient experiences={experiences} />;
}
