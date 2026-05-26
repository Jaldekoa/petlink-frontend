export default function SearchHistoryItem({ item }: { item: string }) {
    return (
        <span className="px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-xl text-body-sm cursor-pointer hover:bg-surface-variant transition-colors">
            {item}
        </span>
    )
}