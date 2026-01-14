import { useMutation } from "@tanstack/react-query";
import { PostAuthPayload } from "./type";
import { usePostAccessService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useCookies } from "@hooks/useCookies";
import { useI18n } from "@contexts/I18n";

export default function usePostAccess() {
  const { t } = useI18n();
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAccess } = usePostAccessService();
  const { saveCookies } = useCookies();

  const handleMutate = async (payload: PostAuthPayload) => {
    const { data } = await postAccess(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: (res) => {
      const data = res;

      if (!data) return handleAxiosError(res);

      dispatchSnackbar({
        message: t(data.success),
        type: "success",
      });

      if (!data.token_access)
        return dispatchSnackbar({
          message: t("Api.default.internal_error"),
          type: "error",
        });

      saveCookies({
        token_access: data.token_access,
      });
      const type = data.type as "AGENCY" | "CLIENT";
      
      let redirectRoute = privateRoutes.panel.overview;
      if (type === "CLIENT") redirectRoute = privateRoutes.account.overview;

      window.location.href = redirectRoute;
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
