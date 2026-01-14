import { useFormRules } from "@hooks/Forms/useFormRules";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";
import { ForgotPasswordPayload, ForgotPasswordSchema } from "./useSchema";
import usePostAccessRecoverPasswordRequest from "@services/Authentications/Access/Recovers/Request/usePost";

export function useForm() {
  const { t } = useI18n();
  const schema = useMemo(() => ForgotPasswordSchema(t), [t]);

  const { formMethods, isAllFilled } = useFormRules<ForgotPasswordPayload>({
    schema,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const { mutateAsync: postRecoverPasswordRequest, isPending: isLoading } =
    usePostAccessRecoverPasswordRequest();

  const onSubmit = async (payload: ForgotPasswordPayload) => {
    postRecoverPasswordRequest(payload);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    formMethods,
    isAllFilled,
    isLoading,
  };
}
