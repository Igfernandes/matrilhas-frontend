export type SaleContextData = {
  id?: number;
};

export type SaleContextProps = {
  agency_id?: number;
  children: React.ReactNode;
};

export type SaleSteps =
  | "PERSONAL"
  | "CONTACT"
  | "EMERGENCY"
  | "ADDRESS"
  | "DEPENDENTS"
  | "REFERENCES"
  | "RESUME";
