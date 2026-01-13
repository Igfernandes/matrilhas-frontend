import useGetAuth from ".";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetAgencyAuth() {
  const { getAgency } = useGetAuth();

  async function handle() {
    const { data } = await getAgency();
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["agency/auth"],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
