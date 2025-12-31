import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";
import { PostSaleResumePayload } from "./type";
import { usePostSaleResumeService } from ".";

export default function usePostSaleResume() {
  const { handleAxiosError } = useAxios();
  const { postSaleResume } = usePostSaleResumeService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostSaleResumePayload) => {
    const { data } = await postSaleResume(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sale/resume"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
