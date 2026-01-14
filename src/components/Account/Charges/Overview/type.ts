import { ChargeShape } from "@type/Charges";
import {
  OperationFailureShape,
  StatusOperationsFailures,
} from "@type/OperationsFailures";
import { JSX } from "react";

export type HookFinancesProps = {
  filter: string;
  charges: Array<ChargeShape>;
};

export type TDataFinance = {
  id: React.ReactNode;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  email: string;
  phone: string;
  category: string;
  actions: JSX.Element;
};

export type OperationFailuresStructProps = {
  search: string;
  operationsFailures: Array<OperationFailureShape>;
};

export type ModalFinancesOperationType = "SHARED" | boolean;

export type TDataOperationsFailures = {
  id: React.ReactNode;
  operation_type?: string;
  error?: string;
  code?: number;
  should_retry?: number;
  status: StatusOperationsFailures;
  resolved_at?: string;
  actions: JSX.Element;
};

export type TDataCharges = Omit<
  ChargeShape,
  | "id"
  | "status"
  | "amount"
  | "reference"
  | "privacy"
  | "price"
  | "clients"
  | "agencies"
  | "updated_at"
> & {
  id?: string;
  price: string;
  expired_at?: string;
  actions: JSX.Element;
};
export type ModalChargesOperationType = "VIEW" ;
