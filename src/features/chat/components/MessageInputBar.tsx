export default function MessageInputBar() {
    return (
        <div
            className="fixed bottom-18 left-0 w-full bg-surface-container-lowest px-margin-mobile py-3 flex items-center gap-3 z-40">
            <button aria-label="Adjuntar"
                className="w-10 h-10 flex items-center justify-center bg-surface-container text-primary rounded-full active:scale-90 transition-transform">
                <span className="material-symbols-outlined">add</span>
            </button>
            <div className="flex-1 bg-surface-container-low rounded-full px-4 py-2 flex items-center">
                <input
                    className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/60"
                    placeholder="Escribe un mensaje..." type="text" />
                <button className="p-1 text-on-surface-variant/60">
                    <span className="material-symbols-outlined">mood</span>
                </button>
            </div>
            <button aria-label="Enviar"
                className="w-12 h-12 flex items-center justify-center bg-tertiary-container text-on-tertiary rounded-full shadow-lg active:scale-90 transition-transform">
                <span className="material-symbols-outlined">send</span>
            </button>
        </div>
    )
}