import { When } from "@components/utilities/When";
import { useTableContext } from "../../../contexts/table";

type Props = {
  tHeads: Array<string>;
  widths?: Array<number>;
};

export function THead({ tHeads, widths = [] }: Props) {
  const { amountHiddenCols } = useTableContext();

  return (
    <thead>
      <tr className=" bg-tertiary bor">
        {tHeads.map((tHead, key) => (
          <When
            key={`thead_${tHead}`}
            value={
              (key > 0 && key < tHeads.length - 1 && !amountHiddenCols[key]) ||
              key == 0 ||
              key == tHeads.length - 1
            }
          >
            <th
              style={{
                width: widths ? widths[key] : "auto",
              }}
              className="font-normal px-2 py-1 bg-secondary text-left"
            >
              {tHead}
            </th>
          </When>
        ))}
      </tr>
    </thead>
  );
}
