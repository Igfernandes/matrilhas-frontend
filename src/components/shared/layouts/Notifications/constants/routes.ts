import { privateRoutes } from "@configs/routes/Web/navigation";

export const ROUTES = {
  clients: privateRoutes.clients,
  forms: privateRoutes.forms,
  dispatchers: privateRoutes.dispatcher,
  charges: privateRoutes.finance,
} as Record<string, string>;
