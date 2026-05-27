import { useEffect, useState } from "react";
import AnimalList, {
  type AnimalGridItem,
} from "@/shared/components/main/AnimalList";
import { getAnimalById } from "@/services/animal.service";
import { getMyAdoptions } from "@/services/adoption.service";
import { getMyLikes, toggleLike } from "@/services/like.service";
import { getMySponsorships } from "@/services/sponsorship.service";
import type { Adoption } from "@/shared/types/adoption.types";
import type { Animal, AnimalImage } from "@/shared/types/animal.types";
import type { Like } from "@/shared/types/like.types";
import type { Sponsorship } from "@/shared/types/sponsorship.types";

type AnimalTab = "apadrinados" | "adoptados" | "favoritos";

interface TabConfig {
  key: AnimalTab;
  label: string;
  icon: string;
}

const TABS: TabConfig[] = [
  { key: "apadrinados", label: "Apadrinados", icon: "volunteer_activism" },
  { key: "adoptados", label: "Adoptados", icon: "home" },
  { key: "favoritos", label: "Favoritos", icon: "favorite" },
];

const EMPTY_STATES: Record< AnimalTab,{ icon: string; title: string; subtitle: string }> = {
  apadrinados: {
    icon: "volunteer_activism",
    title: "Aún no tienes animales apadrinados",
    subtitle: "Apadrinar a un animal cambia su vida entera.",
  },
  adoptados: {
    icon: "home",
    title: "Aún no tienes animales adoptados",
    subtitle: "Dale un hogar a alguien que lo necesita.",
  },
  favoritos: {
    icon: "favorite",
    title: "Aún no tienes favoritos",
    subtitle: "Guarda los peludos que más te gusten.",
  },
};

const EMPTY_ANIMALS: Record<AnimalTab, AnimalGridItem[]> = {
  apadrinados: [],
  adoptados: [],
  favoritos: [],
};

