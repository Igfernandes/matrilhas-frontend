import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback } from "react"
import { TourShape } from "@type/Tours"
import { RulesPayload, RulesSchema } from "../GallerySchema"
import useDeleteToursAgency from "@services/Tours/Agency/Delete/useDeleteToursAgencies"
import { useModalContext } from "@contexts/Modal"

type Props = {
    tour: TourShape
}

export function useRules({ tour }: Props = {} as Props) {
    const { modal, handleToggleModal } = useModalContext()
    const { mutateAsync: deleteToursRelationAgencies, isPending: isLoadingDelete } = useDeleteToursAgency()
    const { formMethods, handleSubmit, register, errors } = useFormRules<RulesPayload>({
        schema: RulesSchema,
        defaultValues: {
        }
    })
    const onSubmit = useCallback(async () => {


    }, [])

    const handleDeleteAgencyRelation = useCallback(async () => {
        const { success } = await deleteToursRelationAgencies({
            tour_id: tour.id,
            agency_id: modal.id as number
        })
        if (success) handleToggleModal(false)

    }, [deleteToursRelationAgencies, tour, modal.id, handleToggleModal])


    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        handleDeleteAgencyRelation,
        isLoadingDelete,
    }
}