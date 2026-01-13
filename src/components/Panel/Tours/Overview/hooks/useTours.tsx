import { useCallback, useMemo } from "react";
import { TourActions } from "../ToursActions";
import dayjs from "dayjs";
import { TourShape } from "@type/Tours";
import { useI18n } from "@contexts/I18n";

export function useTours() {
  const { t } = useI18n()
  
  /** tHeads NÃO depende de estado → useRef é perfeito aqui */
  const tHeads = useMemo<Array<string>>(() => [
    t("Words.title"),
    t("Words.slots"),
    t("Texts.available_at"),
    t("Words.created_at"),
    t("Words.actions"),
  ], [t]);

  /** 🔥 useCallback para estável */
  const updateForTable = useCallback(
    (data: unknown) => {
      const {  title, slots, available_at, slug, created_at } = data as TourShape;

      return {
        title,
        slots,
        available_at: dayjs(available_at).format("DD/MM/YYYY HH:mm"),
        created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm"),
        actions: <TourActions slug={slug} />,
      };
    },
    []
  );

  return {
    tHeads,
    updateForTable,
  };
}
