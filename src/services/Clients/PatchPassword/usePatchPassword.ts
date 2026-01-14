import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { usePatchPasswordClientService } from ".";
import { PatchPasswordClientPayload } from "./type";

export default function usePatchPasswordClients() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchPassword } = usePatchPasswordClientService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchPasswordClientPayload) => {
    try {
      const { data } = await patchPassword(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: success,
        type: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["clientAuth"],
        type: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
