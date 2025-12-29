export type SaleContextData = {
  id?: number;
};

export type SaleContextProps = {
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
