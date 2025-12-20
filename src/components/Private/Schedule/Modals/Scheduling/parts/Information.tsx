import i18n from "@configs/i18n";
import { useFormContext } from "react-hook-form";
import { SchedulePayload } from "../schemas";
import { Input } from "@components/shared/forms/Input";
import { Datetime } from "@components/shared/forms/DateTime";
import dayjs from "dayjs";
import { TextArea } from "@components/shared/forms/TextArea";
import { Color } from "@components/shared/forms/Color";

export function Information() {
    const { register, formState: { errors } } = useFormContext<SchedulePayload>()

    return (
        <>
            <div className="form-group mb-4">
                <Input
                    {...register("title")}
                    label={i18n("Words.title")}
                    dataTestId="title"
                    required={true}
                    errors={errors.title}
                />
            </div>
            <div className="form-group my-4">
                <Datetime
                    {...register("date")}
                    label={i18n("Words.start")}
                    dataTestId="date"
                    min={dayjs().format("YYYY-MM-DD HH:MM")}
                    required={true}
                    placeholder={i18n(`Configs.format.date`)}
                    type="datetime-local"
                    errors={errors.date}
                />
            </div>
            <div className="form-group my-4">
                <Datetime
                    {...register("end_date")}
                    label={i18n("Words.until")}
                    dataTestId="end_date"
                    errors={errors.end_date}
                />
            </div>
            <div className="form-group mt-4 mb-1">
                <TextArea
                    {...register("describe")}
                    label={i18n("Words.subject")}
                    dataTestId="describe"
                />
            </div>
            <div className="w-full ">
                <div className="form-group">
                    <Color
                        {...register("color")}
                        label={i18n("Words.color")}
                        dataTestId="color"
                        type="color"
                        errors={errors.color}
                    />
                </div>
            </div>
        </>
    )
}