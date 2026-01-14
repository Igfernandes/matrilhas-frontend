import { useFormRules } from "@hooks/Forms/useFormRules";
import { useRouter, useSearchParams } from "next/navigation";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { AlterPasswordFormSchema, AlterPasswordPayload } from "../schemas";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";
import usePostAccessRecoverPasswordAlter from "@services/Authentications/Access/Recovers/Alter/usePost";

export function useForm() {
  const { t } = useI18n();
  const schema = useMemo(() => AlterPasswordFormSchema(t), [t]);
  const { formMethods, isAllFilled } = useFormRules<AlterPasswordPayload>({
    schema,
  });
  const { register, handleSubmit } = formMethods;
  const { mutateAsync: postRecoverPassword, isPending: isLoading } =
    usePostAccessRecoverPasswordAlter();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = async (payload: AlterPasswordPayload) => {
    const recoverToken = searchParams?.get("recover_token");
    if (!recoverToken) return router.push(publicRoutes.login);

    postRecoverPassword({
      ...payload,
      recover_token: recoverToken as string,
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    formMethods,
    isAllFilled,
    isLoading,
  };
}
