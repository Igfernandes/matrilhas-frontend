import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { usePayments } from "./hooks/usePayments";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { ChargeShape } from "@type/Charges";
import { useI18n } from "@contexts/I18n";

type Props = {
  charge: ChargeShape;
}

export function PaymentsTable({ charge }: Props) {
  const { t } = useI18n()
  const { agenciesPayments } = API_ROUTES
  const { setParams } = useRoutes()
  const { tHeadsPayment, builderPaymentRows, chargeQuery } = usePayments({ charge });

  return (
    <div className="bg-white">
      <SmartTable
        ajax={{
          builder: builderPaymentRows,
          key: "agencies/charges/payments",
          url: setParams({
            url: agenciesPayments.replace("{charge_id}", String(charge.id)),
            data: chargeQuery
          }),
        }}
        options={{
          pagination: {
            max: 10
          },
        }}
        tHeads={{
          data: tHeadsPayment,
          widths: [50, 200, 180, 100, 150],
        }}
        title={t("Words.payments")}
      />
    </div>
  );
}
