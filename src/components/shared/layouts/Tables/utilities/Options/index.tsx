import { BtnDots } from "@assets/Icons/black/BtnDots";
import { When } from "@components/utilities/When";
import { TableOptionsProps } from "./type";
import { useOptions } from "./hooks";

export function Options({ actions }: TableOptionsProps) {
  const { handleToggleOptions, showOptions } = useOptions();

  if (actions.length === 0) return <></>;

  return (
    <div className="relative" onMouseLeave={() => handleToggleOptions(false)}>
      <div>
        <BtnDots
          onMouseEnter={() => handleToggleOptions(true)}
          className="cursor-pointer"
        />
      </div>
      <When value={showOptions}>
        <div className="absolute top-[50%] right-0 bg-white border-2 border-b-0 border-primary z-[1] min-w-[65vw] md:min-w-[17vw]  rounded-md shadow-sm">
          <ul>
            {actions.map((action, index) => (
              <li
                className="px-3 py-2 cursor-pointer border-b border-b-gray-200 last:border-b-0 pb-2 hover:bg-primary hover:text-white"
                key={`btn_config_item_${index}`}
                onClick={() => {
                  handleToggleOptions(false)
                  action.handle()
                }}
              >
                <span>{action.text}</span>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </When>
    </div>
  );
}
