import { MessagesDispatcherTable } from "@components/Private/Dispatchers/Overview/MessagesDispatcherTable";
import { OptionsBar } from "@components/Private/Dispatchers/Overview/OptionsBar";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function MessagesDispatcher() {
  const { handleSearch, search } = useSearch();

  return (
    <DashboardContainer>
      <OptionsBar handleSearch={handleSearch} />
      <MessagesDispatcherTable search={search} />
    </DashboardContainer>
  );
}
