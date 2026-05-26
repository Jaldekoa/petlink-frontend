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
    <article
      className="
        group
        relative
        snap-start
        flex-shrink-0
        cursor-pointer

        w-[85%]
        sm:w-[70%]
        md:w-[48%]
        lg:w-[32%]
        xl:w-[24%]

        transition-all duration-300
      "
    >
      <div
        className="
          h-full
          overflow-hidden
          rounded-3xl
          border border-outline-variant/20
          bg-secondary-container

          shadow-sm
          transition-all duration-300

          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* Imagen */}
        <div className="relative overflow-hidden">
          <img
            src={animalImg}
            alt={animalName}
            className="
              h-56
              sm:h-64
              md:h-60
              lg:h-64
              w-full
              object-cover

              transition-transform duration-500
              group-hover:scale-105
            "
          />

          {/* Overlay gradient */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-transparent
              pointer-events-none
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
              bottom-4
              right-4

              flex
              items-center
              justify-center

              w-11
              h-11

              rounded-full
              backdrop-blur-md
              bg-black/30

              hover:bg-black/40
              active:scale-90

              transition-all duration-200
            "
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                color: isFavorite
                  ? "var(--color-warm-orange)"
                  : "white",
                fontVariationSettings: isFavorite
                  ? "'FILL' 1"
                  : "'FILL' 0",
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-4 p-4">
          
          {/* Nombre + ubicación */}
          <div className="space-y-1">
            <h3
              className="
                truncate
                text-lg
                sm:text-xl
                font-semibold
                text-on-surface
              "
            >
              {animalName}
            </h3>

            <div
              className="
                flex items-center gap-1.5
                text-sm
                text-on-surface-variant
              "
            >
              <span className="material-symbols-outlined text-[18px]">
                location_on
              </span>

              <span className="truncate">
                {animalLocation}
              </span>
            </div>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2">
            <div
              className="
                rounded-full
                bg-surface-container-high

                px-3 py-1.5

                text-xs
                sm:text-sm
                font-medium
                text-on-surface
              "
            >
              {animalAge}
            </div>

            <div
              className="
                rounded-full
                bg-surface-container-high

                px-3 py-1.5

                text-xs
                sm:text-sm
                font-medium
                text-on-surface
              "
            >
              {animalEnergy}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}