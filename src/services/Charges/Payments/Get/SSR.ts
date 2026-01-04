import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetPaymentsRequest, GetPaymentsResponse } from "./types";

export async function getCharges(
  tokenNavigation: string,
  request?: GetPaymentsRequest
): Promise<GetPaymentsResponse> {
  const query = request ?? {};

  const { chargesPayments } = API_ROUTES;
  const { data, ...rest } = await axios.get<GetPaymentsResponse>(
    setQueries({
      url: `${chargesPayments}/${request?.payment_id}`,
      query,
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return {
    rows: data?.rows || [],
    count: data?.count || 0,
    ...rest,
  };
}
