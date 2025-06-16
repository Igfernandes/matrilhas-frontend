import { OptionsBar } from "@components/Private/Events/Overview/OptionsBar";
import { ServicesTable } from "@components/Private/Events/Overview/ServicesTable";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Services() {
  const { handleSearch, search, filterObjects } = useSearch();

  return (
    <DashboardContainer>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <ServicesTable filterObjects={filterObjects} search={search} />
      </div>
    </DashboardContainer>
  );
}
