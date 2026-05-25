export type AnimalTab = "apadrinados" | "adoptados" | "favoritos";

export interface Animal {
  id: string;
  name: string;
  species: string;
  age: string;
  location: string;
  imageUrl: string;
  isLiked?: boolean;
  badge?: string;
}

export interface AnimalCardProps {
  animal: Animal;
  tab: AnimalTab;
}