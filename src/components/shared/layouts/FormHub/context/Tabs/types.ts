export type TabContextData = {
  handleChangeTab: (tabId: OptionsFieldTabTarget) => void;
  targetTab: OptionsFieldTabTarget;
};

export type OptionsFieldTabTarget = string | "ALL" | "FILES";

export type TabProviderProps = {
  children: React.ReactNode;
};
