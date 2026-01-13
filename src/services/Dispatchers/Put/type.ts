import { Status } from "@type/status";

export type PutMessageDispatcherPayload = {
  id: number;
  status?: Status;
};
