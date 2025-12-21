import { DashboardContainer } from "@components/shared/layouts/Dashboard";

import { OptionsBar } from "@components/Private/Galleries/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { GalleriesTable } from "@components/Private/Galleries/Overview/Galleries";
import { ModalGalleryOperationType } from "@components/Private/Galleries/type";

export default function Galleries() {

  return (
    <DashboardContainer<ModalGalleryOperationType>>
      <FiltersProvider id="GALLERIES">
        <OptionsBar />
        <GalleriesTable />
      </FiltersProvider>
    </DashboardContainer>
  );
}

