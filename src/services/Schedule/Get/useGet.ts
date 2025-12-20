import useGet from ".";
import { GetSchedulesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetSchedules(request: GetSchedulesRequest = {}) {
  const { getSchedules } = useGet();

  async function handle() {
    const { data } = await getSchedules(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["schedules", request],
    queryFn: handle,
    enabled: true,
  });
  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
