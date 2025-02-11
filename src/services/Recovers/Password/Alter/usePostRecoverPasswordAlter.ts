import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordAlterPayload } from "./type";
import { usePostRecoverPasswordAlterService } from ".";
import { useRouter } from "next/router";
import { userRoutes } from "@configs/routes/Web/navigation";
import { useTranslation } from "next-i18next";

export default function usePostRecoverPasswordAlter() {
  const { t } = useTranslation("common");
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postRecoverPasswordAlter } = usePostRecoverPasswordAlterService();
  const router = useRouter();
  const { successful } = userRoutes;

  const handleMutate = async (payload: PostRecoverPasswordAlterPayload) => {
    const { data } = await postRecoverPasswordAlter(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: () => {
      dispatchSnackbar({
        message:  t("texts.will_redirect"),
        title: t("words.success"),
        type: "success",
      });

      router.push(`${successful}?=type=created_password`);
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
