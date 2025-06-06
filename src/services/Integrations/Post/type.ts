import { IntegrationShape } from "@type/Integrations";
import { Status } from "@type/status";

export type PostIntegrationsPayload = Omit<
  IntegrationShape,
  "id" | "type" | "logotype" | "status" | "created_at"
> & {
  status?: Status;
  type: string;
};
