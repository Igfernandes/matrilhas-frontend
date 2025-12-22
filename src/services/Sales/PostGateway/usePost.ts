import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";
import { PostSaleGatewayPayload } from "./type";
import { usePostGatewayService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useRouter } from "next/router";

export default function usePostSaleGateway() {
  const { handleAxiosError } = useAxios();

  const { dispatchSnackbar } = useSnackbar();
  const { postCreateSaleGateway } = usePostGatewayService();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleMutate = async (payload: PostSaleGatewayPayload) => {
    const { data } = await postCreateSaleGateway(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ checkout }) => {
      if (!checkout) {
        router.push("/access");

        return dispatchSnackbar({
          message:
            "Suas compra foi finalizada com sucesso! Aguarde as instruções por e-mail.",
          type: "success",
        });
      }

      window.location.href = checkout;
      dispatchSnackbar({
        message:
          "Aguarde enquanto processamos seu pagamento... Logo será redirecionado.",
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["sale/resume"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
