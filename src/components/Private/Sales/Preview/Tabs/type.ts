export type SalePaymentTabType = "INFORMATION" | "EXTRACT" | "DEPENDENTS";
export type SalePaymentTabProps = {
  tabs: Record<SalePaymentTabType, React.ReactNode>;
};
