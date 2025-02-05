import { When } from "@components/utilities/when";
import { usePassword } from "./hooks/usePassword";
import Image from "next/image";
import { PasswordProps } from "./type";
import { useEffect } from "react";
import { EyeOpened } from "@assets/Icons/black/EyeOpened";
import { EyeClosed } from "@assets/Icons/black/EyeClosed";

export function Password({
  dataTestId,
  isLoading = false,
  className,
  id,
  label,
  ...rest
}: PasswordProps) {
  const IdCurrent = id ?? dataTestId;
  const {
    labelClassState,
    handleTransitionLabel,
    handleToggleTypeInput,
    isShowPassword,
  } = usePassword();

  useEffect(() => {}, []);

  return (
    <div className="relative ">
      <label
        htmlFor={IdCurrent}
        className={`absolute transition-all duration-350 ${labelClassState}`}
      >
        {label}
      </label>
      <input
        onFocus={handleTransitionLabel}
        onBlur={handleTransitionLabel}
        {...rest}
        className={`${className} w-full h-12 px-3 pb-4 pt-8 bg-white border-secondary border-2 rounded-lg text-textPrimary`}
        data-testid={dataTestId}
        id={IdCurrent}
        type={isShowPassword ? "text" : "password"}
      />
      <div
        className="eye absolute right-4 top-4 cursor-pointer"
        onClick={handleToggleTypeInput}
      >
        <When value={!isShowPassword}>
          <EyeClosed />
        </When>
        <When value={isShowPassword}>
          <EyeOpened />
        </When>
      </div>
      <When value={isLoading}>
        <Image
          className="loading absolute w-[2rem] right-2 top-2"
          alt=""
          src=""
        />
      </When>
    </div>
  );
}
