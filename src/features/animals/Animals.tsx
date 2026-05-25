// Animals.tsx
import { useState } from "react";
import AnimalGrid, { type AnimalGridItem } from "../../shared/components/main/AnimalGrid";

type AnimalTab = "apadrinados" | "adoptados" | "favoritos";

const MOCK_ANIMALS: Record<AnimalTab, AnimalGridItem[]> = {
  apadrinados: [
    { id: "1", animalName: "Mochi", animalAge: "2 años", animalLocation: "Madrid", animalEnergy: "Amigable", animalImg: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", badge: "Apadrinado", badgeColor: "orange" },
    { id: "2", animalName: "Luna", animalAge: "1 año", animalLocation: "Barcelona", animalEnergy: "Tranquila", animalImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80", badge: "Apadrinado", badgeColor: "orange" },
    { id: "3", animalName: "Kira", animalAge: "3 años", animalLocation: "Valencia", animalEnergy: "Juguetona", animalImg: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80", badge: "Apadrinado", badgeColor: "orange" },
    { id: "4", animalName: "Max", animalAge: "5 años", animalLocation: "Sevilla", animalEnergy: "Activo", animalImg: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80", badge: "Apadrinado", badgeColor: "orange" },
  ],
  adoptados: [
    { id: "5", animalName: "Nala", animalAge: "4 años", animalLocation: "Bilbao", animalEnergy: "Cariñosa", animalImg: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&q=80", badge: "Adoptado", badgeColor: "green" },
    { id: "6", animalName: "Bruno", animalAge: "6 años", animalLocation: "Zaragoza", animalEnergy: "Tranquilo", animalImg: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=80", badge: "Adoptado", badgeColor: "green" },
  ],
  favoritos: [
    { id: "7", animalName: "Cleo", animalAge: "2 años", animalLocation: "Málaga", animalEnergy: "Juguetona", animalImg: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&q=80", isFavorite: true },
    { id: "8", animalName: "Rex", animalAge: "3 años", animalLocation: "Murcia", animalEnergy: "Activo", animalImg: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&q=80", isFavorite: true },
    { id: "9", animalName: "Simba", animalAge: "1 año", animalLocation: "Granada", animalEnergy: "Cariñoso", animalImg: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=400&q=80", isFavorite: true },
    { id: "10", animalName: "Coco", animalAge: "7 años", animalLocation: "Córdoba", animalEnergy: "Tranquila", animalImg: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400&q=80", isFavorite: true },
    { id: "11", animalName: "Oli", animalAge: "5 años", animalLocation: "Alicante", animalEnergy: "Independiente", animalImg: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&q=80", isFavorite: true },
  ],
};

const TABS: { key: AnimalTab; label: string; emoji: string }[] = [
  { key: "apadrinados", label: "Apadrinados", emoji: "🐾" },
  { key: "adoptados",   label: "Adoptados",   emoji: "🏠" },
  { key: "favoritos",   label: "Favoritos",   emoji: "❤️" },
];

const EMPTY_STATES: Record<AnimalTab, { title: string; subtitle: string }> = {
  apadrinados: {
    title: "Aún no tienes animales apadrinados",
    subtitle: "Apadrinar a un animal cambia su vida entera.",
  },
  adoptados: {
    title: "Aún no tienes animales adoptados",
    subtitle: "Dale un hogar a alguien que lo necesita.",
  },
  favoritos: {
    title: "Aún no tienes favoritos",
    subtitle: "Guarda los peludos que más te gusten.",
  },
};

export default function MyAnimals() {
  const [activeTab, setActiveTab] = useState<AnimalTab>("apadrinados");
  const [animals, setAnimals] = useState(MOCK_ANIMALS);

  const currentAnimals = animals[activeTab];
  const { title, subtitle } = EMPTY_STATES[activeTab];
  const activeTabMeta = TABS.find((t) => t.key === activeTab)!;

  function handleFavoriteToggle(id: string) {
    setAnimals((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((a) =>
        a.id === id ? { ...a, isFavorite: !a.isFavorite } : a
      ),
    }));
  }

  return (
    <div className="min-h-screen bg-surface">

      {/* ── Header ─────────────────────────────────────── */}
      <div className="bg-surface-container-lowest px-margin-mobile pt-6 pb-0 border-b border-outline-variant/20">
        <h1
          className="text-primary font-headline-lg-mobile text-headline-lg-mobile"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Mis Animales
        </h1>
        <p
          className="text-on-surface-variant mt-1"
          style={{ fontFamily: "var(--font-vietnam)", fontSize: "14px" }}
        >
          Tu historia con cada peludo
        </p>

        {/* ── Tabs ───────────────────────────────────────── */}
        <div className="flex gap-2 mt-5">
          {TABS.map(({ key, label, emoji }) => {
            const isActive = activeTab === key;
            const count = animals[key].length;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  flex-1 flex flex-col items-center
                  py-3 px-1 rounded-2xl
                  border transition-all duration-200 active:scale-95
                  ${isActive
                    ? "bg-primary border-primary"
                    : "bg-surface-container-low border-outline-variant/30 hover:border-primary/40"
                  }
                `}
              >
                <span style={{ fontSize: "20px", lineHeight: 1 }}>{emoji}</span>
                <span
                  className={`font-bold mt-1 ${isActive ? "text-on-primary" : "text-primary"}`}
                  style={{ fontFamily: "var(--font-jakarta)", fontSize: "17px" }}
                >
                  {count}
                </span>
                <span
                  className={`font-medium text-center leading-tight ${
                    isActive ? "text-on-primary/75" : "text-on-surface-variant"
                  }`}
                  style={{ fontFamily: "var(--font-jakarta)", fontSize: "10px" }}
                >
                  {label}
                </span>
                {isActive && (
                  <span
                    className="mt-1.5 w-5 h-0.5 rounded-full"
                    style={{ background: "var(--color-warm-orange)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Barra naranja activa de la tab como underline de la sección */}
        <div className="mt-4 h-px bg-outline-variant/20" />
      </div>

      {/* ── Grid ───────────────────────────────────────── */}
      <div className="pt-4">
        <AnimalGrid
          animals={currentAnimals}
          onFavoriteToggle={handleFavoriteToggle}
          emptyEmoji={activeTabMeta.emoji}
          emptyTitle={title}
          emptySubtitle={subtitle}
        />
      </div>

    </div>
  );
}