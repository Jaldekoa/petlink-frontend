// AnimalGrid.tsx
import AnimalCard from "@/shared/components/main/AnimalCard";

export interface AnimalGridItem {
  id: string;
  animalImg: string;
  animalName: string;
  animalLocation: string;
  animalAge: string;
  animalEnergy: string;
  isFavorite?: boolean;
  badge?: string;
  badgeColor?: "orange" | "green";
}

interface AnimalGridProps {
  animals: AnimalGridItem[];
  onFavoriteToggle?: (id: string) => void;
  emptyEmoji?: string;
  emptyTitle?: string;
  emptySubtitle?: string;
}

export default function AnimalGrid({
  animals,
  onFavoriteToggle,
  emptyEmoji = "🐾",
  emptyTitle = "Aún no tienes animales aquí",
  emptySubtitle = "¡Explora y encuentra tu compañero perfecto!",
}: AnimalGridProps) {
  if (animals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ background: "color-mix(in srgb, var(--color-primary) 8%, transparent)" }}
        >
          <span style={{ fontSize: "30px" }}>{emptyEmoji}</span>
        </div>
        <p
          className="text-primary font-semibold"
          style={{ fontFamily: "var(--font-jakarta)", fontSize: "15px" }}
        >
          {emptyTitle}
        </p>
        <p
          className="text-on-surface-variant mt-1.5"
          style={{ fontFamily: "var(--font-vietnam)", fontSize: "13px", lineHeight: "1.5" }}
        >
          {emptySubtitle}
        </p>
      </div>
    );
  }

  return (
    <div className="px-margin-mobile pb-28">
      {/* Contador */}
      <p
        className="text-on-surface-variant mb-3 uppercase"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.8px",
        }}
      >
        {animals.length} {animals.length === 1 ? "animal" : "animales"}
      </p>

      {/* Grid 2 columnas */}
      <div className="grid grid-cols-2 gap-gutter-mobile">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animalImg={animal.animalImg}
            animalName={animal.animalName}
            animalLocation={animal.animalLocation}
            animalAge={animal.animalAge}
            animalEnergy={animal.animalEnergy}
            isFavorite={animal.isFavorite}
            onFavoriteToggle={() => onFavoriteToggle?.(animal.id)}
          />
        ))}
      </div>
    </div>
  );
}