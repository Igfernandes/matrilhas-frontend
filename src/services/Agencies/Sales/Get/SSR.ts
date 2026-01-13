import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetSalesRequest, GetSalesResponse } from "./types";

export async function getAgenciesSales(
  tokenNavigation: string,
  { id, ...request }: GetSalesRequest = {}
): Promise<GetSalesResponse> {
  const query = request ?? {};

  const { agenciesSalesById } = API_ROUTES;
  const { data } = await axios.get<GetSalesResponse>(
    setQueries({
      url: setParams({
        url: agenciesSalesById,
        data: {
          id: id ?? "",
        },
      }),
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
