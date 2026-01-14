import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordPayload } from "./type";
import { usePostAccessRecoverPasswordRequestService } from ".";
import i18n from "@configs/i18n";

export default function usePostAccessRecoverPasswordRequest() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postRecoverPasswordRequest } = usePostAccessRecoverPasswordRequestService();

  const handleMutate = async (payload: PostRecoverPasswordPayload) => {
    const { data } = await postRecoverPasswordRequest(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success, errors }) => {
      dispatchSnackbar({
        message: i18n(success ?? errors),
        type: "notice",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
