export default function AnimalProfile() {
    function toggleFavorite(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md shadow-sm">
                <div className="flex justify-between items-center px-margin-mobile py-base h-16 w-full max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <button
                            className="material-symbols-outlined text-primary hover:bg-surface-container-high rounded-full p-2 transition-colors active:scale-90"
                            onClick={() => window.history.back()}>arrow_back</button>
                        <h1 className="font-headline-md text-primary font-extrabold tracking-tight">Petlink</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high rounded-full p-2 transition-colors active:scale-90"
                            id="favorite-btn" onClick={() => toggleFavorite()}>favorite</button>
                        <button
                            className="material-symbols-outlined text-primary hover:bg-surface-container-high rounded-full p-2 transition-colors active:scale-90">share</button>
                    </div>
                </div>
            </header>
            <main className="pt-16 pb-24 max-w-4xl mx-auto">
                {/*<!-- Hero Section with Pop-out Effect -->*/}
                <section className="relative px-margin-mobile pt-12 overflow-visible">
                    <div className="relative bg-secondary-container rounded-3xl h-80 w-full flex items-end justify-center">
                        {/*<!-- The Animal Image -->*/}
                        <div className="absolute -top-16 w-full flex justify-center">
                            <img className="z-10 w-70 md:w-90 h-auto pop-out-shadow transform transition-transform duration-500 hover:scale-105"
                                data-alt="A portrait of a happy Golden Retriever named Milo sitting against a clean studio background. The lighting is soft and warm, highlighting his golden fur and joyful expression. The style is modern and professional, following the 'Huellas &amp; Bosque' organic aesthetic with high contrast and vibrant natural colors. Milo looks friendly and ready for adoption."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN2lYaV9Lkz3JXxhY3JG_an6bK_JuP3JQTsxpa46eFVSSlYhgb416SYbDu7M_EchdrYQfRHatc4Rk_RRGGhYb202-2f0p3b0QN7yTLGVtgxCl50SA1qO_Kg7AhBBEU6R6KTI1vHoz0WWQ0O10tbv_AEQL5B45iKqx3vA88HHjHSPOzoVuvCmqOVklEuG6tqnjEVHZ-DVcMzgkqA9gde0wmrOJXT1f2CUmU466xmMz9RHr1oTt9RiD8OkaJlm9H8IdmdnS6vOUcXp3I"
                            />
                        </div>
                        {/*<!-- Leaf Decorations -->*/}
                        <div className="absolute bottom-6 left-6 text-primary opacity-20 transform -rotate-12">
                            <span className="material-symbols-outlined text-[64px]">eco</span>
                        </div>
                        <div className="absolute top-1/2 right-6 text-primary opacity-20 transform rotate-45">
                            <span className="material-symbols-outlined text-[48px]">potted_plant</span>
                        </div>
                    </div>
                </section>
                {/*<!-- Profile Content -->*/}
                <div className="px-margin-mobile mt-base">
                    <header className="mb-stack-md flex justify-between items-start">
                        <div>
                            <h2 className="font-headline-xl text-primary text-headline-xl">Milo</h2>
                            <div className="flex items-center gap-2 text-on-surface-variant mt-1">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                                <span className="font-label-md text-label-md">Madrid, España</span>
                                <span className="mx-1 text-outline-variant">•</span>
                                <span className="font-label-md text-label-md">2 años</span>
                            </div>
                        </div>
                        <div
                            className="bg-white/60 backdrop-blur-sm border border-outline-variant px-4 py-2 rounded-full shadow-sm">
                            <span className="font-label-sm text-label-sm text-secondary">Golden Retriever</span>
                        </div>
                    </header>
                    {/*<!-- Attributes Chips -->*/}
                    <div className="flex flex-wrap gap-stack-sm mb-stack-lg">
                        <div
                            className="flex items-center gap-2 bg-secondary-container/50 px-4 py-2 rounded-full text-on-secondary-fixed-variant">
                            <span className="material-symbols-outlined text-lg">sentiment_very_satisfied</span>
                            <span className="font-label-md text-label-md">Amigable</span>
                        </div>
                        <div
                            className="flex items-center gap-2 bg-secondary-container/50 px-4 py-2 rounded-full text-on-secondary-fixed-variant">
                            <span className="material-symbols-outlined text-lg">vaccines</span>
                            <span className="font-label-md text-label-md">Vacunado</span>
                        </div>
                        <div
                            className="flex items-center gap-2 bg-secondary-container/50 px-4 py-2 rounded-full text-on-secondary-fixed-variant">
                            <span className="material-symbols-outlined text-lg">bolt</span>
                            <span className="font-label-md text-label-md">Energético</span>
                        </div>
                        <div
                            className="flex items-center gap-2 bg-secondary-container/50 px-4 py-2 rounded-full text-on-secondary-fixed-variant">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            <span className="font-label-md text-label-md">Esterilizado</span>
                        </div>
                    </div>
                    {/*<!-- About Section -->*/}
                    <section className="mb-stack-lg">
                        <h3 className="font-headline-md text-headline-md text-primary mb-base">Sobre Milo</h3>
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            Milo es el alma de la fiesta. Es un perro extremadamente cariñoso que adora los paseos largos por el
                            parque y jugar a buscar la pelota. Ha convivido con otros perros y niños, mostrando siempre una
                            paciencia infinita. Busca una familia activa que pueda darle todo el amor que él está dispuesto a
                            devolver multiplicado por mil.
                        </p>
                    </section>
                    {/*<!-- Quick Details Bento -->*/}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-stack-lg">
                        <div className="bg-surface-container-low p-4 rounded-3xl flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-secondary mb-2">scale</span>
                            <span className="font-label-sm text-label-sm text-outline">Peso</span>
                            <span className="font-headline-md text-headline-md text-primary">28 kg</span>
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-3xl flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-secondary mb-2">height</span>
                            <span className="font-label-sm text-label-sm text-outline">Tamaño</span>
                            <span className="font-headline-md text-headline-md text-primary">Grande</span>
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-3xl flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-secondary mb-2">male</span>
                            <span className="font-label-sm text-label-sm text-outline">Género</span>
                            <span className="font-headline-md text-headline-md text-primary">Macho</span>
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-3xl flex flex-col items-center text-center">
                            <span className="material-symbols-outlined text-secondary mb-2">health_and_safety</span>
                            <span className="font-label-sm text-label-sm text-outline">Salud</span>
                            <span className="font-headline-md text-headline-md text-primary">Óptima</span>
                        </div>
                    </div>
                    {/*<!-- Action Buttons -->*/}
                    <div className="flex flex-col sm:flex-row gap-4 mb-stack-lg">
                        <button
                            className="flex-1 bg-on-tertiary-container hover:bg-tertiary-container text-white py-4 px-8 rounded-full font-headline-md flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-on-tertiary-container/20">
                            <span className="material-symbols-outlined">favorite</span>
                            Adoptar a Milo
                        </button>
                        <button
                            className="flex-1 bg-white border-2 border-secondary text-secondary py-4 px-8 rounded-full font-headline-md flex items-center justify-center gap-3 transition-all hover:bg-secondary-container/20 active:scale-95">
                            <span className="material-symbols-outlined">volunteer_activism</span>
                            Apadrinar
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}