import { useEffect, useState } from "react";
import Hero from "@features/home/components/Hero";
import Stats from "@features/home/components/Stats";
import HowItWorks from "@features/home/components/HowItWorks";
import ShelterSection from "@features/home/components/ShelterSection";
import ShelterCarrusel from "@features/home/components/ShelterCarrusel";
import AnimalCarrusel from "@shared/components/main/AnimalCarrusel";
import { getAnimals } from "@services/animal.service";
import { getMyLikes, toggleLike } from "@/services/like.service";
import { getShelters } from "@services/shelter.service";
import type { Animal } from "@/shared/types/animal.types";
import type { Shelter } from "@/shared/types/selther.type";

// The backend returns plain arrays, not paginated responses.
function toArray<T>(response: unknown): T[] {
  if (Array.isArray(response)) return response as T[];
  if (response && typeof response === "object" && "data" in response) {
    const { data } = response as { data: unknown };
    if (Array.isArray(data)) return data as T[];
  }
  return [];
}

export default function Home() {
  const [dogs, setDogs] = useState<Animal[]>([]);
  const [cats, setCats] = useState<Animal[]>([]);
  const [recent, setRecent] = useState<Animal[]>([]);
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [pendingFavoriteId, setPendingFavoriteId] = useState<string | null>(
    null,
  );
  const [favoriteError, setFavoriteError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      getAnimals({ species: "dog", status: "available" }),
      getAnimals({ species: "cat", status: "available" }),
      getAnimals({ status: "available" }),
      getShelters(),
      getMyLikes(),
    ]).then(([dogsRes, catsRes, recentRes, sheltersRes, likesRes]) => {
      if (dogsRes.status === "fulfilled")
        setDogs(toArray<Animal>(dogsRes.value));
      if (catsRes.status === "fulfilled")
        setCats(toArray<Animal>(catsRes.value));
      if (recentRes.status === "fulfilled")
        setRecent(toArray<Animal>(recentRes.value));
      if (sheltersRes.status === "fulfilled")
        setShelters(toArray<Shelter>(sheltersRes.value));
      if (likesRes.status === "fulfilled")
        setFavoriteIds(
          new Set(likesRes.value.map((like) => String(like.animal.id))),
        );
      setLoading(false);
    });
  }, []);

  const handleFavoriteToggle = async (id: string) => {
    if (pendingFavoriteId) return;

    setFavoriteError("");
    setPendingFavoriteId(id);

    try {
      const result = await toggleLike(id);

      setFavoriteIds((prev) => {
        const next = new Set(prev);

        if (result.liked) {
          next.add(id);
        } else {
          next.delete(id);
        }

        return next;
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
    <main className="mt-20 pb-12 max-w-7xl mx-auto space-y-stack-lg px-margin-mobile">
      <Hero />
      <Stats animalTotal={recent.length} shelterTotal={shelters.length} />
      {favoriteError && (
        <div className="rounded-2xl border border-error/20 bg-error/10 px-4 py-3 text-error font-body-sm text-body-sm">
          {favoriteError}
        </div>
      )}
      <AnimalCarrusel
        title="Perros buscando hogar"
        animals={dogs}
        loading={loading}
        favoriteIds={favoriteIds}
        pendingFavoriteId={pendingFavoriteId}
        onFavoriteToggle={handleFavoriteToggle}
      />
      <AnimalCarrusel
        title="Gatos buscando hogar"
        animals={cats}
        loading={loading}
        favoriteIds={favoriteIds}
        pendingFavoriteId={pendingFavoriteId}
        onFavoriteToggle={handleFavoriteToggle}
      />
      <AnimalCarrusel
        title="Recién llegados"
        animals={recent}
        loading={loading}
        favoriteIds={favoriteIds}
        pendingFavoriteId={pendingFavoriteId}
        onFavoriteToggle={handleFavoriteToggle}
      />
      <ShelterCarrusel
        title="Refugios asociados"
        shelters={shelters}
        loading={loading}
      />
      <HowItWorks />
      <ShelterSection />
    </main>
  );
}
