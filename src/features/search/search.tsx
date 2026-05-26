import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";

export default function Search() {
  return (
    <>
      <main className="mt-20 px-margin-mobile max-w-7xl mx-auto space-y-stack-lg">
        <SearchBar />
        <SearchFilters />
      </main>
    </>
  );
}
