import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { Status } from "@components/utilities/Status";
import { getNumberFormatted } from "@helpers/string";
import { TourAgencyShape } from "@type/Tours/Agency";
import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import { AgencyActions } from "../AgencyActions";
import { useI18n } from "@contexts/I18n";

export function useTable() {
    const { t } = useI18n()
    const [selectors, setSelectors] = useState<SelectorShape[]>([]);
    /** tHeads NÃO depende de estado → useRef é perfeito aqui */
    const tHeads = useMemo<Array<string>>(() => [
        "ID",
        t("Words.name"),
        t("Words.status"),
        t("Words.phone"),
        t("Words.created_at"),
        t("Words.actions"),
    ], [t]);

    /** 🔥 useCallback para estável */
    const updateForTable = useCallback(
        (data: unknown) => {
            const { agency_id, name, status, phone, created_at } = data as TourAgencyShape;
            return {
                id: agency_id,
                name,
                status: <Status is={status} />,
                phone: getNumberFormatted(phone),
                created_at: dayjs(created_at).format("DD/MM/YYYY HH:mm"),
                actions: <AgencyActions id={agency_id} />,
            };
        },
        []
    );

    return {
        tHeads,
        updateForTable, selectors, setSelectors
    }
}