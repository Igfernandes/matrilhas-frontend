import { IntegrationShape } from "@type/Integrations";

export type GetIntegrationsRequest = {
  id?: number;
  in_ids?: Array<number>;
  type?: string;
  created_at?: string;
};

export type GetIntegrationsResponse = {
  rows: Array<IntegrationShape>;
  count: number;
};
