import { useFormRules } from "@hooks/Forms/useFormRules";
import { CategoryModalSchema, CategoryPayload } from "../schemas";
import usePostCategories from "../../../../../../../services/Clients/Categories/Post/usePostCategories";
import { ModalClientsOperationType } from "@components/Private/Clients/type";
import { useModalContext } from "@contexts/Modal";
import { useCallback, useMemo } from "react";
import { useI18n } from "@contexts/I18n";

export function useModalForm() {
  const { t } = useI18n();
  const schema = useMemo(() => CategoryModalSchema(t), [t]);
  const { formMethods } = useFormRules<CategoryPayload>({
    schema,
  });
  const { handleToggleModal } = useModalContext<ModalClientsOperationType>();
  const { handleSubmit } = formMethods;
  const { mutateAsync: postCategory, isPending: isLoading } =
    usePostCategories();

  const submit = useCallback(
    ({ categories }: CategoryPayload) => {
      const categoriesData = categories.map((category) => ({
        id: category.id,
        name: category.value,
      }));
      postCategory({ categories: categoriesData }).then((response) => {
        if (response) {
          handleToggleModal(false);
        }
      });
    },
    [postCategory, handleToggleModal]
  );

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading,
  };
}
