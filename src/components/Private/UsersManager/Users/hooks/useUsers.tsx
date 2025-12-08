import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { StatusText } from "@components/shared/others/StatusText";
import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { UserShape } from "../../../../../types/Users";
import { HookProps, ModalUserOperationType, TDataUser } from "../../type";
import { useModalContext } from "@contexts/Modal";
import useGetUsers from "../../../../../services/Users/Get/useGetUsers";

export function useUsers({ handleFilter, filter }: HookProps<UserShape>) {
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();
  const [tDataUsers, setTDataUsers] = useState<Array<Record<string, unknown>>>(
    []
  );
  const { rows: usersData } = useGetUsers();
  const [users, setUsers] = useState<Array<UserShape>>([]);

  const tHeadsUser = useRef<Array<string>>([
    "ID",
    i18n("Words.name"),
    i18n("Words.email"),
    i18n("Words.phone"),
    i18n("Words.group"),
    i18n("Words.status"),
    i18n("Words.actions"),
  ]);

  const updateUserForTable = ({
    id,
    name,
    email,
    phone,
    status,
    groups,
  }: UserShape): TDataUser => {
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
      actions: (
        <ButtonConfig
          actions={[
            {
              text: i18n("Words.edit"),
              handle: () => handleToggleModal("DEFAULT_USER", id),
            },
            {
              text: i18n(`Words.${status == "ACTIVE" ? "desative" : "ative"}`),
              handle: () =>
                handleToggleModal(
                  status == "ACTIVE" ? "DESATIVE_USER" : "ACTIVE_USER",
                  id
                ),
            },
            {
              text: i18n("Words.exclude"),
              handle: () => handleToggleModal("DELETE_USER", id),
            },
          ]}
        />
      ),
    };
  };

  /** Adding news keys of table and the lasted column to table data users */
  useEffect(() => {
    if (!usersData) return setTDataUsers([]);

    const usersFiltered = usersData.filter((tDataUser) =>
      handleFilter(tDataUser)
    );
    const tDataUser = usersFiltered.map(updateUserForTable);

    setUsers(usersData);
    setTDataUsers(tDataUser);
  }, [usersData, filter]);

  return {
    tDataUsers,
    tHeadsUser,
    handleToggleModal,
    modal,
    users,
  };
}
