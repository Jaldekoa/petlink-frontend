import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import type { AnimalCardProps } from "@/shared/types/animal.types";


export default function AnimalCard({ animal, tab }: AnimalCardProps) {
  const [liked, setLiked] = useState(animal.isLiked ?? false);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-100 aspect-square active:scale-[0.97] transition-transform duration-150">
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {animal.badge && (
        <div className="absolute top-2 left-2">
          <span
            className="px-2 py-0.5 rounded-full text-white font-semibold"
            style={{
              fontSize: "9px",
              background: tab === "adoptados" ? "#013b08" : "#f96302",
            }}
          >
            {animal.badge}
          </span>
        </div>
      )}

      {tab === "favoritos" && (
        <button
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center active:scale-90 transition-transform"
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          aria-label={liked ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <Heart
            size={14}
            strokeWidth={2}
            className={liked ? "text-[#f96302]" : "text-stone-400"}
            fill={liked ? "#f96302" : "none"}
          />
        </button>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-2.5">
        <p className="text-white font-bold text-[13px] truncate">{animal.name}</p>
        <p className="text-white/80 text-[10px] mt-0.5">{animal.species} · {animal.age}</p>
        <div className="flex items-center gap-0.5 mt-0.5">
          <MapPin size={9} className="text-[#f96302]" />
          <span className="text-white/70 text-[9px]">{animal.location}</span>
        </div>
      </div>
    </div>
  );
}
