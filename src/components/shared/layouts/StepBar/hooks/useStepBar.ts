import { useMemo, useState } from "react";
import { HookStepBarProps } from "../type";

export function useStepBar({ steps }: HookStepBarProps) {
  const [stepActive, setStepActive] = useState<number>(1);
  const stepWidthItem = useMemo(() => 98 / steps.length, [steps.length]);

  return {
    setStepActive,
    stepActive,
    stepWidthItem,
  };
}
