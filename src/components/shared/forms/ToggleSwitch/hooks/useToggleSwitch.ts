import { OptionsSwitch } from "../type";

export function useToggleSwitch() {
  const getStyledSwitchButton = ({ left }: OptionsSwitch, value: string) => {
    if (value === left.value) {
      return "left-[65%]";
    } else {
      return "left-1";
    }
  };

  return {
    getStyledSwitchButton,
  };
}
