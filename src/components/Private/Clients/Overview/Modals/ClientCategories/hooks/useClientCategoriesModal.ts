import { useFormRules } from "@hooks/Forms/useFormRules";
import { ClientCategoryModalSchema, ClientCategoryPayload } from "../schemas";
import { SelectorShape } from "@components/shared/layouts/Selector/type";
import { PatchClientsCategoryPayload } from "../../../../../../../services/Clients/PatchCategory/type";
import usePatchClientCategory from "../../../../../../../services/Clients/PatchCategory/usePatch";
import { useModalContext } from "@contexts/Modal";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

type Props = {
  selectors: SelectorShape[];
};

export function useClientCategoriesModal({ selectors }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => ClientCategoryModalSchema(t), [t]);
  const { formMethods, register, errors } = useFormRules<ClientCategoryPayload>(
    {
      schema,
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
