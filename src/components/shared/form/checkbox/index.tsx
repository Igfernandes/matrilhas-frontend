import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useCheckbox } from "./hooks/useCheckbox";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type?: "checkbox";
  label?: string;
  dataTestId: string;
};

export function Checkbox({
  type = "checkbox",
  label,
  id,
  dataTestId,
  ...props
}: Props) {
  const { handleChecked, isChecked } = useCheckbox();
  const IdCurrent = id ?? dataTestId;

  return (
    <div className="flex">
      <div
        className="border-2 border-secondary w-6 h-6 relative rounded-[.25rem] cursor-pointer"
        onClick={handleChecked}
      >
        <input
          {...props}
          type={type}
          defaultChecked={isChecked}
          data-testid={IdCurrent}
          className={`${
            isChecked ? "bg-red" : "bg-textDisabled"
          } w-[.95rem] h-[.9rem] appearance-none rounded-[.2rem] cursor-pointer`}
        />
        <SymbolChecked className="absolute left-1 top-[25%]" />
      </div>
      <label htmlFor={IdCurrent} className="text-sm ml-2">
        {label}
      </label>
    </div>
  );
}
