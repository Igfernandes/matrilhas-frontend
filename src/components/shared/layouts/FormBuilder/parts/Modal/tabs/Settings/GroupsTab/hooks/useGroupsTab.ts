import { ChangeEvent, useState } from "react";
import { OptionShape } from "../type";

export function useGroupsTab() {
  const defaultOption: OptionShape = { id: 1, text: "", value: "" };
  const [options, setOptions] = useState<Array<OptionShape>>([]);

  const handleRemoveOption = (id: number) => {
    const filteredOptions = options.filter((option) => option.id !== id);
    setOptions(filteredOptions);
  };

  const handleAddOption = () => {
    setOptions([
      ...options,
      { ...defaultOption, id: new Date().getTime() },
    ]);
  };

  const handleChangeOption = (
    ev: ChangeEvent<HTMLInputElement>,
    id: number,
    prop: keyof OptionShape
  ) => {
    setOptions(
      options.map((option) =>
        option.id === id
          ? { ...option, [prop]: ev.currentTarget.value }
          : option
      )
    );
  };

  return {
    handleRemoveOption,
    handleAddOption,
    handleChangeOption,
    options,
    setOptions
  };
}
