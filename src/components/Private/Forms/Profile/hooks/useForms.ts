import { useCallback, useMemo, useState } from "react";
import { FormsPayload, formsSchema } from "../schema";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import usePutForm from "@services/Forms/Put/usePut";
import usePostCreateForm from "@services/Forms/Post/usePost";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormShape } from "@type/Forms";
import dayjs from "dayjs";
import { useI18n } from "@contexts/I18n";

type Props = {
  form?: FormShape;
};

export function useForms({ form }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => formsSchema(t), [t]);
  const { formMethods, errors } = useFormRules<FormsPayload>({
    schema,
    criteriaMode: "all",
    shouldUseNativeValidation: false,
    defaultValues: {
      ...form,
      category: form?.category?.id ?? 0,
    },
  });
  const [components, setComponents] = useState<Array<FieldShape>>(
    form?.components ? JSON.parse(form.components) : []
  );
  const { mutateAsync: postForm, isPending: isLoadingPost } =
    usePostCreateForm();
  const { mutateAsync: putForm, isPending: isLoadingPut } = usePutForm();

  const submit = useCallback(
    (FormsPayload: FormsPayload) => {
      const payload = {
        ...FormsPayload,
        components: JSON.stringify(components),
        started_at: dayjs(FormsPayload.started_at).format("YYYY-MM-DD HH:mm"),
        expired_at: dayjs(FormsPayload.expired_at).format("YYYY-MM-DD HH:mm"),
        category: FormsPayload.category,
        status: FormsPayload.status as "PUBLISHED" | "DRAFT",
      };

      if (FormsPayload.id)
        putForm({
          ...payload,
          id: FormsPayload.id,
        });
      else {
        postForm(payload);
      }
    },
    [components, postForm, putForm]
  );

  const handleChangeFormFields = useCallback(
    (fieldsForm: Array<FieldShape>) => {
      setComponents(fieldsForm);
    },
    []
  );

  return {
    submit,
    handleChangeFormFields,
    components,
    isLoading: isLoadingPost || isLoadingPut,
    formMethods,
    errors,
  };
}
