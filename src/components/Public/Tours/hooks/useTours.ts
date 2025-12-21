import useGetToursPreview from "@services/Tours/GetPreview/useGet";
import { useEffect, useMemo, useState } from "react";
import { TourFiltersPayload } from "../Sidebar/filtersSchemas";
import { useRouter } from "next/router";

export function useTours() {
  const router = useRouter();
  const [filters, setFilters] = useState<TourFiltersPayload>(
    router.query as TourFiltersPayload
  );
  const { rows } = useGetToursPreview({
    ...filters,
    limit: 500,
  });
  const tours = useMemo(() => rows, [rows]);

  const handleApplyFilters = (newFilters: TourFiltersPayload) => {
    const filters = {
      ...newFilters,
      price: newFilters.price ? Number(newFilters.price) : undefined,
    };

    setFilters(filters);
  };

  useEffect(() => {
    if (Object.keys(router.query).length === 0) return;

    setFilters(router.query as TourFiltersPayload);
  }, [setFilters, router.query]);

  return {
    tours,
    handleApplyFilters,
    filters,
  };
}
