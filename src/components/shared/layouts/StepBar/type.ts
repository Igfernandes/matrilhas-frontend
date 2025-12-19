import { Dispatch, SetStateAction } from "react";

export type StepBarProps = {
  steps: Array<StepData>;
  setStepActive: Dispatch<SetStateAction<number>>;
};

export type HookStepBarProps = {
  steps: Array<StepData>;
};

type StepData = {
  title: string;
  active?: boolean;
};

export type StepStatus = "COMPLETE" | "PENDENT" | "PROGRESS";

export type StepItemProps = {
  title: string;
  id: number;
  active?: boolean;
  width: number;
  setStepActive: React.Dispatch<React.SetStateAction<number>>;
};
