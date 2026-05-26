export default function SearchBar() {
    return (
        <section className="mt-stack-sm mb-stack-md pt-6">
            <div className="flex items-center justify-center gap-2 mb-2">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                    Encuentra a tu nuevo mejor amigo
                </h2>
            </div>

            <div className="relative group mt-3">
                <input
                    className="w-full h-14 pl-14 pr-6 bg-surface-container-low border-none rounded-full text-body-lg focus:ring-2 focus:ring-primary transition-all duration-300 placeholder:text-outline-variant"
                    placeholder="Busca razas, nombres o lugares..." type="text" />
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary text-2xl group-focus-within:text-secondary-fixed-dim">search</span>
            </div>
        </section>
    )
}