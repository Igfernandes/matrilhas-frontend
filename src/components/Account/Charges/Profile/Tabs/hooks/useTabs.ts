import { useState } from "react";
import { TourTabType } from "../type";

export function useTabs() {
  const [tab, setTab] = useState<TourTabType>("INFORMATION");

  const handleChangeTab = (newTab: TourTabType) => {
    setTab(newTab);
  };

  return {
    tab,
    handleChangeTab,
  };
}
