import { FormEvent, useState } from "react";

export function useInput() {
  const [labelClassState, setLabelStateClass] =
    useState<string>("left-3 top-3");

  const handleTransitionLabel = (ev: FormEvent<HTMLInputElement>) => {
    const input = ev.currentTarget;
    const currentValue = input.value

    if (currentValue || ev.type == "focus")
      return setLabelStateClass("left-3 top-2 text-xs");

    setLabelStateClass("left-3 top-3");
  };

  return {
    labelClassState,
    handleTransitionLabel,
  };
}
