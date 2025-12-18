import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PatchAgencyAddressPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePatchToursAddressService() {
  const { axios } = useAxios();
  const { clients } = API_ROUTES;

  async function patchToursAddress(payload: PatchAgencyAddressPayload) {
    return axios.patch(
      clients,
      getPayloadJSON({
        path: "address",
        data: payload,
      })
    );
  }

  return {
    patchToursAddress,
  };
}
