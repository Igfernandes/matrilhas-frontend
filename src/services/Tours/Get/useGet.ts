import useGet from ".";
import { GetToursRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetTours(request: GetToursRequest = {} as GetToursRequest) {
  const { getTours } = useGet();

  async function handle() {
    const { data } = await getTours(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["tours", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
