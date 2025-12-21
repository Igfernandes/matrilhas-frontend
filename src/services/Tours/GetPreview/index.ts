import { API_ROUTES } from "@configs/routes/Api/api";
import { GetToursPreviewRequest, GetToursPreviewResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGetPreview() {
  const { toursPreview } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getPreview(request?: GetToursPreviewRequest) {
    const { ...query } = request ?? {};
    return await axios.get<GetToursPreviewResponse>(
      setQueries({
        url: toursPreview,
        query,
      })
    );
  }

  return {
    getPreview,
  };
}
