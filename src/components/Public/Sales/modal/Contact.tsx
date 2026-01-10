import { Input } from "@components/shared/forms/Input";
import { Phone } from "@components/shared/forms/Phone";
import { useI18n } from "@contexts/I18n";
import { useFormContext } from "react-hook-form";
import { useSalesContext } from "../context";
import { useVerify } from "../hooks/useVerify";
import { getNumberFormatted } from "@helpers/string";

export function Contact() {
    const { handleStep } = useSalesContext()
    const { register } = useFormContext()
    const { t } = useI18n()
    const { isFilledPersonalFields } = useVerify()

    return (
        <div className="min-w-[30vw] py-2 mb-5">
            <div className="mb-5">
                <div className="bg-primary text-white rounded-sm px-2 py-1 mb-2">
                    <h3 className="font-semibold">{t("Screens.sales.contact.title")}</h3>
                </div>
                <p className="text-sm">{t("Screens.sales.contact.text")}</p>
            </div>
            <div className="my-2">
                <Input {...register("email")} maxLength={200} required={true} label={t("Words.email")} dataTestId="sale_email" />
            </div>
            <div className="my-2">
                <Phone {...register("phone", {
                    setValueAs: (value) => getNumberFormatted(value),
                })}  required={true} label={t("Words.phone")} dataTestId="sale_contact_phone" />
            </div>
            <div className="text-center mt-2 mb-2">
                <span className="text-xs text-red">{t("Screens.sales.filled_all_fields")}</span>
            </div>
            <div className="flex items-center justify-between ">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleStep("PERSONAL")} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.back")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <button disabled={!isFilledPersonalFields} type="button" onClick={() => handleStep("EMERGENCY")} className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block">
                        {t("Words.next")}
                    </button>
                </div>
            </div>
        </div>
    )
}