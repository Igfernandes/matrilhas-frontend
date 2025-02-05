import { When } from "@components/utilities/when";
import { useInput } from "./hooks/useInput";
import { InputProps } from "./type";
import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";

export function Input({
  dataTestId,
  isLoading = false,
  className,
  id,
  label,
  ...rest
}: InputProps) {
  const { labelClassState, handleTransitionLabel } = useInput();
  const IdCurrent = id ?? dataTestId;

  return (
    <div className="relative">
      <label
        htmlFor={IdCurrent}
        className={`absolute transition-all duration-350 ${labelClassState}`}
      >
        {label}
      </label>
      <input
        onFocus={handleTransitionLabel}
        onBlur={handleTransitionLabel}
        className={`${className} w-full px-3 pt-5 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm`}
        data-testid={dataTestId}
        id={IdCurrent}
        {...rest}
      />
      <When value={isLoading}>
        <RotateClockwise className="absolute right-3 top-4 animate-spin" fill="black"   />
      </When>
    </div>
  );
}
