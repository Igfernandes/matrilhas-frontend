import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { DeleteFillFieldPayload } from "./type";
import { useDeleteFillFieldService } from ".";

export default function useDeleteFillField() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteFillFields } = useDeleteFillFieldService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteFillFieldPayload) => {
    const { data } = await deleteFillFields(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("custom_forms.fills.modal.success_text"),
        title: i18n("custom_forms.fills.modal.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["forms/fills"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
