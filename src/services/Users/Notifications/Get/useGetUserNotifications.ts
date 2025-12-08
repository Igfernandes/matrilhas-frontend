import useGet from ".";
import { GetNotificationsUserRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetUserNotifications(
  request: GetNotificationsUserRequest = {}
) {
  const { getUserNotifications } = useGet();

  async function handle() {
    const { data } = await getUserNotifications(request);
    return data ?? {};
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["notifications/users", request],
    queryFn: handle,
    enabled: true,
  });
  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    viewedCount: data?.viewedCount ?? 0,
    ...rest,
  };
}
