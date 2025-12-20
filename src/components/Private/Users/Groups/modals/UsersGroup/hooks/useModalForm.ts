import { useFormRules } from "@hooks/Forms/useFormRules";
import { GroupModalSchema, UsersGroupPayload } from "../schemas";
import useGetPermissions from "../../../../../../../services/Permissions/Get/useGet";
import { useEffect, useMemo } from "react";
import usePostCreateGroup from "../../../../../../../services/Users/Groups/Post/usePost";
import { useModalContext } from "@contexts/Modal";
import useGetGroupsPermissions from "../../../../../../../services/Permissions/Groups/Get/useGet";
import usePutGroup from "../../../../../../../services/Users/Groups/Put/usePutGroup";
import { PermissionData } from "@type/Permissions/GroupsPermissions";
import useGetGroups from "@services/Users/Groups/Get/useGetGroups";

type Props = {
  onModal: (isShow: boolean) => void;
};

export function useModalForm({ onModal }: Props) {
  const { rows } = useGetPermissions();
  const { modal } = useModalContext();
  const { rows: dataGroupPermissions } = useGetGroupsPermissions({
    id: modal.id as number,
  });
  const { rows: dataGroups } = useGetGroups({
    id: +(modal.id ?? "") as number,
  });
  const groupsPermissions = useMemo(
    () => dataGroupPermissions?.[0]?.permissions ?? ([] as PermissionData[]),
    [dataGroupPermissions]
  );
  const groupCurrent = useMemo(() => dataGroups?.[0], [dataGroups]);
  const permissions = useMemo(() => rows ?? [], [rows]);

  const { formMethods } = useFormRules<UsersGroupPayload>({
    schema: GroupModalSchema,
    defaultValues: {
      permissions: [],
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    reset,
  } = formMethods;
  const { mutateAsync: postGroup, isPending } = usePostCreateGroup();
  const { mutateAsync: putGroup, isPending: isPendingPut } = usePutGroup();

  const handleSuccessRequest = () => {
    reset();
    onModal(false);
  };

  const submit = (formData: UsersGroupPayload) => {
    const permissions = formMethods.getValues().permissions;
    const permissionsAvailable = permissions.filter(
      (permission) => !!permission
    );

    const payload = {
      ...formData,
      permissions: permissionsAvailable.map((permission) =>
        parseInt(permission as string)
      ),
      id: modal.id as number,
    };

    if (modal.id) {
      putGroup(payload).then(handleSuccessRequest);
    } else postGroup(payload).then(handleSuccessRequest);
  };

  useEffect(() => {
    if (!groupCurrent) return;
    setValue("name", groupCurrent.name);
  }, [groupCurrent, setValue]);

  useEffect(() => {
    setValue(
      "permissions",
      permissions.map((permission) => {
        const hasPermission = groupsPermissions.find(
          (groupPermission) => groupPermission.id === permission.id
        );

        return hasPermission ? permission.id.toString() : false;
      })
    );
  }, [permissions, groupsPermissions, setValue]);

  return {
    formMethods,
    errors,
    isLoading: isPending || isPendingPut,
    handleSubmit,
    permissions,
    submit,
    register,
    groupCurrent,
    groupsPermissions,
  };
}
