import { useFormRules } from "@hooks/Forms/useFormRules"
import { useCallback } from "react"
import { TourShape } from "@type/Tours"
import { TourProfilePayload, TourProfileSchema } from "../profileSchemas"
import usePutTour from "@services/Tours/Put/usePut"
import usePostTour from "@services/Tours/Post/usePost"
import dayjs from "dayjs"

type Props = {
    tour?: TourShape
}

export function useProfile({ tour = {} as TourShape }: Props = {} as Props) {
    const { formMethods, handleSubmit, register, errors } = useFormRules<TourProfilePayload>({
        schema: TourProfileSchema,
        defaultValues: {
            ...tour,
            banner: "",
        }
    })
    const { mutateAsync: putTour, isPending: isLoadingPut } = usePutTour()
    const { mutateAsync: postTour, isPending: isLoadingPost } = usePostTour();

    const onSubmit = useCallback(async (data: TourProfilePayload) => {
        const payload = {
            ...data,
            available_at: dayjs(data.available_at).format("YYYY-MM-DD HH:mm"),
            unavailable_at: dayjs(data.unavailable_at).format("YYYY-MM-DD HH:mm"),
        } as TourProfilePayload
        if (payload.id) {
            await putTour({
                ...payload,
                id: tour.id ?? 0,
                banner: payload.banner === "" ? tour?.banner : payload.banner
            })
        } else {
            await postTour(payload)
        }

    }, [putTour, postTour, tour])

    return {
        formMethods,
        handleSubmit,
        register,
        errors,
        onSubmit,
        isLoading: isLoadingPut ?? isLoadingPost
    }
}