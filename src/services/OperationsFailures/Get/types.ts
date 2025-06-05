import {
  OperationFailureShape,
  StatusOperationsFailures,
} from "@type/OperationsFailures";

export type GetOperationsFailuresRequest = Omit<
  OperationFailureShape,
  "id" | "status"
> & {
  id?: number;
  in_ids?: Array<number>;
  status?: StatusOperationsFailures;
};
