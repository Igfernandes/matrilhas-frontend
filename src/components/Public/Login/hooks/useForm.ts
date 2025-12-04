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
  const { mutateAsync: postAuth, isPending: isLoading, isSuccess } = usePostAuth();
  const { formMethods, allFilled } = useFormRules<Payload>({
    schema: loginFormSchema,
    exclude: ["rememberMe"],
  });
  const {
    setValue,
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
  /**
   * @function updateValueRememberMe
   * - A função é responsável por atualizar o valor no campo "rememberMe" com base na alteração de valores referentes ao
   * botão do tipo checkbox.
   *
   * @param {boolean} isChecked
   */
  const updateValueRememberMe = (isChecked: boolean) => {
    setValue("rememberMe", isChecked);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    allFilled,
    isLoading: isSubmitting || isLoading,
    isSuccess,
    updateValueRememberMe,
  };
}
