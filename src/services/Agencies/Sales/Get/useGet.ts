import useGet from ".";
import { GetSalesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetAgenciesSales(request: GetSalesRequest = {}) {
  const { getSales } = useGet();

  async function handle() {
    const { data } = await getSales(request);
    return data ?? null;
  }
  const { data, ...rest } = useQueryGuard({
    queryKey: ["agencies/sales", request],
    queryFn: handle,
    enabled: true,
  });
  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
