import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormBuilderPayload, formBuilderSchema } from "../schema";
import useDeleteFields from "@services/Fields/Delete/useDelete";
import { useFieldContext } from "../../../context/Fields";
import { useFieldsGroupsContext } from "../../../context/FieldsGroups";

export function useFormBuilder() {
  const { formMethods, errors } = useFormRules<FormBuilderPayload>({
    schema: formBuilderSchema
  });
  const { handleSubmit, register } = formMethods;
  const { handleSubmitFields, viewedField, entityType } = useFieldContext();
  const { handleFieldsGroupToEditing } = useFieldsGroupsContext();
  const { mutateAsync: deleteField } = useDeleteFields();

  const submit = async (payload: FormBuilderPayload) => {
    await handleSubmitFields(viewedField.id, {
      fields: payload.fields.map((field) => ({
        value: field.value,
        id: parseInt(field.id),
      })),
    });

    handleFieldsGroupToEditing("");
  };

  return {
    register,
    handleSubmit,
    formMethods,
    errors,
    submit,
    deleteField,
    entityType,
  };
}
