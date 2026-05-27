interface AnimalCardProps {
  img: string;
  name: string;
  location: string;
  featureOne?: string;
  featureTwo?: string;
  isFavorite?: boolean;
  badge?: string;
  badgeColor?: "orange" | "green" | "blue";
  onFavoriteToggle?: () => void;
}

/* const BADGE_STYLES: Record<string, string> = {
  orange: "bg-warm-orange/15 text-warm-orange border-warm-orange/30",
  green:  "bg-green-500/15 text-green-700 border-green-500/30",
  blue:   "bg-blue-500/15 text-blue-700 border-blue-500/30",
}; */

export default function AnimalCard({
  img,
  name,
  location,
  featureOne,
  featureTwo,
  isFavorite = false,
  /* badge,
  badgeColor = "orange", */
  onFavoriteToggle,
}: AnimalCardProps) {
  return (
    <article className="group relative snap-start flex-shrink-0 cursor-pointer transition-all duration-300">
      <div
        className="
          h-full overflow-hidden rounded-3xl
          border border-outline-variant/20 bg-secondary-container
          shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
        "
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={name}
            className="h-56 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          {/* Badge (Apadrinado / Adoptado) */}
          {/* {badge && (
            <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full border text-[11px] font-semibold tracking-wide ${BADGE_STYLES[badgeColor]}`}>
              {badge}
            </div>
          )} */}

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle?.();
            }}
            aria-label={
              isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"
            }
            className="
              absolute bottom-4 right-4
              flex items-center justify-center w-11 h-11
              rounded-full backdrop-blur-md bg-black/30
              hover:bg-black/40 active:scale-90
              transition-all duration-200
            ">
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                color: isFavorite ? "var(--color-warm-orange)" : "white",
                fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0",
              }}>
              favorite
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-4">
          <div className="space-y-1">
            <h3 className="truncate text-lg sm:text-xl font-semibold text-on-surface">
              {name}
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">
                location_on
              </span>
              <span className="truncate">{location}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-surface-container-high px-3 py-1.5 text-xs sm:text-sm font-medium text-on-surface">
              {featureOne}
            </span>
            <span className="rounded-full bg-surface-container-high px-3 py-1.5 text-xs sm:text-sm font-medium text-on-surface">
              {featureTwo}
            </span>
          </div>
        </div>

        <button className="absolute bottom-6 right-6 bg-tertiary-container text-on-tertiary-container w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-transform">
          <span className="material-symbols-outlined">favorite</span>
          {isFavorite}
        </button>
      </div>
    </article>
  );
}
