import useGet from ".";
import { GetTourAgenciesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetTourAgencies(
  request: GetTourAgenciesRequest = {} as GetTourAgenciesRequest
) {
  const { getToursAgencies } = useGet();
  async function handle() {
    const { data } = await getToursAgencies(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["tours/agencies", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
