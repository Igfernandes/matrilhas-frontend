import { ChargePreviewShape } from "@components/Public/Payment/types";

export type GetChargePreviewRequest = {
  id?: number;
  reference: string;
};

export type GetChargePreviewResponse = {
  rows: Array<ChargePreviewShape>;
  count: number;
};
