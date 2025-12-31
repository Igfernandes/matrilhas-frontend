import useGet from ".";
import { GetExtractRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetMercadoPagoPayment(request: GetExtractRequest = {}) {
  const { getPayments } = useGet();

  async function handle() {
    const { data } = await getPayments(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["mercado-pago/payments", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
