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
import { paymentsApiTranslations } from "./api/payments";
import { PermissionsApiTranslations } from "./api/permissions";
import { RecoversApiTranslations } from "./api/recovers";
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
  payments: paymentsApiTranslations,
  invites: InvitesApiTranslations,
  notifications: NotificationsApiTranslations,
  subscribe: SubscribeApiTranslations,
  permissions: PermissionsApiTranslations,
  schedules: SchedulesApiTranslations,
  users: UsersApiTranslations,
  subscribers: SubscribersApiTranslations,
  recovers: RecoversApiTranslations,
  mailer: {
    invalid: {
      email:
        "The system added the client to the event but could not notify them because no email address is registered.",
    },
  },
  unauthorized:
    "The user has been logged out or does not have permission to continue with this action.",
  default: {
    not_auth:
      "The user has been logged out or does not have permission to continue with this action.",
    internal_error:
      "A serious application error has occurred. Please contact support.",
    error: "We are investigating the issue. Please try again later.",
  },
  invalid: {
    email: "The email address does not exist or is invalid.",
    recaptcha:
      "The page contains outdated resources. Please reload the page and try again.",
    csrf: "The page contains outdated or missing resources. Please reload the page and try again.",
  },
  remember: {
    success: {
      post: "Please wait. You will be redirected shortly!",
    },
    invalid: {
      token: "Automatic sign-in failed. Please log in manually.",
    },
  },
};
