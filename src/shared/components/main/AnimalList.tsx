import AnimalCard  from "@/shared/components/main/AnimalCard";

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
  
  // ── ESTADO VACÍO (EMPTY STATE) ───────────────────
  if (animals.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center max-w-xl mx-auto">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <span className="text-4xl">{emptyEmoji}</span>
        </div>

        <h3 className="font-headline-md text-headline-md text-primary">
          {emptyTitle}
        </h3>

        <p className="mt-2 text-on-surface-variant font-body-md text-body-md leading-relaxed">
          {emptySubtitle}
        </p>
      </section>
    );
  }

  // ── REJILLA DE TARJETAS ACTIVA ────────────────────
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-28 max-w-7xl mx-auto">
      
      {/* Contador de resultados */}
      <div className="mb-6 flex items-center justify-start">
        <p className="uppercase text-label-sm font-label-sm tracking-widest text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">
          {animals.length} {animals.length === 1 ? "animal" : "animales"}
        </p>
      </div>

      {/* GRID RESPONSIVO Y PERFECTAMENTE CENTRADO */}
      <div className="grid grid-cols-1 justify-items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {animals.map((animal) => (
          /* El contenedor fuerza a la Card a comportarse bien en su celda */
          <div 
            key={animal.id} 
            className="w-full flex justify-center [&>article]:w-full"
          >
            <AnimalCard
              animalImg={animal.animalImg}
              animalName={animal.animalName}
              animalLocation={animal.animalLocation}
              animalAge={animal.animalAge}
              animalEnergy={animal.animalEnergy}
              isFavorite={animal.isFavorite}
              onFavoriteToggle={() => onFavoriteToggle?.(animal.id)}
            />
          </div>
        ))}
      </div>

    </section>
  );
}