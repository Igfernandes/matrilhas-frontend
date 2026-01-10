import { FieldErrors, UseFormRegister } from "react-hook-form";
import dayjs from "dayjs";
import { Select } from "@components/shared/forms/Select";
import { useRef } from "react";
import { PeriodsPayload } from "../PeriodsSchemas";
import { useI18n } from "@contexts/I18n";

type Props = {
    register: UseFormRegister<PeriodsPayload>;
    errors: FieldErrors<PeriodsPayload>;
    id: number;
}

export function WeeklyFields({ register, errors, id }: Props) {
    const { t } = useI18n()
    const weekdays = useRef<string[]>(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]);
    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[49%] my-2">
                <Select  required={true} options={weekdays.current.map((weekday) => ({
                    text: t(`Words.${weekday.toLowerCase()}`),
                    value: weekday
                }))} dataTestId={`period_${dayjs().millisecond()}`} {...register(`period.${id}.by_weekday.0`)} label={t("Words.start")} errors={errors?.period?.[id]?.by_weekday?.[0]} />
            </div>
            <div className="w-full md:w-[49%] my-2">
                <Select  required={true} options={weekdays.current.map((weekday) => ({
                    text: t(`Words.${weekday.toLowerCase()}`),
                    value: weekday
                }))} dataTestId={`period_${dayjs().millisecond()}`} {...register(`period.${id}.by_weekday.1`)} label={t(`Words.end`)} errors={errors?.period?.[id]?.by_weekday?.[1]} />
            </div>
        </div>
    )
}