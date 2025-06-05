import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { ChargeShape } from "@type/Charges";
import { GetServicePreviewRequest } from "./types";

export default function useGetPreview() {
  const { services } = API_ROUTES;
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function getService(query: GetServicePreviewRequest) {
    return await axios.get<ChargeShape>(
      setQueries({
        url: services,
        query,
      })
    );
  }

  return {
    getService,
  };
}
