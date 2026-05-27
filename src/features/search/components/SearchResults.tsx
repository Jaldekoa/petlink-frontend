import AnimalGrid from "@/shared/components/main/AnimalList";
import type { AnimalGridItem } from "@/shared/components/main/AnimalList";

interface SearchResultsProps {
  results: AnimalGridItem[];
  loading: boolean;
  error: string | null;
}

export default function SearchResults({ results, loading, error }: SearchResultsProps) {
  if (loading) {
    return (
      <section className="flex flex-col items-center justify-center py-20">
        <span className="material-symbols-outlined text-[48px] text-primary animate-spin">
          progress_activity
        </span>
        <p className="mt-4 text-on-surface-variant font-body-md">Buscando...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <span className="material-symbols-outlined text-[48px] text-error">error</span>
        <p className="mt-4 text-error font-body-md">{error}</p>
      </section>
    );
  }

  return (
    <AnimalGrid
      animals={results}
      emptyIcon="search_off"
      emptyTitle="Sin resultados"
      emptySubtitle="Intenta con otros términos o filtros distintos."
    />
  );
}
