import { useState } from "react";
import { SalePaymentTabType } from "../type";

export function useTabs() {
  const [tab, setTab] = useState<SalePaymentTabType>("INFORMATION");

  const handleChangeTab = (newTab: SalePaymentTabType) => {
    setTab(newTab);
  };

  return {
    tab,
    handleChangeTab,
  };
}
