import { SaleShape } from "@type/Sales";

export type PutSalePayload = Pick<SaleShape, "id" | "status">;
