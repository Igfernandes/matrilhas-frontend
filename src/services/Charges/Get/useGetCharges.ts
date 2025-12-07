import useGet from ".";
import { GetChargesResponse, GetChargesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetCharges(request: GetChargesRequest = {}) {
  const { getCharges } = useGet();

  async function handle() {
    const data = await getCharges(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard<GetChargesResponse>({
    queryKey: ["charges", request],
    queryFn: handle,
    enabled: true,
  });

  return { rows: data?.rows ?? [], count: data?.count ?? 0, ...rest };
}
