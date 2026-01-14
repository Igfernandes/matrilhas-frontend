
import { OptionsBar } from "@components/Account/Sales/Overview/OptionsBar";
import FiltersProvider from "@components/shared/layouts/Filters/contexts";
import { SalesTable } from "@components/Account/Sales/Overview/Sales";
import { AccountContainer } from "@components/Account/Container";

export default function Agencies() {

  return (
    <AccountContainer title="Sales">
      <FiltersProvider id="SALES">
        <OptionsBar />
        <SalesTable />
      </FiltersProvider>
    </AccountContainer>
  );
}

