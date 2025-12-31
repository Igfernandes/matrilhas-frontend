import { Input } from "@components/shared/forms/Input";
import { ProfileFormProps } from "./type";
import { useFormContext } from "react-hook-form";
import { When } from "@components/utilities/When";
import { Select } from "@components/shared/forms/Select";
import { SaleProfilePayload } from "./profileSchemas";
import { useI18n } from "@contexts/I18n";
import { useRef } from "react";
import { COUNTRIES } from "../../../../data/address/countries";
import { BRAZILIAN_STATES } from "../../../../data/address/states";

type Props = ProfileFormProps;

export function Address({ register, errors }: Props) {
    const { watch } = useFormContext<SaleProfilePayload>()
    const country = watch("country")
    const { t } = useI18n()
    const countriesRef = useRef<{ code: string, name: string }[]>(COUNTRIES ?? [])
    const statesRef = useRef<{ code: string, name: string }[]>(BRAZILIAN_STATES ?? [])

    return (
        <div className="mt-6">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{t("Texts.client_address")}</h2>
                <p className="text-sm">{t("Screens.dashboard.sales.text_describe_address")}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full my-2">
                    <Select required={true}  defaultValue={"Brasil"} dataTestId="countries" options={countriesRef.current.map(country => ({ value: country.name, text: country.name }))}
                        {...register("country")}
                        label={t("Words.country")} errors={errors?.country} />
                </div>
                <When value={country === "Brasil"}>
                    <div className="w-full my-2">
                        <Select required={true}  defaultValue={"Rio de Janeiro"} dataTestId="state"
                            options={statesRef.current.map(state => ({ value: state.name, text: state.name }))}
                            {...register("state")} label={t("Words.state")} errors={errors?.state} />
                    </div>
                </When>
                <When value={country !== "Brasil"}>
                    <div className="w-full my-2">
                        <Input required={true}  defaultValue={"Rio de Janeiro"} dataTestId="state" {...register("state")}
                            label={t("Words.state")} errors={errors?.state} />
                    </div>
                </When>
                <div className="w-full my-2">
                    <Input dataTestId="city" required={true}  {...register("city")} label={t("Words.city")} errors={errors?.city} />
                </div>
            </div>
        </div>

    )
}