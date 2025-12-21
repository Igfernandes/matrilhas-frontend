import useGet from ".";
import { GetGalleriesRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetGalleries(
  request: GetGalleriesRequest = {} as GetGalleriesRequest
) {
  const { getGalleries } = useGet();
  async function handle() {
    const { data } = await getGalleries(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["galleries", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
