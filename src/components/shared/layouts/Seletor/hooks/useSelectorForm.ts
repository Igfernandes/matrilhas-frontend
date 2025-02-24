import { HookSelectorProps } from "../type";

export function useSelectorForm({
  selectors,
}: Omit<HookSelectorProps, "value">) {
  const getValues = () => {
    const filteredSelectors = selectors.filter(
      (selector) => selector.ref.current.checked
    );

    return filteredSelectors.map((selector) => selector.value);
  };
  return {
    getValues,
  };
}
