import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ScheduleSchema, ScheduleUpdatePayload } from "../schemas";
import { useEffect, useState } from "react";
import useGetUsers from "@services/Users/Get/useGetUsers";
import { UsersShape } from "@type/Users";
import usePostCreateSchedule from "@services/Schedule/Post/usePostCreateService";
import { useModalContext } from "@contexts/Modal";

dayjs.extend(customParseFormat);

export function useModal() {
  const { formMethods, handleSubmit } = useFormRules<ScheduleUpdatePayload>({
    schema: ScheduleSchema,
  });
  const { handleToggleModal } = useModalContext();
  const [users, setUsers] = useState<UsersShape[]>([]);
  const { data: usersData, isFetched: isFetchedUsers } = useGetUsers();
  const { mutateAsync: postSchedule } = usePostCreateSchedule();

  useEffect(() => {
    if (!usersData) return;

    setUsers(usersData);
  }, [usersData, isFetchedUsers]);

  const submit = async ({ linked, ...payload }: ScheduleUpdatePayload) => {
    await postSchedule({
      ...payload,
      linked: linked.map((user) => +user),
    });

    handleToggleModal(false);
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: false,
    users,
  };
}
