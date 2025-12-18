import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { useDeleteToursGalleryService } from ".";
import { DeleteTourGalleryPayload } from "./type";

export default function useDeleteToursGallery() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteGallery } = useDeleteToursGalleryService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteTourGalleryPayload) => {
    const { data } = await deleteGallery(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.removeQueries({ queryKey: ["tours/gallery"] });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
