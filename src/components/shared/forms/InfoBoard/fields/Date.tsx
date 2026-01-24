import { Calendar } from "@assets/Icons/black/Calendar";
import i18n from "@configs/i18n";
import { handleMaskDate } from "@helpers/date";
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";
import { TFields } from "../type";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useDate } from "../../Date/hooks/useDate";
import { useEffect } from "react";

dayjs.extend(customParseFormat);
export function TDate({
  label,
  name,
  className,
  defaultValue,
  type,
  ...props
}: TFields) {
  const { register, setValue } = useFormContext();
  const currentId = `input_${name}`;
  const { setDate, date } = useDate()

  useEffect(() => {
    setDate(dayjs(defaultValue).format("DD/MM/YYYY"))
  }, [defaultValue, setDate])

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
            type={"text"}
            value={date}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
              const value = ev.currentTarget.value
              const currentValue = dayjs(value, "DD/MM/YYYY");

              if (currentValue.isValid()) {
                setValue(name, currentValue.format("YYYY-MM-DD"))
              }

              setDate(handleMaskDate(ev))
            }}
            defaultValue={dayjs(defaultValue).format(
              i18n("Configs.format.date")
            )}

            placeholder="Dia/Mes/Ano"
            className={`w-full pl-2 py-1 bg-zinc-100 ${className}`}
            id={currentId}
          />
          <div className="absolute right-4 top-4">
            <label htmlFor={`calendar_${name}`}>
              <Calendar />
            </label>
            <input
              {...register(name)}
              defaultValue={defaultValue}
              id={`calendar_${name}`}
              type="date"
              onChange={(ev) => {
                const value = ev.currentTarget.value;
                setValue(name, value)
                setDate(dayjs(value).format("DD/MM/YYYY"))
              }}
              className="opacity-0 absolute w-4 h-full top-0"
            />
          </div>
        </div>
      </td>
    </tr>
  );
}
