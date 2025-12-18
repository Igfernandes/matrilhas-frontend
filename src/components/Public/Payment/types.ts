import { ChargeShape } from "@type/Charges";

export type PaymentPageProps = {
  charge: ChargePreviewShape;
};

export type ChargePreviewShape = Pick<
  ChargeShape,
  "description" | "price" | "promotional_price" | "amount" | "type"
> & {
  title: string;
  product_id: string;
  sold_out: boolean;
};
