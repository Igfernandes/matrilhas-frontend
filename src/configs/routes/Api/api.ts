import { authenticationRoutes } from "./authentications";
import { clientsRoutes } from "./clients";
import { recoverRoutes } from "./recover";
import { usersRoutes } from "./users";

export const API_ROUTES = {
  ...authenticationRoutes,
  ...recoverRoutes,
  ...usersRoutes,
  ...clientsRoutes,
};
