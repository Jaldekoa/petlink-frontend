import { useState } from "react";
import AnimalList, { type AnimalGridItem } from "../../shared/components/main/AnimalList";

type AnimalTab = "apadrinados" | "adoptados" | "favoritos";

interface TabConfig {
  key: AnimalTab;
  label: string;
  emoji: string;
}

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

const TABS: TabConfig[] = [
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

  const handleFavoriteToggle = (id: string) => {
    setAnimals((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((animal) =>
        animal.id === id ? { ...animal, isFavorite: !animal.isFavorite } : animal
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container">
      
      {/* ── HEADER & NAVIGATION ────────────────────────── */}
      <header className="bg-surface-container-lowest px-6 pt-8 pb-5 shadow-xs border-b border-outline-variant/10 md:px-12">
        <div className="max-w-6xl mx-auto space-y-1">
          <h1 className="text-primary font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg">
            Mis Animales
          </h1>
          <p className="text-on-surface-variant font-body-sm text-body-sm md:text-body-md">
            Tu historia con cada peludo
          </p>
        </div>

        {/* ── TABS CONTAINER ────────────────────────────── */}
        <nav className="max-w-6xl mx-auto mt-6">
          <div className="grid grid-cols-3 gap-3 md:flex md:justify-start md:gap-4">
            {TABS.map(({ key, label, emoji }) => {
              const isActive = activeTab === key;
              const count = animals[key].length;
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`
                    group relative flex flex-col items-center justify-between
                    p-3 rounded-2xl border transition-all duration-300 ease-out
                    cursor-pointer active:scale-98 md:w-36 md:h-28
                    ${isActive
                      ? "bg-primary border-primary shadow-md shadow-primary/10"
                      : "bg-surface-container-low border-outline-variant/20 hover:bg-surface-container hover:border-outline/40"
                    }
                  `}
                >
                  {/* Emoji Icon */}
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {emoji}
                  </span>

                  {/* Count & Label Wrapper */}
                  <div className="flex flex-col items-center mt-2 w-full">
                    <span className={`font-headline-md text-body-md md:text-headline-md leading-none ${isActive ? "text-on-primary" : "text-primary"}`}>
                      {count}
                    </span>
                    <span className={`font-label-sm text-[11px] md:text-label-sm text-center tracking-wide mt-1 uppercase ${
                      isActive ? "text-on-primary-fixed-dim" : "text-on-surface-variant"
                    }`}>
                      {label}
                    </span>
                  </div>

                  {/* Active Indicator (Indicator Line) */}
                  {isActive && (
                    <span className="absolute -bottom-1 w-8 h-1 bg-warm-orange rounded-full shadow-xs animate-fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* ── GRID CONTENT ───────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 py-8 md:px-12">
        <AnimalList
          animals={currentAnimals}
          onFavoriteToggle={handleFavoriteToggle}
          emptyEmoji={activeTabMeta.emoji}
          emptyTitle={title}
          emptySubtitle={subtitle}
        />
      </main>
      
    </div>
  );
}