import { Date } from "@components/shared/forms/Date";
import { Phone } from "@components/shared/forms/Phone";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { FieldError } from "react-hook-form";


export function SubscribersFilters() {
    const { t } = useI18n()
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="SUBSCRIBERS" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.subscribers.text_fill_about_search")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full md:w-[48%] my-2">
                    <Phone errors={errors.phone as FieldError} {...register("phone")} dataTestId="filter-phone" label={t("Words.phone")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.subscribers.text_full_phone")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date errors={errors.created_at as FieldError} {...register("created_at")} dataTestId="filter-created_at" label={t("Words.created_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.subscribers.search_by_created_at")}</span>
                </div>
            </div>
        </Filters>
    )
}