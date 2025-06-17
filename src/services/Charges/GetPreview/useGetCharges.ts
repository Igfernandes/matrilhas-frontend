import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetChargePreviewRequest } from "./types";

export default function useGetCharges(request: GetChargePreviewRequest) {
  const { getCharge } = useGet();

  async function handle() {
    const { data } = await getCharge(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: [`charge/${request.id}`, request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
