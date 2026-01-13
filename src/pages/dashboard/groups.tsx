import { DashboardContainer } from "@components/Private/Container";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { ModalUserOperationType } from "@components/Private/Users/type";
import { Groups } from "@components/Private/Users/Groups";
import { OptionsBar } from "@components/Private/Users/Groups/OptionsBar";

export default function UsersGroups() {
  const { handleSearch, search } = useSearch();

  return (
    <DashboardContainer<ModalUserOperationType>>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <Groups
          search={search}
        />
      </div>
    </DashboardContainer>
  );
}
