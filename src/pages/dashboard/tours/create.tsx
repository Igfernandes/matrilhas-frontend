import { ModalAgencyOperationType } from "@components/Private/Agencies/type";
import { TourProfile } from "@components/Private/Tours/Profile";
import { DashboardContainer } from "@components/Private/Container";

export default function Create() {

    return (
        <DashboardContainer<ModalAgencyOperationType>>
            <TourProfile />
        </DashboardContainer>
    )
}