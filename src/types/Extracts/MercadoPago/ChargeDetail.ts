export type MercadoPagoChargeDetail = {
  accounts: {
    from: string;
    to: string;
  };
  amounts: {
    original: number;
    refunded: number;
  };
  client_id: number;
  date_created: string;
  id: string;
  last_updated: string;
  metadata: {
    reason: string;
    source: string;
  };
  name: string;
  refund_charges: [];
  reserve_id: string | null;
  type: string;
};
