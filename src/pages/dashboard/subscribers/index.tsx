import { DashboardContainer } from "@components/Private/Container";

import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { SubscribersTable } from "@components/Private/Subscribers/Overview";
import { ModalSubscriberOperationType } from "@components/Private/Subscribers/type";
import { OptionsBar } from "@components/Private/Subscribers/Overview/OptionsBar";

export default function Subscribers() {

  return (
    <DashboardContainer<ModalSubscriberOperationType>>
      <FiltersProvider id="SUBSCRIBERS">
        <OptionsBar />
        <SubscribersTable />
      </FiltersProvider>
    </DashboardContainer>
  );
}

