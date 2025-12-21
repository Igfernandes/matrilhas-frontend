import useGetAgenciesPreview from "@services/Agencies/GetPreview/useGet";
import { useMemo } from "react";

export function useAgencies() {
    const { rows } = useGetAgenciesPreview();
    const agencies = useMemo(() => rows, [rows]);

    return {
        agencies
    }
}