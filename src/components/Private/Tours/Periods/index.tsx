import { Input } from "@components/shared/forms/Input";
import { usePeriods } from "./hooks/usePeriods";
import { TourShape } from "@type/Tours";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { When } from "@components/utilities/When";
import { WeeklyFields } from "./presets/Weekly";
import { MonthlyFields } from "./presets/Monthly";
import { DatetimeFields } from "./presets/Datetime";
import { useI18n } from "@contexts/I18n";

type Props = {
    tour: TourShape;
}

export function TourPeriods({ tour }: Props) {
    const { t } = useI18n()
    const { register, errors, formMethods, handleSubmit, onSubmit, isLoading, handleResetPeriod } = usePeriods({ tour })
    const frequencyPeriodSale = formMethods.getValues("period.0.frequency") || "ONE_TIME"
    const frequencyPeriodTravel = formMethods.getValues("period.1.frequency") || "ONE_TIME"

    return (
        <FormProvider {...formMethods}>
            <form className="bg-white w-full px-4 py-1 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-between pb-5">
                    <div className=" md:w-[48%] mt-4">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary ">{t("Texts.period_sale")}</h2>
                            <p className="text-sm">{t("Screens.dashboard.tours.period_sale_info")}</p>
                        </div>
                        <Input type="hidden" dataTestId="period_sale_model" {...register('period.0.model')} defaultValue={"SALE"} />
                        <div>
                            <div className="w-full mb-4">
                                <Select onChangeCapture={() => handleResetPeriod(0)} dataTestId="period_sale_frequency"
                                    options={[
                                        ...["ONE_TIME", "WEEKLY", "MONTHLY"].map(period => ({ value: period, text: t(`Words.${period.toLowerCase()}`) }))
                                    ]}
                                    {...register("period.0.frequency")} label={t("Words.frequency")}
                                    errors={errors?.period?.[0]?.frequency} />
                            </div>
                            <When value={frequencyPeriodSale === "ONE_TIME"}>
                                <DatetimeFields id={0} register={register} errors={errors} />
                            </When>
                            <When value={frequencyPeriodSale === "WEEKLY"}>
                                <WeeklyFields id={0} register={register} errors={errors} />
                            </When>
                            <When value={frequencyPeriodSale === "MONTHLY"}>
                                <MonthlyFields id={0} register={register} errors={errors} />
                            </When>
                        </div>
                    </div>
                    <div className=" md:w-[48%]  mt-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary ">{t("Texts.period_travel")}</h2>
                            <p className="text-sm">{t("Screens.dashboard.tours.period_travel_info")}</p>
                        </div>
                        <Input type="hidden" dataTestId="period_travel_model" {...register('period.1.model')} defaultValue={"TOUR"} />
                        <div>
                            <div className="w-full my-2">
                                <Select onChangeCapture={() => handleResetPeriod(1)} dataTestId="period_sale_frequency"
                                    options={[
                                        ...["ONE_TIME", "WEEKLY", "MONTHLY"].map(period => ({ value: period, text: t(`Words.${period.toLowerCase()}`) }))
                                    ]}
                                    {...register("period.1.frequency")} defaultValue={"ONE_TIME"} label={t("Words.frequency")}
                                    errors={errors?.period?.[1]?.frequency} />
                            </div>
                            <When value={frequencyPeriodTravel === "ONE_TIME"}>
                                <DatetimeFields id={1} register={register} errors={errors} />
                            </When>
                            <When value={frequencyPeriodTravel === "WEEKLY"}>
                                <WeeklyFields id={1} register={register} errors={errors} />
                            </When>
                            <When value={frequencyPeriodTravel === "MONTHLY"}>
                                <MonthlyFields id={1} register={register} errors={errors} />
                            </When>
                        </div>
                    </div>
                    <div className="w-full ml-auto my-10">
                        <Button className="bg-primary text-white font-semibold ml-auto w-full md:w-[30%]" isLoading={isLoading} text={t("Words.update")} />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}