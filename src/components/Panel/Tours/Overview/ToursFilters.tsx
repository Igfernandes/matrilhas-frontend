import { Date } from "@components/shared/forms/Date";
import { Input } from "@components/shared/forms/Input";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";

export function ToursFilters() {
    const { t } = useI18n()
    const { register } = useFiltersContext()

    return (
        <Filters id="TOURS" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.tours.filters_description")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input maxLength={200} {...register("title_contains")} dataTestId="filter-title" label={t("Words.title")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.tours.search_partial_by_title")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date {...register("available_at")} dataTestId="filter-available_at" label={t("Texts.available_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.tours.search_by_available_at")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date {...register("created_at")} dataTestId="filter-created_at" label={t("Words.created_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.tours.search_by_created_at")}</span>
                </div>
            </div>
        </Filters>
    )
}