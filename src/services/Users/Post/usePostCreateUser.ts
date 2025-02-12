import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRouter } from "next/router";
import { userRoutes } from "@configs/routes/Web/navigation";
import { useTranslation } from "next-i18next";
import { usePostCreateUserService } from ".";
import { PostCreateUserPayload } from "./type";

export default function usePostCreateUser() {
  const { t } = useTranslation("common");
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateUser } = usePostCreateUserService();
  const router = useRouter();
  const { successful } = userRoutes;

  const handleMutate = async (payload: PostCreateUserPayload) => {
    const { data } = await postCreateUser(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: () => {
      dispatchSnackbar({
        message: t("texts.will_redirect"),
        title: t("words.success"),
        type: "success",
      });

      router.push(`${successful}?type=created_account`);
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
