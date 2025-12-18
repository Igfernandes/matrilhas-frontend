import useGet from ".";
import { GetTourRulesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetTourRules(
  request: GetTourRulesRequest = {} as GetTourRulesRequest
) {
  const { getToursRules } = useGet();

  async function handle() {
    const { data } = await getToursRules(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["tours/rules", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
