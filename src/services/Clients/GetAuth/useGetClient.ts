import useGetAuth from ".";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetClientAuth() {
  const { getClient } = useGetAuth();

  async function handle() {
    const { data } = await getClient();
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["client/auth"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
