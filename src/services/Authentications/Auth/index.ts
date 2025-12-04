import { useAxios } from "@hooks/useAxios";
import { PostAuthPayload } from "./type";
import { authenticationRoutes } from "@configs/routes/Api/authentications";
import { getPayloadJSON } from "@helpers/payload";

export function usePostAuthService() {
  const { axios } = useAxios();
  const { auth } = authenticationRoutes;

  async function postAuth({
    csrf: { csrf_hash, csrf_token },
    ...payload
  }: PostAuthPayload) {
    if (!payload.rememberMe) {
      delete payload["rememberMe"];
    }

    return axios.post(auth, getPayloadJSON(payload), {
      headers: {
        "Content-Type": "application/json",
        [csrf_token as string]: csrf_hash,
      },
    });
  }

  return {
    postAuth,
  };
}
