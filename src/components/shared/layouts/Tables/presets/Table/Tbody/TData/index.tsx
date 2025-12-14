import { When } from "@components/utilities/When";
import { PossiblesTypesToComponents } from "../../../../../../../../types/primitive";
import { useTableContext } from "../../../../contexts/table";
import { TDataProps } from "./type";
import { useSelectorContext } from "@components/shared/layouts/Tables/contexts/selectors";
import { Selector } from "@components/shared/layouts/Tables/utilities/Selector";

export function TData<TableData>({ data, keyRow }: TDataProps<TableData>) {
  const { amountHiddenCols } = useTableContext();
  const { selectors } = useSelectorContext();

  return data.map((value, index) => {
    const isVisible =
      index === 0 || index === data.length - 1 || !amountHiddenCols[index];

    return (
      <When key={`when_${keyRow}_${index}`} value={isVisible}>
        <td key={`data_${keyRow}_${index}`} className="px-1">
          <span className="line-clamp-1">
            <When value={!!selectors.find(s => s.value === value)}>
              <Selector value={value as string} />
            </When>
            <When value={!selectors.find(s => s.value === value)}>
              {value as PossiblesTypesToComponents}
            </When>
          </span>
        </td>
      </When>
    );
  });
}
