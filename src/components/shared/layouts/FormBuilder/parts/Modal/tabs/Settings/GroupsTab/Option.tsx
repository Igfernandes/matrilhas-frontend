import { Close } from "@assets/Icons/black/CloseClean";
import { ChangeEvent } from "react";
import { OptionShape } from "./type";

type Props = {
  handleRemoveOption: (id: number) => void;
  handleChangeOption: (
    ev: ChangeEvent<HTMLInputElement>,
    id: number,
    prop: keyof OptionShape
  ) => void;
  option: OptionShape;
};

export function Option({
  option,
  handleChangeOption,
  handleRemoveOption,
}: Props) {
  return (
    <tr>
      <td>
        <input
          className="w-full p-1 border-2"
          type="text"
          onChange={(ev) => handleChangeOption(ev, option.id, "text")}
          value={option.text}
        />
      </td>
      <td>
        <input
          className="w-full p-1 border-2"
          type="text"
          onChange={(ev) => handleChangeOption(ev, option.id, "value")}
          value={option.value}
        />
      </td>
      <td className="text-center">
        <button onClick={() => handleRemoveOption(option.id)} type="button">
          <Close />
        </button>
      </td>
    </tr>
  );
}
