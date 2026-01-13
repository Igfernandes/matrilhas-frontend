import TimelineChart from "@components/shared/others/Graphics/TimeLineChart/TimelineChart";
import { useI18n } from "@contexts/I18n";
import { getRandomColor } from "@helpers/colors";
import { SalesStaticsResponse } from "@type/Sales/statics";
import { useMemo } from "react";

type Props = {
    statics: SalesStaticsResponse,
    isLoading?: boolean,
}

export function TimelineSales({ statics }: Props) {
    const agencies = useMemo(() => statics?.agencies ?? [], [statics])
    const { t } = useI18n()

    return (
        <div className="bg-white shadow-md mt-10 p-2 py-4">
            <TimelineChart title={t("Words.sales")} data={agencies.map((agency) => ({
                label: agency.name,
                value: agency.total_sales,
                color: getRandomColor()
            }))} />
        </div>
    )
}