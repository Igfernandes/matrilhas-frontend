import { useFormRules } from "@hooks/Forms/useFormRules"
import { AgencyProfilePayload, AgencyProfileSchema } from "../profileSchemas"
import { useCallback } from "react"
import usePutAgency from "@services/Agencies/Put/usePut"
import usePostAgency from "@services/Agencies/Post/usePost"
import { AgencyShape } from "@type/Agencies"
import { getCNPJFormatted, getNumberFormatted } from "@helpers/string"

type Props = {
    agency?: AgencyShape
}

export function useProfile({ agency = {} as AgencyShape }: Props = {} as Props) {
    const { formMethods, handleSubmit, register, errors } = useFormRules<AgencyProfilePayload>({
        schema: AgencyProfileSchema,
        defaultValues: {
            ...agency,
            phone: getNumberFormatted(agency.phone),
            cnpj: getCNPJFormatted(agency.cnpj),
            logotype: "",
        }
    })
    const { mutateAsync: putAgency, isPending: isLoadingPut } = usePutAgency()
    const { mutateAsync: postAgency, isPending: isLoadingPost } = usePostAgency();

    const onSubmit = useCallback(async (payload: AgencyProfilePayload) => {
        if (payload.id) {
            await putAgency({
                ...payload,
                id: agency.id ?? 0,
                logotype: payload.logotype === "" ? agency?.logotype : payload.logotype
            })
        } else {
            await postAgency(payload)
        }

    }, [putAgency, postAgency, agency])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPut ?? isLoadingPost
    }
}