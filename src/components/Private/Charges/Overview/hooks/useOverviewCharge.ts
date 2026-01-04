import { CardItemShape } from "@components/shared/layouts/CardBoard/types";
import useGetCharges from "@services/Charges/Get/useGetCharges";
import { useCallback, useMemo } from "react";
import { financeCardsBoard } from "../../../../../data/finance/cardsBoard";
import useGetPayments from "@services/Charges/Payments/Get/useGet";
import dayjs from "dayjs";

export function useChargeOverview() {
  const { rows: chargesData } = useGetCharges();
  const charges = useMemo(() => chargesData ?? [], [chargesData]);
  const { rows: paymentsData } = useGetPayments();
  const payments = useMemo(() => paymentsData ?? [], [paymentsData]);

  const updateLinkedCustomers = useCallback(
    (cardBoard: CardItemShape) => {
      const clientsLinked = charges
        .map((charge) => charge.clients?.length)
        .reduce((acc: number, c) => acc + (c ?? 0), 0);
      return {
        ...cardBoard,
        value: String(clientsLinked),
      };
    },
    [charges]
  );

  const getPaymentsExtract = useCallback(() => {
    let monthlyIncome = 0;
    let revenueIncome = 0;

    const quantity = payments.filter(({ created_at, status, paid_amount }) => {
      const paymentDate = dayjs(created_at);
      const nowDate = dayjs();

      if (
        paymentDate.month() === nowDate.month() &&
        paymentDate.year() === nowDate.year()
      )
        monthlyIncome += status === "PAID" ? paid_amount : 0;

      if (paymentDate.year() === nowDate.year())
        revenueIncome += status === "PAID" ? paid_amount : 0;

      return status === "PAID";
    }).length;

    return {
      quantity,
      monthly: monthlyIncome,
      revenue: revenueIncome,
    };
  }, [payments]);

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
  }, [payments, getPaymentsExtract, updateLinkedCustomers]);

  return {
    charges,
    cardsBoard,
  };
}
