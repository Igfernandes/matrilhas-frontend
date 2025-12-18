import useGet from ".";
import { GetTourGalleryRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetTourGalleries(
  request: GetTourGalleryRequest = {} as GetTourGalleryRequest
) {
  const { getToursGallery } = useGet();
  async function handle() {
    const { data } = await getToursGallery(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["tours/gallery", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
