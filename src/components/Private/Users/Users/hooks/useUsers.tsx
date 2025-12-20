import { useCallback, useRef } from "react";
import i18n from "@configs/i18n";
import { StatusText } from "@components/shared/others/StatusText";
import { UserShape } from "../../../../../types/Users";
import { ModalUserOperationType, TDataUser } from "../../type";
import { useModalContext } from "@contexts/Modal";
import { UsersActions } from "../UsersActions";

export function useUsers() {
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();

  const tHeadsUser = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.email"),
    i18n("Words.phone"),
    i18n("Words.group"),
    i18n("Words.status"),
    i18n("Words.actions"),
  ]);

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
