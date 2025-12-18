import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutTourPayload } from "./type";
import i18n from "@configs/i18n";
import { usePutTourService } from ".";
import { AxiosError } from "axios";

export default function usePutTour() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putTour } = usePutTourService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutTourPayload) => {
    const { data } = await putTour(payload);
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
        queryKey: ["tours"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
