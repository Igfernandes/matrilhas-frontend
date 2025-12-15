import { SelectorProps } from "./type";
import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { bgColors } from "@assets/colors/colors";
import { bgDefaultColor } from "@assets/colors/default";
import { useMemo } from "react";
import { useSelectorContext } from "../../contexts/selectors";

export function Selector({ label, value, textSize, ...props }: SelectorProps) {
  const IdCurrent = `selector_${label}`;
  const { selectors, handleChangeSelector } = useSelectorContext();
  const isChecked = useMemo(() => {
    const currentSelector = selectors.find(
      (selector) => selector.value == value
    );

    return !!currentSelector?.isChecked;

  }, [selectors, value]);


  return (
    <div className="flex">
      <div className="border-2 border-secondary w-6 h-6 relative rounded-[.25rem] cursor-pointer">
        <input
          {...props}
          type={"checkbox"}
          value={value}
          id={IdCurrent}
          defaultChecked={isChecked}
          onChange={() => {
            handleChangeSelector(value)
          }}
          className={`w-[90%] h-[90%] m-[1px] appearance-none rounded-[.2rem] bg-disable cursor-pointer`}
          style={{
            background: isChecked ? bgColors.primary : bgDefaultColor.disable,
          }}
        />
        <label htmlFor={IdCurrent} className="cursor-pointer">
          <SymbolChecked className="absolute left-1 top-[25%]" />
        </label>
      </div>
      <label
        htmlFor={IdCurrent}
        className={`${textSize ? textSize : "text-base"} ml-2 cursor-pointer`}
      >
        {label}
      </label>
    </div>
  );
}
