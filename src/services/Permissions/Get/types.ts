import { PermissionsTypes } from "../../../types/Permissions";

export type GetPermissionsRequest = {
  name?: string;
  type?: PermissionsTypes;
  type_contains?: PermissionsTypes;
  scope?: string;
};
