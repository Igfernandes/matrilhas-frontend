import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { DeleteTourPayload } from "./type";
import { useDeleteToursService } from ".";

export default function useDeleteTours() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteTour } = useDeleteToursService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteTourPayload) => {
    const { data } = await deleteTour(payload);
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
