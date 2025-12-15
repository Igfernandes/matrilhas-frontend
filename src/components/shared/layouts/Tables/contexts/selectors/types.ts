import { RefObject } from "react";
import { SelectorShape } from "../../utilities/Selector/type";

export type TableDataShape = Array<Record<string, unknown>>;

export type SelectorContextData = {
  selectors: SelectorShape[];
  handleChangeSelector: (value: string) => void;
  setSelectors: React.Dispatch<React.SetStateAction<SelectorShape[]>>;
};

export type SelectorProps = {
  children: React.ReactNode;
  data: TableDataShape;
  selectorRef?: RefObject<SelectorShape[]>;
};
