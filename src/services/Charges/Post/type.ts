import { ChargeShape } from "@type/Charges";
import { Status } from "@type/status";

export type PostCreateChargePayload = Omit<
  ChargeShape,
  "id" | "clients" | "status" | "reference"
> & {
  client_ids?: Array<number>;
  agency_ids?: Array<number>;
  status?: Status;
};
