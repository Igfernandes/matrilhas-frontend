import { Datetime } from "@components/shared/forms/DateTime";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { FieldError } from "react-hook-form";
import { useChargesFilter } from "./hooks/useFilters";

export function ChargesFilters() {
    const { register, methods } = useFiltersContext()
    const { formState: { errors } } = methods
    const { agencies, clients } = useChargesFilter()
    const { t } = useI18n();

    return (
        <Filters id="CHARGES" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.charges.text_filters_to_refine_search")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full md:w-[48%] my-2">
                    <Select options={[
                        {
                            text: t("Texts.select_option"),
                            value: "",
                        },
                        ...agencies.map((agency) => ({
                            text: agency.name,
                            value: agency.id
                        }))
                    ]} {...register("agency_id")} dataTestId="filter-agency_id" label={t("Words.agency")} />
                    <span className="text-xs text-disabled ml-1">{t("Texts.enter_agency_name")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select options={[
                        {
                            text: t("Texts.select_option"),
                            value: "",
                        },
                        ...clients.map((client) => ({
                            text: client.name,
                            value: client.id
                        }))
                    ]} {...register("client_id")} dataTestId="filter-client_id" label={t("Words.client")} />
                    <span className="text-xs text-disabled ml-1">{t("Texts.enter_client_name")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("created_at")} dataTestId="filter-sold_at" label={t("Words.started_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Texts.enter_complete_payment_date")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("updated_at")} dataTestId="filter-sold_at" label={t("Words.until")} />
                    <span className="text-xs text-disabled ml-1">{t("Texts.enter_complete_payment_date")}</span>
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
                                text: t("Words.active"),
                                value: "ACTIVE",
                            },
                            {
                                text: t("Words.inactive"),
                                value: "INACTIVE",
                            },
                        ]}
                        errors={errors.status as FieldError}
                    />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select
                        {...register("type")}
                        label={t("Words.type")}
                        id="type"
                        dataTestId="type"
                        options={[
                            {
                                text: t("Texts.select_type"),
                                value: "",
                            },
                            {
                                text: t("Words.punctual"),
                                value: "PUNCTUAL",
                            },
                            {
                                text: t("Words.appellant"),
                                value: "APPELLANT",
                            },
                        ]}
                        errors={errors.type as FieldError}
                    />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.charges.enter_type")}</span>
                </div>
            </div>
        </Filters>
    )
}