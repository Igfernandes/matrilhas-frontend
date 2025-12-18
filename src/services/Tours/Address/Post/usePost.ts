import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostToursAddressPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostToursAddressService } from ".";
import { AxiosError } from "axios";

export default function usePostTourAddress() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateAddress } = usePostToursAddressService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostToursAddressPayload) => {
    const { data } = await postCreateAddress(payload);
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
        queryKey: ["tours/address"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
