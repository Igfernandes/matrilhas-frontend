import { useMutation } from "@tanstack/react-query";
import { PostAuthPayload } from "./type";
import { usePostAuthService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRememberMe } from "@hooks/useRememberMe";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useCookies } from "@hooks/useCookies";
import { useI18n } from "@contexts/I18n";

export default function usePostAuth() {
  const { t } = useI18n();
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAuth } = usePostAuthService();
  const { saveReferenceToken } = useRememberMe();
  const { saveCookies } = useCookies();

  const handleMutate = async (payload: PostAuthPayload) => {
    const { data } = await postAuth(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: (res) => {
      const data = res;

      dispatchSnackbar({
        message: t(data.success),
        type: "success",
      });

      if (data["reference_token"]) {
        saveReferenceToken({
          referenceToken: data["reference_token"],
        });
      }

      if (!data.token_navigation)
        return dispatchSnackbar({
          message: t("Api.default.internal_error"),
          type: "error",
        });

      saveCookies({
        token_navigation: data.token_navigation,
      });

      window.location.href = privateRoutes.dashboard;
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
