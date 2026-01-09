import useGetCharges from "@services/Charges/Get/useGetCharges";
import { useMemo } from "react";
import { financeCardsBoard } from "../../../../../data/finance/cardsBoard";
import useGetPayments from "@services/Charges/Payments/Get/useGet";

export function useChargeOverview() {
  const { rows: chargesData } = useGetCharges();
  const charges = useMemo(() => chargesData ?? [], [chargesData]);
  const { rows: paymentsData } = useGetPayments();
  const payments = useMemo(() => paymentsData ?? [], [paymentsData]);

  const cardsBoard = useMemo(() => {
    const updatedLinkedCostumers = financeCardsBoard.map((card) => {
      let value = "";
      switch (card.key) {
        case "agencies_total":
          value = charges
            .reduce((acc, charge) => acc + (charge.agencies?.length ?? 0), 0)
            .toString();
          break;
        case "clients_total":
          value = charges
            .reduce((acc, charge) => acc + (charge.clients?.length ?? 0), 0)
            .toString();
          break;
        case "payments_opened":
          value = payments
            .filter((payment) => payment.status === "PENDENT")
            .reduce((acc, payment) => payment.paid_amount + acc, 0)
            .toString();
          break;
        case "payments_received":
          value = payments
            .filter((payment) => payment.status === "PAID")
            .reduce((acc, payment) => payment.paid_amount + acc, 0)
            .toString();
          break;
        default:
          value = payments
            .filter((payment) => payment.status === "CANCELED")
            .reduce((acc, payment) => payment.paid_amount + acc, 0)
            .toString();
          break;
      }

      return { ...card, value };
    });

    return updatedLinkedCostumers;
  }, [payments, charges]);

  return {
    charges,
    cardsBoard,
  };
}
