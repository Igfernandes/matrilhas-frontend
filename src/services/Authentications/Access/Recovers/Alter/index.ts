import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordAlterPayload } from "./type";
import { getPayloadJSON } from "@helpers/payload";
import { authenticationRoutes } from "@configs/routes/Api/authentications";

export function usePostRecoverPasswordAlterService() {
  const { axios } = useAxios();
  const { accessRecoverPasswordConfirm } = authenticationRoutes;

  async function postRecoverPasswordAlter(
    payload: PostRecoverPasswordAlterPayload
  ) {
    return axios.put(accessRecoverPasswordConfirm, getPayloadJSON(payload));
  }

  return {
    postRecoverPasswordAlter,
  };
}
