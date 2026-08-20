export type ExperienceCategory =
  | "Gastronomía"
  | "Aventura y Naturaleza"
  | "Cultura"
  | "Relax"
  | "Entretenimiento"
  | "Escapadas";

export type ExperienceDestination =
  | "Montaña"
  | "Playa"
  | "Ciudad"
  | "Rural"
  | "Nieve"
  | "Costa"
  | "Islas"
  | "Interior";

export type GroupType = "Pareja" | "Grupo de amigos" | "Familia" | "Solo";

export interface Experience {
  id: string;
  title: string;
  category: ExperienceCategory;
  destination: ExperienceDestination;
  location: string;
  groupType: GroupType;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  included: string[];
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ExperienceFilters {
  search: string;
  categories: ExperienceCategory[];
  destinations: ExperienceDestination[];
  groupTypes: GroupType[];
  priceRange: PriceRange;
  locationQuery: string;
}
