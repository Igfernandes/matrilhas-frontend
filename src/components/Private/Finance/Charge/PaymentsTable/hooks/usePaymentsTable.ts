import i18n from "@configs/i18n";
import { ClientShape } from "@type/Clients/client";
import { useRef } from "react";

export function usePaymentsTable() {
  const tHeadsPayment = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.paid_amount"),
    i18n("words.status"),
    i18n("words.bank"),
    i18n("words.actions"),
  ]);

  const getClientName = (
    clients: Array<ClientShape>,
    clientCurrentId: number
  ) => {
    return clients.find((client) => client.id === clientCurrentId)?.name;
  };

  return {
    tHeadsPayment,
    getClientName,
  };
}
