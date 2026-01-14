import useGet from ".";
import { GetSalesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetClientsSales(request: GetSalesRequest = {}) {
  const { getSales } = useGet();

  async function handle() {
    const { data } = await getSales(request);
    return data ?? null;
  }
  const { data, ...rest } = useQueryGuard({
    queryKey: ["clients/sales", request],
    queryFn: handle,
    enabled: true,
  });
  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
