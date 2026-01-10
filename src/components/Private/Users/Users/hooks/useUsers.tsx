import { useCallback, useMemo } from "react";
import { StatusText } from "@components/shared/others/StatusText";
import { UserShape } from "../../../../../types/Users";
import { ModalUserOperationType, TDataUser } from "../../type";
import { useModalContext } from "@contexts/Modal";
import { UsersActions } from "../UsersActions";
import { useI18n } from "@contexts/I18n";

export function useUsers() {
  const { t } = useI18n()
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();

  const tHeadsUser = useMemo<Array<string>>(() => [
    "ID",
    t("Words.name"),
    t("Words.email"),
    t("Words.phone"),
    t("Words.group"),
    t("Words.status"),
    t("Words.actions"),
  ], [t]);

  const updateUserForTable = useCallback((data: unknown): TDataUser => {
    const { id, name, email, phone, status, groups } = data as UserShape;
    const groupsName = Array.isArray(groups)
      ? groups.map((group) => group.name).join(",")
      : "";

    return {
      id,
      name,
      email,
      phone,
      group: groupsName == "" ? "--" : groupsName,
      status: <StatusText status={status} />,
      actions: <UsersActions id={id} status={status} />
    };
  }, []);

  return {
    tHeadsUser,
    handleToggleModal,
    modal,
    updateUserForTable
  };
}
