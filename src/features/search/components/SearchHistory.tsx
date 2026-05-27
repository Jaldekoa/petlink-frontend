import SearchHistoryItem from "./SearchHistoyItem";

interface SearchHistoryProps {
  historyItems: string[];
  onHistoryClick: (item: string) => void;
}

export default function SearchHistory({ historyItems, onHistoryClick }: SearchHistoryProps) {
  if (historyItems.length === 0) return null;

  return (
    <section className="mt-stack-lg pb-10">
      <h3 className="font-label-md text-outline mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-lg">history</span>{" "}
        Búsquedas recientes
      </h3>
      <div className="flex flex-wrap gap-2">
        {historyItems.map((item) => (
          <SearchHistoryItem
            key={item}
            item={item}
            onClick={() => onHistoryClick(item)}
          />
        ))}
      </div>
    </section>
  );
}
