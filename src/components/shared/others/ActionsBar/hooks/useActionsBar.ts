import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useSelectorContext } from "@components/shared/layouts/Tables/contexts/selectors";
import { useCallback } from "react";

export function useActionsBar() {
  const { setSelectors, setSelectorRef } = useSelectorContext();

  const handleUncheckAll = useCallback(() => {
    setSelectors((selectors: SelectorShape[]) => {
      const selectorsNew = selectors.map((s) => ({ ...s, isChecked: false }));
      if (setSelectorRef) setSelectorRef(selectorsNew);
      return selectorsNew;
    });
  }, [setSelectors, setSelectorRef]);

  return {
    handleUncheckAll,
  };
}
