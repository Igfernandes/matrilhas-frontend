import { useI18n } from "@contexts/I18n";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "@components/shared/forms/Input";
import { Date } from "@components/shared/forms/Date";
import { CPF } from "@components/shared/forms/CPF";

type Props = {
    register: UseFormRegister<FieldValues>,
    handleAddDependent: () => void,
    errors: boolean
}

export function List({ register, handleAddDependent, errors }: Props) {
    const { t } = useI18n()

    return (
        <div className="mt-6">
            <div className="bg-secondary overflow-y-auto px-2 rounded-md pb-2">

                <div className="mt-2">
                    <div className="flex flex-wrap items-center justify-between relative" >
                        <div className="w-full  my-2">
                            <Input dataTestId="dependent_name" type="text" {...register("dependent_name")} className="w-full p-2" label={t("Texts.filled_name")} />
                        </div>
                        <div className="w-full my-2">
                            <CPF dataTestId="dependent_cpf" register={register} name="dependent_cpf" className="w-full p-2" label={t("Texts.filled_cpf")} />
                        </div>
                        <div className="w-full my-2">
                            <Date dataTestId="dependent_birthdate" {...register("dependent_birthdate")} className="w-full p-2" label={t("Texts.filled_birthdate")} />
                        </div>
                        <div className="w-full md:w-2/3 mt-4">
                            <span className="text-red text-xs">{errors && t("Texts.required_fields")}</span>
                        </div>
                        <div className="w-full md:w-1/3 text-right mt-1">
                            <button onClick={handleAddDependent} type="button" className="bg-primary text-sm py-2 rounded-md px-3 text-white bottom-2 right-2 font-bold">Incluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}