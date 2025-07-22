import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { OptionsShape } from "../type";

type Props = {
  name: string;
};

export function useSelect({ name }: Props) {
  const { setValue, watch } = useFormContext();
  const [selected, setSelected] = useState<string>(watch(name));
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleChangeValue = (name: string, option: OptionsShape) => {
    setValue(name, String(option.value));
    setSelected(option.value ? option.text : "");
  };

  const handleToggleList = (isShowList: boolean) => {
    setIsShowList(isShowList);
  };
  const handleSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    setSelected(watch(name));
  }, [watch(name)]);

  return {
    handleChangeValue,
    handleToggleList,
    isShowList,
    selected,
    handleSearch,
    search,
  };
}