export default function MyAnimals() {
  const [activeTab, setActiveTab] = useState<AnimalTab>("apadrinados");
  const [animals, setAnimals] = useState(EMPTY_ANIMALS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [favoriteError, setFavoriteError] = useState("");
  const [pendingFavoriteId, setPendingFavoriteId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    let ignore = false;

    const loadAnimals = async () => {
      setLoading(true);
      setError("");

      try {
        const [adoptions, sponsorships, likes] = await Promise.all([
          getMyAdoptions({ limit: 100 }),
          getMySponsorships({ limit: 100 }),
          getMyLikes(),
        ]);

        const animalIds = new Set<string>();

        adoptions.data.forEach((adoption) =>
          animalIds.add(String(adoption.animal.id)),
        );
        sponsorships.data.forEach((sponsorship) =>
          animalIds.add(String(sponsorship.animal.id)),
        );
        likes.forEach((like) => animalIds.add(String(like.animal.id)));

        const animalDetails = await Promise.all(
          Array.from(animalIds).map(async (id) => getAnimalById(id)),
        );
        const animalById = new Map(
          animalDetails.map((animal) => [String(animal.id), animal]),
        );
        const favoriteIds = new Set(
          likes.map((like) => String(like.animal.id)),
        );

        if (ignore) return;

        setAnimals({
          apadrinados: sponsorships.data.map((sponsorship) =>
            mapSponsorshipToAnimalItem(sponsorship, animalById, favoriteIds),
          ),
          adoptados: adoptions.data.map((adoption) =>
            mapAdoptionToAnimalItem(adoption, animalById, favoriteIds),
          ),
          favoritos: likes.map((like) =>
            mapLikeToAnimalItem(like, animalById),
          ),
        });
      } catch (err) {
        if (ignore) return;

        setError(
          err instanceof Error
            ? err.message
            : "No se pudieron cargar tus animales",
        );
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadAnimals();

    return () => {
      ignore = true;
    };
  }, []);

  // ── Authenticated view ────────────────────────────────────────────────────
  const currentAnimals = animals[activeTab];
  const { icon, title, subtitle } = EMPTY_STATES[activeTab];

  const handleFavoriteToggle = async (id: string) => {
    if (pendingFavoriteId) return;

    setFavoriteError("");
    setPendingFavoriteId(id);

    try {
      const result = await toggleLike(id);

      setAnimals((prev) => {
        const updateFavoriteFlag = (item: AnimalGridItem) =>
          item.id === id ? { ...item, isFavorite: result.liked } : item;

        return {
          apadrinados: prev.apadrinados.map(updateFavoriteFlag),
          adoptados: prev.adoptados.map(updateFavoriteFlag),
          favoritos: result.liked
            ? prev.favoritos.map(updateFavoriteFlag)
            : prev.favoritos.filter((item) => item.id !== id),
        };
      });
    } catch (err) {
      setFavoriteError(
        err instanceof Error
          ? err.message
          : "No se pudo actualizar el favorito",
      );
    } finally {
      setPendingFavoriteId(null);
    }
  };

  return (
    <main className="mt-20 px-margin-mobile max-w-7xl mx-auto space-y-stack-lg">
      <div className="min-h-screen bg-surface selection:bg-secondary-container">
        {/* ── HEADER ─────────────────────────────────────────────────────────── */}
        <header className="bg-surface-container-lowest px-6 pt-8 pb-5 shadow-xs border-b border-outline-variant/10 md:px-12">
          <div className="max-w-6xl mx-auto space-y-1">
            <h1 className="text-primary font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg">
              Mis Animales
            </h1>
            <p className="text-on-surface-variant font-body-sm text-body-sm md:text-body-md">
              Tu historia con cada peludo
            </p>
          </div>

          {/* ── TAB NAVIGATION ───────────────────────────────────────────────── */}
          <nav className="max-w-6xl mx-auto mt-6">
            <div className="flex gap-3 md:justify-around md:gap-4">
              {TABS.map(({ key, label, icon: tabIcon }) => {
                const isActive = activeTab === key;
                const count = animals[key].length;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`
                    group relative flex flex-col items-center justify-between
                    p-3 rounded-2xl border transition-all duration-300 ease-out
                    cursor-pointer active:scale-98 w-full md:w-36 md:h-28
                    ${
                      isActive
                        ? "bg-primary border-primary shadow-md shadow-primary/10"
                        : "bg-surface-container-low border-outline-variant/20 hover:bg-surface-container hover:border-outline/40"
                    }
                  `}
                  >
                    {/* Material Icon */}
                    <span
                      className="material-symbols-outlined text-[26px] transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color: isActive
                          ? "var(--color-on-primary)"
                          : "var(--color-primary)",
                        fontVariationSettings: isActive
                          ? "'FILL' 1"
                          : "'FILL' 0",
                      }}
                    >
                      {tabIcon}
                    </span>

                    {/* Count + label */}
                    <div className="flex flex-col items-center mt-2 w-full">
                      <span
                        className={`font-headline-md text-body-md md:text-headline-md leading-none ${isActive ? "text-on-primary" : "text-primary"}`}
                      >
                        {count}
                      </span>
                      <span
                        className={`font-label-sm text-[11px] md:text-label-sm text-center tracking-wide mt-1 uppercase ${
                          isActive
                            ? "text-on-primary/80"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {label}
                      </span>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute -bottom-1 w-8 h-1 bg-warm-orange rounded-full shadow-xs" />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>
        </header>

        {/* ── CONTENT ────────────────────────────────────────────────────────── */}
        <main className="max-w-6xl mx-auto px-6 py-8 md:px-12">
          {loading && <StatusMessage icon="progress_activity" title="Cargando tus animales..." />}

          {!loading && favoriteError && (
            <div className="mb-4 rounded-2xl border border-error/20 bg-error/10 px-4 py-3 text-error font-body-sm text-body-sm">
              {favoriteError}
            </div>
          )}

          {!loading && error && (
            <StatusMessage
              icon="error"
              title="No se pudieron cargar tus animales"
              subtitle={error}
            />
          )}

          {!loading && !error && (
            <AnimalList
              animals={currentAnimals}
              onFavoriteToggle={handleFavoriteToggle}
              pendingFavoriteId={pendingFavoriteId}
              emptyIcon={icon}
              emptyTitle={title}
              emptySubtitle={subtitle}
            />
          )}
        </main>
      </div>
    </main>
  );
}

function mapAdoptionToAnimalItem(
  adoption: Adoption,
  animalById: Map<string, Animal>,
  favoriteIds: Set<string>,
): AnimalGridItem {
  const id = String(adoption.animal.id);
  return buildAnimalItem({
    id,
    fallbackName: adoption.animal.name,
    fallbackSpecies: adoption.animal.species,
    fallbackBreed: adoption.animal.breed,
    animal: animalById.get(id),
    isFavorite: favoriteIds.has(id),
    badge: adoption.status ?? "Adopción",
    badgeColor: adoption.status === "completado" ? "green" : "blue",
  });
}

function mapSponsorshipToAnimalItem(
  sponsorship: Sponsorship,
  animalById: Map<string, Animal>,
  favoriteIds: Set<string>,
): AnimalGridItem {
  const id = String(sponsorship.animal.id);
  return buildAnimalItem({
    id,
    fallbackName: sponsorship.animal.name,
    fallbackSpecies: sponsorship.animal.species,
    fallbackBreed: sponsorship.animal.breed,
    animal: animalById.get(id),
    isFavorite: favoriteIds.has(id),
    badge: sponsorship.status ?? "Apadrinado",
    badgeColor: sponsorship.status === "activo" ? "green" : "orange",
  });
}

function mapLikeToAnimalItem(
  like: Like,
  animalById: Map<string, Animal>,
): AnimalGridItem {
  const id = String(like.animal.id);
  return buildAnimalItem({
    id,
    fallbackName: like.animal.name,
    fallbackSpecies: like.animal.species,
    fallbackBreed: like.animal.breed,
    fallbackImages: like.animal.images,
    animal: animalById.get(id),
    isFavorite: true,
    badge: "Favorito",
    badgeColor: "orange",
  });
}

function buildAnimalItem({
  id,
  fallbackName,
  fallbackSpecies,
  fallbackBreed,
  fallbackImages = [],
  animal,
  isFavorite,
  badge,
  badgeColor,
}: {
  id: string;
  fallbackName: string;
  fallbackSpecies: string;
  fallbackBreed: string | null;
  fallbackImages?: Pick<AnimalImage, "imageUrl" | "isMain">[];
  animal?: Animal;
  isFavorite: boolean;
  badge: string;
  badgeColor: "orange" | "green" | "blue";
}): AnimalGridItem {
  return {
    id,
    name: animal?.name ?? fallbackName,
    featureOne: getAnimalAge(animal?.birthDate),
    location: getAnimalLocation(animal),
    featureTwo:
      animal?.energyLevel ??
      animal?.breed ??
      fallbackBreed ??
      animal?.species ??
      fallbackSpecies,
    img: getAnimalImage(animal?.images ?? fallbackImages),
    isFavorite,
    badge,
    badgeColor,
  };
}

function getAnimalImage(images: Pick<AnimalImage, "imageUrl" | "isMain">[]) {
  return (
    images.find((image) => image.isMain)?.imageUrl ??
    images[0]?.imageUrl ??
    "/refe.webp"
  );
}

function getAnimalLocation(animal?: Animal) {
  return animal?.shelter.city ?? animal?.shelter.name ?? "Ubicación no disponible";
}

function getAnimalAge(birthDate?: string | null) {
  if (!birthDate) return "Edad no disponible";

  const birth = new Date(birthDate);
  if (Number.isNaN(birth.getTime())) return "Edad no disponible";

  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  const hasHadBirthday =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());

  if (!hasHadBirthday) years -= 1;

  if (years <= 0) return "Menos de 1 año";
  return `${years} ${years === 1 ? "año" : "años"}`;
}

function StatusMessage({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center max-w-xl mx-auto">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <span
          className="material-symbols-outlined text-[40px] text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-2 text-on-surface-variant font-body-md text-body-md leading-relaxed">
          {subtitle}
        </p>
      )}
    </section>
  );
}
