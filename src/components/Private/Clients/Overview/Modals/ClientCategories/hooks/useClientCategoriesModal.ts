import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCategoryModalSchema, ClientCategoryPayload } from "../schemas";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { PatchClientsCategoryPayload } from "../../../../../../../services/Clients/PatchCategory/type";
import usePatchClientCategory from "../../../../../../../services/Clients/PatchCategory/usePatch";
import { useModalContext } from "@contexts/Modal";

type Props = {
  selectors: SelectorShape[];
};

export function useClientCategoriesModal({ selectors }: Props) {
  const { formMethods, register, errors } = useFormRules<ClientCategoryPayload>(
    {
      schema: ClientCategoryModalSchema,
    }
  );
  const { handleToggleModal, modal } = useModalContext();
  const { mutateAsync: patchClientsCategory, isPending: isLoading } =
    usePatchClientCategory();

  const submit = (data: Pick<PatchClientsCategoryPayload, "category">) => {
    const selectorsChecked = selectors.filter(
      (selector) => selector.isChecked && !!selector.value
    );

    const payload = {
      ...data,
      all: modal.id === "-1" ? true : false,
      clients: selectorsChecked.map((client) => parseInt(client.value)),
    };

    patchClientsCategory(payload).then(() => handleToggleModal(false));
  };

  return {
    formMethods,
    isLoading,
    register,
    errors,
    submit,
    modal,
  };
}
