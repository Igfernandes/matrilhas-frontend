export type ChargeRelationsShape = {
  charge_id: number;
  clients?: Array<ClientsData>;
  agencies?: Array<AgencyData>;
};

export type ClientsData = {
  id: number;
  name: string;
};

export type AgencyData = {
  id: number;
  name: string;
};

