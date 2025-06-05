import { MercadoPagoFeeDetail } from "@type/Extracts/MercadoPago/FeeDetail";
import { MercadoPagoPaymentShape } from "@type/Extracts/MercadoPago/MercadoPago";

export type PaymentPageProps = {
  targetPayment: MercadoPagoFeeDetail;
};

export type PaymentPreviewProps = {
  payment: MercadoPagoPaymentShape;
};
