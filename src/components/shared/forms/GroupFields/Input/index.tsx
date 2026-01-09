import { InputProps } from "./type";
import React from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { When } from "@components/utilities/When";
import { useFormContext } from "react-hook-form";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      dataTestId,
      className,
      id,
      errors,
      name,
      placeholder,
      disabled,
      handledChange,
      ...rest
    }: InputProps,
    ref
  ) {
    const { watch } = useFormContext();
    const IdCurrent = id ?? dataTestId;
    const value = watch(name ?? "");
    return (
      <>
        <div className="relative my-2">
          <input
            {...rest}
            ref={ref}
            name={name}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              if (rest.onChange) rest.onChange(ev);
              if (handledChange) handledChange(ev);
            }}
            disabled={disabled}
            maxLength={150}
            placeholder={placeholder}
            className={`${className} ${!!errors ? "border-amber-500 outline-amber-500" : ""
              } w-full pl-2 pr-14 py-1 bg-white border-secondary border-2 rounded-lg text-primary text-md`}
            data-testid={dataTestId}
            id={IdCurrent}
          />
          <When value={!disabled}>
            <span className="absolute right-4 bottom-[.65rem] text-xs">{value?.length ?? 0}/{150}</span>
          </When>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
