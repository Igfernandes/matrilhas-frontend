import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetFormsRequest, GetFormsResponse } from "./types";

export async function getForms(
  tokenNavigation: string,
  request?: GetFormsRequest
): Promise<GetFormsResponse> {
  const { id, ...query } = request ?? {};

  const { forms } = API_ROUTES;
  const { data } = await axios.get<GetFormsResponse>(
    setQueries({
      url: setParams({
        url: forms,
        data: {
          id,
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

  return {
    rows: data.rows ?? [],
    count: data.count ?? 0,
  };
}
