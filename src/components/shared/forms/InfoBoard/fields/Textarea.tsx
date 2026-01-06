import { useFormContext } from "react-hook-form";
import { TFields } from "../type";

export function TTextarea({
  label,
  name,
  className,
  type,
  defaultValue,
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
        <div className="flex">
          <textarea
            {...props}
            {...register(name)}
            className={`w-full pl-2 py-1 bg-zinc-100 ${className}`}
            id={currentId ?? `input-${name}`}
          >
            {String(defaultValue)}
          </textarea>
        </div>
      </td>
    </tr>
  );
}
