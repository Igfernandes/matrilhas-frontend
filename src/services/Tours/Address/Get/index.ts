import { API_ROUTES } from "@configs/routes/Api/api";
import { GetTourAddressRequest, GetToursAddressResponse } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";

export default function useGet() {
  const { toursAddress } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getToursAddress(request?: GetTourAddressRequest) {
    const { tour_id, ...query } = request ?? {};
    return await axios.get<GetToursAddressResponse>(
      setQueries({
        url: setParams({
          url: toursAddress,
          data: {
            id: tour_id,
          },
        }),
        query,
      })
    );
  }

  return {
    getToursAddress,
  };
}
