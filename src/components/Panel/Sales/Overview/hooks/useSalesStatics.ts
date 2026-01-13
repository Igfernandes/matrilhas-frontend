import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import useGetAgenciesSalesStatics from "@services/Agencies/Sales/GetStatics/useGet";
import { useMemo } from "react";

export function useSalesStatics() {
  const { filters } = useFiltersContext();
  const { data: dataSaleStatics } = useGetAgenciesSalesStatics(filters["SALES"] ?? {});
  const saleStatics = useMemo(() => dataSaleStatics, [dataSaleStatics]);

  return {
    saleStatics,
  };
}
