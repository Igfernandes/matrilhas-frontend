
import { OptionsBar } from "@components/Panel/Sales/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { SalesTable } from "@components/Panel/Sales/Overview/Sales";
import { PanelContainer } from "@components/Panel/Container";

export default function Agencies() {

  return (
    <PanelContainer>
      <FiltersProvider id="SALES">
        <OptionsBar />
        <SalesTable />
      </FiltersProvider>
    </PanelContainer>
  );
}

