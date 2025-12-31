export type MercadoPagoPaymentShape = {
  id: number | string;

  operation_type?: string;
  status: string;
  status_detail?: string;

  payment_type?: string;
  payment_type_id?: string;
  payment_method_id?: string;

  currency_id?: string;

  transaction_amount?: number;
  transaction_amount_refunded?: number;
  total_paid_amount?: number;
  shipping_cost?: number;
  taxes_amount?: number;

  date_created: string;
  date_approved?: string;
  last_modified?: string;

  order?: {
    id?: number | string;
  };

  additional_info?: {
    ip_address?: string;
    items?: Array<{
      quantity?: number;
      title?: string;
      unit_price?: number;
    }>;
  };

  charges_details?: Array<{
    amounts: {
      original: number;
      refunded: number;
    };
  }>;

  payer: {
    first_name?: string;
    last_name?: string;
    identification?: {
      type?: string;
      number?: string;
    };
  };
};
