import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostChargeRelationsService } from ".";
import { PostCreateChargeRelationsPayload } from "./type";

export default function usePostChargeRelations() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateCharge } = usePostChargeRelationsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateChargeRelationsPayload) => {
    const { data } = await postCreateCharge(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({success}) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["charges/relations"],
        refetchType: "all"
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
