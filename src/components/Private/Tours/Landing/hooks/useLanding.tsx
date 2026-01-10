import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback, useEffect, useMemo, useState } from "react"
import { TourShape } from "@type/Tours"
import { LandingSchemas, LandingPayload } from "../LandingSchemas"
import useGetTourAddresses from "@services/Tours/Address/Get/useGet"
import usePostTourAddress from "@services/Tours/Address/Post/usePost"
import { useI18n } from "@contexts/I18n"

type Props = {
    tour: TourShape
}

export function useLanding({ tour }: Props = {} as Props) {
    const { t } = useI18n()
    const { rows: addresses, count, isPending: isLoadingAddresses } = useGetTourAddresses({
        tour_id: tour.id,
        type: "DESTINY"
    })
    const [amount, setAmount] = useState(count ?? 1);
    const schema = useMemo(() => LandingSchemas(t), [t]);

    const { formMethods, handleSubmit, register, errors } = useFormRules<LandingPayload>({
        schema,
        defaultValues: {
            address: addresses ?? []
        }
    })
    const { mutateAsync: post, isPending: isLoading } = usePostTourAddress()

    const handleAddAddress = useCallback(() => {
        setAmount((prev) => prev + 1);
    }, [])

    const handleRemoveAddress = useCallback((id: number) => {
        const currentAddresses = formMethods.getValues("address");
        const updatedAddresses = currentAddresses.filter((_, index: number) => index !== id);

        formMethods.setValue("address", updatedAddresses);
        setAmount((prev) => prev - 1);
    }, [formMethods])


    const onSubmit = useCallback(async ({ address: payload }: LandingPayload) => {
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
            setAmount(count ?? 1)
        }
    }, [addresses, formMethods, setAmount, count]);

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        amount,
        handleAddAddress,
        handleRemoveAddress,
        isLoading: isLoading,
        isLoadingAddresses
    }
}