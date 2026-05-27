import { useEffect, useState } from "react";
import Hero from "@features/home/components/Hero";
import Stats from "@features/home/components/Stats";
import HowItWorks from "@features/home/components/HowItWorks";
import ShelterSection from "@features/home/components/ShelterSection";
import ShelterCarrusel from "@features/home/components/ShelterCarrusel";
import AnimalCarrusel from "@shared/components/main/AnimalCarrusel";
import { getAnimals } from "@services/animal.service";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      getAnimals({ species: "dog", status: "available" }),
      getAnimals({ species: "cat", status: "available" }),
      getAnimals({ status: "available" }),
      getShelters(),
    ]).then(([dogsRes, catsRes, recentRes, sheltersRes]) => {
      if (dogsRes.status === "fulfilled")
        setDogs(toArray<Animal>(dogsRes.value));
      if (catsRes.status === "fulfilled")
        setCats(toArray<Animal>(catsRes.value));
      if (recentRes.status === "fulfilled")
        setRecent(toArray<Animal>(recentRes.value));
      if (sheltersRes.status === "fulfilled")
        setShelters(toArray<Shelter>(sheltersRes.value));
      setLoading(false);
    });
  }, []);

  return (
    <main className="mt-20 pb-12 max-w-7xl mx-auto space-y-stack-lg px-margin-mobile">
      <Hero />
      <Stats animalTotal={recent.length} shelterTotal={shelters.length} />
      <AnimalCarrusel
        title="Perros buscando hogar"
        animals={dogs}
        loading={loading}
      />
      <AnimalCarrusel
        title="Gatos buscando hogar"
        animals={cats}
        loading={loading}
      />
      <AnimalCarrusel
        title="Recién llegados"
        animals={recent}
        loading={loading}
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
