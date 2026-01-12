import { useEffect, useState, KeyboardEvent, MouseEvent } from "react";
import { IoIosSearch, IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cacheResults } from "../../slices/searchSlice";
import { fetchDataFromApi } from "../../utils/api";
import type { RootState } from "../../store/store";

interface AutoCompleteResponse {
  results: string[];
}

const SearchInput: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store: RootState) => store.search);

  const navigate = useNavigate();

  const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === "Enter" && searchQuery.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const searchQueryHandler2 = () => {
    if (searchQuery.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const handleSuggestion = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLElement;
    setSearchQuery(target.innerText);
    setShowSuggestions(false);
    navigate("/searchResult/" + encodeURI(target.innerText));
  };

  useEffect(() => {
    // Make an API call after every keypress
    // But if diff bw 2 API calls is < 200ms => Decline API calls
    const timer = setTimeout(() => {
      // if searchQuery is present in my cache, then directly setSuggestion i.e return searchCache of searchQuery
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        // if not then make an API Call
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetchDataFromApi<AutoCompleteResponse>(
        `auto-complete/?q=${searchQuery}`
      );
      setSuggestions(data?.results || []);
      // updating the cache
      dispatch(cacheResults({ [searchQuery]: data?.results || [] }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  return (
    <>
      <div className="flex h-10 border border-gray-300 dark:border-[#303030] rounded-l-full focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:shadow-inner transition-colors">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="w-28 sm:w-40 md:w-64 lg:w-[400px] xl:w-[500px] pl-4 pr-2 bg-transparent outline-none text-black dark:text-white placeholder:text-gray-500"
        />
      </div>
      <button
        onClick={searchQueryHandler2}
        className="w-12 md:w-16 h-10 flex items-center justify-center border border-l-0 border-gray-300 dark:border-[#303030] rounded-r-full bg-gray-100 dark:bg-[#222222] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition-colors"
      >
        <IoIosSearch className="text-gray-600 dark:text-white text-xl" />
      </button>

      {showSuggestions && suggestions?.length > 0 && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white dark:bg-[#212121] w-[92vw] max-w-[600px] max-h-[400px] shadow-xl border border-gray-200 dark:border-[#303030] rounded-xl overflow-y-auto z-50">
          <ul className="py-2">
            {suggestions?.map((sugg) => (
              <li
                key={sugg}
                onMouseDown={(e) => handleSuggestion(e)}
                className="px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-[#3a3a3a] cursor-pointer flex items-center gap-4 text-sm text-black dark:text-white"
              >
                <IoMdSearch className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <span className="truncate font-medium">{sugg}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchInput;
