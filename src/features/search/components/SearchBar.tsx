export default function SearchBar() {
    return (
        <section className="mt-stack-sm mb-stack-md">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">🔍</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Encuentra a tu nuevo mejor
                    amigo</h2>
            </div>

            <div className="relative group">
                <input
                    className="w-full h-14 pl-14 pr-6 bg-surface-container-low border-none rounded-full text-body-lg focus:ring-2 focus:ring-primary transition-all duration-300 placeholder:text-outline-variant"
                    placeholder="Busca razas, nombres o lugares..." type="text" />
                <span
                    className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary text-2xl group-focus-within:text-secondary-fixed-dim">search</span>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-on-tertiary-container text-white p-2 rounded-full material-symbols-outlined active:scale-95 transition-transform">tune</button>
            </div>
        </section>
    )
}