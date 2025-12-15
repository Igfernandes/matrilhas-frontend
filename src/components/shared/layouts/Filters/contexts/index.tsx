import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { FiltersContextData, FiltersContextProps } from "./types";
import { useForm } from "react-hook-form";
import { useModalContext } from "@contexts/Modal";

const FiltersContext = createContext<FiltersContextData>(
  {} as FiltersContextData
);

function FiltersProvider({ children, id }: FiltersContextProps) {
  const methods = useForm();
  const { handleSubmit, register } = methods
  const { handleToggleModal } = useModalContext()
  const [filters, setFilters] = useState<Record<string, Record<string, unknown>>>({})

  const handleAlterFilters = useCallback((newFilters: Record<string, Record<string, unknown>>) => {
    setFilters((prev) => {
      const filters = prev;
      filters[id] = newFilters
      return filters;
    });
    handleToggleModal("");
  }, [handleToggleModal, id]);


  const data = useMemo(() => ({ filters, handleAlterFilters, handleSubmit, register, methods }), [filters, handleAlterFilters, handleSubmit, register, methods]);

  return (
    <FiltersContext.Provider value={data}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;

export function useFiltersContext() {
  return useContext(FiltersContext) as FiltersContextData;
}
