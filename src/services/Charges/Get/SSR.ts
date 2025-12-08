import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetChargesRequest, GetChargesResponse } from "./types";

export async function getCharges(
  tokenNavigation: string,
  request?: GetChargesRequest
): Promise<GetChargesResponse> {
  const query = request ?? {};

  const { chargesId } = API_ROUTES;
  const { data } = await axios.get<GetChargesResponse>(
    setQueries({
      url: chargesId.replace("{id}", String(request?.id ?? "")),
      query,
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return data;
}
