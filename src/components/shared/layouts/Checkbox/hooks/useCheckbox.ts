import { useState } from "react";

export function useCheckbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return {
    setIsChecked,
    isChecked,
  };
}
