import useGet from ".";
import { GetRelationsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetRelations(request: GetRelationsRequest = {}) {
  const { getRelations } = useGet();

  async function handle() {
    const { data } = await getRelations(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["charges/relations", request],
    queryFn: handle,
    enabled: true,
  });
  
  return {
    rows: data?.rows || [],
    count: data?.count || 0,
    ...rest,
  };
}
