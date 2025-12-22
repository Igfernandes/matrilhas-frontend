import { authenticationRoutes } from "./authentications";
import { financesRoutes } from "./finances";
import { clientsRoutes } from "./clients";
import { fieldsRoutes } from "./fields";
import { formsRoutes } from "./forms";
import { integrationsRoutes } from "./integrations";
import { invitesRoutes } from "./invites";
import { permissionsRoutes } from "./permissions";
import { recoverRoutes } from "./recover";
import { servicesRoutes } from "./services";
import { usersRoutes } from "./users";
import { notificationsRoutes } from "./notifications";
import { messagesDispatcherRoutes } from "./MessagesDispatcher";
import { scheduleRoutes } from "./schedule";
import { filesRoutes } from "./files";
import { eventsRoutes } from "./events";
import { agenciesRoutes } from "./agencies";
import { toursRoutes } from "./tours";
import { galleriesRoutes } from "./galleries";
import { salesRoutes } from "./sales";

export const API_ROUTES = {
  ...authenticationRoutes,
  ...recoverRoutes,
  ...toursRoutes,
  ...usersRoutes,
  ...clientsRoutes,
  ...invitesRoutes,
  ...agenciesRoutes,
  ...permissionsRoutes,
  ...servicesRoutes,
  ...formsRoutes,
  ...fieldsRoutes,
  ...integrationsRoutes,
  ...financesRoutes,
  ...notificationsRoutes,
  ...scheduleRoutes,
  ...messagesDispatcherRoutes,
  ...filesRoutes,
  ...eventsRoutes,
  ...galleriesRoutes,
  ...salesRoutes,
  exports: "/exports",
  confirmations: "/confirmations",
};
