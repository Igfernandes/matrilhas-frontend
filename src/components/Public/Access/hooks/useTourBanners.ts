import useGetToursPreview from "@services/Tours/GetPreview/useGet";
import { useMemo } from "react";

export function useTourBanners() {
  const { rows } = useGetToursPreview();
  const tours = useMemo(() => {
    return rows.filter(tour => !!tour.banner) || [];
  }, [rows]);

  return {
    tours,
  };
}
