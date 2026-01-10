import { When } from "@components/utilities/When";
import React, { useEffect } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";
import { useInput } from "./hooks/useInput";
import { handleMaskCPF } from "@helpers/string";
import { useFormContext } from "react-hook-form";
import { CPFProps } from "./type";

export const CPF = React.forwardRef<HTMLInputElement, CPFProps>(
  function CPF(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      placeholder,
      required,
      ...rest
    }: CPFProps,
    ref
  ) {
    const { labelStyledState, handleTransitionLabel, changeLabelClass } =
      useFieldsAnimation();
    const IdCurrent = id ?? dataTestId;
    const { isUpLabel } = useInput();
    const { watch } = useFormContext();
    const value = watch(name);

    useEffect(() => {
      if (isUpLabel({ ...rest, placeholder, value })) {
        changeLabelClass("UP");
      }
    }, [value, placeholder, rest, isUpLabel, name, changeLabelClass]);

    return (
      <>
        <div className={`relative ${errors?.message ? "border-yellow" : ""}`}>
          <label
            htmlFor={IdCurrent}
            className={`absolute text-x md:text-base transition-all duration-350 line-clamp-1`}
            style={labelStyledState}
          >
            {label}
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <input
            {...rest}
            ref={ref}
            type="tel"
            name={name}
            onChangeCapture={(ev: React.ChangeEvent<HTMLInputElement>) => {
              if (rest.onChange) rest.onChange(ev);
              handleMaskCPF(ev)
            }}
            onFocus={handleTransitionLabel}
            onBlur={handleTransitionLabel}
            className={`${className} ${!!errors ? "border-amber-500 outline-amber-500" : ""
              } w-full px-3 pt-7 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
