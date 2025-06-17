import { ChargeShape } from "@type/Charges";
import { Status } from "@type/status";

export type PostCreateChargePayload = Omit<
  ChargeShape,
  "id" | "clients" | "status" | "reference"
> & {
  clients: Array<number>;
  status?: Status;
};
