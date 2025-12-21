import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setQueries } from "@helpers/routes";
import { GetAgenciesPreviewRequest, GetAgenciesPreviewResponse } from "./types";

export async function getAgenciesPreview(
  request?: GetAgenciesPreviewRequest
): Promise<GetAgenciesPreviewResponse> {
  const query = request ?? {};

  const { agenciesPreview } = API_ROUTES;
  const { data } = await axios.get<GetAgenciesPreviewResponse>(
    setQueries({
      url: agenciesPreview,
      query,
    })
  );

  return {
    rows: data.rows ?? [],
    count: data.count ?? 0,
  };
}
