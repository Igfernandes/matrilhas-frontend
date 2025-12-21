import useGetToursPreview from "@services/Tours/GetPreview/useGet";
import { useMemo } from "react";
import { ToursRelationsProps } from "../type";

type Props = ToursRelationsProps;
export function useToursRelations({ query = {} }: Props = {}) {
  const { rows, isFetching, isPending } = useGetToursPreview(query);
  const tours = useMemo(() => rows, [rows]);

  return {
    tours,
    isLoading: isFetching || isPending,
  };
}
