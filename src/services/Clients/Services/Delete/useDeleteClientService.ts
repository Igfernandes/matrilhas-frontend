import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { DeleteClientServicePayload } from "./type";
import { useDeleteClientServiceService } from ".";

export function useDeleteClientService() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteClient } = useDeleteClientServiceService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteClientServicePayload) => {
    const { data } = await deleteClient(payload);

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
        queryKey: ["clients/services"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
