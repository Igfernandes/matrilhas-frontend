import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UserNavigationContextData, UserNavigationProps } from "./types";
import { UserShape } from "../../types/Users";
import { usePermissions } from "@hooks/usePermissions";
import useGetUsers from "@services/Users/Get/useGetUsers";

export const UserNavigationContext = createContext(
  {} as UserNavigationContextData
);

const UserNavigationProvider = ({ children, user }: UserNavigationProps) => {
  const [userAuth, setUserAuth] = useState<UserShape>(user as UserShape);
  const { rows: currentUser } = useGetUsers({ current: true });
  const { permissions, setPermissions, hasPermission } = usePermissions();

  useEffect(() => {
    if (currentUser && currentUser.length > 0) {
      setUserAuth(currentUser[0]);
      setPermissions(currentUser[0].permissions || []);
    }
  }, [currentUser, setPermissions]);

  const value = useMemo(
    () => ({
      userAuth,
      permissions,
      hasPermission,
    }),
    [userAuth, permissions, hasPermission]
  );

  return (
    <UserNavigationContext.Provider value={value}>
      {children}
    </UserNavigationContext.Provider>
  );
};

export default UserNavigationProvider;

export function useUserNavigationContext() {
  return useContext(UserNavigationContext);
}
