import { useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import { OptionsShape } from "../type";

type Props = {
  name: string;
  options: OptionsShape[];
};

export function useSelect({ name, options }: Props) {
  const { setValue, watch } = useFormContext();
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const selected = useMemo(() => {
    const selectedOption = options.find(
      (option) => option.value == watch(name)
    );

    return selectedOption ? selectedOption.text : "";
  }, [options, watch, name]);

  const handleChangeValue = (name: string, option: OptionsShape) => {
    setValue(name, String(option.value));

  };

  const handleToggleList = (isShowList: boolean) => {
    setIsShowList(isShowList);
  };
  const handleSearch = (search: string) => {
    setSearch(search);
  };
  return {
    handleChangeValue,
    handleToggleList,
    isShowList,
    selected,
    handleSearch,
    search,
  };
}
