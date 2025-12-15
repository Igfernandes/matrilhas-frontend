import { Dispatch, SetStateAction } from "react";
import { SelectorShape } from "../type";

export type TableDataShape = Array<Record<string, unknown>>;

export type SelectorContextData = {
  selectors: SelectorShape[];
  setSelectors: React.Dispatch<React.SetStateAction<SelectorShape[]>>;
  handleCheckedAll: (selectors: SelectorShape[]) => SelectorShape[];
  handleChangeSelector: (value: string) => SelectorShape[];
};

export type SelectorProps = {
  children: React.ReactNode;
  selectors: Array<SelectorShape>;
  setSelectors: Dispatch<SetStateAction<SelectorShape[]>>;
};
