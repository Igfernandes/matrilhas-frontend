import { CardBoard } from "@components/shared/layouts/CardBoard";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { OptionsBar } from "@components/Private/Finance/Overview/OptionsBar";
import { MyCharges } from "@components/Private/Finance/Overview/MyCharges";
import { useOverviewCharge } from "@components/Private/Finance/Overview/hooks/useOverviewCharge";
import { OperationsFailures } from "@components/Private/Finance/Overview/OperationsFailures";

export default function Finance() {
  const { charges, cardsBoard } = useOverviewCharge();
  const { handleSearch, search } = useSearch();

  return (
    <DashboardContainer>
      <div>
        <OptionsBar handleSearch={handleSearch} />
        <CardBoard viewLimit={5} items={cardsBoard} />
        <div className="relative z-10">
          <MyCharges
            filter={search}
            charges={charges}
          />
          <OperationsFailures
            operationsFailures={[]}
            search={search}
          />
        </div>
      </div>
    </DashboardContainer>
  );
}
