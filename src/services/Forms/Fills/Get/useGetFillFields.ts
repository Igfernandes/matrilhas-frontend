import { useQuery } from "@tanstack/react-query";
import useGet from ".";
import { GetFillFieldsRequest } from "./types";

export default function useGetFillFields(request: GetFillFieldsRequest) {
  const { getForms } = useGet();

  async function handle() {
    const { data } = await getForms(request);
    return data ?? null;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["forms/fills", request],
    queryFn: handle,
    enabled: true,
  });
  return { data, ...rest };
}
