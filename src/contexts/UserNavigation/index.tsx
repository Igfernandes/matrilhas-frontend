import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UserNavigationContextData, UserNavigationProps } from "./types";
import { UsersShape } from "../../types/Users";
import { useRouter } from "next/router";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { getCookie } from "cookies-next";
import { handleLogout } from "@helpers/handlers";
import { useQueryClient } from "@tanstack/react-query";
import { useJsonWebToken } from "@hooks/useJsonWebToken";

export const UserNavigationContext = createContext(
  {} as UserNavigationContextData
);

const UserNavigationProvider = ({ children }: UserNavigationProps) => {
  const [userAuth, setUserAuth] = useState<UsersShape>();

  const router = useRouter();
  const queryClient = useQueryClient();
  const { verifyJwt } = useJsonWebToken();

  const handleDisconnect = useCallback(() => {
    handleLogout();
    queryClient.resetQueries({
      queryKey: ["userAuth"],
    });

    router.push(publicRoutes.login);
  }, [queryClient, router]);

  useEffect(() => {
    const userAuthCookie = getCookie("userAuth") as string;

    if (userAuthCookie)
      verifyJwt<UsersShape>(userAuthCookie)
        .then((user) => {
          setUserAuth(user);
        })
        .catch(() => handleDisconnect());
  }, [verifyJwt, handleDisconnect]);

  const userProps = useMemo(
    () => ({
      userAuth,
    }),
    [userAuth]
  );

  return (
    <UserNavigationContext.Provider value={userProps}>
      {children}
    </UserNavigationContext.Provider>
  );
};

export default UserNavigationProvider;

export function useUserNavigationContext() {
  return useContext(UserNavigationContext) as UserNavigationContextData;
}
