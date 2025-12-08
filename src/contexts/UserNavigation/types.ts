import { ReactNode } from "react";
import { UserShape } from "../../types/Users";
import { PermissionsData } from "@type/Users/UsersGroup";

export type UserNavigationContextData = {
  userAuth: UserShape;
  permissions: PermissionsData[];
  hasPermission: (required?: string[]) => boolean;
};

export type UserNavigationProps = {
  children: ReactNode;
  user?: UserShape;
};
