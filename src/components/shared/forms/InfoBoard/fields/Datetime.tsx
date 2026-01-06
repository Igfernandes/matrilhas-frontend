import { Calendar } from "@assets/Icons/black/Calendar";;
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";
import { TFields } from "../type";
import { useDatetime } from "../../DateTime/hooks/useDatetime";
import { useEffect } from "react";

export function TDatetime({
  label,
  name,
  className,
  type,
  dataTestId,
  id,
  ...props
}: TFields) {
  const { watch, setValue, register } = useFormContext();
  const currentId = id ?? dataTestId;
  const { handleUpdateDatetimePreview, datetime, setDatetime } =
    useDatetime();
  const currentDateValue = watch(name);

  useEffect(() => {
    setDatetime(currentDateValue ? dayjs(currentDateValue).format("DD/MM/YYYY HH:mm") : "");
  }, [currentDateValue, setDatetime]);

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
            onChange={(ev) => {
              const value = ev.currentTarget.value;
              const datetimeUpdated = dayjs(value, "DD/MM/YYYY HH:mm");

              if (datetimeUpdated.isValid()) {
                setValue(name, datetimeUpdated.format("YYYY-MM-DD HH:mm"));
              } else if (!value) {
                setValue(name, "");
              }
              handleUpdateDatetimePreview(value);
            }}
            defaultValue={datetime ?? ""}
            placeholder={"DD/MM/YYYY HH:mm"}
            type={"text"}
            className={`${className ?? ""
              }  w-full px-2 py-1 border-secondary bg-zinc-100  border-2 rounded-lg text-primary text-md disabled:bg-disable`}
            id={currentId ?? `datetime_${name}`}
          />
          <div className="absolute right-4 top-4">
            <label htmlFor={`calendar_${name}`}>
              <Calendar />
            </label>
            <input
              {...props}
              {...register(name)}
              type="datetime-local"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                const formatted = ev.currentTarget.value.replace("T", " ");
                setValue(name, formatted);
                handleUpdateDatetimePreview(formatted);
              }}
              id={`calendar_${name}`}
              className="opacity-0 absolute w-4 h-full top-0"
            />
          </div>
        </div>
      </td>
    </tr>
  );
}
