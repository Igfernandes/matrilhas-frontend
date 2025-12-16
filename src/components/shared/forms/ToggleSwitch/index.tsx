import { FieldValues, Path, PathValue } from "react-hook-form";
import { ToggleSwitchProps } from "./type";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useEffect, useState } from "react";
import { useToggleSwitch } from "./hooks/useToggleSwitch";

export function ToggleSwitch<Payload extends FieldValues>({
  options: { left, right },
  setValue,
  name,
  defaultValue,
  errors,
}: ToggleSwitchProps<Payload>) {
  const [switched, setSwitched] = useState<string>(String(left.value));
  const { getStyledSwitchButton } = useToggleSwitch();

  useEffect(() => {
    setValue(name, switched as PathValue<Payload, Path<Payload>>);
  }, [setValue, switched, name]);

  useEffect(() => {
    if (!defaultValue) return;

    setSwitched(String(defaultValue));
  }, [defaultValue]);

  return (
    <>
      <div className="text-right">
        <div className="relative bg-primary px-3 py-[9px] rounded-full inline-block">
          <div className="flex text-sm">
            <div
              className={`switch-left relative ${
                switched === left.value ? "text-white" : "opacity-0"
              }`}
            >
              <span>{left.text}</span>
            </div>
            <div
              className={`switch-right  ${
                switched === right.value ? "text-white" : "opacity-0"
              }`}
            >
              <span>{right.text}</span>
            </div>
          </div>
          <div
            onClick={() =>
              setSwitched(
                String(switched === left.value ? right.value : left.value)
              )
            }
            className={`absolute top-[3px] border-[1rem] inline-block rounded-full border-white cursor-pointer ${getStyledSwitchButton(
              { left, right },
              switched
            )} transition-all duration-150`}
          ></div>
        </div>
      </div>
      <div>
        <ErrorMessage errors={errors?.message} />
      </div>
    </>
  );
}
