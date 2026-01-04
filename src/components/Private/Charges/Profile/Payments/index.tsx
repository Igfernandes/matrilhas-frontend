import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import i18n from "@configs/i18n";
import { usePayments } from "./hooks/usePayments";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { ChargeShape } from "@type/Charges";

type Props = {
  charge: ChargeShape;
}

export function PaymentsTable({ charge }: Props) {
  const { chargesPayments } = API_ROUTES
  const { setParams } = useRoutes()
  const { tHeadsPayment, builderPaymentRows, chargeQuery } = usePayments({ charge });

  return (
    <div className=" bg-white ">
      <SmartTable
        ajax={{
          builder: builderPaymentRows,
          key: "charges/payments",
          url: setParams({
            url: chargesPayments,
            data: chargeQuery
          }),
        }}
        options={{
          pagination: {
            max: 10
          },
        }}
        tHeads={{
          data: tHeadsPayment.current,
          widths: [50, 200, 180, 100, 150, 60],
        }}
        title={i18n("Words.payments")}
      />
    </div>
  );
}
