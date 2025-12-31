import { useMemo } from "react";
import { Information } from "./Information";
import { SalesTabs } from "./Tabs";

import { ProfileManagerProps } from "./type";
import { SalePaymentTabProps } from "./Tabs/type";
import { Dependents } from "./Dependents";

type Props = Pick<ProfileManagerProps, "sale">

export function SalePreview({ sale }: Props) {
    const tabs = useMemo(() => {
        const tabs = {
            INFORMATION: <Information sale={sale} />
        } as SalePaymentTabProps["tabs"];

        if (!!sale.payment_id) {
            tabs["EXTRACT"] = <Information sale={sale} />
        }

        if (Array.isArray(sale?.metadata?.dependents) && sale?.metadata?.dependents?.length > 0)
            tabs["DEPENDENTS"] = <Dependents sale={sale} />

        return tabs;
    }, [sale])

    return (
        <SalesTabs tabs={tabs} />
    )
}