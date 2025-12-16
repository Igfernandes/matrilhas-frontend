import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateAgencyPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostAgenciesService } from ".";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";

export default function usePostAgency() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateAgency } = usePostAgenciesService();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { agencies } = privateRoutes;

  const handleMutate = async (payload: PostCreateAgencyPayload) => {
    const { data } = await postCreateAgency(payload);
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
        queryKey: ["agencies"],
        refetchType: "active",
      });
      router.push(agencies);
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
