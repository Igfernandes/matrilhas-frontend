import { Input } from "@components/shared/forms/Input";
import { Phone } from "@components/shared/forms/Phone";
import { useI18n } from "@contexts/I18n";
import { useFormContext } from "react-hook-form";
import { useSalesContext } from "../context";
import { useVerify } from "../hooks/useVerify";
import { Select } from "@components/shared/forms/Select";
import { KINSHIP } from "@constants/kinship";

export function Emergency() {
    const { handleStep } = useSalesContext()
    const { register } = useFormContext()
    const { t } = useI18n()
    const { isFilledKinshipFields } = useVerify()

    return (
        <div className="min-w-[30vw] py-2 mb-5">
            <div className="mb-5">
                <div className="bg-primary text-white rounded-sm px-2 py-1 mb-2">
                    <h3 className="font-semibold">{t("Screens.sales.emergency.title")}</h3>
                </div>
                <p className="text-sm">{t("Screens.sales.emergency.text")}</p>
            </div>
            <div className="my-2">
                <Input maxLength={100} {...register("contacts.name")} label={t("Words.name")} dataTestId="sale_contact_name" />
            </div>
            <div className="my-2">
                <Select options={[
                    {
                        text: t("Texts.select_option"),
                        value: ""
                    },
                    ...KINSHIP.map((kinship) => ({
                        text: t(`Words.${kinship.toLowerCase()}`),
                            value: kinship
                        }))
                ]}  {...register("contacts.kinship")} label={t("Words.kinship")} dataTestId="sale_kinship" />
            </div>
            <div className="my-2">
                <Phone {...register("contacts.phone")} required label={t("Words.phone")} dataTestId="sale_contact_phone" />
            </div>
            <div className="text-center mt-2 mb-2">
                <span className="text-xs text-red">{t("Screens.sales.filled_all_fields")}</span>
            </div>
            <div className="flex items-center justify-between ">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("CONTACT")} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.back")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <button disabled={!isFilledKinshipFields} type="button" onClick={() => handleStep("ADDRESS")} className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block">
                        {t("Words.next")}
                    </button>
                </div>
            </div>
        </div>
    )
}