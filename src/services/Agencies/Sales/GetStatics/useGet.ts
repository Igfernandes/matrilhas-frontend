import useGet from ".";
import { GetSalesStaticsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetAgenciesSalesStatics(
  request: GetSalesStaticsRequest = {}
) {
  const { getSales } = useGet();

  async function handle() {
    const { data } = await getSales(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["agencies/sales/statics", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
