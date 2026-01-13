import useGetAgenciesCharges from ".";
import { GetChargesResponse, GetChargesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetChargesAgencies(request: GetChargesRequest = {}) {
  const { getAgenciesCharges } = useGetAgenciesCharges();

  async function handle() {
    const data = await getAgenciesCharges(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard<GetChargesResponse>({
    queryKey: ["agencies/charges", request],
    queryFn: handle,
    enabled: true,
  });

  return { rows: data?.rows ?? [], count: data?.count ?? 0, ...rest };
}
