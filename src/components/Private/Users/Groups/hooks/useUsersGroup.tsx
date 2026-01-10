import { useCallback, useMemo } from "react";
import dayjs from "dayjs";
import { UsersGroupShape } from "../../../../../types/Users/UsersGroup";
import { UsersGroupActions } from "../UsersGroupActions";
import { Status } from "@components/utilities/Status";
import useDeleteGroup from "@services/Users/Groups/Delete/useDelete";
import useDPatchGroup from "@services/Users/Groups/Patch/usePatchGroup";
import { useI18n } from "@contexts/I18n";

export function useUsersGroup() {
  const { t } = useI18n()
  const { mutateAsync: deleteUsersGroup, isPending: isLoadingDelete } = useDeleteGroup();
  const { mutateAsync: patchUsersGroup, isPending: isLoadingPatch } = useDPatchGroup();
  const tHeadUsersGroup = useMemo(() => [
    "ID",
    t("Words.name"),
    t("Words.status"),
    t("Words.total"),
    t("Words.created_at"),
    t("Words.actions"),
  ], [t]);

  const updateUserGroupForTable = useCallback((data: unknown) => {
    const userGroup = data as UsersGroupShape;
    return {
      id: userGroup.id,
      name: userGroup.name,
      status: <Status is={userGroup.status} />,
      total: userGroup.total,
      created_at: dayjs(userGroup.created_at).format(t("Configs.format.datetime")),
      actions: (
        <UsersGroupActions userGroup={userGroup} />
      ),
    }
  }, [t]);

  return {
    tHeadUsersGroup,
    updateUserGroupForTable,
    deleteUsersGroup,
    patchUsersGroup,
    isLoadingDelete,
    isLoadingPatch
  };
}
