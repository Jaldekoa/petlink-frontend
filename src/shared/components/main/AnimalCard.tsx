// AnimalCard.tsx

interface AnimalCardProps {
  animalImg: string;
  animalName: string;
  animalLocation: string;
  animalAge: string;
  animalEnergy: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export default function AnimalCard({
  animalImg,
  animalName,
  animalLocation,
  animalAge,
  animalEnergy,
  isFavorite = false,
  onFavoriteToggle,
}: AnimalCardProps) {
  return (
    <div
      className="
        min-w-[82%]
        max-w-[82%]
        flex-shrink-0
        snap-start
        cursor-pointer
        group
      "
    >
      <div
        className="
          bg-secondary-container
          relative
          rounded-3xl
          border border-outline-variant/20
         
          p-3
          shadow-sm
          hover:shadow-md
          hover:-translate-y-0.5
          transition-all duration-300
        "
      >
        {/* Imagen */}
        <div className="relative overflow-hidden rounded-2xl bg-secondary-container">
          <img
            src={animalImg}
            alt={animalName}
            className="
              w-full
              h-52
              object-cover
              group-hover:scale-105
              transition-transform duration-500
            "
          />

          {/* Botón favorito */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle?.();
            }}
            aria-label={
              isFavorite
                ? "Quitar de favoritos"
                : "Añadir a favoritos"
            }
            className="
              absolute
              bottom-3
              right-3
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              backdrop-blur-md
              bg-black/25
              hover:bg-black/35
              active:scale-90
              transition-all duration-200
            "
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: isFavorite
                  ? "var(--color-warm-orange)"
                  : "white",
                fontVariationSettings: isFavorite
                  ? "'FILL' 1"
                  : "'FILL' 0",
                transition: "all 0.2s",
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Información */}
        <div className="pt-4 px-1">

          {/* Nombre */}
          <h3
            className="
              text-xl
              font-semibold
              text-on-surface
              leading-tight
              truncate
            "
          >
            {animalName}
          </h3>

          {/* Localización */}
          <div className="flex items-center gap-1 mt-1 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">
              location_on
            </span>

            <span className="truncate">
              {animalLocation}
            </span>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mt-4">

            <div
              className="
                px-3
                py-1.5
                rounded-full
                bg-surface-container-high
                text-on-surface
                text-sm
                font-medium
              "
            >
              {animalAge}
            </div>

            <div
              className="
                px-3
                py-1.5
                rounded-full
                bg-surface-container-high
                text-on-surface
                text-sm
                font-medium
              "
            >
              {animalEnergy}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}