import { useFormContext } from "react-hook-form";
import { TFields } from "../type";
import { When } from "@components/utilities/When";

export function TNumber({
  label,
  name,
  className,
  type,
  prefix,
  required,
  defaultValue = "0",
  dataTestId,
  id,
  ...props
}: TFields) {
  const { register } = useFormContext();
  const currentId = id ?? dataTestId;
  return (
    <tr
      className={`border-t-2 border-t-zinc-200 ${type == "hidden" ? "hidden" : ""
        }`}
    >
      <td className="py-2 pl-4 w-2/6">
        <strong>{label}</strong>
      </td>
      <td className="py-2">
        <div className="relative flex">
          <When value={!!prefix}>
            <span className="absolute top-2 left-2 text-md">{prefix}</span>
          </When>
          <input
            {...props}
            {...register(name, {
              valueAsNumber: true,
            })}
            type="number"
            defaultValue={String(defaultValue)}
            required={required === "true"}
            className={`w-full ${prefix ? "pl-9" : "pl-2"} text-md pt-2  py-1 bg-zinc-100 ${className}`}
            id={currentId ?? `input_number_${name}`}
          />
        </div>
      </td>
    </tr>
  );
}
