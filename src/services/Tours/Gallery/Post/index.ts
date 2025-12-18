import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PostToursGalleryPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostToursGalleryPayload() {
  const { axios } = useAxios();
  const { toursGallery } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateGallery(payload: PostToursGalleryPayload) {
    return axios.post(
      setParams({
        url: toursGallery,
        data: { id: payload?.[0]?.tour_id ?? "", imageId: "" },
      }),
      getPayloadJSON(payload)
    );
  }

  return {
    postCreateGallery,
  };
}
