export default function TopBar({ imgSrc }: { imgSrc: string }) {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md shadow-sm">
            <div className="flex justify-between items-center px-margin-mobile py-base h-16 w-full max-w-7xl mx-auto">
                <button
                    className="material-symbols-outlined p-2 text-primary hover:bg-surface-container-high rounded-full transition-colors active:scale-90 duration-200">
                    menu
                </button>
                <h1
                    className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-extrabold tracking-tight">
                    Petlink
                </h1>
                <div className="flex items-center gap-2">
                    <button
                        className="material-symbols-outlined p-2 text-primary hover:bg-surface-container-high rounded-full transition-colors active:scale-90 duration-200">
                        notifications
                    </button>
                    <div className="w-10 h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
                        <img alt="Perfil" className="w-full h-full object-cover"
                            data-alt="A close-up portrait of a friendly-looking young woman with a warm smile and reddish-brown hair. She is set against a clean, softly blurred natural background that matches the organic, vibrant aesthetic of the pet adoption app. The lighting is bright and cheerful, emphasizing her approachable personality."
                            src={imgSrc} />
                    </div>
                </div>
            </div>
        </header>
    )
}