import { Date } from "@components/shared/forms/Date";
import { Input } from "@components/shared/forms/Input";
import { useI18n } from "@contexts/I18n";
import { handleMaskCPF } from "@helpers/string";
import { useFormContext } from "react-hook-form";
import { useSalesContext } from "../context";
import { useVerify } from "../hooks/useVerify";

export function Personal() {
    const { handleTargetTour, handleStep } = useSalesContext()
    const { register } = useFormContext()
    const { t } = useI18n()
    const { isFilledPersonalFields } = useVerify()

    return (
        <div className="min-w-[30vw] py-2 mb-5">
            <div className="mb-5">
                <div className="bg-primary text-white rounded-sm px-2 py-1 mb-2">
                    <h3 className="font-semibold">{t("Texts.personal_information")}</h3>
                </div>
                <p className="text-sm">{t("Screens.sales.personal.text")}</p>
            </div>
            <div className="my-2">
                <Input {...register("name")} required={true} label={t("Words.name")} dataTestId="sale_name" />
            </div>
            <div className="my-2">
                <Input {...register("cpf")} onChangeCapture={handleMaskCPF} required={true} label={t("Words.cpf")} dataTestId="sale_cpf" />
            </div>
            <div className="my-2">
                <Date {...register("birthdate")} required={true} label={t("Words.birthdate")} dataTestId="sale_birthdate" />
            </div>
            <div className="text-center mt-2 mb-2">
                <span className="text-xs text-red">{t("Screens.sales.filled_all_fields")}</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-[48%]">
                    <button type="button" onClick={() => handleTargetTour(undefined)} className="w-full border-primary rounded-md target:scale-90 text-primary border py-2 text-center inline-block">
                        {t("Words.cancel")}
                    </button>
                </div>
                <div className="w-[48%]">
                    <button disabled={!isFilledPersonalFields} type="button" onClick={() => handleStep("CONTACT")} className="w-full bg-primary text-white disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-gray-500 target:scale-90 border border-primary rounded-md py-2 text-center inline-block">
                        {t("Words.next")}
                    </button>
                </div>
            </div>
        </div>
    )
}