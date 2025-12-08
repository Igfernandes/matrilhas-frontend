import { useQueryGuard } from "@hooks/useAxios";
import useGet from ".";
import { GetFormsResponse, GetFormsRequest } from "./types";

export default function useGetForms(request: GetFormsRequest = {}) {
  const { getForms } = useGet();

  async function handle() {
    const data = await getForms(request);
    return data ?? null;
  }

  const { data, ...rest } = useQueryGuard<GetFormsResponse>({
    queryKey: ["forms", request],
    queryFn: handle,
    enabled: true,
  });

  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    ...rest,
  };
}
