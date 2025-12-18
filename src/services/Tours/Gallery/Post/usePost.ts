import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostToursGalleryPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostToursGalleryPayload } from ".";
import { AxiosError } from "axios";

export default function usePostTourGallery() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateGallery } = usePostToursGalleryPayload();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostToursGalleryPayload) => {
    const { data } = await postCreateGallery(payload);
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
        queryKey: ["tours/gallery"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
