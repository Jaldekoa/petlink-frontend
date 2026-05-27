import Filter from "./Filter";

interface SearchFiltersProps {
  selectedSpecies?: string;
  onSpeciesChange: (species?: string) => void;
}

export default function SearchFilters({ selectedSpecies, onSpeciesChange }: SearchFiltersProps) {
  return (
    <section className="mb-stack-md">
      <div className="flex w-full justify-center gap-3 overflow-x-auto no-scrollbar pb-2">
        <Filter
          title="Todos"
          icon="pets"
          isActive={!selectedSpecies}
          onClick={() => onSpeciesChange(undefined)}
        />
        <Filter
          title="Perros"
          isActive={selectedSpecies === "dog"}
          onClick={() => onSpeciesChange("dog")}
        />
        <Filter
          title="Gatos"
          isActive={selectedSpecies === "cat"}
          onClick={() => onSpeciesChange("cat")}
        />
      </div>
    </section>
  );
}
