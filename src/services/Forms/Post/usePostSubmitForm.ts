import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateFormPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostFormService } from ".";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { publicRoutes } from "@configs/routes/Web/navigation";

export default function usePostSubmitForm() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postForm } = usePostFormService();
  const router = useRouter();
  const { forms } = publicRoutes;

  const handleMutate = async (payload: PostCreateFormPayload) => {
    const { data } = await postForm(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        title: i18n("custom_forms.submit.success_title"),
        message: i18n("custom_forms.submit.success_text"),
        type: "success",
      });

      router.push(`${forms}/successful`);
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
