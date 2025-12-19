import { StepItemProps } from "./type";
import { statusColors } from "@assets/colors/default";
import { othersColors } from "@assets/colors/colors";
import { SymbolChecked } from "@assets/Icons/white/SymbolChecked";
import { When } from "@components/utilities/When";
import { useRef } from "react";

export function StepItem({ title, id, width, setStepActive, active }: StepItemProps) {
  const STATUS_STYLED = useRef({
    SUCCESS: {
      color: statusColors.success,
    },
    PENDENT: {
      color: statusColors.void,
    },
  });

  return (
    <div className="flex-auto mr-4" style={{
      width: `${width}%`
    }}>
      <div className="flex items-center">
        <div>
          <p
            className="border-[1px] inline-block border-zinc-300 w-6 h-6 rounded-2xl"
          >
            <span
              className="block w-full h-full rounded-2xl pt-[7px] pl-[5px]"
              style={{
                background: active
                  ? othersColors.primary
                  : "#fff",
              }}
            >
              <When value={active}>
                <SymbolChecked />
              </When>
            </span>
          </p>
        </div>
        <div className="w-full mb-2 ml-2">
          <hr className="text-zinc-300" />
        </div>
      </div>
      <div>
        <div>
          <span onClick={() => setStepActive(id)} className="text-xs text-zinc-700 hover:text-primary cursor-pointer font-medium">{`Visualizar`}</span>
        </div>
        <div>
          <p style={{
            color: STATUS_STYLED.current[active ? "SUCCESS" : "PENDENT"].color as string,
          }} className="text-base md:text-lg">
            <strong>{title}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
