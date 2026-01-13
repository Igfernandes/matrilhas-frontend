import { Wallet } from "@assets/Icons/black/Wallet";
import { CardAmountBoard } from "@components/shared/layouts/CardAmountBoard";
import { useI18n } from "@contexts/I18n";
import { formatMoney } from "@helpers/currencies";
import { SalesStaticsResponse } from "@type/Sales/statics";
import { useMemo } from "react";

type Props = {
    statics: SalesStaticsResponse;
    isLoading: boolean;
}

export function StaticsHeader({ statics, isLoading }: Props) {
    const { t } = useI18n()
    const total = useMemo(() => {
        const info = statics?.totals

        if (!info) return 0
        return info.canceled + info.pending + info.sold
    }, [statics])

    return (
        <div>
            <CardAmountBoard
                viewLimit={4}
                isLoading={isLoading}
                items={[
                    {
                        icon: <Wallet fill="white" />,
                        background: "bg-gray",
                        title: t("Words.total"),
                        value: formatMoney(total),
                    },
                    {
                        icon: <Wallet fill="white" />,
                        background: "bg-green",
                        title: t("Words.entries"),
                        value: formatMoney(statics?.totals?.sold ?? 0),
                    },
                    {
                        icon: <Wallet fill="white" />,
                        background: "bg-orange",
                        title: t("Words.pendents"),
                        value: formatMoney(statics?.totals?.pending ?? 0),
                    },
                    {
                        icon: <Wallet fill="white" />,
                        background: "bg-red",
                        title: t("Words.canceled"),
                        value: formatMoney(statics?.totals?.canceled ?? 0),
                    },
                ]}
            />
        </div>
    )
}