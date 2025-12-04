import i18n from "@configs/i18n";
import { Option } from "./Option";
import { useGroupsTab } from "./hooks/useGroupsTab";
import { OptionShape } from "./type";
import { useEffect } from "react";

type Props = {
  currentOptions: Array<OptionShape>;
  onChange: ((name: string, value: string) => void) | undefined;
};

export function Options({ onChange, currentOptions }: Props) {
  const {
    handleAddOption,
    handleRemoveOption,
    handleChangeOption,
    setOptions,
    options,
  } = useGroupsTab();

  useEffect(() => {
    setOptions(currentOptions);
  }, []);

  useEffect(() => {
    if (onChange) onChange("options", JSON.stringify(options));
  }, [options]);

  return (
    <div>
      <div className="text-end">
        <button
          onClick={handleAddOption}
          className="bg-red text-white p-2"
          type="button"
        >
          {i18n("Words.add")}
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-disabled border-2">{i18n("Words.text")}</th>
            <th className="bg-disabled border-2">{i18n("Words.value")}</th>
            <th className="bg-disabled border-2"></th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, key) => (
            <Option
              key={`option_row_${key}`}
              handleRemoveOption={handleRemoveOption}
              handleChangeOption={handleChangeOption}
              option={option}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
