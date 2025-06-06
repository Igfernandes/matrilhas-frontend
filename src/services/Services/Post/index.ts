import { useAxios } from "@hooks/useAxios";
import { getPayloadFormData } from "@helpers/payload";
import { PostCreateServicesPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";

export function usePostServicesService() {
  const { axios } = useAxios();
  const { services } = API_ROUTES;

  async function postCreateServices(payload: PostCreateServicesPayload) {
    let photo = null;

    if (
      payload.photo instanceof FileList &&
      Array.from(payload.photo).length > 0
    )
      photo = payload.photo[0];
    else delete payload["photo"];

    return axios.post(services, getPayloadFormData({ ...payload, photo }));
  }

  return {
    postCreateServices,
  };
}
