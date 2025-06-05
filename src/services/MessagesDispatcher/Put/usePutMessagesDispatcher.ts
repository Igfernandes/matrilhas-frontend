import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePutDispatcherService } from ".";
import { PutMessageDispatcherPayload } from "./type";

export default function usePutMessagesDispatcher() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putDispatcher } = usePutDispatcherService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutMessageDispatcherPayload) => {
    const { data } = await putDispatcher(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("messages_dispatcher.put.success_text"),
        title: i18n("messages_dispatcher.put.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["messages-dispatcher"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
