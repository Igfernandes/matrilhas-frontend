import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { DeleteMessageDispatcherPayload } from "./type";
import { useDeleteMessageDispatcherService } from ".";

export default function useDeleteMessageDispatcher() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteMessageDispatcher } = useDeleteMessageDispatcherService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteMessageDispatcherPayload) => {
    try {
      const { data } = await deleteMessageDispatcher(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        title: i18n("message_dispatcher.delete.success_title"),
        message: i18n("message_dispatcher.delete.success_text"),
        type: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["messages-dispatcher"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
