import { CardBoard } from "@components/shared/layouts/CardBoard";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useChargeOverview } from "@components/Private/Charges/Overview/hooks/useOverviewCharge";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { ChargesOverview } from "@components/Private/Charges/Overview";
import { OptionsBar } from "@components/Private/Charges/Overview/OptionsBar";

export default function Finance() {
  const { cardsBoard } = useChargeOverview();

  return (
    <DashboardContainer>
      <FiltersProvider id="CHARGES">
        <OptionsBar />
        <CardBoard viewLimit={5} items={cardsBoard} />
        <ChargesOverview />
      </FiltersProvider>
    </DashboardContainer>
  );
}
