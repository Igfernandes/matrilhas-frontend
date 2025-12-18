import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { API_ROUTES } from "@configs/routes/Api/api";
import { PatchSocialMediaPayload } from "./type";

export function usePatchSocialMediaService() {
  const { axios } = useAxios();
  const { agencies } = API_ROUTES;

  async function patchAgenciesSocialMedia(payload: PatchSocialMediaPayload) {
    return axios.patch(
      `${agencies}/social_media`,
      getPayloadJSON({
        path: "social_media",
        data: payload,
      })
    );
  }

  return {
    patchAgenciesSocialMedia,
  };
}
