import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { TourShape } from "@type/Tours"
import { RulesPayload, RulesSchema } from "../RulesSchema"
import usePostTourRule from "@services/Tours/Rules/Post/usePost"
import useGetTourRules from "@services/Tours/Rules/Get/useGet"
import { useI18n } from "@contexts/I18n"

type Props = {
    tour: TourShape
}

export function useRules({ tour }: Props = {} as Props) {
    const { t } = useI18n();
    const schema = useMemo(() => RulesSchema(t), [t]);
    const { rows: rules } = useGetTourRules({
        tour_id: tour.id,
    })
    const initializedRef = useRef(false)
    const { formMethods, handleSubmit, register, errors } = useFormRules<RulesPayload>({
        schema,
        defaultValues: {
            rule: []
        }
    })
    const { reset } = formMethods
    const { mutateAsync: post, isPending: isLoading } = usePostTourRule()

    const onSubmit = useCallback(async ({ rule: payload }: RulesPayload) => {
        await post(payload.map(rule => ({
            ...rule,
            tour_id: tour.id
        })))

    }, [post, tour])

    useEffect(() => {
        if (rules.length === 0 || initializedRef.current) return

        reset({
            rule: [
                rules?.find(rule => rule.type === "AGE") ?? {} as RulesPayload["rule"][0],
                rules?.find(rule => rule.type === "RESIDENCY") ?? {} as RulesPayload["rule"][0]
            ],
        });

        initializedRef.current = true
    }, [rules, reset]);

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoading
    }
}