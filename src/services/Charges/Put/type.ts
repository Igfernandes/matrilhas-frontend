import { ChargeShape } from "@type/Charges";
import { Status } from "@type/status";

export type PutChargePayload = Omit<
  ChargeShape,
  "clients" | "status" | "reference" | "created_at" | "updated_at"
> & {
  status?: Status;
};
