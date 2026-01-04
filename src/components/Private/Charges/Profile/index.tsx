import { FormBoard } from "./FormBoard";
import { ChargeShape } from "@type/Charges";
import { PaymentsTable } from "./Payments";
import { ChargesTabs } from "./Tabs";
import { ChargesRelations } from "./Relations";

type Props = {
  charge: ChargeShape;
};

export function ChargeProfile({ charge }: Props) {
  return (
    <ChargesTabs tabs={{
      INFORMATION: <FormBoard charge={charge} />,
      PAYMENTS: <PaymentsTable charge={charge} />,
      RELATIONS: <ChargesRelations charge={charge} />
    }} />
  );
}
