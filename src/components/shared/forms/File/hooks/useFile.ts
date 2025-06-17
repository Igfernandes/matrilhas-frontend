import { useState } from "react";
import { useFormContext } from "react-hook-form";

export function useFile() {
  const { watch, setValue } = useFormContext();
  const [currentValue, setCurrentValue] = useState<File>();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return {
    setCurrentValue,
    watch,
    setValue,
    currentValue,
    isShowModal,
    setIsShowModal,
  };
}
