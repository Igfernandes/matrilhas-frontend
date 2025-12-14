import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SelectorContextData, SelectorProps } from "./types";
import { SelectorShape } from "../../utilities/Selector/type";

export const SelectorContext = createContext({} as SelectorContextData);

export default function SelectorProvider({
  children,
  data,
  selectorRef
}: SelectorProps) {
  const [selectors, setSelectors] = useState<SelectorShape[]>([]);

  const handleChangeSelector = useCallback((value: string) => {
    setSelectors((prev) => {
      if (!prev) return [];

      const updated = prev.map(s => {
        if (s.value !== value) return s;
        return { ...s, isChecked: !s.isChecked };
      });

      if (selectorRef)
        selectorRef.current = updated;
      return updated;
    });

  }, []);

  useEffect(() => {
    const selectorsWithId = data.filter((register) => !!register.id)

    const selectorsNew = selectorsWithId.map((register) => ({
      isChecked: !!register.isChecked,
      value: String(register.id),
    }))

    setSelectors((prev) => {
      const map = new Map<unknown, unknown>();

      selectorsNew.forEach((item) => map.set(item.value, item));
      prev.forEach((item) => map.set(item.value, item)); // sobrescreve

      return Array.from(map.values()) as SelectorShape[];
    })
  }, [data]);

  const contextValue = useMemo(
    () => ({
      selectors,
      handleChangeSelector,
      setSelectors
    }),
    [selectors, handleChangeSelector, setSelectors]
  );

  return (
    <SelectorContext.Provider value={contextValue}>
      {children}
    </SelectorContext.Provider>
  );
}

export const useSelectorContext = () => useContext(SelectorContext);
