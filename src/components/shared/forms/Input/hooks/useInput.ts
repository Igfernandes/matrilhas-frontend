import { FormEvent, useState } from "react";

export function useInput() {
  const [labelClassState, setLabelStateClass] =
    useState<string>("left-3 top-3");

  const changeLabelClass = (state: "UP" | "DOWN") => {
    setLabelStateClass(state == "UP" ? "left-3 top-2 text-xs" : "left-3 top-3");
  };

  const handleTransitionLabel = (ev: FormEvent<HTMLInputElement>) => {
    const input = ev.currentTarget;
    const currentValue = input.value;

    if (currentValue || ev.type == "focus") return changeLabelClass("UP");

    changeLabelClass("DOWN");
  };

  return {
    labelClassState,
    handleTransitionLabel,
    changeLabelClass,
  };
}
