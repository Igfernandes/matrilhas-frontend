import { CreateCharge } from "@components/Private/Charges/Create";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";

export default function FinanceCreate() {

  return (
    <DashboardContainer title={i18n("Words.new_charge")}>
      <CreateCharge />
    </DashboardContainer>
  );
}
