import { JSX } from "react";
import { UsersGroupShape } from "../../../types/Users/UsersGroup";

export type HookProps = {
  filter: string;
};

export type HookGroupsProps = HookProps & {
  data: Array<UsersGroupShape>;
};

export type TDataUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  group: string;
  status: JSX.Element;
  actions: JSX.Element;
};

export type TDataUserGroup = {
  id: number;
  name: string;
  total: number;
  created_at: string;
  status: JSX.Element;
  actions: JSX.Element;
};

export type TDataInvite = {
  id: number;
  email: string;
  is_valid: string;
  expired_at: string;
  created_at: string;
  actions: JSX.Element;
};

export type UsersStructProps = {
  search: string;
  groups: Array<UsersGroupShape>;
};

export type InvitesStructProps = Omit<UsersStructProps, "groups">;

export type ModalUserOperationType =
  | "DEFAULT_USER"
  | "DEFAULT_GROUP"
  | "DELETE_GROUP"
  | "DELETE_USER"
  | "DELETE_INVITE"
  | "DESATIVE_GROUP"
  | "DESATIVE_USER"
  | "ACTIVE_GROUP"
  | "ACTIVE_USER"
  | "RESEND_INVITE"
  | boolean;
