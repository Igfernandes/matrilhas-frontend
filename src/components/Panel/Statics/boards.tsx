import { Board } from "@components/shared/layouts/Board"
import { useI18n } from "@contexts/I18n"
import { SalesStaticsResponse } from "@type/Sales/statics"
import { useMemo } from "react"

type Props = {
    statics: SalesStaticsResponse,
}

export function SaleBoards({ statics }: Props) {
    const { t } = useI18n()
    const tours = useMemo(() => statics?.tours ?? [], [statics])
    const clients = useMemo(() => statics?.clients ?? [], [statics])

    return (
        <div className="flex justify-around mt-6">
            <div className="mx-2">
                <Board header={{
                    background: "bg-blue",
                    title: t("Screens.dashboard.statics.sales_by_tour").toUpperCase(),
                }} items={tours.map((tour) => ({
                    label: tour.title ?? t("Words.deleted"),
                    value: tour.total_sales,
                }))} />
            </div>
            <div className="mx-2">
                <Board header={{
                    background: "bg-primary",
                    title: t("Screens.dashboard.statics.sales_by_clients").toUpperCase(),
                }} items={clients.map((client) => ({
                    label: client.name ?? t("Words.deleted"),
                    value: client.total_purchases,
                }))} />
            </div>
        </div>
    )
}