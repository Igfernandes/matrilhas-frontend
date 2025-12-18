import { FieldErrors, useFormContext, UseFormRegister } from "react-hook-form";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { PeriodsPayload } from "../PeriodsSchemas";
import { Input } from "@components/shared/forms/Input";

type Props = {
    register: UseFormRegister<PeriodsPayload>;
    errors: FieldErrors<PeriodsPayload>;
    id: number;
}

export function MonthlyFields({ register, errors, id }: Props) {
    const { watch } = useFormContext()

    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[49%] my-2">
                <Input value={watch(`period.${id}.by_monthday.0`)} required={true} min="1" type="number" dataTestId={`period_0_${dayjs().millisecond()}`} {...register(`period.${id}.by_monthday.0`, { valueAsNumber: true })} label={i18n("Words.start")} errors={errors?.period?.[id]?.by_monthday?.[0]} />
            </div>
            <div className="w-full md:w-[49%] my-2">
                <Input value={watch(`period.${id}.by_monthday.1`)} required={true} min="1" type="number" dataTestId={`period_1_${dayjs().millisecond()}`} {...register(`period.${id}.by_monthday.1`, { valueAsNumber: true })} label={i18n(`Words.end`)} errors={errors?.period?.[id]?.by_monthday?.[1]} />
            </div>
        </div>
    )
}