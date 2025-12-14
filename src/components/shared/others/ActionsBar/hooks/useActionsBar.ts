import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { useSelectorContext } from "@components/shared/layouts/Tables/contexts/selectors";
import { useCallback } from "react";

export function useActionsBar() {
  const { setSelectors } = useSelectorContext();

  const handleUncheckAll = useCallback(() => {
    setSelectors((selectors: SelectorShape[]) =>
      selectors.map((s) => ({ ...s, isChecked: false }))
    );
  }, [setSelectors]);

  return {
    handleUncheckAll,
  };
}
