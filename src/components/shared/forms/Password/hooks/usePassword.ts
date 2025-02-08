import { FormEvent, useState } from "react";

export function usePassword() {
  const [labelClassState, setLabelStateClass] =
    useState<string>("left-3 top-3");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const changeLabelClass = (state: "UP" | "DOWN") => {
    setLabelStateClass(state == "UP" ? "left-3 top-2 text-xs" : "left-3 top-3");
  };

  const handleTransitionLabel = (ev: FormEvent<HTMLInputElement>) => {
    const input = ev.currentTarget;
    const currentValue = input.value;

    if (currentValue || ev.type == "focus") return changeLabelClass("UP");

    changeLabelClass("DOWN");
  };

  const handleToggleTypeInput = () => {
    setIsShowPassword(!isShowPassword);
  };

  return {
    labelClassState,
    handleTransitionLabel,
    isShowPassword,
    handleToggleTypeInput,
    changeLabelClass
  };
}
