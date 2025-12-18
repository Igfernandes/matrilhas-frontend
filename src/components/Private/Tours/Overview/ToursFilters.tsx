import { Datetime } from "@components/shared/forms/DateTime";
import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import i18n from "@configs/i18n";
import { FieldError } from "react-hook-form";

export function ToursFilters() {
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;

    return (
        <Filters id="TOURS" >
            <div className="mb-1">
                <p><i>Utilize os filtros abaixo para refinar a busca de agências</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("title_contains")} dataTestId="filter-title" label={i18n("Words.title")} />
                    <span className="text-xs text-disabled ml-1">Faça uma busca usando o valor parcial do titulo</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("available_at")} dataTestId="filter-available_at" label={i18n("Words.available_at")} />
                    <span className="text-xs text-disabled ml-1">Insira o valor completo da data disponível</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("created_at")} dataTestId="filter-created_at" label={i18n("Words.created_at")} />
                    <span className="text-xs text-disabled ml-1">Insira o valor completo da data de criação</span>
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
                <div className="w-full md:w-[48%] my-2">
                    <Select
                        {...register("featured")}
                        label={i18n("Words.featured")}
                        id="featured"
                        dataTestId="featured"
                        options={[
                            {
                                text: i18n("Texts.select_featured"),
                                value: "",
                            },
                            {
                                text: i18n("Words.yes"),
                                value: "1",
                            },
                            {
                                text: i18n("Words.not"),
                                value: "0",
                            },
                        ]}
                        errors={errors.featured as FieldError}
                    />
                </div>
            </div>
        </Filters>
    )
}