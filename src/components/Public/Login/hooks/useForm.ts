import { loginFormSchema } from "../schemas";
import { PostAuthPayload } from "../../../../services/Authentications/Auth/type";
import usePostAuth from "../../../../services/Authentications/Auth/usePostAuth";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { CSRFShape } from "@services/Authentications/CSRF/types";
type Payload = PostAuthPayload;

type Props = {
  csrf: CSRFShape;
  recaptchaInstance: {
    execute: (callback: (token: string) => void) => void;
    reset: () => void | undefined;
  };
};

export function useForm({ csrf, recaptchaInstance }: Props) {
  const {
    mutateAsync: postAuth,
    isPending: isLoading,
    isSuccess,
  } = usePostAuth();
  const { formMethods, isAllFilled } = useFormRules<Payload>({
    schema: loginFormSchema,
    exclude: ["rememberMe"],
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = formMethods;

  const onSubmit = async ({ login, password, rememberMe }: PostAuthPayload) => {
    recaptchaInstance.execute((token) => {
      postAuth({
        login,
        password,
        rememberMe,
        recaptcha: token,
        csrf,
      });
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    isAllFilled,
    isLoading: isSubmitting || isLoading,
    isSuccess,
  };
}
