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
        "O sistema incluiu o cliente no evento, mas não conseguiu notificar o cliente por não conter o seu e-mail em seu cadastro.",
    },
  },
  unauthorized:
    "O usuário foi desconectado ou não contém permissão para continuar a ação",
  default: {
    not_auth:
      "O usuário foi desconectado ou não contém permissão para continuar a ação",
    internal_error:
      "Ocorreu um erro severo na aplicação. Entre em contato com o suporte.",
    error: "Estamos analisando o problema. Tente novamente mais tarde.",
  },
  invalid: {
    email: "O e-mail encontra-se inexiste ou inválido",
    recaptcha:
      "A página está com recursos desatualizados. Recarregue e tente novamente.",
    csrf: "A página está com recursos desatualizados ou inexistentes. Recarregue e tente novamente.",
  },
  remember: {
    success: {
      post: "Aguarde. Você logo será redirecionado!",
    },
    invalid: {
      token:
        "Não foi possível conectar-se automaticamente. Faça o login manualmente.",
    },
  },
};
