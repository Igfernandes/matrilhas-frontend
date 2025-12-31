import { SaleShape } from "@type/Sales";

export type GetSalesRequest = {
  id?: number;
};

export type GetSalesResponse = {
  rows: Array<SaleShape>;
  count: number;
};
