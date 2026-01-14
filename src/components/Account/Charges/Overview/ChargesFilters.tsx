import { Datetime } from "@components/shared/forms/DateTime";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";

export function ChargesFilters() {
    const { register } = useFiltersContext()
    const { t } = useI18n();

    return (
        <Filters id="CHARGES" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.charges.text_filters_to_refine_search")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">

                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("created_at")} dataTestId="filter-sold_at" label={t("Words.started_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Texts.enter_complete_payment_date")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("updated_at")} dataTestId="filter-sold_at" label={t("Words.until")} />
                    <span className="text-xs text-disabled ml-1">{t("Texts.enter_complete_payment_date")}</span>
                </div>
            </div>
        </Filters>
    )
}