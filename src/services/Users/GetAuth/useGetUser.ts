import { useQuery } from "@tanstack/react-query";
import useGetAuth from ".";

export default function useGetUserAuth() {
  const { getUser } = useGetAuth();

  async function handle() {
    const { data } = await getUser();
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["userAuth"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
