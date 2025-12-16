import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetAgenciesRequest, GetAgenciesResponse } from "./types";

export async function getAgencies(
  tokenNavigation: string,
  { id, ...request }: GetAgenciesRequest = {}
): Promise<GetAgenciesResponse> {
  const query = request ?? {};

  const { agenciesById } = API_ROUTES;
  const { data } = await axios.get<GetAgenciesResponse>(
    setQueries({
      url: setParams({
        url: agenciesById,
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
