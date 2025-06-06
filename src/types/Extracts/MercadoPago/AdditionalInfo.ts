export type MercadoPagoAdditionalInfo = {
  ip_address: string;
  items: Array<{
    id: string;
    quantity: string;
    title: string;
    unit_price: string;
  }>;
  tracking_id: string;
};
