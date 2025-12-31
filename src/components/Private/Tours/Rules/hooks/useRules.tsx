import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useEffect, useMemo } from "react"
import { TourShape } from "@type/Tours"
import { RulesPayload, RulesSchema } from "../RulesSchema"
import usePostTourRule from "@services/Tours/Rules/Post/usePost"
import useGetTourRules from "@services/Tours/Rules/Get/useGet"

type Props = {
    tour: TourShape
}

export function useRules({ tour }: Props = {} as Props) {
    const { rows: rules } = useGetTourRules({
        tour_id: tour.id,
    })
    const rulesToGratuity = useMemo(() => {
        return rules?.find(rule => rule.type === "AGE") ?? {} as RulesPayload["rule"][0]
    }, [rules])
    const rulesToResidency = useMemo(() => {
        return rules?.find(rule => rule.type === "RESIDENCY") ?? {} as RulesPayload["rule"][0]
    }, [rules])

    const { formMethods, handleSubmit, register, errors } = useFormRules<RulesPayload>({
        schema: RulesSchema,
        defaultValues: {
            rule: [
                rulesToGratuity,
                rulesToResidency
            ]
        }
    })
    const { mutateAsync: post, isPending: isLoading } = usePostTourRule()

    const onSubmit = useCallback(async ({ rule: payload }: RulesPayload) => {
        await post(payload.map(rule => ({
            ...rule,
            tour_id: tour.id
        })))

    }, [post, tour])

    useEffect(() => {

        formMethods.reset({
            rule: [
                rulesToGratuity,
                rulesToResidency
            ],
        });

    }, [rulesToGratuity, rulesToResidency, , formMethods]);

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoading
    }
}