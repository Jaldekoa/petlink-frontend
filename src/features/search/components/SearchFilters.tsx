import Filter from "./Filter"

export default function SearchFilters() {
    return (
        <section className="mb-stack-md">
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                <Filter title="Todos" icon="pets" />
                <Filter title="Perros" icon="🐶" />
                <Filter title="Gatos" icon="🐱" />
                <Filter title="Otros" icon="🐰" />
            </div>
        </section>
    )
}