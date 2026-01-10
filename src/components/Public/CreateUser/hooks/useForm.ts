import usePostCreateUsers from "@services/Users/Post/usePost";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CreateUserPayload, CreateUserSchema } from "./useSchema";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

type Payload = CreateUserPayload;

export function useForm() {
  const { t } = useI18n();
  const schema = useMemo(() => CreateUserSchema(t), [t]);
  const [stageForm, setStageForm] = useState<"PERSONAL" | "CREDENTIALS">(
    "PERSONAL"
  );
  const { formMethods, errors } = useFormRules<Payload>({
    schema,
  });
  const { register, handleSubmit, trigger } = formMethods;
  const { mutateAsync: postCreateUsers, isPending: isLoading } =
    usePostCreateUsers();

  const onSubmit = async (payload: CreateUserPayload) => {
    postCreateUsers({ ...payload });
  };

  const handleToggleStageForm = async (
    stageForm: "PERSONAL" | "CREDENTIALS"
  ) => {
    const isValid = await trigger(["keyword", "birthdate", "cpf"]);

    if (isValid) setStageForm(stageForm);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    formMethods,
    errors,
    isLoading,
    stageForm,
    handleToggleStageForm,
  };
}
