import useGet from "./";
import { GetGroupsRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetGroups(payload?: GetGroupsRequest) {
  const { getGroups } = useGet();

  const handle = async () => {
    const { data } = await getGroups(payload);
    return data;
  };

  const { data, ...rest } = useQueryGuard({
    queryKey: ["users_groups", payload],
    queryFn: handle,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
