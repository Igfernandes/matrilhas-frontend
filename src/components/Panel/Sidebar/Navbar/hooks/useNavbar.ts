import { othersColors, textColors } from "@assets/colors/colors";
import { useState } from "react";

export function useNavbar() {
  const [itemColor, setItemColor] = useState<string>(othersColors.primary);

  const handleToggleItemColor = (isHover: boolean) => {
    setItemColor(isHover ? textColors.red : othersColors.primary);
  };
  
  return {
    itemColor,
    handleToggleItemColor,
  };
}
