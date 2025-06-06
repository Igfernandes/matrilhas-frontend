import i18n from "@configs/i18n";
import { useRef } from "react";

export function useClientsTable() {
  const tHeadsClient = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.phone"),
    i18n("words.email"),
    i18n("words.category"),
    i18n("words.actions"),
  ]);

  return {
    tHeadsClient,
  };
}
