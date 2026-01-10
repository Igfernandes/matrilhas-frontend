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
        "El sistema incluyó al cliente en el evento, pero no pudo notificarlo porque no tiene un correo electrónico registrado.",
    },
  },
  unauthorized:
    "El usuario fue desconectado o no tiene permisos para continuar con la acción",
  default: {
    not_auth:
      "El usuario fue desconectado o no tiene permisos para continuar con la acción",
    internal_error:
      "Ocurrió un error grave en la aplicación. Póngase en contacto con el soporte.",
    error: "Estamos analizando el problema. Inténtelo nuevamente más tarde.",
  },
  invalid: {
    email: "El correo electrónico no existe o es inválido",
    recaptcha:
      "La página tiene recursos desactualizados. Recargue e intente nuevamente.",
    csrf: "La página tiene recursos desactualizados o inexistentes. Recargue e intente nuevamente.",
  },
  remember: {
    success: {
      post: "Espere. ¡Pronto será redirigido!",
    },
    invalid: {
      token:
        "No fue posible conectarse automáticamente. Inicie sesión manualmente.",
    },
  },
};
