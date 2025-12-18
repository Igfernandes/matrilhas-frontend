import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostToursRulePayload } from "./type";
import i18n from "@configs/i18n";
import { usePostToursRuleService } from ".";
import { AxiosError } from "axios";

export default function usePostTourRule() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateRule } = usePostToursRuleService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostToursRulePayload) => {
    const { data } = await postCreateRule(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["tours/rules"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
