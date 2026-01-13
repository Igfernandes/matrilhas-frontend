import { Date } from "@components/shared/forms/Date";
import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import i18n from "@configs/i18n";
import { handleMaskCPF, handleMaskPhone } from "@helpers/string";
import useGetTours from "@services/Tours/Get/useGet";
import { useMemo } from "react";
import { FieldError } from "react-hook-form";


export function SaleFilters() {
    const { register, methods, updateReferences } = useFiltersContext()
    const { errors } = methods.formState;
    const { rows: toursData } = useGetTours()
    
    const tours = useMemo(() => {
        updateReferences("tour_id", (tourId: unknown) => {
            return toursData?.find((tour) => tour.id == tourId)?.title || ""
        })
        return toursData || []
    }, [toursData, updateReferences]);


    return (
        <Filters id="SALES" >
            <div className="mb-1">
                <p><i>Utilize os filtros abaixo para refinar a busca</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("name_contains")} dataTestId="filter-name" label="Nome" />
                    <span className="text-xs text-disabled ml-1">Faça uma busca usando o valor parcial do nome</span>
                </div>
                <div className="w-full my-2">
                    <Select options={[
                        {
                            text: i18n("Texts.select_option"),
                            value: "",
                        },
                        ...tours.map((tour) => ({
                            text: tour.title,
                            value: tour.id
                        }))
                    ]} {...register("tour_id")} dataTestId="filter-tour_id" label="Tour" />
                    <span className="text-xs text-disabled ml-1">Faça uma busca usando pelo passeio</span>
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
                    <Date {...register("created_at")} dataTestId="filter-sold_at" label={i18n("Words.sold_at")} />
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