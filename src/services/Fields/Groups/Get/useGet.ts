import useGet from ".";
import { GetFieldsGroupsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetFieldsGroups(
  request: GetFieldsGroupsRequest = {},
) {
  const { getFieldsGroups } = useGet();

  async function handle() {
    const { data } = await getFieldsGroups(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["fields/groups", request],
    queryFn: handle,
    enabled: true,
  });
  return { rows: data?.rows ?? [], count: data?.count ?? 0, ...rest };
}
