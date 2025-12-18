import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useEffect } from "react"
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

    const { formMethods, handleSubmit, register, errors } = useFormRules<RulesPayload>({
        schema: RulesSchema,
        defaultValues: {
            rule: rules ?? []
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
        if (rules?.length) {
            formMethods.reset({
                rule: rules,
            });
        }
    }, [rules, formMethods]);

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoading
    }
}