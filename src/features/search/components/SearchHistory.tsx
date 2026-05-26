import SearchHistoryItem from "./SearchHistoyItem"

export default function SearchHistory({ historyItems }: { historyItems: Array<string> }) {
    return (
        <section className="mt-stack-lg pb-10">
            <h3 className="font-label-md text-outline mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">history</span> Búsquedas recientes
            </h3>
            <div className="flex flex-wrap gap-2">
                {historyItems.map(item => item && <SearchHistoryItem item={item} />)}
            </div>
        </section>
    )
}