import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useEffect } from "react"
import { TourShape } from "@type/Tours"
import { PeriodsPayload, PeriodsSchemas } from "../PeriodsSchemas"
import useGetTourPeriods from "@services/Tours/Period/Get/useGet"
import usePostTourPeriod from "@services/Tours/Period/Post/usePost"

type Props = {
    tour: TourShape
}

export function usePeriods({ tour }: Props = {} as Props) {
    const { rows: periods } = useGetTourPeriods({
        tour_id: tour.id,
    })

    const { formMethods, handleSubmit, register, errors } = useFormRules<PeriodsPayload>({
        schema: PeriodsSchemas,
        defaultValues: {
            period: periods,
        }
    })
    const { mutateAsync: post, isPending: isLoading } = usePostTourPeriod()

    const onSubmit = useCallback(async ({ period: payload }: PeriodsPayload) => {

        post(payload.map(item => ({ ...item, tour_id: tour.id })))
    }, [post, tour])

    const handleResetPeriod = useCallback((index: number) => {
        formMethods.setValue(`period.${index}.by_weekday`, []);
        formMethods.setValue(`period.${index}.by_monthday`, []);
        formMethods.setValue(`period.${index}.by_month`, []);
        formMethods.setValue(`period.${index}.by_datetime`, []);
    }, [formMethods])


    useEffect(() => {
        if (!periods) return;

        formMethods.setValue("period", periods as PeriodsPayload["period"]);
    }, [periods, formMethods]);

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