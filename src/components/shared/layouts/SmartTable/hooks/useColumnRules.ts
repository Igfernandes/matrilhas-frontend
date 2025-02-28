import { useState } from "react";

type Props = {
  tHeadsWidth: Array<number>;
};

export function useColumnRules({ tHeadsWidth = [] }: Props) {
  const [amountHiddenCols, setAmountHiddenCols] = useState<Array<boolean>>([]);

  const handleTruncateColumn = (table?: HTMLTableElement) => {
    if (!table) return;

    const tableWidth = table?.clientWidth ?? 0;

    let widthColumns = tHeadsWidth.reduce(
      (prevWidth, currentWidth) => prevWidth + currentWidth,
      0
    );
    const arr: Array<boolean> = [];

    tHeadsWidth.forEach((tHeadWidth, index) => {
      widthColumns = widthColumns - tHeadWidth + 50;
      if (widthColumns >= tableWidth) {
        arr[tHeadsWidth.length - index] = true;
      } else {
        arr[tHeadsWidth.length - index] = false;
      }
    });

    setAmountHiddenCols(arr.filter((col) => typeof col === "boolean"));
  };

  return {
    handleTruncateColumn,
    amountHiddenCols,
  };
}
