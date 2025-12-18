import { useRoutes } from "@hooks/useRoutes";
import { useAxios, useQueryGuard } from "@hooks/useAxios";
import { GetRequestShape } from "@type/service";
import { GalleryResponse } from "../type";

export default function useGetGalleries(
  request: GetRequestShape = {},
  url: string = "",
  key: string = ""
) {
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function handle() {
    if (url === "") return null;
    const { data } = await axios.get<GalleryResponse>(
      setQueries({
        url,
        query: request,
      })
    );
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: [key],
    queryFn: handle,
  });

  return {
    rows: data?.rows ?? [],
    count: (data?.count ?? 0) as number,
    ...rest,
  };
}
