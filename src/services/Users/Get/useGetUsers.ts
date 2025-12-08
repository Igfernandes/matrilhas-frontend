import useGet from "./";
import { GetUsersRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetUsers(payload?: GetUsersRequest) {
  const { getUsers } = useGet();

  async function handle() {
    const { data } = await getUsers(payload);
    return data ?? {};
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["users", payload],
    enabled: true,
    queryFn: handle,
  });

  return { rows: data?.rows ?? [], count: data?.count ?? 0, ...rest };
}
