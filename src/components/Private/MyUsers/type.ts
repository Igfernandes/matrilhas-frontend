import { JSX } from "react";

export type HookUsersProps<UserType> = {
  data: Array<UserType>;
  filter: string;
  handleFilter: (data: UserType) => boolean;
};

export type TDataUser = {
  id: React.ReactNode;
  name: string;
  identify: string;
  email: string;
  phone: string;
  category: string;
  actions: JSX.Element;
};

export type UsersStructProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalUsersOperationType =
  | "CATEGORY"
  | "USER"
  | "DELETE"
  | "SHARED"
  | "CHANGE_CATEGORY"
  | boolean;
