import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PatchPasswordClientPayload } from "./type";
import { clientsRoutes } from "@configs/routes/Api/clients";

export function usePatchPasswordClientService() {
  const { axios } = useAxios();
  const { clientsProfilePassword } = clientsRoutes;

  async function patchPassword(payload: PatchPasswordClientPayload) {
    return axios.patch(
      `${clientsProfilePassword}`,
      getPayloadJSON({
        operation: "password",
        data: payload,
      })
    );
  }

  return {
    patchPassword,
  };
}
