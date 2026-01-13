import { MessagesDispatcherTable } from "@components/Private/Dispatchers/Overview/MessagesDispatcherTable";
import { OptionsBar } from "@components/Private/Dispatchers/Overview/OptionsBar";
import { DashboardContainer } from "@components/Private/Container";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";

export default function MessagesDispatcher() {

  return (
    <DashboardContainer>
      <FiltersProvider id="DISPATCHERS">
        <OptionsBar  />
        <MessagesDispatcherTable  />
      </FiltersProvider>
    </DashboardContainer>
  );
}
