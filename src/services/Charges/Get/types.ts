import { ChargeShape } from "@type/Charges";
import { GetRequestShape } from "@type/service";
import { Status } from "@type/status";

export type GetChargesRequest = GetRequestShape &
  Omit<
    ChargeShape,
    | "id"
    | "title"
    | "status"
    | "amount"
    | "privacy"
    | "type"
    | "price"
    | "reference"
  > & {
    id?: number;
    title_contains?: string;
    description_contains?: string;
    status?: Status;
    amount?: number;
    privacy?: "PUBLIC" | "PRIVATE";
    type?: string;
    price?: number;
    reference?: string;
  };

export type GetChargesResponse = {
  rows: ChargeShape[];
  count: number;
};
