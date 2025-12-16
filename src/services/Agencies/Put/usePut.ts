import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutAgencyPayload } from "./type";
import i18n from "@configs/i18n";
import { usePutAgencyService } from ".";
import { AxiosError } from "axios";

export default function usePutAgency() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putAgency } = usePutAgencyService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutAgencyPayload) => {
    const { data } = await putAgency(payload);
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
        queryKey: ["agencies"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
