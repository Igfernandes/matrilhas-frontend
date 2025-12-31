import { formatMoney } from "@helpers/currencies";
import { useSalesStatics } from "./hooks/useSalesStatics";
import { useI18n } from "@contexts/I18n";


export function SaleHeader() {
    const { t } = useI18n()
    const { saleStatics } = useSalesStatics()
    return (
        <div className="flex justify-center flex-wrap mb-5">
            <div className="shadow px-6 py-4 mx-2 bg-white rounded-lg min-h-[15vh]">
                <div>
                    <span className="text-primary"><strong>{t("Screens.dashboard.sales.completed_total")}</strong></span>
                </div>
                <div>
                    <span className="text-lg">{formatMoney((saleStatics?.totals.sold ?? 0), "REAL")}</span>
                </div>
            </div>
            <div className="shadow px-6 py-4 bg-white mx-2 rounded-lg min-h-[15vh]">
                <div>
                    <span className="text-primary"><strong>{t("Screens.dashboard.sales.pendent_total")}</strong></span>
                </div>
                <div>
                    <span className="text-lg">{formatMoney((saleStatics?.totals.pending ?? 0), "REAL")}</span>
                </div>
            </div>
            <div className="shadow px-6 py-4 bg-white mx-2 rounded-lg min-h-[15vh]">
                <div>
                    <span className="text-primary"><strong>{t("Screens.dashboard.sales.canceled_total")}</strong></span>
                </div>
                <div>
                    <span className="text-lg">{formatMoney((saleStatics?.totals.canceled ?? 0), "REAL")}</span>
                </div>
            </div>
        </div>
    )
}