import { ModalAgencyOperationType } from "@components/Private/Agencies/type";
import { SaleProfile } from "@components/Private/Sales/Profile";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Create() {

    return (
        <DashboardContainer<ModalAgencyOperationType>>
            <SaleProfile  />
        </DashboardContainer>
    )
}