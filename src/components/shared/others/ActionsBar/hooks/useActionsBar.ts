import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useSelectorContext } from "@components/shared/layouts/Tables/contexts/selectors";
import { isEquals } from "@helpers/json";
import { useCallback, useEffect } from "react";

export function useActionsBar() {
  const { setSelectors, setSelectorRef, selectors } = useSelectorContext();

  const handleUncheckAll = useCallback(() => {
    setSelectors((selectors: SelectorShape[]) => {
      const selectorsNew = selectors.map((s) => ({ ...s, isChecked: false }));

      return selectorsNew;
    });
  }, [setSelectors]);

  useEffect(() => {
    if (setSelectorRef) {
      setSelectorRef((prev) => (isEquals(prev, selectors) ? prev : selectors));
    }
  }, [selectors, setSelectorRef]);

  return {
    handleUncheckAll,
  };
}
