import { useAxios } from "@hooks/useAxios";
import { DeleteGalleryPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function useDeleteGalleryService() {
  const { axios } = useAxios();
  const { galleriesById } = API_ROUTES;
  const { setParams } = useRoutes();

  async function deleteGallery(payload: DeleteGalleryPayload) {
    return axios.delete(
      setParams({
        url: galleriesById,
        data: {
          id: payload.gallery_id ?? "",
        },
      })
    );
  }

  return {
    deleteGallery,
  };
}
