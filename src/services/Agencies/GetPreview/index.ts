import { API_ROUTES } from "@configs/routes/Api/api";
import { GetAgenciesPreviewResponse, GetAgenciesPreviewRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGetPreview() {
  const { agenciesPreview } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getAgencies(request?: GetAgenciesPreviewRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetAgenciesPreviewResponse>(
      setQueries({
        url: agenciesPreview,
        query,
      })
    );
  }

  return {
    getAgencies,
  };
}
