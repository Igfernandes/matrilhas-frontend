export type PostSaleGatewayPayload = {
  tour_id: number;
  name: string;
  cpf: string;
  birthdate: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  dependents?: DependentsData[];
  agency_id?: number;
};

type DependentsData = {
  name: string;
  cpf: string;
  birthdate: string;
};
