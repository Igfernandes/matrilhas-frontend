import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetChargesRequest, GetChargesResponse } from "./types";

export async function getAgenciesCharges(
  tokenNavigation: string,
  request?: GetChargesRequest
): Promise<GetChargesResponse> {
  const query = request ?? {};

  const { agenciesChargesById } = API_ROUTES;
  const { data } = await axios.get<GetChargesResponse>(
    setQueries({
      url: agenciesChargesById.replace("{id}", String(request?.id ?? "")),
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
