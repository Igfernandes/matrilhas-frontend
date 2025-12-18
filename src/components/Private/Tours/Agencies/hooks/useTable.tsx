import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { Status } from "@components/utilities/Status";
import i18n from "@configs/i18n";
import { getNumberFormatted } from "@helpers/string";
import { TourAgencyShape } from "@type/Tours/Agency";
import dayjs from "dayjs";
import { useCallback, useRef } from "react";
import { AgencyActions } from "../AgencyActions";

export function useTable() {
    const selectors = useRef<SelectorShape[]>([]);
    /** tHeads NÃO depende de estado → useRef é perfeito aqui */
    const tHeads = useRef<Array<string>>([
        "ID",
        i18n("Words.name"),
        i18n("Words.status"),
        i18n("Words.phone"),
        i18n("Words.created_at"),
        i18n("Words.actions"),
    ]);

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
                actions: <AgencyActions  id={agency_id} />,
            };
        },
        []
    );

    return {
        tHeads,
        updateForTable, selectors
    }
}