import { useEffect, useRef, useState } from "react";
import i18n from "@configs/i18n";
import { StatusText } from "@components/shared/others/StatusText";
import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { UsersShape } from "../../../../../types/Users";
import { HookProps, ModalUserOperationType, TDataUser } from "../../type";
import { useModalContext } from "@contexts/Modal";
import useGetUsers from "../../../../../services/Users/Get/useGetUsers";

export function useUsers({ handleFilter, filter }: HookProps<UsersShape>) {
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();
  const [tDataUsers, setTDataUsers] = useState<Array<Record<string, unknown>>>(
    []
  );
  const { data: usersData } = useGetUsers();
  const [users, setUsers] = useState<Array<UsersShape>>([]);

  const tHeadsUser = useRef<Array<string>>([
    "ID",
    i18n("words.name"),
    i18n("words.email"),
    i18n("words.phone"),
    i18n("words.group"),
    i18n("words.status"),
    i18n("words.actions"),
  ]);

  const updateUserForTable = ({
    id,
    name,
    email,
    phone,
    status,
    groups,
  }: UsersShape): TDataUser => {
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
              text: i18n("words.edit"),
              handle: () => handleToggleModal("DEFAULT_USER", id),
            },
            {
              text: i18n(`words.${status == "ACTIVE" ? "desative" : "ative"}`),
              handle: () =>
                handleToggleModal(
                  status == "ACTIVE" ? "DESATIVE_USER" : "ACTIVE_USER",
                  id
                ),
            },
            {
              text: i18n("words.exclude"),
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
