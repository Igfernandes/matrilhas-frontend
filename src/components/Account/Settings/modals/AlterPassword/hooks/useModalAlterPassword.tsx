import { useFormRules } from "@hooks/Forms/useFormRules";
import { alterPasswordFormSchema, AlterPasswordPayload } from "../schemas";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";
import usePatchPasswordClients from "@services/Clients/PatchPassword/usePatchPassword";

type Props = {
  handleModal: (isShow: boolean) => void;
};

export function useModalAlterPassword({ handleModal }: Props) {
  const {t } = useI18n()
  const schema = useMemo(() => alterPasswordFormSchema(t), [t]);
  const { formMethods, handleSubmit, errors } =
    useFormRules<AlterPasswordPayload>({
      schema,
    });
  const { mutateAsync: patchPassword, isPending: isLoading } = usePatchPasswordClients();

  const submit = (payload: AlterPasswordPayload) => {
    patchPassword({ ...payload, })
      .then(() => handleModal(false))
      .then(() => {
        formMethods.reset();
      });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    errors,
    isLoading
  };
}
