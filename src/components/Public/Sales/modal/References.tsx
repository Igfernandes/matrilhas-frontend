import { useI18n } from "@contexts/I18n";
import { useFormContext } from "react-hook-form";
import { useSalesContext } from "../context"
import { Select } from "@components/shared/forms/Select";
import { SalesPayload } from "../salesSchemas";
import { useVerify } from "../hooks/useVerify";
import { useAddress } from "../hooks/useAddress";

export function References() {
    const { handleStep } = useSalesContext()
    const { register, formState: { errors } } = useFormContext<SalesPayload>()
    const { t } = useI18n()
    const { destinyAddresses, originAddresses, builderOption } = useAddress()
    const { isFilledLandingAndBoardingFields } = useVerify()

    return (
        <div className="min-w-[30vw] py-2 mb-5">
            <div className="mb-5">
                <div className="bg-primary text-white rounded-sm px-2 py-1 mb-2">
                    <h3 className="font-semibold">{t("Screens.sales.references.title")}</h3>
                </div>
                <p className="text-sm">{t("Screens.sales.references.text")}</p>
            </div>
            <div className="w-full my-2">
                <Select dataTestId="boarding" options={[
                    {
                        text: t("Texts.select_option"),
                        value: ""
                    },
                    ...builderOption(originAddresses)
                ]}
                    {...register("boarding")}
                    label={t("Screens.tours.address_boarding")} errors={errors?.boarding} />
            </div>
            <div className="w-full my-2">
                <Select dataTestId="landing" options={[
                    {
                        text: t("Texts.select_option"),
                        value: ""
                    },
                    ...builderOption(destinyAddresses)
                ]}
                    {...register("landing")}
                    label={t("Screens.tours.address_landing")} errors={errors?.landing} />
            </div>
            <div className="flex items-center justify-between mt-5">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("ADDRESS")} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.back")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <button disabled={!isFilledLandingAndBoardingFields} type="button" onClick={() => handleStep("DEPENDENTS")} className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block">
                        {t("Words.next")}
                    </button>
                </div>
            </div>
        </div>
    )
}