import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetTourGalleryRequest, GetToursGalleryResponse } from "./types";

export default function useGet() {
  const { toursGallery } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getToursGallery(request?: GetTourGalleryRequest) {
    const { tour_id, imageId } = request ?? {};
    return await axios.get<GetToursGalleryResponse>(
      setQueries({
        url: setParams({
          url: toursGallery,
          data: {
            id: tour_id,
            imageId: imageId ?? "",
          },
        }),
      })
    );
  }

  return {
    getToursGallery,
  };
}
