import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { useDeleteToursAgencyService } from ".";
import { DeleteTourAgencyPayload } from "./type";

export default function useDeleteToursAgency() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteAgencies } = useDeleteToursAgencyService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteTourAgencyPayload) => {
    const { data } = await deleteAgencies(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.removeQueries({ queryKey: ["tours/agencies"] });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
