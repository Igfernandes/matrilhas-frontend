import { Input } from "@components/shared/forms/Input";
import { useI18n } from "@contexts/I18n";
import { useFormContext } from "react-hook-form";
import { useSalesContext } from "../context"
import { Select } from "@components/shared/forms/Select";
import { When } from "@components/utilities/When";
import { COUNTRIES } from "../../../../data/address/countries";
import { BRAZILIAN_STATES } from "../../../../data/address/states";
import { useRef } from "react";
import { SalesPayload } from "../salesSchemas";
import { useVerify } from "../hooks/useVerify";

export function Address() {
    const { handleStep } = useSalesContext()
    const { register, watch, formState: { errors } } = useFormContext<SalesPayload>()
    const country = watch("country")
    const { t } = useI18n()
    const countriesRef = useRef<{ code: string, name: string }[]>(COUNTRIES ?? [])
    const statesRef = useRef<{ code: string, name: string }[]>(BRAZILIAN_STATES ?? [])
    const { isFilledAddressFields } = useVerify()

    return (
        <div className="min-w-[30vw] py-2 mb-5">
            <div className="mb-5">
                <div className="bg-primary text-white rounded-sm px-2 py-1 mb-2">
                    <h3 className="font-semibold">{t("Screens.sales.address.title")}</h3>
                </div>
                <p className="text-sm">{t("Screens.sales.address.text")}</p>
            </div>
            <div className="w-full my-2">
                <Select defaultValue={"Brasil"} dataTestId="countries" options={countriesRef.current.map(country => ({ value: country.name, text: country.name }))}
                    {...register("country")}
                    label={t("Words.country")} errors={errors?.country} />
            </div>
            <When value={country === "Brasil"}>
                <div className="w-full my-2">
                    <Select defaultValue={"Rio de Janeiro"} dataTestId="state"
                        options={statesRef.current.map(state => ({ value: state.name, text: state.name }))}
                        {...register("state")} label={t("Words.state")} errors={errors?.state} />
                </div>
            </When>
            <When value={country !== "Brasil"}>
                <div className="w-full my-2">
                    <Input maxLength={100} defaultValue={"Rio de Janeiro"} dataTestId="state" {...register("state")}
                        label={t("Words.state")} errors={errors?.state} />
                </div>
            </When>
            <div className="w-full my-2">
                <Input maxLength={100} dataTestId="city"  {...register("city")} label={t("Words.city")} errors={errors?.city} />
            </div>
            <div className="flex items-center justify-between mt-5">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("PERSONAL")} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.back")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <button disabled={!isFilledAddressFields} type="button" onClick={() => handleStep("REFERENCES")} className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block">
                        {t("Words.next")}
                    </button>
                </div>
            </div>
        </div>
    )
}