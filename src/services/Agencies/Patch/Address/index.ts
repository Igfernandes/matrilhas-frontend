import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PatchAgencyAddressPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePatchAgencyAddressService() {
  const { axios } = useAxios();
  const { clients } = API_ROUTES;

  async function patchAgencyAddress(payload: PatchAgencyAddressPayload) {
    return axios.patch(
      clients,
      getPayloadJSON({
        path: "category",
        data: payload,
      })
    );
  }

  return {
    patchAgencyAddress,
  };
}
