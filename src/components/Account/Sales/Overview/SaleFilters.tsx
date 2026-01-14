import { Date } from "@components/shared/forms/Date";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import useGetToursPreview from "@services/Tours/GetPreview/useGet";
import { useMemo } from "react";
import { FieldError } from "react-hook-form";

export function SaleFilters() {
    const { t } = useI18n()
    const { register, methods, updateReferences } = useFiltersContext()
    const { errors } = methods.formState;
    const { rows: toursData } = useGetToursPreview()

    const tours = useMemo(() => {
        updateReferences("tour_id", (tourId: unknown) => {
            return toursData?.find((tour) => tour.id == tourId)?.title || ""
        })
        return toursData || []
    }, [toursData, updateReferences]);


    return (
        <Filters id="SALES" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.sales.sales_filters")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Select options={[
                        {
                            text: t("Texts.select_option"),
                            value: "",
                        },
                        ...tours.map((tour) => ({
                            text: tour.title,
                            value: tour.id
                        }))
                    ]} {...register("tour_id")} dataTestId="filter-tour_id" label={t("Words.tour")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.sales.tour_filter_hint")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date {...register("created_at")} dataTestId="filter-sold_at" label={t("Words.sold_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.sales.sold_at_filter_hint")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select
                        {...register("status")}
                        label={t("Words.status")}
                        id="status"
                        dataTestId="status"
                        options={[
                            {
                                text: t("Texts.select_status"),
                                value: "",
                            },
                            {
                                text: t("Words.paid"),
                                value: "PAID",
                            },
                            {
                                text: t("Words.pending"),
                                value: "PENDING",
                            },
                            {
                                text: t("Words.canceled"),
                                value: "CANCELED",
                            }
                        ]}
                        errors={errors.status as FieldError}
                    />
                </div>
            </div>
        </Filters>
    )
}