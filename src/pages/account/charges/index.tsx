
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { ChargesOverview } from "@components/Account/Charges/Overview";
import { OptionsBar } from "@components/Account/Charges/Overview/OptionsBar";
import { AccountContainer } from "@components/Account/Container";

export default function Index() {

  return (
    <AccountContainer title="Charges">
      <FiltersProvider id="CHARGES">
        <OptionsBar />
        <ChargesOverview />
      </FiltersProvider>
    </AccountContainer>
  );
}
