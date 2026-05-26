import { useState } from "react";
import { MapPin, Heart } from "lucide-react";
import type { Animal, AnimalTab } from "@/shared/types/animal.types.ts";

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_ANIMALS: Record<AnimalTab, Animal[]> = {
  apadrinados: [
    { id: "1", name: "Mochi", species: "Perro", age: "2 años", location: "Madrid", imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", badge: "Apadrinado" },
    { id: "2", name: "Luna", species: "Gato", age: "1 año", location: "Barcelona", imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80", badge: "Apadrinado" },
    { id: "3", name: "Kira", species: "Perra", age: "3 años", location: "Valencia", imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80", badge: "Apadrinado" },
    { id: "4", name: "Max", species: "Perro", age: "5 años", location: "Sevilla", imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80", badge: "Apadrinado" },
  ],
  adoptados: [
    { id: "5", name: "Nala", species: "Gata", age: "4 años", location: "Bilbao", imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&q=80", badge: "Adoptado" },
    { id: "6", name: "Bruno", species: "Perro", age: "6 años", location: "Zaragoza", imageUrl: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=80", badge: "Adoptado" },
  ],
  favoritos: [
    { id: "7", name: "Cleo", species: "Gata", age: "2 años", location: "Málaga", imageUrl: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&q=80", isLiked: true },
    { id: "8", name: "Rex", species: "Perro", age: "3 años", location: "Murcia", imageUrl: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&q=80", isLiked: true },
    { id: "9", name: "Simba", species: "Gato", age: "1 año", location: "Granada", imageUrl: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&q=80", isLiked: true },
    { id: "10", name: "Coco", species: "Perra", age: "7 años", location: "Córdoba", imageUrl: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400&q=80", isLiked: true },
    { id: "11", name: "Oli", species: "Gato", age: "5 años", location: "Alicante", imageUrl: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&q=80", isLiked: true },
  ],
};

const TABS: { key: AnimalTab; label: string; emoji: string }[] = [
  { key: "apadrinados", label: "Apadrinados", emoji: "🐾" },
  { key: "adoptados", label: "Adoptados", emoji: "🏠" },
  { key: "favoritos", label: "Favoritos", emoji: "❤️" },
];

// ─── AnimalCard ───────────────────────────────────────────────────────────────

function AnimalCard({ animal, tab }: { animal: Animal; tab: AnimalTab }) {
  const [liked, setLiked] = useState(animal.isLiked ?? false);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-100 aspect-square group active:scale-[0.97] transition-transform duration-150">
      {/* Image */}
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Badge (apadrinado / adoptado) */}
      {animal.badge && (
        <div className="absolute top-2 left-2">
          <span
            className="px-2 py-0.5 rounded-full text-white font-semibold"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "9px",
              background: tab === "adoptados" ? "#013b08" : "#f96302",
            }}
          >
            {animal.badge}
          </span>
        </div>
      )}

      {/* Heart button for favoritos */}
      {tab === "favoritos" && (
        <button
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform"
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

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5">
        <p
          className="text-white font-bold leading-tight truncate"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px" }}
        >
          {animal.name}
        </p>
        <div className="flex items-center gap-1 mt-0.5">
          <span
            className="text-white/80 truncate"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "10px" }}
          >
            {animal.species} · {animal.age}
          </span>
        </div>
        <div className="flex items-center gap-0.5 mt-0.5">
          <MapPin size={9} className="text-[#f96302] flex-shrink-0" />
          <span
            className="text-white/70 truncate"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "9px" }}
          >
            {animal.location}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── MyAnimals page ───────────────────────────────────────────────────────────

export default function MyAnimals() {
  const [activeTab, setActiveTab] = useState<AnimalTab>("apadrinados");
  const animals = MOCK_ANIMALS[activeTab];

  return (
    <div
      className="min-h-screen bg-stone-50"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Page title */}
      <div className="bg-white px-5 pt-5 pb-4">
        <h1
          className="text-[#013b08] font-extrabold tracking-tight"
          style={{ fontSize: "22px" }}
        >
          Mis Animales
        </h1>
        <p className="text-stone-400 mt-0.5" style={{ fontSize: "13px" }}>
          Tu historia con cada peludo 🐾
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mt-4">
          {TABS.map(({ key, label, emoji }) => {
            const isActive = activeTab === key;
            const count = MOCK_ANIMALS[key].length;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 flex flex-col items-center py-2.5 px-1 rounded-2xl border transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-[#013b08] border-[#013b08] shadow-md"
                    : "bg-white border-stone-200 hover:border-[#013b08]/30"
                }`}
              >
                <span style={{ fontSize: "18px" }}>{emoji}</span>
                <span
                  className={`font-bold mt-0.5 ${isActive ? "text-white" : "text-[#013b08]"}`}
                  style={{ fontSize: "15px" }}
                >
                  {count}
                </span>
                <span
                  className={`font-medium text-center leading-tight mt-0.5 ${
                    isActive ? "text-white/80" : "text-stone-400"
                  }`}
                  style={{ fontSize: "9.5px" }}
                >
                  {label}
                </span>
                {isActive && (
                  <span className="mt-1.5 w-4 h-0.5 rounded-full bg-[#f96302]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 pt-4 pb-28">
        {animals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-[#013b08]/8 flex items-center justify-center mb-3">
              <span style={{ fontSize: "28px" }}>
                {TABS.find((t) => t.key === activeTab)?.emoji}
              </span>
            </div>
            <p className="text-[#013b08] font-semibold" style={{ fontSize: "15px" }}>
              Aún no tienes{" "}
              {activeTab === "apadrinados"
                ? "animales apadrinados"
                : activeTab === "adoptados"
                ? "animales adoptados"
                : "favoritos"}
            </p>
            <p className="text-stone-400 mt-1" style={{ fontSize: "13px" }}>
              ¡Explora y encuentra tu compañero perfecto!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} tab={activeTab} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}