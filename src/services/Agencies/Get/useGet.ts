import useGet from ".";
import { GetAgenciesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetAgencies(request: GetAgenciesRequest = {}) {
  const { getAgencies } = useGet(); 
  async function handle() {
    const { data } = await getAgencies(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["agencies", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
