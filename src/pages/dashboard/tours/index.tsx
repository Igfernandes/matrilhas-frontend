import { DashboardContainer } from "@components/Private/Container";

import { OptionsBar } from "@components/Private/Tours/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { ModalTourOperationType } from "@components/Private/Tours/type";
import { ToursTable } from "@components/Private/Tours/Overview/Tours";

export default function Tours() {

  return (
    <DashboardContainer<ModalTourOperationType>>
      <FiltersProvider id="TOURS">
        <OptionsBar />
        <ToursTable />
      </FiltersProvider>
    </DashboardContainer>
  );
}

