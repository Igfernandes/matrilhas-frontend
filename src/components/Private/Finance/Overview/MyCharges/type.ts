import { ChargeShape } from "@type/Charges";
import { JSX } from "react";

export type TDataCharges = Omit<
  ChargeShape,
  | "status"
  | "amount"
  | "reference"
  | "privacy"
  | "price"
  | "clients"
  | "updated_at"
> & {
  status: React.ReactNode;
  clients: number;
  actions: JSX.Element;
};
export type ModalChargesOperationType = "VIEW" | "EDIT" | "DELETE";
