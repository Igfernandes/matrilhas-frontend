import { useMemo, useRef } from "react";
import useGetForms from "../../../../../services/Forms/Get/useGetForms";
import { useModalContext } from "@contexts/Modal";
import useDeleteForm from "@services/Forms/Delete/useDelete";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";

export function useFormsOverview() {
  const { filters } = useFiltersContext();
  const offset = useRef<number>(0);
  const { rows: formsData } = useGetForms({
    ...(filters["FORMS"] ?? {}),
    limit: 500,
    start: offset.current,
  });
  const { mutateAsync: deleteForm, isPending: isLoadingDeleteForm } =
    useDeleteForm();

  const { modal, handleToggleModal } = useModalContext();

  const handleToggleStatusForm = () => {
    deleteForm({
      id: modal.id as number,
    }).then(() => handleToggleModal(false));
  };

  const forms = useMemo(() => formsData, [formsData]);

  return {
    forms,
    handleToggleStatusForm,
    isLoadingDeleteForm,
  };
}
