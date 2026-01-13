import { DashboardContainer } from "@components/Private/Container";

import { OptionsBar } from "@components/Private/Sales/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { ModalAgencyOperationType } from "@components/Private/Agencies/type";
import { SalesTable } from "@components/Private/Sales/Overview/Sales";

export default function Agencies() {

  return (
    <DashboardContainer<ModalAgencyOperationType>>
      <FiltersProvider id="SALES">
        <OptionsBar />
        <SalesTable />
      </FiltersProvider>
    </DashboardContainer>
  );
}

