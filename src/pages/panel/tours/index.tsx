
import { OptionsBar } from "@components/Panel/Tours/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { ToursTable } from "@components/Panel/Tours/Overview/Tours";
import { PanelContainer } from "@components/Panel/Container";

export default function Tours() {

  return (
    <PanelContainer>
      <FiltersProvider id="TOURS">
        <OptionsBar />
        <ToursTable />
      </FiltersProvider>
    </PanelContainer>
  );
}

