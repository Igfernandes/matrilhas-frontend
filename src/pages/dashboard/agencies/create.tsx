import { AgencyProfile } from "@components/Private/Agencies/Profile";
import { ModalAgencyOperationType } from "@components/Private/Agencies/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Create() {

    return (
        <DashboardContainer<ModalAgencyOperationType>>
            <AgencyProfile  />
        </DashboardContainer>
    )
}