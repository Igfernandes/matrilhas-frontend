import useGet from ".";
import { GetToursPreviewRequest } from "./types";
import { useQueryGuard } from "@hooks/useAxios";

export default function useGetToursPreview(
  request: GetToursPreviewRequest = {}
) {
  const { getPreview } = useGet();

  async function handle() {
    const { data } = await getPreview(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: ["tours/preview", request],
    queryFn: handle,
    enabled: true,
  });
  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
