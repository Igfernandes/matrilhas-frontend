import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import React, { useEffect } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import { Calendar } from "@assets/Icons/black/Calendar";
import { handleMaskDate } from "@helpers/date";
import { useDate } from "./hooks/useDate";

export const Date = React.forwardRef<HTMLInputElement, InputProps>(
  function Date(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      name,
      required,
      handledChange,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;
    const { setValue, watch } = useFormContext();
    const { setDate, date } = useDate()
    const currentDateValue = watch(name)

    useEffect(() => {
      setDate(currentDateValue ? dayjs(currentDateValue).format("DD/MM/YYYY") : "");
    }, [currentDateValue, setDate]);

    return (
      <>
        <div className={`relative ${errors?.message ? "border-yellow" : ""}`}>
          <label
            htmlFor={IdCurrent}
            className={`absolute top-2 left-4 text-[.75rem] transition-all duration-350 line-clamp-1`}
          >
            {label}
            <When value={required}>
              <span className="text-red">*</span>
            </When>
          </label>
          <input placeholder={"DD/MM/AAAA"}
            className={`${className} ${!!errors ? "border-amber-500 outline-amber-500" : ""
              } w-full px-3 pt-6 pb-2 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}

            id={IdCurrent} type="text"
            value={date}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              const value = ev.currentTarget.value
              const currentValue = dayjs(value, "DD/MM/YYYY");
              if (handledChange) handledChange(ev);

              if (currentValue.isValid()) {
                setValue(name, currentValue.format("YYYY-MM-DD"))
              }

              setDate(handleMaskDate(ev))
            }} />
          <div className="absolute right-3 top-5">
            <Calendar />
            <input
              {...rest}
              ref={ref} data-testid={dataTestId}
              type={"date"}
              name={name}
              onChange={(ev) => {
                const value = ev.currentTarget.value;
                setValue(name, value)
                setDate(dayjs(value).format("DD/MM/YYYY"))
              }}
              className="opacity-0 absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
