export type TourTabType = "INFORMATION"  | "PAYMENTS" ;
export type TourTabProps = {
  tabs: Record<TourTabType, React.ReactNode>;
};
