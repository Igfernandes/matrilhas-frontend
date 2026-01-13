import { DashboardContainer } from "@components/Private/Container";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { useUsersManager } from "@components/Private/Users/hooks/useUsersManager";
import { ModalUserOperationType } from "@components/Private/Users/type";
import { UsersManager } from "@components/Private/Users";
import { OptionsBar } from "@components/Private/Users/OptionsBar";

export default function Users() {
  const { handleSearch, search } = useSearch();
  const { groups } = useUsersManager();

  return (
    <DashboardContainer<ModalUserOperationType>>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <UsersManager
          search={search}
          groups={groups ?? []}
        />
      </div>
    </DashboardContainer>
  );
}
