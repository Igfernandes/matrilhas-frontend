import { useAxios } from "@hooks/useAxios";
import { PostAuthPayload } from "./type";
import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { getPayloadJSON } from "@helpers/payload";

export function usePostAccessService() {
  const { axios } = useAxios();
  const { access } = authenticationRoutes;

  async function postAccess({
    csrf: { csrf_hash, csrf_token },
    ...payload
  }: PostAuthPayload) {
    return axios.post(access, getPayloadJSON(payload), {
      headers: {
        "Content-Type": "application/json",
        [csrf_token as string]: csrf_hash,
      },
    });
  }

  return {
    postAccess,
  };
}
