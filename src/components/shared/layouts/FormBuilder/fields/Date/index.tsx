import { When } from "@components/utilities/When";

import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import React from "react";

import { InputProps } from "./type";

export function Date({
  isLoading = false,
  className,
  id,
  label,
  errors,
  name,
  required,
  ...rest
}: InputProps) {
  const IdCurrent = id;

  return (
    <>
      <div
        className={`relative ${
          errors?.message ? "border-yellow" : ""
        } w-full my-4`}
      >
        <label
          htmlFor={IdCurrent}
          className={`absolute transition-all duration-350 line-clamp-1 left-4 top-2 text-[.75rem]`}
        >
          {label}
          <When value={!!required}>
            <span className="text-red">*</span>
          </When>
        </label>
        <input
          {...rest}
          name={name}
          required={required === "true"}
          type={"date"}
          className={`${className ?? ""} ${
            !!errors ? "border-amber-500 outline-amber-500" : ""
          } w-full px-3 pt-8 pb-4 bg-white border-secondary border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
          id={IdCurrent}
        />
        <When value={isLoading}>
          <RotateClockwise
            className="absolute right-3 top-4 animate-spin"
            fill="black"
          />
        </When>
      </div>
    </>
  );
}
