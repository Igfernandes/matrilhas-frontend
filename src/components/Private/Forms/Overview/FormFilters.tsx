import { Date } from "@components/shared/forms/Date";
import { Input } from "@components/shared/forms/Input";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { FieldError } from "react-hook-form";


export function FormFilters() {
    const { t } = useI18n()
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="FORMS" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.forms.text_filters")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("name_contains")} maxLength={200} dataTestId="filter-name" label={t("Words.name")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.forms.text_name_description")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date
                        {...register("started_at")}
                        label={t("Words.started_at")}
                        id="started_at"
                        dataTestId="started_at"
                        errors={errors.started_at as FieldError}
                    />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.forms.text_started_at_description")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date
                        {...register("expired_at")}
                        label={t("Words.expired_at")}
                        id="expired_at"
                        dataTestId="expired_at"
                        errors={errors.expired_at as FieldError}
                    />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.forms.text_expired_at_description")}</span>
                </div>

            </div>
        </Filters>
    )
}