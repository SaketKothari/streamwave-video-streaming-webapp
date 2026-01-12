import { createContext, useEffect, useState, ReactNode } from "react";
import { fetchDataFromApi } from "../utils/api";
import type { DataContextType, VideoSearchResult } from "../types";

interface SearchResponse {
  contents: VideoSearchResult[];
}

interface AppContextProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<
    VideoSearchResult[] | false
  >(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "AI Coding Programming"
  );
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = async (query: string) => {
    setLoading(true);
    const data = await fetchDataFromApi<SearchResponse>(`search/?q=${query}`);
    setSearchResults(data.contents);
    setLoading(false);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root")?.classList.add("dark");
    } else {
      document.getElementById("root")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        mobileMenu,
        setMobileMenu,
        selectedCategory,
        setSelectedCategory,
        searchResults,
        setSearchResults,
        theme,
        setTheme,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
