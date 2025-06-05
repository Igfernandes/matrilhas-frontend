import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  OptionsFieldTabTarget,
  TabContextData,
  TabProviderProps,
} from "./types";
const TabsContext = createContext<TabContextData>({} as TabContextData);

function TabsProvider({ children }: TabProviderProps) {
  const [targetTab, setTargetTab] = useState<OptionsFieldTabTarget>("ALL");

  const handleChangeTab = (tab: OptionsFieldTabTarget) => {
    setTargetTab(tab);
  };
  console.log("render_TABS")
  const props = useMemo(
    () => ({
      targetTab,
      handleChangeTab,
    }),
    [targetTab]
  );

  return <TabsContext.Provider value={props}>{children}</TabsContext.Provider>;
}

export default TabsProvider;

export function useTabsContext() {
  return useContext(TabsContext) as TabContextData;
}
