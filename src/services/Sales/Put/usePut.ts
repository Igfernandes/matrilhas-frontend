import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutSalePayload } from "./type";
import i18n from "@configs/i18n";
import { usePutSaleService } from ".";
import { AxiosError } from "axios";

export default function usePutSale() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putSale } = usePutSaleService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutSalePayload) => {
    const { data } = await putSale(payload);
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
        queryKey: ["sales"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
