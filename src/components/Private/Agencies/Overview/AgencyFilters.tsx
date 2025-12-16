import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import i18n from "@configs/i18n";
import { handleMaskCNPJ, handleMaskPhone } from "@helpers/string";
import { FieldError } from "react-hook-form";


export function AgencyFilters() {
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="AGENCIES" >
            <div className="mb-1">
                <p><i>Utilize os filtros abaixo para refinar a busca de agências</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("name_contains")} dataTestId="filter-name" label="Nome" />
                    <span className="text-xs text-disabled ml-1">Faça uma busca usando o valor parcial do nome</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input {...register("cnpj")} onChangeCapture={handleMaskCNPJ} dataTestId="filter-cnpj" label="CNPJ" />
                    <span className="text-xs text-disabled ml-1">Insira o valor completo do CNPJ</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Input {...register("phone")} onChangeCapture={handleMaskPhone} dataTestId="filter-phone" label="Telefone" />
                    <span className="text-xs text-disabled ml-1">Insira o valor completo do telefone</span>
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
                                text: i18n("Words.active"),
                                value: "ACTIVE",
                            },
                            {
                                text: i18n("Words.inactive"),
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