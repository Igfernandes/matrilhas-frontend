import { ChargeShape } from "@type/Charges";
import { ServicesShape } from "@type/Services";

export type PaymentPageProps = {
  charge: ChargePreviewShape;
};

export type ChargePreviewShape = Pick<
  ChargeShape,
  "description" | "price" | "promotional_price" | "amount" | "type"
> & {
  title: string;
  product_id: string;
  service: Pick<ServicesShape, "name" | "description" | "photo">;
  sold_out: boolean;
};
