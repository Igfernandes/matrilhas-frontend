import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostToursPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostToursService } from ".";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";

export default function usePostTour() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateTour } = usePostToursService();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { tours } = privateRoutes;

  const handleMutate = async (payload: PostToursPayload) => {
    const { data } = await postCreateTour(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success, id }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["tours"],
        refetchType: "active",
      });
      router.push(`${tours}/${id}?tab=address`);
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
