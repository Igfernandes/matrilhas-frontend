import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { usePeriods } from "./hooks/usePeriods";
import { TourShape } from "@type/Tours";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { When } from "@components/utilities/When";
import { WeeklyFields } from "./presets/Weekly";
import { MonthlyFields } from "./presets/Monthly";
import { DatetimeFields } from "./presets/Datetime";

type Props = {
    tour: TourShape;
}

export function TourPeriods({ tour }: Props) {
    const { register, errors, formMethods, handleSubmit, onSubmit, isLoading, handleResetPeriod } = usePeriods({ tour })

    console.log(formMethods.getValues("period"))
    return (
        <FormProvider {...formMethods}>
            <form className="bg-white w-full px-4 py-1 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-between pb-5">
                    <div className=" md:w-[48%] mt-4">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary ">{i18n("Texts.period_sale")}</h2>
                            <p className="text-sm">Informações de programação para realizar as vendas</p>
                        </div>
                        <Input type="hidden" dataTestId="period_sale_model" {...register('period.0.model')} value={"SALE"} />
                        <div>
                            <div className="w-full mb-4">
                                <Select onChangeCapture={() => handleResetPeriod(0)} dataTestId="period_sale_frequency"
                                    options={[
                                        ...["ONE_TIME", "WEEKLY", "MONTHLY"].map(period => ({ value: period, text: i18n(`Words.${period.toLowerCase()}`) }))
                                    ]}
                                    {...register("period.0.frequency")} label={i18n("Words.frequency")}
                                    errors={errors?.period?.[0]?.frequency} />
                            </div>
                            <When value={formMethods.getValues("period.0.frequency") === "ONE_TIME"}>
                                <DatetimeFields id={0} register={register} errors={errors} />
                            </When>
                            <When value={formMethods.getValues("period.0.frequency") === "WEEKLY"}>
                                <WeeklyFields id={0} register={register} errors={errors} />
                            </When>
                            <When value={formMethods.getValues("period.0.frequency") === "MONTHLY"}>
                                <MonthlyFields id={0} register={register} errors={errors} />
                            </When>
                        </div>
                    </div>
                    <div className=" md:w-[48%]  mt-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary ">{i18n("Texts.period_travel")}</h2>
                            <p className="text-sm">Informações de sobre as datas de realização do passeio.</p>
                        </div>
                        <Input type="hidden" dataTestId="period_travel_model" {...register('period.1.model')} value={"TOUR"} />

                        <div>
                            <div className="w-full my-2">
                                <Select onChangeCapture={() => handleResetPeriod(1)} dataTestId="period_sale_frequency"
                                    options={[
                                        ...["ONE_TIME", "WEEKLY", "MONTHLY"].map(period => ({ value: period, text: i18n(`Words.${period.toLowerCase()}`) }))
                                    ]}
                                    {...register("period.1.frequency")} label={i18n("Words.frequency")}
                                    errors={errors?.period?.[1]?.frequency} />
                            </div>
                            <When value={formMethods.getValues("period.1.frequency") === "ONE_TIME"}>
                                <DatetimeFields id={1} register={register} errors={errors} />
                            </When>
                            <When value={formMethods.getValues("period.1.frequency") === "WEEKLY"}>
                                <WeeklyFields id={1} register={register} errors={errors} />
                            </When>
                            <When value={formMethods.getValues("period.1.frequency") === "MONTHLY"}>
                                <MonthlyFields id={1} register={register} errors={errors} />
                            </When>
                        </div>
                    </div>
                    <div className="w-full ml-auto my-10">
                        <Button className="bg-primary text-white font-semibold ml-auto w-full md:w-[30%]" isLoading={isLoading} text={i18n("Words.update")} />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}