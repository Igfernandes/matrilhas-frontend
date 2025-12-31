import useGet from ".";
import { GetSalesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetSales(request: GetSalesRequest = {}) {
  const { getSales } = useGet();

  async function handle() {
    const { data } = await getSales(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["sales", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
