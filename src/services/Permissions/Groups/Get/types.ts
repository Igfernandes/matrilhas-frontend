import { GroupsPermissionsShape } from "@type/Permissions/GroupsPermissions";

export type GetGroupsPermissionsRequest = {
  id?: number;
  in_ids?: Array<number>;
};

export type GetGroupsPermissionsResponse = {
  rows: Array<GroupsPermissionsShape>;
  count: number;
};
