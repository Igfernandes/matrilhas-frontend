export type MercadoPagoPointOfInteraction = {
  application_data: {
    name: string;
    operating_system: string | null;
    version: string;
  };
  business_info: {
    branch: string;
    sub_unit: string;
    unit: string;
  };
  transaction_data: {
    e2e_id: string | null;
  };
  type: string;
};
