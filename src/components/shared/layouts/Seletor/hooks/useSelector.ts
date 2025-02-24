import { RefObject, useEffect, useRef } from "react";
import { HookSelectorProps, SelectorShape } from "../type";
import { helperRemoveDuplicatesInArrayOfObjects } from "@helpers/array";
import { bgColors } from "@assets/colors/colors";
import { bgDefaultColor } from "@assets/colors/default";

export function useSelector({
  selectors,
  onSelectors,
  value,
}: HookSelectorProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleCheckedAll = () => {
    const foundSelectorAll = selectors.find(
      (selector) => selector.value == "all"
    );

    if (!foundSelectorAll?.ref.current) return;
    
    const isChecked = !!foundSelectorAll?.ref.current.checked;

    selectors.forEach((selector) => {
      selector.ref.current.checked = isChecked;
      selector.ref.current.style.background = isChecked
        ? bgColors.red
        : bgDefaultColor.disable;
    });
  };

  useEffect(() => {
    if (!ref?.current) return; // Verifica se a referência está definida

    // Atualiza o estado com o novo valor
    onSelectors((prevItems) => {
      const updatedSelectors = [
        ...prevItems,
        {
          ref: ref as RefObject<HTMLInputElement>,
          value,
        },
      ];

      return helperRemoveDuplicatesInArrayOfObjects<SelectorShape>(
        updatedSelectors,
        "value"
      );
    });
  }, [ref, value]);

  return {
    handleCheckedAll,
    ref,
  };
}
