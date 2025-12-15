import React, { createContext, useCallback, useContext, useMemo } from "react";
import { SelectorContextData, SelectorProps } from "./types";
import { SelectorShape } from "../type";

export const SelectorContext = createContext({} as SelectorContextData);

export default function SelectorProvider({
  children,
  selectors,
  setSelectors,
}: SelectorProps) {
  // Marca ou desmarca TODOS
  const handleCheckedAll = useCallback((selectors: SelectorShape[]) => {
    const allChecked = !selectors.every((s) => s.isChecked);
    const selectorsNew = selectors.map(s => ({ ...s, isChecked: allChecked })) as SelectorShape[];

    setSelectors(selectorsNew);
    return selectorsNew;
  }, [setSelectors]);

  const handleChangeSelector = useCallback((value: string) => {
    const updated = selectors.map(s => {
      if (s.value !== value) return s;
      return { ...s, isChecked: !s.isChecked };
    });

    const totalChecked = updated.filter(s => s.isChecked && s.value != "all").length;
    const allChecked = totalChecked === (updated.length - 1);

    // Caso todos estejam marcados → marca "all"
    if (allChecked) {
      const selectorsNew = updated.map(s => ({ ...s, isChecked: true }))
      setSelectors(selectorsNew);
      return selectorsNew
    }

    // Nenhum marcado → desmarca tudo
    if (totalChecked === 0) {
      const selectorsNew = updated.map(s => ({ ...s, isChecked: false }))
      setSelectors(selectorsNew);
      return selectorsNew
    }

    setSelectors(updated);
    return updated;
  }, [selectors, setSelectors]);

  const contextValue = useMemo(
    () => ({
      selectors,
      setSelectors,
      handleCheckedAll,
      handleChangeSelector,
    }),
    [selectors, setSelectors, handleCheckedAll, handleChangeSelector]
  );

  return (
    <SelectorContext.Provider value={contextValue}>
      {children}
    </SelectorContext.Provider>
  );
}

export const useSelectorContext = () => useContext(SelectorContext);
