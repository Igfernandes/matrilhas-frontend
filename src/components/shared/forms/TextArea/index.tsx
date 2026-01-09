import { When } from "@components/utilities/When";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { TextAreaProps } from "./type";
import { useTextarea } from "./hooks/useInput";
import { useFieldsAnimation } from "./hooks/useFieldsAnimation";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      placeholder,
      required,
      defaultValue,
      handledChange,
      maxLength,
      ...rest
    }: TextAreaProps,
    ref
  ) {
    const { labelStyledState, handleTransitionLabel, changeLabelClass } =
      useFieldsAnimation();
    const IdCurrent = id ?? dataTestId;
    const { watch } = useFormContext();

    const { isUpLabel } = useTextarea();
    const value = watch(name); // obtém o valor atual

    useEffect(() => {
      if (isUpLabel({ ...rest, placeholder, value })) {
        changeLabelClass("UP");
      }
    }, [value, placeholder, rest, isUpLabel, changeLabelClass]);

    return (
      <>
        <div className="relative">
          <label
            htmlFor={IdCurrent}
            className={`absolute transition-all duration-350 bg-white p-1 pt-2 w-[95%]`}
            style={{
              ...labelStyledState,
            }}
          >
            {label}
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <textarea
            {...rest}
            ref={ref}
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handledChange) handledChange(ev);
            }}
            onFocus={handleTransitionLabel}
            onBlur={handleTransitionLabel}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={`${className} ${!!errors ? "border-amber-500 outline-amber-500" : ""
              } w-full px-3 pt-[1.9rem] pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
          <When value={!!maxLength}>
            <span className="absolute right-4 bottom-[.55rem] p-1 text-xs bg-white">{value?.length ?? 0}/{maxLength}</span>
          </When>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
