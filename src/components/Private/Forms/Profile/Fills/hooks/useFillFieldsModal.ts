import { useModalContext } from "@contexts/Modal";
import useDeleteFillField from "@services/Forms/Fills/Delete/useDelete";
import { ModalFormsOperationType } from "../../type";
import { useCallback } from "react";

type Props = {
  formId: number;
};

export function useFillFieldsModal({ formId }: Props) {
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { mutateAsync: deleteFillField, isPending: isLoadingFillFieldDelete } =
    useDeleteFillField();
  const handleDeleteFillField = useCallback(() => {
    const IdString = modal.id.toLocaleString();

    deleteFillField({
      form_id: formId,
      ref: IdString,
    }).then(() => {
      handleToggleModal(false);
    });
  }, [deleteFillField, formId, handleToggleModal, modal.id]);

  return {
    handleDeleteFillField,
    isLoadingFillFieldDelete,
    modal,
    handleToggleModal,
  };
}
