export type MercadoPagoTransactionDetails = {
  acquirer_reference: string | null;
  external_resource_url: string | null;
  financial_institution: string | null;
  installment_amount: number;
  net_received_amount: number;
  overpaid_amount: number;
  payable_deferral_period: string | null;
  payment_method_reference_id: string | null;
  total_paid_amount: number;
};
export type MercadoPagoPaymentPayer = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  identification: {
    type: string;
    number: string;
  };
  phone: {
    area_code: string;
    number: string;
  };
  address: {
    street_name: string;
    street_number: number;
    zip_code: string;
  };
  entity_type: string;
  type: string;
};
