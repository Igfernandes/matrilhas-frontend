import { Datetime } from "@components/shared/forms/DateTime";
import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import i18n from "@configs/i18n";
import {  handleMaskCPF, handleMaskPhone } from "@helpers/string";
import { FieldError } from "react-hook-form";


export function SaleFilters() {
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="SALES" >
            <div className="mb-1">
                <p><i>Utilize os filtros abaixo para refinar a busca de agências</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("name_contains")} dataTestId="filter-name" label="Nome" />
                    <span className="text-xs text-disabled ml-1">Faça uma busca usando o valor parcial do nome</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input {...register("cpf_contains")} onChangeCapture={handleMaskCPF} dataTestId="filter-cpf" label="CPF" />
                    <span className="text-xs text-disabled ml-1">Insira o valor parcial do CPF</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input {...register("phone_contains")} onChangeCapture={handleMaskPhone} dataTestId="filter-phone" label="Telefone" />
                    <span className="text-xs text-disabled ml-1">Insira o valor parcial do telefone</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("created_at")} dataTestId="filter-created_at" label={i18n("Words.created_at")} />
                    <span className="text-xs text-disabled ml-1">Insira o valor completo da data de pagamento</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select
                        {...register("status")}
                        label={i18n("Words.status")}
                        id="status"
                        dataTestId="status"
                        options={[
                            {
                                text: i18n("Texts.select_status"),
                                value: "",
                            },
                            {
                                text: i18n("Words.paid"),
                                value: "PAID",
                            },
                            {
                                text: i18n("Words.pending"),
                                value: "PENDING",
                            },
                            {
                                text: i18n("Words.canceled"),
                                value: "CANCELED",
                            }
                        ]}
                        errors={errors.status as FieldError}
                    />
                </div>
            </div>
        </Filters>
    )
}