import { AgenciesApiTranslations } from "./api/agencies";
import { AuthenticationsApiTranslations } from "./api/authentications";
import { chargesApiTranslations } from "./api/charges";
import { CheckoutApiTranslations } from "./api/checkout";
import { ClientsApiTranslations } from "./api/clients";
import { DispatchersApiTranslations } from "./api/dispatchers";
import { ExportsApiTranslations } from "./api/exports";
import { FieldsApiTranslations } from "./api/fields";
import { FilesApiTranslations } from "./api/files";
import { FormsApiTranslations } from "./api/forms";
import { GalleriesApiTranslations } from "./api/galleries";
import { InvitesApiTranslations } from "./api/invites";
import { NotificationsApiTranslations } from "./api/notifications";
import { OperationsApiTranslations } from "./api/operations";
import { PermissionsApiTranslations } from "./api/permissions";
import { SalesApiTranslations } from "./api/sales";
import { SchedulesApiTranslations } from "./api/schedules";
import { SubscribeApiTranslations } from "./api/subscribe";
import { SubscribersApiTranslations } from "./api/subscribers";
import { ToursApiTranslations } from "./api/tours";
import { UsersApiTranslations } from "./api/users";

export const Api = {
  clients: ClientsApiTranslations,
  agencies: AgenciesApiTranslations,
  tours: ToursApiTranslations,
  galleries: GalleriesApiTranslations,
  sales: SalesApiTranslations,
  charges: chargesApiTranslations,
  auth: AuthenticationsApiTranslations,
  exports: ExportsApiTranslations,
  checkout: CheckoutApiTranslations,
  operations: OperationsApiTranslations,
  files: FilesApiTranslations,
  forms: FormsApiTranslations,
  dispatchers: DispatchersApiTranslations,
  fields: FieldsApiTranslations,
  integrations: AuthenticationsApiTranslations,
  invites: InvitesApiTranslations,
  notifications: NotificationsApiTranslations,
  subscribe: SubscribeApiTranslations,
  permissions: PermissionsApiTranslations,
  schedules: SchedulesApiTranslations,
  users: UsersApiTranslations,
  subscribers: SubscribersApiTranslations,
  mailer: {
    invalid: {
      email:
        "The system added the client to the event, but could not notify the client because there is no email in their registration.",
    },
  },
  unauthorized:
    "The user has been logged out or does not have permission to continue this action",
  default: {
    not_auth:
      "The user has been logged out or does not have permission to continue this action",
    internal_error:
      "A critical error occurred in the application. Please contact support.",
    error: "We are analyzing the issue. Please try again later.",
  },
  invalid: {
    email: "The email does not exist or is invalid",
    recaptcha: "The page has outdated resources. Please reload and try again.",
    csrf: "The page has outdated or missing resources. Please reload and try again.",
  },
  remember: {
    success: {
      post: "Please wait. You will be redirected shortly!",
    },
    invalid: {
      token: "Unable to connect automatically. Please log in manually.",
    },
  },
};
