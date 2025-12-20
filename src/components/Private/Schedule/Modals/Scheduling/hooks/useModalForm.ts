import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SchedulePayload } from "../schemas";
import { useCallback } from "react";
import usePostCreateSchedule from "@services/Schedule/Post/usePost";
import { useModalContext } from "@contexts/Modal";
import usePutCreateSchedule from "@services/Schedule/Put/usePut";
import useDeleteSchedule from "@services/Schedule/Delete/useDelete";

dayjs.extend(customParseFormat);

type Props = {
  setStep: (step: "INFORMATION" | "USERS") => void;
  reset: () => void;
};

export function useModalForm({ setStep, reset }: Props) {
  const { handleToggleModal, modal } = useModalContext();
  const { mutateAsync: postSchedule, isPending: isLoadingPost } =
    usePostCreateSchedule();
  const { mutateAsync: putSchedule, isPending: isLoadingPut } =
    usePutCreateSchedule();
  const { mutateAsync: deleteSchedule, isPending: isLoadingDelete } =
    useDeleteSchedule();

  const handleDeleteSchedule = useCallback(async () => {
    await deleteSchedule({
      id: parseInt(modal.id as string),
    });
    setStep("INFORMATION");
    handleToggleModal(false);
    reset();
  }, [modal, deleteSchedule, handleToggleModal, reset, setStep]);

  const submit = useCallback(
    async ({ linked, ...rest }: SchedulePayload) => {
      const payload = {
        ...rest,
        linked: linked.filter((user) => !!user).map((user) => +user),
      };

      if (modal.id) {
        await putSchedule({
          id: parseInt(modal.id as string),
          ...payload,
          describe: payload.describe ?? "",
        });
      } else {
        await postSchedule({
          ...payload,
          describe: payload.describe ?? "",
        });
      }

      handleToggleModal(false);
    },
    [modal, putSchedule, postSchedule, handleToggleModal]
  );

  return {
    submit,
    isLoading: isLoadingPost || isLoadingPut || isLoadingDelete,
    handleDeleteSchedule,
  };
}
