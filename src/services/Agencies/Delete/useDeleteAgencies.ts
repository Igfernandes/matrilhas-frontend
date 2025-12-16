import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { DeleteAgencyPayload } from "./type";
import { useDeleteAgenciesService } from ".";

export default function useDeleteAgencies() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteAgency } = useDeleteAgenciesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteAgencyPayload) => {
    const { data } = await deleteAgency(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.removeQueries({ queryKey: ["agencies"] });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
