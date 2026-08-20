import type { ComponentType } from "react";
import type { ExperienceCategory } from "@/types";
import { WineGlassIcon } from "@/components/icons/WineGlassIcon";
import { MountainIcon } from "@/components/icons/MountainIcon";
import { LandmarkIcon } from "@/components/icons/LandmarkIcon";
import { LeafIcon } from "@/components/icons/LeafIcon";
import { TicketIcon } from "@/components/icons/TicketIcon";
import { SuitcaseIcon } from "@/components/icons/SuitcaseIcon";

interface IconProps {
  className?: string;
}

export const CATEGORY_ICONS: Record<ExperienceCategory, ComponentType<IconProps>> = {
  Gastronomía: WineGlassIcon,
  "Aventura y Naturaleza": MountainIcon,
  Cultura: LandmarkIcon,
  Relax: LeafIcon,
  Entretenimiento: TicketIcon,
  Escapadas: SuitcaseIcon,
};
