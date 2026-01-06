import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";
import { TFields } from "../type";

export function TTime({
  label,
  name,
  className,
  defaultValue,
  type,
  ...props
}: TFields) {
  const { register } = useFormContext();
  const currentId = `input_${name}`;

  return (
    <tr
      className={`relative border-t-2 border-t-zinc-200 ${type == "hidden" ? "hidden" : ""
        }`}
    >
      <td className="py-2 pl-4 w-2/6">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="flex">
          <input
            {...props}
            type={"time"}
            {...register(name)}
            defaultValue={dayjs(defaultValue).format(
              i18n("Configs.format.date")
            )}
            placeholder=""
            className={`w-full pl-2 py-1 bg-zinc-100 ${className}`}
            id={currentId}
          />
        </div>
      </td>
    </tr>
  );
}
