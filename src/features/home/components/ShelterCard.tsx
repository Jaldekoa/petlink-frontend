import type { Shelter } from "@/shared/types/selther.type";

interface ShelterCardProps {
  shelter: Shelter;
  onOpen?: () => void;
}

export default function ShelterCard({ shelter, onOpen }: ShelterCardProps) {
  const coverImage = shelter.coverImageUrl ?? shelter.logoUrl ?? "";

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
      <div className="h-full overflow-hidden rounded-3xl border border-outline-variant/20 bg-surface-container-low shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Cover image */}
        <div className="relative overflow-hidden h-44">
          {coverImage ? (
            <img
              src={coverImage}
              alt={shelter.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-primary-container flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary-container opacity-30"
                style={{ fontSize: "64px" }}
              >
                store
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          {/* Logo overlay when cover is different */}
          {shelter.logoUrl && coverImage !== shelter.logoUrl && (
            <div className="absolute bottom-3 left-3 w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow">
              <img
                src={shelter.logoUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {shelter.verified && (
            <span className="absolute top-3 right-3 bg-secondary text-on-secondary rounded-full px-2.5 py-0.5 font-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">
                verified
              </span>
              Verificado
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-4">
          <div className="space-y-1">
            <h3 className="truncate text-lg font-semibold text-on-surface">
              {shelter.name}
            </h3>
            {shelter.city && (
              <div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                <span className="truncate">
                  {shelter.city}
                  {shelter.country ? `, ${shelter.country}` : ""}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen?.();
            }}
            className="w-full py-2.5 rounded-full font-label-md text-white bg-warm-orange active:scale-95 transition-transform"
          >
            Ver refugio
          </button>
        </div>
      </div>
    </article>
  );
}
