import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetChargesRequest } from "./types";

export default function useGetCharges(request: GetChargesRequest = {}) {
  const { getCharges } = useGet();

  async function handle() {
    const { data } = await getCharges(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["charges", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
