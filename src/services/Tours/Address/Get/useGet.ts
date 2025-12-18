import useGet from ".";
import { GetTourAddressRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetTourAddresses(request: GetTourAddressRequest = {} as GetTourAddressRequest) {
  const { getToursAddress } = useGet();

  async function handle() {
    const { data } = await getToursAddress(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["tours/address", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
