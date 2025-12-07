import useGet from ".";
import { GetInvitesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetUsersInvite(request: GetInvitesRequest = {}) {
  const { getInvites } = useGet();

  async function handle() {
    const { data } = await getInvites(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["invites/users", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
