import { useState } from "react";

export function useCheckbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return {
    handleChecked,
    isChecked,
  };
}
