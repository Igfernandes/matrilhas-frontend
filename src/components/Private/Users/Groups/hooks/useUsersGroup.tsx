import { useCallback, useMemo } from "react";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { UsersGroupShape } from "../../../../../types/Users/UsersGroup";
import { UsersGroupActions } from "../UsersGroupActions";
import { Status } from "@components/utilities/Status";
import useDeleteGroup from "@services/Users/Groups/Delete/useDelete";
import useDPatchGroup from "@services/Users/Groups/Patch/usePatchGroup";

export function useUsersGroup() {
  const { mutateAsync: deleteUsersGroup } = useDeleteGroup();
  const { mutateAsync: patchUsersGroup } = useDPatchGroup();
  const tHeadUsersGroup = useMemo(() => [
    "ID",
    i18n("Words.name"),
    i18n("Words.status"),
    i18n("Words.total"),
    i18n("Words.created_date"),
    i18n("Words.actions"),
  ], []);

  const updateUserGroupForTable = useCallback((data: unknown) => {
    const userGroup = data as UsersGroupShape;
    const convertDate = dayjs(userGroup.created_at).format(
      i18n("Configs.format.datetime")
    );

    return {
      id: userGroup.id,
      name: userGroup.name,
      status: <Status is={userGroup.status} />,
      total: userGroup.total,
      created_at: convertDate != "Invalid Date" ? convertDate : userGroup.created_at,
      actions: (
        <UsersGroupActions userGroup={userGroup} />
      ),
    }
  }, []);

  return {
    tHeadUsersGroup, updateUserGroupForTable, deleteUsersGroup, patchUsersGroup
  };
}
