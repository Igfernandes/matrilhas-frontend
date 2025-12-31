import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateSalePayload } from "./type";
import i18n from "@configs/i18n";
import { usePostSaleService } from ".";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";

export default function usePostSale() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateSale } = usePostSaleService();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { sales } = privateRoutes;

  const handleMutate = async (payload: PostCreateSalePayload) => {
    const { data } = await postCreateSale(payload);
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
      router.push(sales);
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
