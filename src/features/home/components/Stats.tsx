export default function Stats() {
    return (
        <div className="flex flex-wrap justify-center gap-3">
            <div
                className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">volunteer_activism</span>
                <span className="font-label-md">98K+ Clientes Felices</span>
            </div>
            <div className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="font-label-md">4.9 Rating</span>
            </div>
        </div>
    )
}