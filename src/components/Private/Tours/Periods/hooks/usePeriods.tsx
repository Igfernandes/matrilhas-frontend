import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { TourShape } from "@type/Tours"
import { PeriodsPayload, PeriodsSchemas } from "../PeriodsSchemas"
import useGetTourPeriods from "@services/Tours/Period/Get/useGet"
import usePostTourPeriod from "@services/Tours/Period/Post/usePost"
import { useI18n } from "@contexts/I18n"
import { TourPeriodFrequencyOptions, TourPeriodModelOptions } from "@type/Tours/Period"

type Props = {
    tour: TourShape
}

export function usePeriods({ tour }: Props = {} as Props) {
    const { t } = useI18n()
    const schema = useMemo(() => PeriodsSchemas(t), [t])
    const { rows: periodsData } = useGetTourPeriods({
        tour_id: tour.id,
    })
    const initializedRef = useRef(false)

    const { formMethods, handleSubmit, register, errors } = useFormRules<PeriodsPayload>({
        schema,
        defaultValues: {
            period: [
                {
                    "frequency": "ONE_TIME" as TourPeriodFrequencyOptions,
                    "model": "SALE" as TourPeriodModelOptions
                },
                {
                    "frequency": "ONE_TIME" as TourPeriodFrequencyOptions,
                    "model": "TOUR" as TourPeriodModelOptions
                }
            ],
        }
    })
    const { reset } = formMethods
    const { mutateAsync: post, isPending: isLoading } = usePostTourPeriod()

    const onSubmit = useCallback(async ({ period: payload }: PeriodsPayload) => {

        if (!tour.id) return;

        post(payload.map(item => ({ ...item, tour_id: tour.id })))
    }, [post, tour])

    const handleResetPeriod = useCallback((index: number) => {
        formMethods.setValue(`period.${index}.by_weekday`, []);
        formMethods.setValue(`period.${index}.by_monthday`, []);
        formMethods.setValue(`period.${index}.by_month`, []);
        formMethods.setValue(`period.${index}.by_datetime`, []);
    }, [formMethods])

    useEffect(() => {
        if (periodsData.length === 0 || initializedRef.current) return

        reset({
            period: periodsData,
        })

        initializedRef.current = true
    }, [periodsData, reset])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoading,
        handleResetPeriod
    }
}