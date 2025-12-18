import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { usePatchSocialMediaService } from ".";
import { PatchSocialMediaPayload } from "./type";

export default function usePatchClientCategory() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchAgenciesSocialMedia } = usePatchSocialMediaService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchSocialMediaPayload) => {
    const { data } = await patchAgenciesSocialMedia(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,

    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });

      queryClient.invalidateQueries({ queryKey: ["agencies"] });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
