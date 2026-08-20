import type { ExperienceCategory, ExperienceDestination, GroupType } from "@/types";

export const CATEGORIES: readonly ExperienceCategory[] = [
  "Gastronomía",
  "Aventura y Naturaleza",
  "Cultura",
  "Relax",
  "Entretenimiento",
  "Escapadas",
];

export const DESTINATIONS: readonly ExperienceDestination[] = [
  "Montaña",
  "Playa",
  "Ciudad",
  "Rural",
  "Nieve",
  "Costa",
  "Islas",
  "Interior",
];

export const GROUP_TYPES: readonly GroupType[] = ["Pareja", "Grupo de amigos", "Familia", "Solo"];
