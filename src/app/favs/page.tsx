import { experiences } from "@/data/experiences";
import { FavsPageClient } from "@/components/favs/FavsPageClient";

export default function FavsPage() {
  return <FavsPageClient experiences={experiences} />;
}
