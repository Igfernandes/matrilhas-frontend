import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback } from "react"
import { SaleProfilePayload, SaleProfileSchema } from "../profileSchemas"
import usePostSale from "@services/Sales/Post/usePost"

export function useProfile() {
    const { formMethods, handleSubmit, register, errors } = useFormRules<SaleProfilePayload>({
        schema: SaleProfileSchema,
    })
    const { mutateAsync: postSale, isPending: isLoadingPost } = usePostSale();

    const onSubmit = useCallback(async (payload: SaleProfilePayload) => {
        postSale(payload)
    }, [postSale])
    
    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPost
    }
}