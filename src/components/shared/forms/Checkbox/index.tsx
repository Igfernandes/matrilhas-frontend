import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { CheckboxProps } from "./type";
import { When } from "@components/utilities/When";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      type = "checkbox",
      label,
      id,
      dataTestId,
      errors,
      defaultValue,
      defaultChecked,
      ...props
    }: CheckboxProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;
    const { watch } = useFormContext();
    const [isChecked, setIsChecked] = useState<boolean>();

    useEffect(() => {
      const value = watch(props.name ?? "");

      setIsChecked(!!value);
    }, [props.name, watch]);

    return (
      <div>
        <div className="flex">
          <div
            className="border-2 border-secondary w-6 h-6 relative rounded-[.25rem] cursor-pointer"
            onClick={(ev) => {
              const div = ev.currentTarget;
              const input = div.querySelector("input");

              if (!input) return;

              setIsChecked(input.checked);
            }}
          >
            <input
              {...props}
              ref={ref}
              type={type}
              defaultChecked={isChecked ?? defaultChecked}
              defaultValue={defaultValue}
              data-testid={IdCurrent}
              id={IdCurrent}
              className={`${
                isChecked ? "bg-red" : "bg-textDisabled"
              } w-[90%] h-[90%] m-[1px] appearance-none rounded-[.2rem] cursor-pointer`}
            />
            <SymbolChecked className="absolute left-1 top-[25%]" />
          </div>
          <label htmlFor={IdCurrent} className="text-sm ml-2 cursor-pointer">
            {label}
          </label>
        </div>
        <When value={!!errors}>
          <div>
            <span>{errors?.message}</span>
          </div>
        </When>
      </div>
    );
  }
);
