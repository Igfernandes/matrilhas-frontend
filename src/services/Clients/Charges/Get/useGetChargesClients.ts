import useGetClientsCharges from ".";
import { GetChargesResponse, GetChargesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetChargesClients(request: GetChargesRequest = {}) {
  const { getClientsCharges } = useGetClientsCharges();

  async function handle() {
    const data = await getClientsCharges(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard<GetChargesResponse>({
    queryKey: ["clients/charges", request],
    queryFn: handle,
    enabled: true,
  });

  return { rows: data?.rows ?? [], count: data?.count ?? 0, ...rest };
}
