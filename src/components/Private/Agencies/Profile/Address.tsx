import { Input } from "@components/shared/forms/Input";
import { ProfileFormProps } from "./type";
import { useI18n } from "@contexts/I18n";
import { COUNTRIES } from "../../../../data/address/countries";
import { BRAZILIAN_STATES } from "../../../../data/address/states";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { When } from "@components/utilities/When";
import { Select } from "@components/shared/forms/Select";

type Props = ProfileFormProps;

export function Address({ register, errors }: Props) {
    const { watch } = useFormContext()
    const country = watch("country")
    const { t } = useI18n()
    const countriesRef = useRef<{ code: string, name: string }[]>(COUNTRIES ?? [])
    const statesRef = useRef<{ code: string, name: string }[]>(BRAZILIAN_STATES ?? [])

    return (
        <div className="mt-6">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary ">{t("Words.address")}</h2>
                <p className="text-sm">{t("Screens.dashboard.agencies.address_description")}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[48%] my-2">
                    <Select defaultValue={"Brasil"} dataTestId="countries" options={countriesRef.current.map(country => ({ value: country.name, text: country.name }))}
                        {...register("address.country")}
                        label={t("Words.country")} errors={errors?.address?.country} />
                </div>
                <When value={country === "Brasil"}>
                    <div className="w-full md:w-[48%] my-2">
                        <Select defaultValue={"Rio de Janeiro"} dataTestId="state"
                            options={statesRef.current.map(state => ({ value: state.name, text: state.name }))}
                            {...register("address.state")} label={t("Words.state")} errors={errors?.address?.state} />
                    </div>
                </When>
                <When value={country !== "Brasil"}>
                    <div className="w-full md:w-[48%] my-2">
                        <Input defaultValue={"Rio de Janeiro"} dataTestId="state" {...register("address.state")}
                            label={t("Words.state")} errors={errors?.address?.state} />
                    </div>
                </When>
                <div className="w-full md:w-[48%] my-2">
                    <Input maxLength={100} dataTestId="city" {...register("address.city")} label={t("Words.city")} errors={errors?.address?.city} />
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input maxLength={20} dataTestId="zipcode" {...register("address.zip_code")} label={t("Words.zipcode")} errors={errors?.address?.zip_code} />
                </div>
                <div className="w-full md:w-[20%] my-2">
                    <Input type="number" dataTestId="number" {...register("address.number")} label={t("Words.number")} errors={errors?.address?.number} />
                </div>
                <div className="w-full md:w-[78%] my-2">
                    <Input maxLength={250} dataTestId="complement" {...register("address.complement")} label={t("Words.complement")} errors={errors?.address?.complement} />
                </div>
            </div>
        </div>

    )
}