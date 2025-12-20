import { PermissionsShape, PermissionsTypes } from "../../../types/Permissions";

export type GetPermissionsRequest = {
  name?: string;
  type?: PermissionsTypes;
  type_contains?: PermissionsTypes;
  scope?: string;
};

export type GetPermissionsResponse = {
  rows: Array<PermissionsShape>;
  count: number;
};
