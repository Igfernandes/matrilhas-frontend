import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { DeleteSubscriberPayload } from "./type";
import { useDeleteSubscribersService } from ".";

export default function useDeleteSubscribers() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteSubscriber } = useDeleteSubscribersService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteSubscriberPayload) => {
    const { data } = await deleteSubscriber(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.removeQueries({ queryKey: ["subscribers"], type: "active" });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
