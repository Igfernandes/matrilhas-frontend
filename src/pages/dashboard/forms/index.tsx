import { FormsCard } from "@components/Private/Forms/Overview";
import { OptionsBar } from "@components/Private/Forms/Overview/OptionsBar";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";

export default function Forms() {

  return (
    <DashboardContainer>
      <FiltersProvider id="FORMS">
        <OptionsBar />
        <FormsCard  />
      </FiltersProvider>
    </DashboardContainer>
  );
}
