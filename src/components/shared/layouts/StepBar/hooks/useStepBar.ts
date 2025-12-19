import { useEffect, useState } from "react";
import { HookStepBarProps } from "../type";

export function useStepBar({ steps }: HookStepBarProps) {
  const [stepActive, setStepActive] = useState<number>(1);
  const [stepWidthItem, setStepWidthItem] = useState<number>(98);


  useEffect(() => {
    const stepsLength = steps.length;
    setStepWidthItem(stepsLength / 98);
  }, [steps]);

  return {
    setStepActive,
    stepActive,
    stepWidthItem,
  };
}
