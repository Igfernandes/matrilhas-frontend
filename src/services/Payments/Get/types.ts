import { MercadoPagoPaymentShape } from "@type/Gateways/mercadoPago";

export type GetPaymentsRequest = {
  payment_id?: string;
};

export type GetPaymentsResponse = MercadoPagoPaymentShape;
