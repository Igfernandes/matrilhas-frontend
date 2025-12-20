import { useCallback, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = useCallback((words: string) => {
    setSearch(words.toLowerCase());
  }, []);

  

  return {
    search,
    handleSearch,
  };
}
