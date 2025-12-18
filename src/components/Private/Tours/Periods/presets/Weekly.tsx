import { FieldErrors, useFormContext, UseFormRegister } from "react-hook-form";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { Select } from "@components/shared/forms/Select";
import { useRef } from "react";
import { PeriodsPayload } from "../PeriodsSchemas";

type Props = {
    register: UseFormRegister<PeriodsPayload>;
    errors: FieldErrors<PeriodsPayload>;
    id: number;
}

export function WeeklyFields({ register, errors, id }: Props) {
    const weekdays = useRef<string[]>(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]);
    const { watch } = useFormContext()
    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[49%] my-2">
                <Select defaultValue={watch(`period.${id}.by_weekday.0`)} required={true} options={weekdays.current.map((weekday) => ({
                    text: i18n(`Words.${weekday.toLowerCase()}`),
                    value: weekday
                }))} dataTestId={`period_${dayjs().millisecond()}`} {...register(`period.${id}.by_weekday.0`)} label={i18n("Words.start")} errors={errors?.period?.[id]?.by_weekday?.[0]} />
            </div>
            <div className="w-full md:w-[49%] my-2">
                <Select defaultValue={watch(`period.${id}.by_weekday.1`)} required={true} options={weekdays.current.map((weekday) => ({
                    text: i18n(`Words.${weekday.toLowerCase()}`),
                    value: weekday
                }))} dataTestId={`period_${dayjs().millisecond()}`} {...register(`period.${id}.by_weekday.1`)} label={i18n(`Words.end`)} errors={errors?.period?.[id]?.by_weekday?.[1]} />
            </div>
        </div>
    )
}