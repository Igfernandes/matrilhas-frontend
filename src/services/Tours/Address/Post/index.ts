import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostToursAddressPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostToursAddressService() {
  const { axios } = useAxios();
  const { toursAddress } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateAddress(payload: PostToursAddressPayload) {
    return axios.post(
      setParams({
        url: toursAddress,
        data: { id: payload?.[0]?.tour_id ?? "" },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreateAddress,
  };
}
