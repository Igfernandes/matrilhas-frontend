import useGet from ".";
import { GetSalesStaticsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetSalesStatics(
  request: GetSalesStaticsRequest = {}
) {
  const { getSales } = useGet();

  async function handle() {
    const { data } = await getSales(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["sales/statics", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
