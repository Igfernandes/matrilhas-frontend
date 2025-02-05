import { RotateClockwise } from "@assets/Icons/white/RotateClockwise";
import { When } from "@components/utilities/when";
import { ButtonProps } from "./type";

export function Button({
  text,
  className,
  LeftIcon,
  rightIcon,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <div>
      <button
        {...props}
        className={`${className} flex items-center justify-center text-white bg-red w-[82.98%] px-3 min-h-[48] rounded-md mx-auto disabled:bg-disable disabled:text-disabled`}
      >
        <When value={isLoading}>
          <RotateClockwise className="mr-2 animate-spin" />
        </When>
        <When value={!!LeftIcon}>{LeftIcon}</When>
        <span>{text}</span>
        <When value={!!rightIcon}>{rightIcon}</When>
      </button>
    </div>
  );
}
