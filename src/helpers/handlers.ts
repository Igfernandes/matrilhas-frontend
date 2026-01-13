import { AUTH_RULES } from "@configs/auth";
import { deleteCookie } from "cookies-next";

export function handleLogout() {
  deleteCookie("userAuth", AUTH_RULES.cookies);
  deleteCookie("token_navigation");
  deleteCookie("token_access");
  deleteCookie("remember_referenceToken");
}
