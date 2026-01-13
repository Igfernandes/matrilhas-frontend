import { Datetime } from "@components/shared/forms/DateTime";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";

export function DispatchersFilters() {
    const { t } = useI18n()
    const { register } = useFiltersContext()

    return (
        <Filters id="CLIENTS" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.dispatchers.text_filters_below_to_refine_search")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("created_at")} dataTestId="filter-created_at" label={t("Words.created_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.dispatchers.text_filter_created_at")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("updated_at")} dataTestId="filter-updated_at" label={t("Texts.updated_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.dispatchers.text_filter_updated_at")}</span>
                </div>
            </div>
        </Filters>
    )
}