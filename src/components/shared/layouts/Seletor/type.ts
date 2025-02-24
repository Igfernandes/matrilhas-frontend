import { Dispatch, RefObject, SetStateAction } from "react";
import { CheckboxProps } from "@components/shared/layouts/Checkbox/type";

type Props = {
  onSelectors: Dispatch<SetStateAction<SelectorShape[]>>;
  selectors: Array<SelectorShape>;
  value: SelectorValue;
};

export type SelectorProps = Omit<CheckboxProps, "dataTestId" | "value"> & Props;
export type HookSelectorProps = Props;

export type SelectorShape = {
  ref: RefObject<HTMLInputElement>;
  value: SelectorValue;
};

export type SelectorValue = string | "all";
