import { useState, useEffect, useRef } from "react";
import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";
import SearchHistory from "./components/SearchHistory";
import SearchResults from "./components/SearchResults";
import { getAnimals } from "@/services/animal.service";
import type { Animal, AnimalFilters } from "@/shared/types/animal.types";
import type { AnimalGridItem } from "@/shared/components/main/AnimalList";

const HISTORY_KEY = "petlink_search_history";
const MAX_HISTORY = 10;

function getHistory(): string[] {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function saveToHistory(term: string) {
  const prev = getHistory().filter((h) => h !== term);
  localStorage.setItem(
    HISTORY_KEY,
    JSON.stringify([term, ...prev].slice(0, MAX_HISTORY)),
  );
}

function computeAge(birthDate: string | null): string {
  if (!birthDate) return "Edad desconocida";
  const birth = new Date(birthDate);
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    (now.getMonth() - birth.getMonth());
  if (totalMonths < 12)
    return `${totalMonths} ${totalMonths === 1 ? "mes" : "meses"}`;
  const years = Math.floor(totalMonths / 12);
  return `${years} ${years === 1 ? "año" : "años"}`;
}

/* function animalToGridItem(animal: Animal): AnimalGridItem {
  const mainImage = animal.images.find((i) => i.isMain) ?? animal.images[0];
  return {
    id: animal.id,
    name: animal.name,
    img: mainImage?.imageUrl ?? "",
    location: animal.shelter.city ?? animal.shelter.name,
    featureOne: computeAge(animal.birthDate),
    featureTwo: animal.breed ?? animal.species,
  };
} */
function animalToGridItem(animal: Animal): AnimalGridItem {
  const images = animal.images ?? [];
  const mainImage = images.find((i) => i.isMain) ?? images[0];
  return {
    id: animal.id,
    name: animal.name,
    img: mainImage?.imageUrl ?? "",
    location: animal.shelter?.city ?? animal.shelter?.name ?? "",
    featureOne: computeAge(animal.birthDate),
    featureTwo: animal.breed ?? animal.species,
  };
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [species, setSpecies] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<AnimalGridItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [history, setHistory] = useState<string[]>(getHistory);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const performSearch = async (q: string, sp?: string) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);
    try {
      const filters: AnimalFilters = { limit: 20 };
      if (q) filters.search = q;
      if (sp) filters.species = sp;
      const animals = await getAnimals(filters);
      const filtered = q.trim()
        ? animals.filter(
            (a) =>
              a.name.toLowerCase().includes(q.trim().toLowerCase()) ||
              a.breed?.toLowerCase().includes(q.trim().toLowerCase()) ||
              a.species.toLowerCase().includes(q.trim().toLowerCase()),
          )
        : animals;
      setResults(filtered.map(animalToGridItem));
      if (q.trim()) {
        saveToHistory(q.trim());
        setHistory(getHistory());
      }
    } catch (err) {
      console.error("[Search] Error:", err);
      setError("No se pudo cargar los resultados. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleQueryChange = (q: string) => {
    setQuery(q);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => performSearch(q, species), 500);
  };

  const handleSpeciesChange = (sp?: string) => {
    setSpecies(sp);
    clearTimeout(debounceRef.current);
    performSearch(query, sp);
  };

  const handleHistoryClick = (item: string) => {
    setQuery(item);
    clearTimeout(debounceRef.current);
    performSearch(item, species);
  };

  useEffect(() => () => clearTimeout(debounceRef.current), []);

  return (
    <main className="mt-20 px-margin-mobile max-w-7xl mx-auto space-y-stack-lg">
      <SearchBar value={query} onChange={handleQueryChange} />
      <SearchFilters
        selectedSpecies={species}
        onSpeciesChange={handleSpeciesChange}
      />
      {hasSearched ? (
        <SearchResults results={results} loading={loading} error={error} />
      ) : (
        <SearchHistory
          historyItems={history}
          onHistoryClick={handleHistoryClick}
        />
      )}
    </main>
  );
}
