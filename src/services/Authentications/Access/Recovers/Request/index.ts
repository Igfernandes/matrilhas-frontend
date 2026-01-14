import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";
import { authenticationRoutes } from "@configs/routes/Api/authentications";

export function usePostAccessRecoverPasswordRequestService() {
  const { axios } = useAxios();
  const { accessRecoverPasswordRequest } = authenticationRoutes;
  
  async function postRecoverPasswordRequest(
    payload: PostRecoverPasswordPayload
  ) {
    return axios.post(accessRecoverPasswordRequest, getPayloadJSON(payload));
  }

  return {
    postRecoverPasswordRequest,
  };
}
