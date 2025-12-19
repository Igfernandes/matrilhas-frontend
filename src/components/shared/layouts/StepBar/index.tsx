import { StepBarProps } from "./type";
import { StepItem } from "./StepItem";
import { useStepBar } from "./hooks/useStepBar";

export function StepBar({ steps = [], setStepActive }: StepBarProps) {
  const { stepWidthItem } = useStepBar({ steps });

  return (
    <div className="bg-white p-6 rounded-xl overflow-x-auto none-scroll">
      <div className="flex justify-between min-w-[450px]">
        {steps.map(({ title, active }, index) => (
          <StepItem
            title={title}
            id={index + 1}
            key={index + 1}
            active={active}
            width={stepWidthItem}
            setStepActive={setStepActive}
          />
        ))}
      </div>
    </div>
  );
}
