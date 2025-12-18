import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useEffect } from "react"
import { TourShape } from "@type/Tours"
import { AddressesPayload, AddressesSchemas } from "../AddressesSchemas"
import useGetTourAddresses from "@services/Tours/Address/Get/useGet"
import usePostTourAddress from "@services/Tours/Address/Post/usePost"

type Props = {
    tour: TourShape
}

export function useAddresses({ tour }: Props = {} as Props) {
    const { rows: addresses } = useGetTourAddresses({
        tour_id: tour.id,
    })

    const { formMethods, handleSubmit, register, errors } = useFormRules<AddressesPayload>({
        schema: AddressesSchemas,
        defaultValues: {
            address: addresses ?? []
        }
    })
    const { mutateAsync: post, isPending: isLoading } = usePostTourAddress()

    const onSubmit = useCallback(async ({ address: payload }: AddressesPayload) => {
        await post(payload.map(address => ({
            ...address,
            tour_id: tour.id
        })))

    }, [post, tour])

    useEffect(() => {
        if (addresses?.length) {
            formMethods.reset({
                address: addresses,
            });
        }
    }, [addresses, formMethods]);

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoading
    }
}