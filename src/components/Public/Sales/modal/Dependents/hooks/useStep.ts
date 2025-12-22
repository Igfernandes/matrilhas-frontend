import { useCallback, useState } from "react";

export function useStep() {
  const [step, setStep] = useState<"FORM" | "PREVIEW">("FORM");

  const handleStepChange = useCallback((step: "FORM" | "PREVIEW") => {
    setStep(step);
  }, []);

  return {
    step,
    handleStepChange,
  };
}
