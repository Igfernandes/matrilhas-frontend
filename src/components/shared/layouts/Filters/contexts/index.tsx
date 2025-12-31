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
  const { handleSubmit, register, reset } = methods
  const { handleToggleModal } = useModalContext()
  const [filters, setFilters] = useState<Record<string, Record<string, unknown>>>({})
  const [references, setReferences] = useState<Record<string, (value: unknown) => unknown>>({})

  const handleAlterFilters = useCallback((newFilters: Record<string, Record<string, unknown>>) => {
    setFilters((prev) => {
      const filters = prev;
      filters[id] = newFilters
      return filters;
    });
    reset(newFilters);
    handleToggleModal("");
  }, [handleToggleModal, reset, id]);

  const updateReferences = useCallback((key: string, callback: (value: unknown) => unknown) => {
    setReferences((prev) => {
      prev[key] = callback;
      return prev;
    })
  }, [])


  const data = useMemo(() => ({
    filters,
    updateReferences,
    handleAlterFilters,
    handleSubmit,
    register,
    methods,
    references
  }),
    [filters, handleAlterFilters, handleSubmit, register, updateReferences, methods, references]);

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
