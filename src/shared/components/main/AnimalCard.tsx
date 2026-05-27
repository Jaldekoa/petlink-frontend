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
  favoriteDisabled?: boolean;
  onOpen?: () => void;
}

export default function AnimalCard({
  img,
  name,
  location,
  featureOne,
  featureTwo,
  isFavorite = false,
  badge,
  badgeColor = "blue",
  onFavoriteToggle,
  favoriteDisabled = false,
  onOpen,
}: AnimalCardProps) {
  const badgeColorClass = {
    orange: "bg-warm-orange text-white",
    green: "bg-green-600 text-white",
    blue: "bg-primary text-on-primary",
  }[badgeColor];

  return (
    <article
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (!onOpen) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="group relative snap-start flex-shrink-0 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
    >
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

          {badge && (
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${badgeColorClass}`}
            >
              {badge}
            </span>
          )}

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (favoriteDisabled) return;
              onFavoriteToggle?.();
            }}
            disabled={favoriteDisabled}
            aria-disabled={favoriteDisabled}
            aria-label={
              isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"
            }
            className={`
              absolute bottom-4 right-4
              flex items-center justify-center w-11 h-11
              rounded-full backdrop-blur-md bg-black/30
              hover:bg-black/40 active:scale-90
              transition-all duration-200
              ${favoriteDisabled ? "opacity-60 cursor-wait" : ""}
            `}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                color: isFavorite ? "var(--color-warm-orange)" : "white",
                fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0",
              }}
            >
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
      </div>
    </article>
  );
}
