import { DashboardContainer } from "@components/shared/layouts/Dashboard";

import { OptionsBar } from "@components/Private/Agencies/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { AgenciesTable } from "@components/Private/Agencies/Overview/Agencies";
import { ModalAgencyOperationType } from "@components/Private/Agencies/type";

export default function Agencies() {

  return (
    <DashboardContainer<ModalAgencyOperationType>>
      <FiltersProvider id="AGENCIES">
        <OptionsBar />
        <AgenciesTable />
      </FiltersProvider>
    </DashboardContainer>
  );
}

