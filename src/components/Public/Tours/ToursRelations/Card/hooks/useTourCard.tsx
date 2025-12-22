import { TourPreviewShape } from "@type/Tours"
import { useMemo } from "react"

type Props = {
    tour: TourPreviewShape
}

export function useTourCard({ tour }: Props) {
    const originAddress = useMemo(() => {
        if (Array.isArray(tour?.addresses) === false)
            return null

        return (tour?.addresses ?? [])?.find((address) => address.type === "ORIGIN")
    }, [tour])
    const destinyAddress = useMemo(() => {
        if(Array.isArray(tour?.addresses) === false)
            return null;

        return (tour?.addresses ?? [])?.find((address) => address.type === "DESTINY")
    }, [tour])

    return {
        destinyAddress,
        originAddress
    }
}