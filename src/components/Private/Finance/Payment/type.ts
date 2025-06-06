import { MercadoPagoPaymentShape } from "@type/Extracts/MercadoPago/MercadoPago";

export type PaymentPageProps = {
  targetPayment: MercadoPagoPaymentShape;
};

export type PaymentPreviewProps = {
  payment: MercadoPagoPaymentShape;
};
