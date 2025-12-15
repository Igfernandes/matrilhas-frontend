import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { Clients as ClientTable } from "@components/Private/Clients/Overview/Clients";
import { ModalClientsOperationType } from "@components/Private/Clients/type";
import { OptionsBar } from "@components/Private/Clients/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";

export default function Clients() {

  return (
    <DashboardContainer<ModalClientsOperationType>>
      <FiltersProvider id="CLIENTS">
        <OptionsBar  />
        <ClientTable />
      </FiltersProvider>
    </DashboardContainer>
  );
}

