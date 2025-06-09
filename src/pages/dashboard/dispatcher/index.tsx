import { MessagesDispatcherTable } from "@components/Private/Dispatcher/Overview/MessagesDispatcherTable";
import { OptionsBar } from "@components/Private/Dispatcher/Overview/OptionsBar";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function MessagesDispatcher() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer>
      <OptionsBar handleSearch={handleSearch} />
      <MessagesDispatcherTable filterObjects={filterObjects} search={search} />
    </DashboardContainer>
  );
}
