import useGet from ".";
import {  GetTourPeriodRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetTourPeriods(request: GetTourPeriodRequest = {} as GetTourPeriodRequest) {
  const { getToursPeriod } = useGet();

  async function handle() {
    const { data } = await getToursPeriod(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["tours/period", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
