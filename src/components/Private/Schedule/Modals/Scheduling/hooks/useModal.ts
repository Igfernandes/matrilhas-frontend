import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ScheduleSchema, SchedulePayload } from "../schemas";
import { useCallback, useMemo, useState } from "react";
import useGetUsers from "@services/Users/Get/useGetUsers";
import { UserShape } from "@type/Users";
import usePostCreateSchedule from "@services/Schedule/Post/usePost";
import { useModalContext } from "@contexts/Modal";
import usePutCreateSchedule from "@services/Schedule/Put/usePut";
import useDeleteSchedule from "@services/Schedule/Delete/useDelete";
import { hasInvalidDateRange } from "@helpers/date";
import i18n from "@configs/i18n";
import useGetSchedules from "@services/Schedule/Get/useGet";
import { useUserNavigationContext } from "@contexts/UserNavigation";

dayjs.extend(customParseFormat);

type Props = {
  scheduleId?: number;
};

export function useModal({ scheduleId }: Props) {
  const { rows: schedules } = useGetSchedules({
    id: scheduleId ?? undefined,
  });
  const { userAuth } = useUserNavigationContext();
  const [step, setStep] = useState<"INFORMATION" | "USERS">("INFORMATION");
  const scheduleCurrent = useMemo(() => schedules?.[0] , [schedules]);
  const { formMethods, handleSubmit } = useFormRules<SchedulePayload>({
    schema: ScheduleSchema,
    defaultValues: {
      ...scheduleCurrent,
      linked: scheduleCurrent?.linked?.map((user) => String(user.id)) || [],
    },
  });

  const { watch, trigger, reset } = formMethods;
  const { handleToggleModal, modal } = useModalContext();
  const { rows: usersData } = useGetUsers();
  const users = useMemo<Array<UserShape>>(() => {
    return usersData.filter((user) => user.id != userAuth.id);
  }, [usersData, userAuth]);

  const { mutateAsync: postSchedule, isPending: isLoadingPost } =
    usePostCreateSchedule();
  const { mutateAsync: putSchedule, isPending: isLoadingPut } =
    usePutCreateSchedule();
  const { mutateAsync: deleteSchedule, isPending: isLoadingDelete } =
    useDeleteSchedule();

  /**
   * Sempre que "date" ou "end_date" mudarem, dispara a validação
   * Isso garante que o refine de comparação de datas seja reavaliado na hora
   */
  const watchDate = watch("date");
  const watchEndDate = watch("end_date");

  const handleSteps = async (action: "PREV" | "NEXT") => {
    let isValid = await trigger(["title", "date", "end_date"], {
      shouldFocus: true,
    });

    if (watchEndDate && !!isValid) {
      isValid = !!hasInvalidDateRange(watchDate, watchEndDate ?? "");

      if (!isValid)
        formMethods.setError("end_date", {
          message: i18n("Validations.invalid_end_date"),
        });
    }

    switch (action) {
      case "PREV":
        if (step === "USERS") setStep("INFORMATION");
        break;
      case "NEXT":
        if (step === "INFORMATION" && isValid) {
          setStep("USERS");
        }
        break;
    }
  };

  const handleDeleteSchedule = useCallback(async () => {
    await deleteSchedule({
      id: parseInt(modal.id as string),
    });
    setStep("INFORMATION");
    handleToggleModal(false);
    reset();
  }, [modal, deleteSchedule, handleToggleModal, reset]);

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
    formMethods,
    handleSubmit,
    submit,
    isLoading: isLoadingPost || isLoadingPut || isLoadingDelete,
    users,
    scheduleCurrent,
    handleDeleteSchedule,
    step,
    setStep,
    handleSteps,
  };
}
