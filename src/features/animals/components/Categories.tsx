export default function Categories() {
    return (
        <section className="flex gap-3 overflow-x-auto no-scrollbar mb-stack-lg py-2">
            <button
                className="px-6 py-3 rounded-full bg-primary text-on-primary font-label-md shadow-lg shadow-primary/20 shrink-0 transition-all active:scale-95">
                Adoptados
            </button>
            <button
                className="px-6 py-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md shrink-0 transition-all hover:bg-secondary-container/80 active:scale-95">
                Apadrinados
            </button>
            <button
                className="px-6 py-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md shrink-0 transition-all hover:bg-secondary-container/80 active:scale-95">
                Favoritos
            </button>
        </section>
    )
}