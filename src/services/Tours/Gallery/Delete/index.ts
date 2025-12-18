import { useAxios } from "@hooks/useAxios";
import { DeleteTourGalleryPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteToursGalleryService() {
  const { axios } = useAxios();
  const { toursGallery } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteGallery(payload: DeleteTourGalleryPayload) {
    return axios.delete(
      setParams({
        url: toursGallery,
        data: {
          id: payload.tour_id ?? "",
          imageId: payload.image_id ?? "",
        },
      })
    );
  }

  return {
    deleteGallery,
  };
}
