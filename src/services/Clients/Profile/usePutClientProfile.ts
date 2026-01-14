import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";
import { usePutClientService } from ".";
import i18n from "@configs/i18n";
import { PutClientProfilePayload } from "./type";

export default function usePutClientProfile() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putUsers } = usePutClientService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutClientProfilePayload) => {
    const { data } = await putUsers(payload);

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
        queryKey: ["clientAuth"],
        type: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["clients"],
        type: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
