
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { ChargesOverview } from "@components/Panel/Charges/Overview";
import { OptionsBar } from "@components/Panel/Charges/Overview/OptionsBar";
import { PanelContainer } from "@components/Panel/Container";

export default function Index() {

  return (
    <PanelContainer>
      <FiltersProvider id="CHARGES">
        <OptionsBar />
        <ChargesOverview />
      </FiltersProvider>
    </PanelContainer>
  );
}
