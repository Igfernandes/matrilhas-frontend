import { FieldErrors, UseFormRegister } from "react-hook-form";
import dayjs from "dayjs";
import { PeriodsPayload } from "../PeriodsSchemas";
import { Input } from "@components/shared/forms/Input";
import { useI18n } from "@contexts/I18n";

type Props = {
    register: UseFormRegister<PeriodsPayload>;
    errors: FieldErrors<PeriodsPayload>;
    id: number;
}

export function MonthlyFields({ register, errors, id }: Props) {
    const { t } = useI18n()

    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[49%] my-2">
                <Input required={true} min="1" type="number" dataTestId={`period_0_${dayjs().millisecond()}`} {...register(`period.${id}.by_monthday.0`, { valueAsNumber: true })} label={t("Words.start")} errors={errors?.period?.[id]?.by_monthday?.[0]} />
            </div>
            <div className="w-full md:w-[49%] my-2">
                <Input required={true} min="1" type="number" dataTestId={`period_1_${dayjs().millisecond()}`} {...register(`period.${id}.by_monthday.1`, { valueAsNumber: true })} label={t(`Words.end`)} errors={errors?.period?.[id]?.by_monthday?.[1]} />
            </div>
        </div>
    )
}