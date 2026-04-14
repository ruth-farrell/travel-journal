import { FaMagnifyingGlass } from "react-icons/fa6";
import { useUIContext } from "../features/travel/TravelContext";

const Search = () => {
  const { query, setQuery } = useUIContext();
  return (
    <div className="search">
      <div className="search-input">
        <div className="search-input-hidden-label" aria-hidden="true">
          Search by Title.......
        </div>
        <FaMagnifyingGlass aria-hidden="true" />
        <input
          aria-label="Search destinations by title"
          placeholder="Search by Title..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
