import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostToursPeriodPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostToursPeriodService } from ".";
import { AxiosError } from "axios";

export default function usePostTourPeriod() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreatePeriod } = usePostToursPeriodService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostToursPeriodPayload) => {
    const { data } = await postCreatePeriod(payload);
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
        queryKey: ["tours/period"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
