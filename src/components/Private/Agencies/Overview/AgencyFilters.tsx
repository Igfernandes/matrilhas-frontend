import { CNPJ } from "@components/shared/forms/CNPJ";
import { Input } from "@components/shared/forms/Input";
import { Phone } from "@components/shared/forms/Phone";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { FieldError } from "react-hook-form";


export function AgencyFilters() {
    const { t } = useI18n()
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="AGENCIES" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.agencies.text_fill_about_search")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("name_contains")} dataTestId="filter-name" label={t("Words.name")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.agencies.text_partial_name_search")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <CNPJ {...register("cnpj_contains")} dataTestId="filter-cnpj" label={t("Words.cnpj")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.agencies.text_partial_cnpj")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Phone {...register("phone")} dataTestId="filter-phone" label={t("Words.phone")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.agencies.text_full_phone")}</span>
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
            </div>
        </Filters>
    )
}