import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import useGetSales from "@services/Sales/Get/useGet";
import { useMemo, useRef } from "react"

export function useGraphicSales() {
    const routesRef = useRef(privateRoutes);
    const { rows: rowsData, isPending: isLoading } = useGetSales({
        limit: 500
    })
    const salesFeedback = useMemo(() => rowsData.map((sale) => ({
        title: sale?.tour?.name,
        scape: `${routesRef.current.sales}/${sale.id}`,
        message: `${i18n(`Texts.sale_made_${sale?.status?.toLocaleLowerCase()}`)}  
        ${sale?.client?.name ? `- ${sale?.client?.name}` : ""}`,
        date: sale.created_at,
        status: sale?.status?.toLocaleLowerCase()
    })), [rowsData, routesRef]);

    return {
        salesFeedback,
        isLoading
    }
}