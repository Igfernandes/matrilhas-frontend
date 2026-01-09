import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import useGetPayments from "@services/Charges/Payments/Get/useGet";
import { useMemo, useRef } from "react"

export function useGraphicPayments() {
    const routesRef = useRef(privateRoutes);
    const { rows: chargesData, isPending: isLoading } = useGetPayments({
        limit: 500
    })
    const paymentsFeedback = useMemo(() => chargesData.map((charge) => ({
        title: charge.client.name,
        message: `${i18n("Texts.charge_paid")}`,
        scape: routesRef.current.usersManager,
        date: charge.created_at,
        status: charge.status
    }))
        , [chargesData, routesRef]);


    return {
        paymentsFeedback,
        isLoading
    }
}