export type MercadoPagoPaymentMethod = {
  data: {
    routing_data: {
      merchant_account_id: string;
    };
  };
  issuer_id: string;
  type: string;
};
