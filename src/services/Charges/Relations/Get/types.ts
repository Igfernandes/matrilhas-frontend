import { ChargeRelationsShape } from "@type/Charges/relations";

export type GetRelationsRequest = { charge_id?: number };

export type GetRelationsResponse = {
  rows: Array<ChargeRelationsShape>;
  count: number;
};
