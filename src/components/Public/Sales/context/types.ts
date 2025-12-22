export type SaleContextData = {
  id?: number;
};

export type SaleContextProps = {
  children: React.ReactNode;
};

export type SaleSteps = "PERSONAL" | "ADDRESS" | "DEPENDENTS" | "RESUME";
