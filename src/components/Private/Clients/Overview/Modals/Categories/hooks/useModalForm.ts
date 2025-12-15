import { useFormRules } from "@hooks/Forms/useFormRules";
import { CategoryModalSchema, CategoryPayload } from "../schemas";
import usePostCategories from "../../../../../../../services/Clients/Categories/Post/usePostCategories";
import { ModalClientsOperationType } from "@components/Private/Clients/type";
import { useModalContext } from "@contexts/Modal";
import { useCallback } from "react";

export function useModalForm() {
  const { formMethods } = useFormRules<CategoryPayload>({
    schema: CategoryModalSchema,
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
