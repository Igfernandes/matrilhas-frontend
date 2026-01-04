import { useRoutes } from "@hooks/useRoutes";
import { useAxios, useQueryGuard } from "@hooks/useAxios";
import { GetRequestShape } from "@type/service";
import { useMemo } from "react";

export default function useGetGroupChecks(
  request: GetRequestShape = {},
  url: string = "",
  key: string = ""
) {
  const { axios } = useAxios();
  const { setQueries } = useRoutes();

  async function handle() {
    if (url === "")
      return {
        rows: [],
        count: 0,
      };
    const { data } = await axios.get<Record<string, unknown>>(
      setQueries({
        url,
        query: request,
      })
    );
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard({
    queryKey: [key, request],
    queryFn: handle,
  });

  return useMemo(
    () => ({
      rows: (data?.rows ?? []) as Array<Record<string, unknown>>,
      count: (data?.count ?? 0) as number,
      ...rest,
    }),
    [data, rest]
  );
}
