import { Date } from "@components/shared/forms/Date";
import { Input } from "@components/shared/forms/Input";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import i18n from "@configs/i18n";
import { FieldError } from "react-hook-form";


export function FormFilters() {
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="FORMS" >
            <div className="mb-1">
                <p><i>Utilize os filtros abaixo para refinar a busca de formulários</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("name_contains")} dataTestId="filter-name" label="Nome" />
                    <span className="text-xs text-disabled ml-1">Faça uma busca usando o valor parcial pelo nome e descrição</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date
                        {...register("started_at")}
                        label={i18n("Words.started_at")}
                        id="started_at"
                        dataTestId="started_at"
                        errors={errors.started_at as FieldError}
                    />
                    <span className="text-xs text-disabled ml-1">Faça uma busca com o mês de realização de inscrição</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Date
                        {...register("expired_at")}
                        label={i18n("Words.expired_at")}
                        id="expired_at"
                        dataTestId="expired_at"
                        errors={errors.expired_at as FieldError}
                    />
                    <span className="text-xs text-disabled ml-1">Faça uma busca com o mês de finalização de inscrição</span>
                </div>

            </div>
        </Filters>
    )
}