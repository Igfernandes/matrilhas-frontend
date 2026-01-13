import { CreateCharge } from "@components/Private/Charges/Create";
import { DashboardContainer } from "@components/Private/Container";
import { useI18n } from "@contexts/I18n";

export default function FinanceCreate() {
  const { t } = useI18n()
  return (
    <DashboardContainer title={t("Texts.new_charge")}>
      <CreateCharge />
    </DashboardContainer>
  );
}
