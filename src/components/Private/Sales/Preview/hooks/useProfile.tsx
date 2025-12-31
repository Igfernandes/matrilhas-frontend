import { useFormRules } from "@hooks/Forms/useFormRules"
import { AgencyProfilePayload, AgencyProfileSchema } from "../profileSchemas"
import { useCallback } from "react"
import { SaleShape } from "@type/Sales"
import usePutSale from "@services/Sales/Put/usePut"

type Props = {
    sale?: SaleShape
}

export function useProfile({ sale = {} as SaleShape }: Props = {} as Props) {
    const { formMethods, handleSubmit, register, errors } = useFormRules<AgencyProfilePayload>({
        schema: AgencyProfileSchema,
        defaultValues: sale
    })
    const { mutateAsync: putSale, isPending: isLoading } = usePutSale()

    const onSubmit = useCallback(async (payload: AgencyProfilePayload) => {
        putSale(payload)
    }, [putSale])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading
    }
}