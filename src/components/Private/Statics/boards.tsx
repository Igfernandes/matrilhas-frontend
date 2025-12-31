import { Board } from "@components/shared/layouts/Board"
import { privateRoutes } from "@configs/routes/Web/navigation"
import { useI18n } from "@contexts/I18n"
import { SalesStaticsResponse } from "@type/Sales/statics"
import { useMemo } from "react"

type Props = {
    statics: SalesStaticsResponse,
}

export function SaleBoards({ statics }: Props) {
    const { t } = useI18n()
    const { tours: toursRoute, agencies: agenciesRoute, clients: clientsRoute } = privateRoutes
    const tours = useMemo(() => statics?.tours ?? [], [statics])
    const agencies = useMemo(() => statics?.agencies ?? [], [statics])
    const clients = useMemo(() => statics?.clients ?? [], [statics])

    return (
        <div className="flex mt-6">
            <div className="mx-2">
                <Board header={{
                    background: "bg-blue",
                    title: t("Screens.dashboard.statics.sales_by_tour").toUpperCase(),
                }} items={tours.map((tour) => ({
                    label: tour.title,
                    value: tour.total_sales,
                    url: `${toursRoute}/${tour.id}`,
                }))} />
            </div>
            <div className="mx-2">
                <Board header={{
                    background: "bg-primary",
                    title: t("Screens.dashboard.statics.sales_by_agency").toUpperCase(),
                }} items={agencies.map((agency) => ({
                    label: agency.name,
                    value: agency.total_sales,
                    url: `${agenciesRoute}/${agency.id}`,
                }))} />
            </div>
            <div className="mx-2">
                <Board header={{
                    background: "bg-primary",
                    title: t("Screens.dashboard.statics.sales_by_clients").toUpperCase(),
                }} items={clients.map((client) => ({
                    label: client.name,
                    value: client.total_purchases,
                    url: `${clientsRoute}/${client.id}`,
                }))} />
            </div>
        </div>
    )
}