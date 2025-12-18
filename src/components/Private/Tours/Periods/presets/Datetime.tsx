import { FieldErrors, useFormContext, UseFormRegister } from "react-hook-form";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { PeriodsPayload } from "../PeriodsSchemas";
import { Datetime } from "@components/shared/forms/DateTime";

type Props = {
    register: UseFormRegister<PeriodsPayload>;
    errors: FieldErrors<PeriodsPayload>;
    id: number;
}

export function DatetimeFields({ register, errors, id }: Props) {
    const { watch } = useFormContext()
    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[49%] my-2">
                <Datetime value={watch(`period.${id}.by_datetime.0`)} required={true} dataTestId={`period_0_${dayjs().millisecond()}`} {...register(`period.${id}.by_datetime.0`)} label={i18n("Words.start")} errors={errors?.period?.[id]?.by_datetime?.[0]} />
            </div>
            <div className="w-full md:w-[49%] my-2">
                <Datetime value={watch(`period.${id}.by_datetime.1`)} required={true} dataTestId={`period_1_${dayjs().millisecond()}`}  {...register(`period.${id}.by_datetime.1`)} label={i18n(`Words.end`)} errors={errors?.period?.[id]?.by_datetime?.[1]} />
            </div>
        </div>
    )
}