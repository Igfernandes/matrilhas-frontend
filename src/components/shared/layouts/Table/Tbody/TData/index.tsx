import { When } from "@components/utilities/When";
import { PossiblesTypesToComponents } from "../../../../../../types/primitive";
import { useTableContext } from "../../contexts/Table";
import { TDataProps } from "./type";

export function TData<TableData>({ data, keyRow }: TDataProps<TableData>) {
  const { amountHiddenCols } = useTableContext();

  return data.map((value, key) => (
    <When
      key={`when_${keyRow}_${key}`}
      value={
        (key > 0 && key < data.length - 1 && !amountHiddenCols[key]) ||
        key == 0 ||
        key == data.length - 1
      }
    >
      <td key={`data_${keyRow}_${key}`} className="px-1">
        {value as PossiblesTypesToComponents}
      </td>
    </When>
  ));
}
