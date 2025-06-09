import { Status } from "@type/status";

export type GetClientsDispatchersRequest = {
  id?: number;
  client_id?: number;
  message_id?: number;
  status?: Status;
};
