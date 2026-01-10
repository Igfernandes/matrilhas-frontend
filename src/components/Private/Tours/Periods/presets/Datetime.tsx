import { FieldErrors, UseFormRegister } from "react-hook-form";
import dayjs from "dayjs";
import { PeriodsPayload } from "../PeriodsSchemas";
import { Datetime } from "@components/shared/forms/DateTime";
import { useI18n } from "@contexts/I18n";

type Props = {
    register: UseFormRegister<PeriodsPayload>;
    errors: FieldErrors<PeriodsPayload>;
    id: number;
}

export function DatetimeFields({ register, errors, id }: Props) {
    const { t } = useI18n()
    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[49%] my-2">
                <Datetime required={true} dataTestId={`period_0_${dayjs().millisecond()}`} {...register(`period.${id}.by_datetime.0`)} label={t("Words.start")} errors={errors?.period?.[id]?.by_datetime?.[0]} />
            </div>
            <div className="w-full md:w-[49%] my-2">
                <Datetime required={true} dataTestId={`period_1_${dayjs().millisecond()}`}  {...register(`period.${id}.by_datetime.1`)} label={t(`Words.end`)} errors={errors?.period?.[id]?.by_datetime?.[1]} />
            </div>
        </div>
    )
}