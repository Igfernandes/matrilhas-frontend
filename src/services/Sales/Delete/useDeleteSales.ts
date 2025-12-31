import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { DeleteAgencyPayload } from "./type";
import { useDeleteSalesService } from ".";

export default function useDeleteSales() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteSale } = useDeleteSalesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteAgencyPayload) => {
    const { data } = await deleteSale(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.removeQueries({ queryKey: ["sales"] });
      queryClient.removeQueries({ queryKey: ["sales/statics"] });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
